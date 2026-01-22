import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { type TransactionItem } from "~/features/feed/types/transaction_item";
import { format } from "date-fns";

interface TransactionDetailModalProps {
  transaction: TransactionItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TransactionDetailModal({
  transaction,
  open,
  onOpenChange,
}: TransactionDetailModalProps) {
  if (!transaction) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-4 border-foreground shadow-[8px_8px_0px_0px_var(--foreground)] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black uppercase italic tracking-tighter">
            Transaction Details
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold uppercase text-right">Amount:</span>
            <span
              className={`col-span-3 font-black text-xl ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}
            >
              {transaction.type === "income" ? "+" : "-"}${transaction.amount}
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold uppercase text-right">Type:</span>
            <span className="col-span-3 font-medium uppercase">
              {transaction.type}
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold uppercase text-right">Category:</span>
            <span className="col-span-3 font-medium">
              {transaction.category}
            </span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold uppercase text-right">Date:</span>
            <span className="col-span-3 font-medium">
              {format(transaction.date, "PPP")}
            </span>
          </div>
          {/* Note field can be added here if it exists on TransactionItem */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
