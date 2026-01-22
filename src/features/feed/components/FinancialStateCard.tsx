import { Button } from "~/components/ui/button";

const FinancialStateCard = () => {
  return (
    <div className="min-h-[300px] border-4 border-foreground bg-card p-8 shadow-[8px_8px_0px_0px_var(--foreground)] flex flex-col justify-center items-center text-center">
      <span className="bg-black text-white px-3 py-1 text-xs font-bold mb-4 rotate-[-2deg]">
        CRITICAL STATE
      </span>
      <h2 className="text-6xl font-black italic tracking-tighter mb-2">
        VIBE:
        <br />
        <span className="text-destructive">COOKED</span>
      </h2>
      <p className="font-bold text-muted-foreground mt-4 max-w-md">
        Your spending this week is absolutely feral. We need a vibe shift
        immediately.
      </p>
    </div>
  );
};

export default FinancialStateCard;
