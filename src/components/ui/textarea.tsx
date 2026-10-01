import { type TextareaHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "border-border bg-surface text-foreground placeholder:text-text-subtle focus-visible:ring-brand-500 w-full resize-none rounded-xl border px-4 py-3 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
