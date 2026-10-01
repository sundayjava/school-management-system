import { type InputHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "border-border bg-surface text-foreground placeholder:text-text-subtle focus-visible:ring-brand-500 h-11 w-full rounded-xl border px-4 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
