import { type TransactionItem } from "../types/transaction_item";
import { format } from "date-fns";

const TransactionItemCard = ({
  item,
  onClick,
}: {
  item: TransactionItem;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`h-20 border-4 border-foreground bg-card shadow-[4px_4px_0px_0px_var(--foreground)] flex items-center px-4 justify-between ${
        onClick
          ? "cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--foreground)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
          : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center font-bold border-2 border-foreground">
          {item.category[0]}
        </div>
        <div>
          <div className="font-bold uppercase tracking-tight">{item.name}</div>
          <div className="text-xs font-bold text-muted-foreground uppercase">
            {format(item.date, "PPP")}
          </div>
        </div>
      </div>
      <div
        className={`font-black text-xl ${
          item.type === "income" ? "text-green-600" : "text-destructive"
        }`}
      >
        {item.type === "income" ? "+" : "-"}${item.amount}
      </div>
    </div>
  );
};

export default TransactionItemCard;
