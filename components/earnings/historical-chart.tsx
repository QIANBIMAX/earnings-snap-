"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import type { QuarterlyPoint } from "@/lib/types";

export function HistoricalChart({ data }: { data: QuarterlyPoint[] }) {
  return (
    <Card>
      <CardContent>
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Historical Compare</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Revenue and EPS trend</h2>
        </div>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ left: 0, right: 8, top: 12, bottom: 0 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis
                dataKey="quarter"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                yAxisId="revenue"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${value / 1000}B`}
              />
              <YAxis
                yAxisId="eps"
                orientation="right"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(9,14,22,0.96)",
                  boxShadow: "0 24px 80px rgba(9,14,22,0.35)"
                }}
              />
              <Line
                yAxisId="revenue"
                type="monotone"
                dataKey="revenue"
                stroke="#69e0c4"
                strokeWidth={3}
                dot={{ r: 4, fill: "#69e0c4" }}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="eps"
                type="monotone"
                dataKey="eps"
                stroke="#f8c15d"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "#f8c15d" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
