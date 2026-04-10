import * as React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const buttonVariants = ({
  variant = "default",
  size = "default",
  className
}: {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
}) =>
  cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 disabled:pointer-events-none disabled:opacity-50",
    variant === "default" &&
      "bg-brand-400 text-slate-950 shadow-[0_12px_40px_rgba(63,188,158,0.3)] hover:bg-brand-300",
    variant === "secondary" &&
      "border border-white/10 bg-white/[0.08] text-white hover:bg-white/[0.12]",
    variant === "ghost" && "text-slate-200 hover:bg-white/[0.08]",
    size === "default" && "h-12 px-5 text-sm",
    size === "sm" && "h-10 px-4 text-sm",
    size === "lg" && "h-14 px-6 text-base",
    className
  );

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button className={buttonVariants({ variant, size, className })} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button };
