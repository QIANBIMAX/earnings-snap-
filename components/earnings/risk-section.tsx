import { AlertTriangle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function RiskSection({ risks }: { risks: string[] }) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 p-3 text-rose-200">
            <AlertTriangle className="size-5" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Risk Check</p>
            <h2 className="mt-1 text-2xl font-semibold text-white">What could break the story</h2>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {risks.map((risk) => (
            <div key={risk} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-4">
              <p className="text-sm leading-7 text-slate-300">{risk}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
