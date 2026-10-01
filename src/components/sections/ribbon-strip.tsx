import { GraduationCap } from "lucide-react";

import { cn } from "@/lib/utils";

const PHRASE = "Bringing Talent To Life";
/** Enough repeats to span the widest ribbon before the loop point. */
const REPEATS = 6;

function RibbonTrack({ reverse }: { reverse?: boolean }) {
  // Two identical halves: the keyframe shifts by -50%, so the second half
  // is already in place when the first scrolls out.
  const half = (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: REPEATS }).map((_, i) => (
        <div key={i} className="flex items-center gap-6 px-6">
          <GraduationCap className="text-ink-950 h-5 w-5 shrink-0" />
          <span className="text-ink-950 text-sm font-extrabold tracking-wide whitespace-nowrap uppercase sm:text-base">
            {PHRASE}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "flex w-max motion-reduce:animate-none",
        reverse
          ? "animate-[marquee_38s_linear_infinite_reverse]"
          : "animate-[marquee_38s_linear_infinite]",
      )}
    >
      {half}
      {half}
    </div>
  );
}

export function RibbonStrip() {
  return (
    <section
      className="bg-ink-950 relative overflow-hidden py-20 sm:py-24"
      aria-hidden
    >
      {/* Two ribbons rotated in opposite directions so they cross in an X.
          Each is wider than the viewport so the ends stay off-screen. */}
      <div className="absolute inset-x-[-10%] top-1/2 -translate-y-1/2 -rotate-6">
        <div className="overflow-hidden bg-yellow-300 py-2.5">
          <RibbonTrack />
        </div>
      </div>
      <div className="absolute inset-x-[-10%] top-1/2 -translate-y-1/2 rotate-6">
        <div className="overflow-hidden bg-yellow-300 py-2.5">
          <RibbonTrack reverse />
        </div>
      </div>
    </section>
  );
}
