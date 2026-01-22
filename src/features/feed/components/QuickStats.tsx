"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

const QuickStats = () => {
  const chartData = [
    { category: "Budget", amount: 2000, fill: "var(--color-budget)" },
    { category: "Spending", amount: 1250, fill: "var(--color-spending)" },
  ];

  const chartConfig = {
    amount: {
      label: "Amount",
    },
    budget: {
      label: "Budget",
      color: "#ef4444",
    },
    spending: {
      label: "Spending",
      color: "#3b82f6",
    },
  } satisfies ChartConfig;

  return (
    <div className="h-full border-4 border-foreground bg-card p-4 shadow-[8px_8px_0px_0px_var(--foreground)] flex flex-col">
      <h3 className="font-black text-xl mb-2">QUICK STATS</h3>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full flex-1"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value}
            className="font-bold"
          />
          <ChartTooltip
            content={<ChartTooltipContent hideLabel />}
            cursor={false}
          />
          <Bar
            dataKey="amount"
            radius={0}
            stroke="var(--foreground)"
            strokeWidth={2}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default QuickStats;
