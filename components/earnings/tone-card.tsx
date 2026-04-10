import { Card, CardContent } from "@/components/ui/card";
import type { ManagementTone } from "@/lib/types";

const toneCopy: Record<ManagementTone, string> = {
  Bullish: "Management commentary leaned constructive, with emphasis on demand resilience and improving execution.",
  Neutral: "The tone was measured. Management did not sound alarmed, but it also did not push for a bigger narrative reset.",
  Cautious: "Management commentary felt guarded, with more attention on near-term pressure than on upside catalysts."
};

const toneStyles: Record<ManagementTone, string> = {
  Bullish: "text-emerald-200",
  Neutral: "text-amber-100",
  Cautious: "text-rose-200"
};

export function ToneCard({ tone }: { tone: ManagementTone }) {
  return (
    <Card>
      <CardContent className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Management Tone</p>
        <p className={`text-3xl font-semibold ${toneStyles[tone]}`}>{tone}</p>
        <p className="text-sm leading-7 text-slate-300">{toneCopy[tone]}</p>
      </CardContent>
    </Card>
  );
}
