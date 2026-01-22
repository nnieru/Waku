"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Plus } from "lucide-react";
import { TransactionForm } from "./TransactionForm";

export function TransactionModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="brutalist">
          <Plus className="mr-2 h-4 w-4" /> Add Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="border-4 border-foreground shadow-[8px_8px_0px_0px_var(--foreground)] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black italic">
            ADD TRANSACTION
          </DialogTitle>
        </DialogHeader>
        <TransactionForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
