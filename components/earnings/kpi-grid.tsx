import { Card, CardContent } from "@/components/ui/card";
import type { EarningsSnapshot } from "@/lib/types";
import { formatCurrency, formatPercent } from "@/lib/utils";

function KpiCard({
  label,
  value,
  subtitle
}: {
  label: string;
  value: string;
  subtitle: string;
}) {
  return (
    <Card>
      <CardContent className="space-y-3">
        <p className="text-sm text-slate-400">{label}</p>
        <p className="text-3xl font-semibold tracking-tight text-white">{value}</p>
        <p className="text-sm leading-6 text-slate-400">{subtitle}</p>
      </CardContent>
    </Card>
  );
}

export function KpiGrid({ snapshot }: { snapshot: EarningsSnapshot }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard
        label="Revenue"
        value={formatCurrency(snapshot.revenue.actual)}
        subtitle={`vs est. ${formatCurrency(snapshot.revenue.estimate)} · YoY ${formatPercent(snapshot.revenue.yoyChange)}`}
      />
      <KpiCard
        label="EPS"
        value={`$${snapshot.eps.actual.toFixed(2)}`}
        subtitle={`vs est. $${snapshot.eps.estimate.toFixed(2)} · YoY ${formatPercent(snapshot.eps.yoyChange)}`}
      />
      <KpiCard
        label="Guidance"
        value={snapshot.guidance ? "Available" : "N/A"}
        subtitle={snapshot.guidance ?? "No reliable guidance signal surfaced from the current provider."}
      />
      <KpiCard
        label="After-hours move"
        value={formatPercent(snapshot.afterHoursMove)}
        subtitle="Mock-backed when live quote access is unavailable."
      />
    </div>
  );
}
