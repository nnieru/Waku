import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters no cap"),
    email: z.string().email("Invalid email check it again bestie"),
    password: z
      .string()
      .min(6, "Password needs to be 6+ chars, keep it secure")
      .regex(/[0-9]/, "Needs a number")
      .regex(/[a-z]/, "Needs a lowercase letter")
      .regex(/[A-Z]/, "Needs an uppercase letter"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match, try again",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
