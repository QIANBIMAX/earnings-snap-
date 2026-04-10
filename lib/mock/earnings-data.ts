import type { EarningsSnapshot } from "@/lib/types";

const snapshots: Record<string, EarningsSnapshot> = {
  AAPL: {
    ticker: "AAPL",
    companyName: "Apple",
    sector: "Consumer Electronics",
    reportDate: "2026-01-29",
    summary:
      "Services stayed resilient and margins held up, so this print feels solid enough to keep Apple on the shortlist.",
    status: "Beat",
    managementTone: "Bullish",
    revenue: {
      actual: 128400000000,
      estimate: 124900000000,
      yoyChange: 4.2
    },
    eps: {
      actual: 2.41,
      estimate: 2.32,
      yoyChange: 7.1
    },
    guidance: "Management signaled steady iPhone demand and stronger Services momentum next quarter.",
    afterHoursMove: 2.8,
    takeaways: [
      "Services growth continues to cushion hardware seasonality.",
      "Gross margin stayed healthier than feared despite product mix pressure.",
      "China demand remains mixed, but not weak enough to break the story.",
      "Capital return remains supportive for long-term holders."
    ],
    risks: [
      "Hardware replacement cycles could stretch if consumer spending cools.",
      "China competition still creates downside risk for premium devices.",
      "AI feature rollout expectations are high and may be hard to exceed."
    ],
    historical: [
      { quarter: "Q2'25", revenue: 90750, eps: 1.53 },
      { quarter: "Q3'25", revenue: 85800, eps: 1.42 },
      { quarter: "Q4'25", revenue: 94930, eps: 1.64 },
      { quarter: "Q1'26", revenue: 128400, eps: 2.41 }
    ]
  },
  NVDA: {
    ticker: "NVDA",
    companyName: "NVIDIA",
    sector: "Semiconductors",
    reportDate: "2026-02-18",
    summary:
      "Demand is still elite, but the setup is harder now, so this looks strong rather than truly shocking.",
    status: "Inline",
    managementTone: "Bullish",
    revenue: {
      actual: 39700000000,
      estimate: 39400000000,
      yoyChange: 58.6
    },
    eps: {
      actual: 0.89,
      estimate: 0.86,
      yoyChange: 63.2
    },
    guidance: "Next-quarter guidance implied continued AI data center strength with modest supply normalization.",
    afterHoursMove: 1.4,
    takeaways: [
      "Data center remains the core engine and still grows fast off a larger base.",
      "Guidance was good, but not dramatically above elevated buy-side hopes.",
      "Networking and enterprise demand point to a broader AI stack story.",
      "Gross margin pressure looks manageable as product mix evolves."
    ],
    risks: [
      "Expectations are extremely high, leaving less room for a multiple expansion.",
      "Export controls remain a structural headline risk.",
      "Competitive custom silicon efforts could pressure growth later."
    ],
    historical: [
      { quarter: "Q2'25", revenue: 30040, eps: 0.61 },
      { quarter: "Q3'25", revenue: 35120, eps: 0.73 },
      { quarter: "Q4'25", revenue: 38060, eps: 0.82 },
      { quarter: "Q1'26", revenue: 39700, eps: 0.89 }
    ]
  },
  MSFT: {
    ticker: "MSFT",
    companyName: "Microsoft",
    sector: "Software Infrastructure",
    reportDate: "2026-01-27",
    summary:
      "Cloud and AI remain healthy enough to support the thesis, and this quarter looks like a clean hold-to-research-more result.",
    status: "Beat",
    managementTone: "Bullish",
    revenue: {
      actual: 70300000000,
      estimate: 68900000000,
      yoyChange: 13.7
    },
    eps: {
      actual: 3.18,
      estimate: 3.05,
      yoyChange: 15.3
    },
    guidance: "Azure commentary suggested durable enterprise demand with AI capacity continuing to ramp.",
    afterHoursMove: 3.2,
    takeaways: [
      "Azure stayed strong and AI contribution remains a key sentiment driver.",
      "Office and Dynamics added a quality layer to the quarter.",
      "Capex is still elevated, but management framed it as demand-backed.",
      "Execution looked broad rather than dependent on one segment."
    ],
    risks: [
      "AI infrastructure spend could pressure free cash flow near term.",
      "Enterprise budgets can soften quickly if macro demand slips.",
      "Valuation leaves less room for a merely okay guide."
    ],
    historical: [
      { quarter: "Q2'25", revenue: 61860, eps: 2.94 },
      { quarter: "Q3'25", revenue: 64720, eps: 2.98 },
      { quarter: "Q4'25", revenue: 69410, eps: 3.11 },
      { quarter: "Q1'26", revenue: 70300, eps: 3.18 }
    ]
  },
  TSLA: {
    ticker: "TSLA",
    companyName: "Tesla",
    sector: "Automotive",
    reportDate: "2026-01-21",
    summary:
      "Margins and delivery quality still need work, so this quarter feels more like a caution flag than a fresh buy signal.",
    status: "Miss",
    managementTone: "Cautious",
    revenue: {
      actual: 23600000000,
      estimate: 24700000000,
      yoyChange: -7.2
    },
    eps: {
      actual: 0.41,
      estimate: 0.52,
      yoyChange: -21.1
    },
    guidance: null,
    afterHoursMove: -5.6,
    takeaways: [
      "Automotive margin pressure remains the main issue.",
      "Energy storage is improving, but not enough to offset core vehicle weakness.",
      "Volume strategy is still colliding with profitability goals.",
      "Investors are waiting for clearer evidence of product cycle acceleration."
    ],
    risks: [
      "Further price cuts could extend margin compression.",
      "Execution risk remains high around new product timing.",
      "The narrative depends heavily on future bets rather than current earnings power."
    ],
    historical: [
      { quarter: "Q2'25", revenue: 25500, eps: 0.57 },
      { quarter: "Q3'25", revenue: 25180, eps: 0.53 },
      { quarter: "Q4'25", revenue: 24270, eps: 0.48 },
      { quarter: "Q1'26", revenue: 23600, eps: 0.41 }
    ]
  }
};

