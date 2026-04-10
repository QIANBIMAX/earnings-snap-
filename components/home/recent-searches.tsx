"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const recentSearchKey = "earnings-snap-recent";

export function RecentSearches() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(recentSearchKey);
    if (!stored) return;
    try {
      setItems(JSON.parse(stored));
    } catch {
      setItems([]);
    }
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-300">
      <span className="text-slate-400">Recent</span>
      {items.map((item) => (
        <Link
          key={item}
          href={`/${item}`}
          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 transition hover:border-brand-300/40 hover:bg-white/[0.08]"
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
