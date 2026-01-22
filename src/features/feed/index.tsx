import AlertCard from "./components/AlertCard";
import FinancialStateCard from "./components/FinancialStateCard";
import Insight from "./components/Insight";
import QuickStats from "./components/QuickStats";
import TransactionHistory from "./components/TransactionHistory";

import { TransactionModal } from "~/features/spending/components/TransactionModal";

const Feed = () => {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Left Column - Stats */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <QuickStats />
          <AlertCard />
        </div>

        {/* Center Column - Main Feed */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex justify-end">
            <TransactionModal />
          </div>
          <FinancialStateCard />
          <TransactionHistory />
        </div>

        {/* Right Column - Insights */}
        <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-6">
          <Insight />
          <div className="grow min-h-[200px] border-4 border-foreground bg-card p-6 shadow-[8px_8px_0px_0px_var(--foreground)] flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-muted mb-4 rotate-12"></div>
            <h3 className="font-black text-center">DEEP ANALYTICS</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feed;