function generateFallbackSnapshot(ticker: string): EarningsSnapshot {
  const hash = Array.from(ticker).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const statusCycle = ["Beat", "Inline", "Miss"] as const;
  const toneCycle = ["Bullish", "Neutral", "Cautious"] as const;
  const status = statusCycle[hash % statusCycle.length];
  const tone = toneCycle[hash % toneCycle.length];
  const baseRevenue = 9000 + hash * 45;
  const revenueBeat = status === "Beat" ? 220 : status === "Inline" ? 40 : -260;
  const epsBase = 0.45 + (hash % 12) * 0.06;

  return {
    ticker,
    companyName: `${ticker} Holdings`,
    sector: "Technology",
    reportDate: "2026-02-06",
    summary:
      status === "Beat"
        ? `${ticker} delivered a better-than-feared quarter, enough to justify a deeper look if this name is already on your watchlist.`
        : status === "Inline"
          ? `${ticker} looked fine rather than exciting, so the next step is deciding whether the story still has a catalyst.`
          : `${ticker} came in light, and this one probably needs a sharper turnaround narrative before it gets interesting again.`,
    status,
    managementTone: tone,
    revenue: {
      actual: (baseRevenue + revenueBeat) * 1000000,
      estimate: baseRevenue * 1000000,
      yoyChange: status === "Miss" ? -4.4 : status === "Inline" ? 3.1 : 8.6
    },
    eps: {
      actual: Number((epsBase + (status === "Beat" ? 0.12 : status === "Miss" ? -0.08 : 0.02)).toFixed(2)),
      estimate: Number(epsBase.toFixed(2)),
      yoyChange: status === "Miss" ? -11.2 : status === "Inline" ? 2.4 : 10.7
    },
    guidance:
      tone === "Bullish"
        ? "Management highlighted stable demand and improving execution into the next quarter."
        : tone === "Neutral"
          ? "Management kept commentary measured and offered no major change to near-term expectations."
          : null,
    afterHoursMove: status === "Beat" ? 3.4 : status === "Inline" ? 0.6 : -4.1,
    takeaways: [
      "The quarter was processed into a quick-read format rather than a full analyst model.",
      "Revenue and EPS were benchmarked against a simple estimate baseline.",
      "Tone and status use lightweight rules so the app works even without a paid data API.",
      "Swap in a live provider later without changing page-level UI contracts."
    ],
    risks: [
      "This brief uses mock-backed inference when live data is unavailable.",
      "Guidance language may be absent or simplified for unsupported tickers.",
      "Treat the output as a fast filter, not a final investment decision."
    ],
    historical: [
      { quarter: "Q2'25", revenue: baseRevenue - 720, eps: Number((epsBase - 0.11).toFixed(2)) },
      { quarter: "Q3'25", revenue: baseRevenue - 340, eps: Number((epsBase - 0.06).toFixed(2)) },
      { quarter: "Q4'25", revenue: baseRevenue - 120, eps: Number((epsBase - 0.02).toFixed(2)) },
      { quarter: "Q1'26", revenue: baseRevenue + revenueBeat, eps: Number((epsBase + (status === "Beat" ? 0.12 : status === "Miss" ? -0.08 : 0.02)).toFixed(2)) }
    ]
  };
}

export function getMockEarningsSnapshot(ticker: string) {
  return snapshots[ticker] ?? generateFallbackSnapshot(ticker);
}

export function getExampleSnapshots() {
  return ["AAPL", "NVDA", "MSFT"].map((ticker) => snapshots[ticker]);
}
