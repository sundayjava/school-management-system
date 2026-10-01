"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Fixed rather than `new Date()` so the server and client render the same
// grid — a "today" default would risk a hydration mismatch.
const INITIAL_YEAR = 2026;
const INITIAL_MONTH = 8; // September

type SchoolEvent = { day: number; title: string };

/*
  TODO: source these from the school's calendar (CMS or API). Keyed by
  month only for now, so they repeat across years.
*/
const EVENTS: Record<number, SchoolEvent[]> = {
  8: [
    { day: 7, title: "First term resumption: JSS 1-3" },
    { day: 8, title: "First term resumption: SSS 1-3" },
    { day: 11, title: "First instalment of fees due" },
    { day: 18, title: "New students' orientation" },
    { day: 25, title: "PTA general meeting" },
  ],
  9: [
    { day: 1, title: "Independence Day holiday" },
    { day: 14, title: "Mid-term break begins" },
    { day: 19, title: "Mid-term break ends" },
    { day: 28, title: "Inter-house sports heats" },
  ],
  10: [
    { day: 6, title: "Second instalment of fees due" },
    { day: 17, title: "First term examinations begin" },
    { day: 27, title: "First term examinations end" },
  ],
  11: [
    { day: 4, title: "First term results published" },
    { day: 11, title: "Prize-giving and carol service" },
    { day: 12, title: "First term ends" },
  ],
  0: [
    { day: 8, title: "Second term resumption" },
    { day: 15, title: "Third instalment of fees due" },
  ],
};

export function AcademicCalendar() {
  const [year, setYear] = useState(INITIAL_YEAR);
  const [month, setMonth] = useState(INITIAL_MONTH);

  const events = useMemo(() => EVENTS[month] ?? [], [month]);
  const eventDays = useMemo(
    () => new Set(events.map((event) => event.day)),
    [events],
  );

  const [selectedDay, setSelectedDay] = useState<number | null>(
    EVENTS[INITIAL_MONTH]?.[4]?.day ?? null,
  );

  const { leadingBlanks, daysInMonth } = useMemo(() => {
    return {
      leadingBlanks: new Date(year, month, 1).getDay(),
      daysInMonth: new Date(year, month + 1, 0).getDate(),
    };
  }, [year, month]);

  function selectMonth(next: number) {
    setMonth(next);
    setSelectedDay(EVENTS[next]?.[0]?.day ?? null);
  }

  return (
    <Section className="bg-surface-muted">
      <Container>
        <h2 className="text-foreground relative text-center text-4xl font-black tracking-tight uppercase sm:text-5xl lg:text-6xl">
          Academic Calendar
        </h2>

        {/* Pulled up so the card overlaps the heading, as in the design. */}
        <div className="border-border bg-surface relative z-10 -mt-1.5 overflow-hidden rounded-3xl border shadow-xl sm:-mt-3">
          <div className="grid lg:grid-cols-[12rem_1fr_19rem]">
            {/* Month rail — a horizontal strip on small screens */}
            <div className="bg-brand-600 min-w-0 p-4 sm:p-5">
              <div className="flex items-center justify-between text-white">
                <button
                  type="button"
                  onClick={() => setYear((y) => y - 1)}
                  aria-label="Previous year"
                  className="rounded-full p-1 transition-colors hover:bg-white/20"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="text-lg font-bold">{year}</span>
                <button
                  type="button"
                  onClick={() => setYear((y) => y + 1)}
                  aria-label="Next year"
                  className="rounded-full p-1 transition-colors hover:bg-white/20"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 flex gap-1 overflow-x-auto lg:mt-5 lg:flex-col lg:overflow-visible">
                {MONTHS.map((name, i) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => selectMonth(i)}
                    className={cn(
                      "shrink-0 rounded-md px-3 py-1.5 text-left text-xs font-medium whitespace-nowrap transition-colors",
                      i === month
                        ? "bg-ink-900/70 text-white"
                        : "text-white/80 hover:bg-white/15",
                    )}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Month grid */}
            <div className="min-w-0 p-5 sm:p-6">
              <p className="text-foreground text-sm font-semibold">
                {MONTHS[month].toUpperCase()} {year}
              </p>

              <div className="text-text-subtle mt-5 grid grid-cols-7 gap-y-1 text-center text-xs">
                {WEEKDAYS.map((day) => (
                  <span key={day} className="py-1 font-medium">
                    {day}
                  </span>
                ))}
              </div>

              <div className="mt-1 grid grid-cols-7 gap-y-1 text-center text-sm">
                {Array.from({ length: leadingBlanks }).map((_, i) => (
                  <span key={`blank-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const hasEvent = eventDays.has(day);
                  const isSelected = day === selectedDay;
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      aria-pressed={isSelected}
                      className="group relative flex h-10 flex-col items-center justify-center"
                    >
                      <span
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                          isSelected
                            ? "bg-brand-600 font-semibold text-white"
                            : "text-foreground group-hover:bg-surface-muted",
                        )}
                      >
                        {day}
                      </span>
                      {hasEvent && !isSelected && (
                        <span className="bg-brand-600 absolute bottom-0.5 h-1 w-1 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Events panel */}
            <div className="bg-surface-muted border-border relative min-w-0 border-t p-5 sm:p-6 lg:border-t-0 lg:border-l">
              <span className="bg-brand-600 absolute top-0 right-5 inline-flex h-9 w-9 items-center justify-center rounded-b-lg text-white">
                <Info className="h-4 w-4" />
              </span>

              <p className="text-foreground text-base font-semibold">
                {MONTHS[month]} {year}
              </p>

              <ul className="mt-5 max-h-64 space-y-4 overflow-y-auto pr-2">
                {events.length === 0 && (
                  <li className="text-text-subtle text-xs">
                    No events scheduled for this month.
                  </li>
                )}
                {events.map((event) => (
                  <li key={event.title} className="flex items-start gap-3">
                    <span className="bg-brand-600 mt-1.5 h-2 w-2 shrink-0 rounded-full" />
                    <button
                      type="button"
                      onClick={() => setSelectedDay(event.day)}
                      className={cn(
                        "text-left text-xs leading-5 tracking-wide uppercase transition-colors",
                        event.day === selectedDay
                          ? "text-brand-600 dark:text-brand-400 font-semibold"
                          : "text-text-muted hover:text-foreground",
                      )}
                    >
                      {event.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
