import bcrypt from "bcryptjs";
import { type PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import type { RegisterInput } from "../types/auth.dto";

export const authService = {
  register: async (db: PrismaClient, input: RegisterInput) => {
    const exists = await db.user.findUnique({
      where: { email: input.email },
    });

    if (exists) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "User already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(input.password, 10);

    const user = await db.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: hashedPassword,
      },
    });

    return {
      status: 201,
      message: "Account created successfully",
      result: user.email,
    };
  },
};
