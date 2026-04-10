# Earnings Snap

Earnings Snap is a minimal, modern Next.js MVP for generating a one-page earnings brief from a stock ticker.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Recharts
- Modular provider layer with mock-first fallback

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run build
npm run start
```

## Data strategy

The app is designed to run even when no API keys are present.

- Mock data lives in [lib/mock/earnings-data.ts](/Volumes/F/vibe coding/stock/lib/mock/earnings-data.ts)
- Provider entrypoints live in:
  - [lib/providers/earnings.ts](/Volumes/F/vibe coding/stock/lib/providers/earnings.ts)
  - [lib/providers/company.ts](/Volumes/F/vibe coding/stock/lib/providers/company.ts)
  - [lib/providers/quote.ts](/Volumes/F/vibe coding/stock/lib/providers/quote.ts)

To swap in a real provider:

1. Add the API key to `.env.local`.
2. Replace the mock branch inside [lib/providers/earnings.ts](/Volumes/F/vibe coding/stock/lib/providers/earnings.ts).
3. Keep the `EarningsSnapshot` response shape unchanged so the UI keeps working.

## Features included

- Home hero with ticker search
- Example earnings cards
- Detail page with verdict, KPI cards, takeaways, tone, chart and risk section
- Loading, empty and not-found states
- Recent searches via `localStorage`
- Route handler at `/api/brief/[ticker]`

## Notes

- The current build favors UI completeness and extensibility over live market data integration.
- Unsupported tickers still render a sensible fallback brief so the app never blocks on missing data.
