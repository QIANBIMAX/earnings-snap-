import { TrendingDown, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { EarningsSnapshot } from "@/lib/types";
import { formatDate, formatPercent } from "@/lib/utils";

const statusStyles = {
  Beat: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  Inline: "border-amber-400/30 bg-amber-400/10 text-amber-100",
  Miss: "border-rose-400/30 bg-rose-400/10 text-rose-200"
};

export function HeroSummary({ snapshot }: { snapshot: EarningsSnapshot }) {
  const positiveMove = (snapshot.afterHoursMove ?? 0) >= 0;

  return (
    <Card className="overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(63,188,158,0.18),transparent_35%),rgba(9,14,22,0.92)]">
      <CardContent className="space-y-8 p-7 md:p-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="border-white/10 bg-white/[0.08] text-slate-100">{snapshot.ticker}</Badge>
              <Badge className={statusStyles[snapshot.status]}>{snapshot.status}</Badge>
              <span className="text-sm text-slate-400">{formatDate(snapshot.reportDate)}</span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {snapshot.companyName}
            </h1>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-500">{snapshot.sector}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">{snapshot.summary}</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 lg:min-w-56">
            <p className="text-sm text-slate-400">After-hours move</p>
            <div className="mt-4 flex items-center gap-3">
              {positiveMove ? (
                <TrendingUp className="size-5 text-emerald-300" />
              ) : (
                <TrendingDown className="size-5 text-rose-300" />
              )}
              <span className={positiveMove ? "text-3xl font-semibold text-emerald-200" : "text-3xl font-semibold text-rose-200"}>
                {formatPercent(snapshot.afterHoursMove)}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Quick signal only. This is meant to help decide whether to keep digging.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
