"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isValidTicker, normalizeTicker } from "@/lib/utils";

const chips = ["AAPL", "NVDA", "TSLA", "MSFT", "AMZN"];
const recentSearchKey = "earnings-snap-recent";

function saveRecentTicker(ticker: string) {
  if (typeof window === "undefined") return;
  const existing = window.localStorage.getItem(recentSearchKey);
  const current = existing ? (JSON.parse(existing) as string[]) : [];
  const next = [ticker, ...current.filter((item) => item !== ticker)].slice(0, 5);
  window.localStorage.setItem(recentSearchKey, JSON.stringify(next));
}

export function SearchBar() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const normalized = useMemo(() => normalizeTicker(value), [value]);
  const hasError = touched && value.length > 0 && !isValidTicker(normalized);

  const submit = (tickerInput?: string) => {
    const ticker = normalizeTicker(tickerInput ?? value);
    setTouched(true);
    if (!isValidTicker(ticker)) return;
    saveRecentTicker(ticker);
    router.push(`/${ticker}`);
  };

  return (
    <div className="space-y-5">
      <form
        className="flex flex-col gap-3 rounded-[2rem] border border-white/10 bg-slate-950/[0.6] p-3 shadow-glow backdrop-blur xl:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
          <Input
            aria-label="Ticker"
            value={value}
            onBlur={() => setTouched(true)}
            onChange={(event) => setValue(event.target.value)}
            className="pl-12 text-base"
            placeholder="Enter ticker, like AAPL or NVDA"
          />
        </div>
        <Button size="lg" type="submit" className="gap-2">
          Generate Earnings Brief
          <ArrowRight className="size-4" />
        </Button>
      </form>
      <div className="flex flex-wrap items-center gap-3">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => submit(chip)}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition hover:border-brand-300/40 hover:bg-white/[0.08]"
          >
            {chip}
          </button>
        ))}
      </div>
      <p className="min-h-6 text-sm text-rose-300">{hasError ? "Use 1-6 letters only, for example AAPL or TSLA." : " "}</p>
    </div>
  );
}
