import { z } from "zod";

export const transactionSchema = z.object({
  amount: z.coerce.number().positive("Amount must be positive"),
  note: z.string().optional(),
  date: z.date(),
  categoryId: z.string().min(1, "Category is required"),
  type: z.enum(["INCOME", "EXPENSE"]),
});

export type TransactionFormValues = z.infer<typeof transactionSchema>;
