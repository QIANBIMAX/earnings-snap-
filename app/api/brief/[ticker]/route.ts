import { NextResponse } from "next/server";

import { getEarningsSnapshot } from "@/lib/providers/earnings";

export async function GET(
  _request: Request,
  { params }: { params: { ticker: string } }
) {
  const snapshot = await getEarningsSnapshot(params.ticker);

  if (!snapshot) {
    return NextResponse.json({ error: "Ticker not found" }, { status: 404 });
  }

  return NextResponse.json(snapshot);
}
