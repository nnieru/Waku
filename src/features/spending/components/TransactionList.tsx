import { useState } from "react";
import { type TransactionItem } from "~/features/feed/types/transaction_item";
import TransactionItemCard from "~/features/feed/components/TransactionItemCard";
import { TransactionDetailModal } from "~/features/spending/components/TransactionDetailModal";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format, isSameDay } from "date-fns";

const MOCK_TRANSACTIONS: TransactionItem[] = [
  {
    id: "1",
    name: "Salary",
    amount: 5000,
    date: new Date(),
    category: "Salary",
    type: "income",
  },
  {
    id: "2",
    name: "Lunch",
    amount: 20,
    date: new Date(),
    category: "Food",
    type: "expense",
  },
  {
    id: "3",
    name: "Bus Ticket",
    amount: 5,
    date: new Date(),
    category: "Transport",
    type: "expense",
  },
];

const MOCK_CATEGORIES = [
  "Salary",
  "Freelance",
  "Food",
  "Transport",
  "Shopping",
];

export function TransactionList() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [category, setCategory] = useState<string>("ALL");

  const filteredTransactions = MOCK_TRANSACTIONS.filter((transaction) => {
    const matchesDate = date ? isSameDay(transaction.date, date) : true;
    const matchesCategory =
      category === "ALL" ? true : transaction.category === category;
    return matchesDate && matchesCategory;
  });

  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionItem | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left border-2 border-foreground h-12 rounded-lg font-bold bg-background hover:bg-background hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--foreground)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all sm:w-[240px]",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0 border-2 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)]"
            align="start"
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full border-2 border-foreground h-12 rounded-lg font-bold bg-background focus:ring-0 focus:shadow-[4px_4px_0px_0px_var(--foreground)] transition-all sm:w-[240px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent className="border-2 border-foreground font-bold shadow-[4px_4px_0px_0px_var(--foreground)]">
            <SelectItem value="ALL">All Categories</SelectItem>
            {MOCK_CATEGORIES.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filteredTransactions.length === 0 ? (
          <div className="text-center text-muted-foreground font-bold py-8 border-2 border-dashed border-foreground/20 rounded-lg">
            No transactions found.
          </div>
        ) : (
          filteredTransactions.map((transaction) => (
            <TransactionItemCard
              key={transaction.id}
              item={transaction}
              onClick={() => setSelectedTransaction(transaction)}
            />
          ))
        )}
      </div>

      <TransactionDetailModal
        transaction={selectedTransaction}
        open={!!selectedTransaction}
        onOpenChange={(open) => !open && setSelectedTransaction(null)}
      />
    </div>
  );
}
