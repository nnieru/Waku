import Link from "next/link";

const TransactionHistory = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-black italic text-2xl">RECENT TRANSACTIONS</h3>
        <Link
          className="hover:bg-primary hover:p-2 hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:text-background transition-all duration-200 focus:cursor-pointer"
          href="/spending"
        >
          View All
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-20 border-4 border-foreground bg-card shadow-[4px_4px_0px_0px_var(--foreground)] flex items-center px-4"
          >
            <div className="w-10 h-10 bg-muted rounded-full mr-4"></div>
            <div className="flex-1">
              <div className="h-4 w-32 bg-muted mb-2"></div>
              <div className="h-3 w-24 bg-muted/50"></div>
            </div>
            <div className="h-6 w-16 bg-destructive/20"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
