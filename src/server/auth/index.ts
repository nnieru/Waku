import NextAuth from "next-auth";
import { cache } from "react";
import { PrismaAdapter } from "@auth/prisma-adapter";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { db } from "~/server/db";
import { loginSchema } from "~/features/auth/login/types/login";
import { authConfig } from "./config";
import { loginRateLimiter } from "~/lib/ratelimit";

const {
  auth: uncachedAuth,
  handlers,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  providers: [
    DiscordProvider,
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = loginSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;

        // Rate limit by email to prevent brute-force attacks
        const rateLimitResult = loginRateLimiter.check(`login:${email}`);
        if (!rateLimitResult.success) {
          throw new Error(
            `Too many login attempts. Try again in ${Math.ceil(rateLimitResult.resetIn / 1000)} seconds.`,
          );
        }

        const user = await db.user.findUnique({
          where: { email },
          select: {
            id: true,
            name: true,
            email: true,
            password: true,
          },
        });

        // Return null for both user-not-found and invalid-password
        // to prevent user enumeration attacks
        if (!user || !user.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return null; // Fixed: return null instead of throwing to prevent user enumeration
        }

        // Reset rate limit on successful login
        loginRateLimiter.reset(`login:${email}`);

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
});

const auth = cache(uncachedAuth);

export { auth, handlers, signIn, signOut };
