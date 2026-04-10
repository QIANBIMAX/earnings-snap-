import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TickerNotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-6 py-20">
      <Card className="w-full">
        <CardContent className="p-8 text-center md:p-12">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Ticker not found</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">We couldn&apos;t generate that brief.</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Try a valid US ticker like AAPL, NVDA or MSFT. If no live source is configured, the app still works with mock data.
          </p>
          <div className="mt-8">
            <Link href="/" className={buttonVariants({})}>
              Back to search
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
