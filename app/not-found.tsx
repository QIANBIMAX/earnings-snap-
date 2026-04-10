import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function RootNotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-6 py-20">
      <Card className="w-full">
        <CardContent className="p-8 text-center md:p-12">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Page not found</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">This page doesn&apos;t exist.</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Head back to the homepage and generate a brief from a ticker like AAPL or NVDA.
          </p>
          <div className="mt-8">
            <Link href="/" className={buttonVariants({})}>
              Back home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
