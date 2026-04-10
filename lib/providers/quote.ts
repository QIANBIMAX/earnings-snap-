import { getMockEarningsSnapshot } from "@/lib/mock";
import type { QuoteSnapshot } from "@/lib/types";

export async function getQuoteSnapshot(ticker: string): Promise<QuoteSnapshot> {
  const mock = getMockEarningsSnapshot(ticker);
  const estimatedPrice = Math.max(18, Number((mock.eps.actual * 110).toFixed(2)));

  return {
    ticker,
    price: estimatedPrice,
    afterHoursMove: mock.afterHoursMove
  };
}
