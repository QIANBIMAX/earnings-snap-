import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: {
    default: "Earnings Snap",
    template: "%s · Earnings Snap"
  },
  description: "A minimal, modern earnings brief for US stocks."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-[var(--font-inter)] text-foreground antialiased">
        <div className="relative">
          <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-slate-950/[0.55] backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
              <Link href="/" className="font-[var(--font-manrope)] text-lg font-semibold tracking-[0.2em] text-white">
                Earnings Snap
              </Link>
              <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
                <span>30-sec summary</span>
                <span>Key metrics</span>
                <span>Trend view</span>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
