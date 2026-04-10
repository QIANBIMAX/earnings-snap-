import { getMockEarningsSnapshot } from "@/lib/mock";
import type { CompanyProfile } from "@/lib/types";

export async function getCompanyProfile(ticker: string): Promise<CompanyProfile> {
  const mock = getMockEarningsSnapshot(ticker);

  return {
    ticker,
    name: mock.companyName,
    sector: mock.sector,
    description: `${mock.companyName} is currently served from the mock company provider. Replace this with a live profile endpoint when API keys are available.`
  };
}
