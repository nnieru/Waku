"use client";

import { Cell, Pie, PieChart } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "~/components/ui/chart";

const chartData = [
  { type: "Income", amount: 5000, fill: "var(--color-income)" },
  { type: "Expense", amount: 3250, fill: "var(--color-expense)" },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--chart-2))", // Greenish/Teal usually
  },
  expense: {
    label: "Expense",
    color: "hsl(var(--destructive))", // Red
  },
} satisfies ChartConfig;

export function IncomeVsExpenseChart() {
  return (
    <div className="border-4 border-foreground bg-card p-6 shadow-[8px_8px_0px_0px_var(--foreground)]">
      <h2 className="text-xl font-black uppercase mb-4">Income vs Expense</h2>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <Pie
            data={chartData}
            dataKey="amount"
            nameKey="type"
            innerRadius={60}
            strokeWidth={5}
          >
            <Cell
              key="cell-income"
              fill="var(--color-income)"
              stroke="var(--foreground)"
              strokeWidth={2}
            />
            <Cell
              key="cell-expense"
              fill="var(--color-expense)"
              stroke="var(--foreground)"
              strokeWidth={2}
            />
          </Pie>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <ChartLegend content={<ChartLegendContent nameKey="type" />} />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
