import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { HeroSummary } from "@/components/earnings/hero-summary";
import { HistoricalChart } from "@/components/earnings/historical-chart";
import { KpiGrid } from "@/components/earnings/kpi-grid";
import { RiskSection } from "@/components/earnings/risk-section";
import { Takeaways } from "@/components/earnings/takeaways";
import { ToneCard } from "@/components/earnings/tone-card";
import { buttonVariants } from "@/components/ui/button";
import { getEarningsSnapshot } from "@/lib/providers/earnings";
import type { EarningsSnapshot } from "@/lib/types";
import { normalizeTicker } from "@/lib/utils";

export async function generateMetadata({
  params
}: {
  params: { ticker: string };
}): Promise<Metadata> {
  const ticker = normalizeTicker(params.ticker);
  return {
    title: `${ticker} earnings brief`
  };
}

function isSnapshot(snapshot: EarningsSnapshot | null): snapshot is EarningsSnapshot {
  return snapshot !== null;
}

export default async function TickerPage({
  params
}: {
  params: { ticker: string };
}) {
  const snapshot = await getEarningsSnapshot(params.ticker);

  if (!isSnapshot(snapshot)) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10">
      <div className="mb-6">
        <Link
          href="/"
          className={buttonVariants({
            variant: "ghost",
            className: "inline-flex gap-2 pl-0"
          })}
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>
      </div>

      <div className="space-y-6">
        <HeroSummary snapshot={snapshot} />
        <KpiGrid snapshot={snapshot} />
        <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <Takeaways items={snapshot.takeaways} />
          <ToneCard tone={snapshot.managementTone} />
        </div>
        <HistoricalChart data={snapshot.historical} />
        <RiskSection risks={snapshot.risks} />
      </div>
    </div>
  );
}
