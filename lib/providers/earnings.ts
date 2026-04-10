import { getMockEarningsSnapshot } from "@/lib/mock";
import { getCompanyProfile } from "@/lib/providers/company";
import { getQuoteSnapshot } from "@/lib/providers/quote";
import { isValidTicker, normalizeTicker } from "@/lib/utils";
import type { EarningsSnapshot } from "@/lib/types";

function useMockProvider() {
  return !process.env.FINANCIAL_DATA_API_KEY && !process.env.POLYGON_API_KEY && !process.env.FMP_API_KEY;
}

export async function getEarningsSnapshot(rawTicker: string): Promise<EarningsSnapshot | null> {
  const ticker = normalizeTicker(rawTicker);

  if (!isValidTicker(ticker)) {
    return null;
  }

  if (!useMockProvider()) {
    // Reserved for future live integration.
    // Keep the page contract stable and fall back gracefully until a real API is wired in.
  }

  const [company, quote] = await Promise.all([
    getCompanyProfile(ticker),
    getQuoteSnapshot(ticker)
  ]);

  const mock = getMockEarningsSnapshot(ticker);

  return {
    ...mock,
    companyName: company.name,
    sector: company.sector,
    afterHoursMove: quote.afterHoursMove
  };
}
