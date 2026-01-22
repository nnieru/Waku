"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

const chartData = [
  { category: "Food", amount: 1200, fill: "var(--color-food)" },
  { category: "Transport", amount: 450, fill: "var(--color-transport)" },
  { category: "Shopping", amount: 800, fill: "var(--color-shopping)" },
  { category: "Bills", amount: 1500, fill: "var(--color-bills)" },
  {
    category: "Entertainment",
    amount: 300,
    fill: "var(--color-entertainment)",
  },
];

const chartConfig = {
  amount: {
    label: "Amount",
    color: "hsl(var(--chart-1))",
  },
  food: {
    label: "Food",
    color: "hsl(var(--chart-1))",
  },
  transport: {
    label: "Transport",
    color: "hsl(var(--chart-2))",
  },
  shopping: {
    label: "Shopping",
    color: "hsl(var(--chart-3))",
  },
  bills: {
    label: "Bills",
    color: "hsl(var(--chart-4))",
  },
  entertainment: {
    label: "Entertainment",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function SpendingByCategoryChart() {
  return (
    <div className="border-4 border-foreground bg-card p-6 shadow-[8px_8px_0px_0px_var(--foreground)]">
      <h2 className="text-xl font-black uppercase mb-4">
        Spending by Category
      </h2>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="amount" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
