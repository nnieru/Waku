import { SpendingByCategoryChart } from "./components/SpendingByCategoryChart";
import { IncomeVsExpenseChart } from "./components/IncomeVsExpenseChart";
import { MonthlyTrendChart } from "./components/MonthlyTrendChart";

export default function Analytics() {
  return (
    <div className="container mx-auto max-w-4xl py-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black italic uppercase tracking-tighter">
          Analytics
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <IncomeVsExpenseChart />
        <SpendingByCategoryChart />
      </div>

      <div className="w-full">
        <MonthlyTrendChart />
      </div>
    </div>
  );
}
