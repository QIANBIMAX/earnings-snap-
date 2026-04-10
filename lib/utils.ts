import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number | null, compact = true) {
  if (value === null || Number.isNaN(value)) return "N/A";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: compact ? 1 : 2
  }).format(value);
}

export function formatPercent(value: number | null, digits = 1) {
  if (value === null || Number.isNaN(value)) return "Unavailable";
  return `${value >= 0 ? "+" : ""}${value.toFixed(digits)}%`;
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}

export function normalizeTicker(input: string) {
  return input.trim().toUpperCase().replace(/[^A-Z.]/g, "");
}

export function isValidTicker(input: string) {
  return /^[A-Z.]{1,6}$/.test(input);
}
