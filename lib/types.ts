export type EarningsStatus = "Beat" | "Inline" | "Miss";
export type ManagementTone = "Bullish" | "Neutral" | "Cautious";

export interface QuarterlyPoint {
  quarter: string;
  revenue: number;
  eps: number;
}

export interface EarningsSnapshot {
  ticker: string;
  companyName: string;
  sector: string;
  reportDate: string;
  summary: string;
  status: EarningsStatus;
  managementTone: ManagementTone;
  revenue: {
    actual: number;
    estimate: number;
    yoyChange: number;
  };
  eps: {
    actual: number;
    estimate: number;
    yoyChange: number;
  };
  guidance: string | null;
  afterHoursMove: number | null;
  takeaways: string[];
  risks: string[];
  historical: QuarterlyPoint[];
}

export interface CompanyProfile {
  ticker: string;
  name: string;
  sector: string;
  description: string;
}

export interface QuoteSnapshot {
  ticker: string;
  price: number | null;
  afterHoursMove: number | null;
}
