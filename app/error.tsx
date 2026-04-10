"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-6 py-20">
      <Card className="w-full">
        <CardContent className="p-8 text-center md:p-12">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Unexpected error</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Something broke while building the brief.</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            {error.message || "Please try again or return to the home page."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={reset} className={buttonVariants({})}>
              Try again
            </button>
            <Link href="/" className={buttonVariants({ variant: "secondary" })}>
              Back home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
