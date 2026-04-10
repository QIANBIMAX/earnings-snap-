import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { EarningsSnapshot } from "@/lib/types";
import { formatDate, formatPercent } from "@/lib/utils";

const statusStyles = {
  Beat: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  Inline: "border-amber-400/30 bg-amber-400/10 text-amber-100",
  Miss: "border-rose-400/30 bg-rose-400/10 text-rose-200"
};

export function ExampleCard({ snapshot }: { snapshot: EarningsSnapshot }) {
  return (
    <Link href={`/${snapshot.ticker}`} className="group block">
      <Card className="h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-white/20">
        <CardContent className="space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">{snapshot.companyName}</p>
              <h3 className="mt-1 text-2xl font-semibold text-white">{snapshot.ticker}</h3>
            </div>
            <ArrowUpRight className="mt-1 size-5 text-slate-500 transition group-hover:text-brand-200" />
          </div>
          <Badge className={statusStyles[snapshot.status]}>{snapshot.status}</Badge>
          <p className="line-clamp-3 text-sm leading-6 text-slate-300">{snapshot.summary}</p>
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>{formatDate(snapshot.reportDate)}</span>
            <span className={snapshot.afterHoursMove && snapshot.afterHoursMove >= 0 ? "text-emerald-300" : "text-rose-300"}>
              {formatPercent(snapshot.afterHoursMove)}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
