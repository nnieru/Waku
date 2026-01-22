"use client";

import { TransactionList } from "./components/TransactionList";
import { TransactionModal } from "./components/TransactionModal";

export default function Spending() {
  return (
    <div className="container mx-auto max-w-2xl py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <TransactionModal />
      </div>
      <TransactionList />
    </div>
  );
}
