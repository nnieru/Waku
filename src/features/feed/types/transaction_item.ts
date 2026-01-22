interface TransactionItem {
  id: string;
  name: string;
  amount: number;
  date: Date;
  category: string;
  type: "income" | "expense";
}

export type { TransactionItem };
