"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

const chartData = [
  { month: "January", spending: 1200 },
  { month: "February", spending: 900 },
  { month: "March", spending: 1600 },
  { month: "April", spending: 1400 },
  { month: "May", spending: 2100 },
  { month: "June", spending: 1800 },
];

const chartConfig = {
  spending: {
    label: "Spending",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function MonthlyTrendChart() {
  return (
    <div className="border-4 border-foreground bg-card p-6 shadow-[8px_8px_0px_0px_var(--foreground)]">
      <h2 className="text-xl font-black uppercase mb-4">Monthly Trend</h2>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] max-h-[300px] w-full"
      >
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="spending"
            type="natural"
            fill="var(--color-spending)"
            fillOpacity={0.4}
            stroke="var(--color-spending)"
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
