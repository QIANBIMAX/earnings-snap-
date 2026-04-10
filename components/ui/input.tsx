import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-14 w-full rounded-full border border-white/10 bg-white/[0.06] px-5 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-brand-300 focus:bg-white/[0.08]",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
