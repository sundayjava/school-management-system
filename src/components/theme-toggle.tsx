"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

/** Avoids hydration mismatch: theme is unknown on the server. */
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="border-border bg-surface-muted focus-visible:ring-brand-500 focus-visible:ring-offset-background relative inline-flex h-9 w-16 shrink-0 cursor-pointer items-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <span
        className="bg-surface text-foreground data-[dark=true]:bg-ink-950 flex h-7 w-7 translate-x-1 items-center justify-center rounded-full shadow-sm transition-transform data-[dark=true]:translate-x-8 data-[dark=true]:text-white"
        data-dark={isDark}
      >
        {mounted && isDark ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </span>
    </button>
  );
}
