import Link from "next/link";
import { Sparkles } from "lucide-react";

import { FeatureStrip } from "@/components/home/feature-strip";
import { ExampleCard } from "@/components/home/example-card";
import { RecentSearches } from "@/components/home/recent-searches";
import { SearchBar } from "@/components/home/search-bar";
import { buttonVariants } from "@/components/ui/button";
import { getExampleSnapshots } from "@/lib/mock";

export default function HomePage() {
  const examples = getExampleSnapshots();

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-10 lg:pt-20">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-hero-grid bg-[size:auto,32px_32px,32px_32px] bg-[position:center,center,center] px-6 py-10 shadow-glow md:px-10 md:py-14">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200">
            <Sparkles className="size-4 text-brand-200" />
            One-page earnings brief for busy investors
          </div>
          <h1 className="mt-6 font-[var(--font-manrope)] text-5xl font-semibold tracking-tight text-white md:text-7xl">
            See if a quarter is worth your next 30 minutes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Earnings Snap turns a ticker into a clean, fast read: headline verdict, key metrics, tone, trend and risk.
          </p>
        </div>
        <div className="mt-10 max-w-4xl">
          <SearchBar />
          <RecentSearches />
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Examples</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Tap a sample to preview the experience</h2>
          </div>
          <Link href="/AAPL" className={buttonVariants({ variant: "ghost", className: "hidden md:inline-flex" })}>
            Open a sample
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {examples.map((snapshot) => (
            <ExampleCard key={snapshot.ticker} snapshot={snapshot} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <FeatureStrip />
      </section>
    </div>
  );
}
