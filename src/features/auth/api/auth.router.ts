import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { authService } from "../services/auth.service";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z
        .object({
          name: z.string().min(1),
          email: z.string().email(),
          password: z.string().min(6),
          confirmPassword: z.string().min(6),
        })
        .refine((data) => data.password === data.confirmPassword, {
          message: "Passwords don't match",
          path: ["confirmPassword"],
        }),
    )
    .mutation(async ({ ctx, input }) => {
      return await authService.register(ctx.db, {
        name: input.name,
        email: input.email,
        password: input.password,
      });
    }),
});
