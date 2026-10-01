"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

/*
  Placeholder copy. Avatars are initials rather than stock portraits on
  purpose — attaching a photo of a real, identifiable person to a quote
  they never gave would misrepresent them.
*/
const testimonials: Testimonial[] = [
  {
    quote:
      "I would like to thank the school administration for the chance to share our experience. I have seen a huge improvement in my children's English and mathematics. What matters most to me as a parent is the teachers' communication and how cooperative the administration has been. My children have been here since JSS 1 and I hope they graduate from this school.",
    name: "Mrs. Amina Bello",
    role: "Parent, JSS 2 & SSS 1",
    initials: "AB",
  },
  {
    quote:
      "Checking results used to mean a trip to the school and a long wait at the office. Now I can see my daughter's scores the same evening they are released, and the breakdown per subject tells me exactly where she needs support.",
    name: "Mr. Chidi Okonkwo",
    role: "Parent, SSS 2",
    initials: "CO",
  },
  {
    quote:
      "The teachers genuinely know my son. When his grades slipped in one term, his form teacher called me before I had even seen the report. That kind of attention is why we chose this school and why we have stayed.",
    name: "Mrs. Folake Adeyemi",
    role: "Parent, JSS 3",
    initials: "FA",
  },
  {
    quote:
      "My twins joined in JSS 1 and are now preparing for WAEC. The structure around revision and the guidance on university applications have taken a real weight off our shoulders as a family.",
    name: "Mr. Tunde Balogun",
    role: "Parent, SSS 3",
    initials: "TB",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const go = (delta: number) =>
    setActive((i) => (i + delta + testimonials.length) % testimonials.length);

  return (
    <Section>
      <Container>
        <p className="text-brand-600 dark:text-brand-400 text-sm font-bold tracking-widest uppercase">
          Testimonial
        </p>
        <h2 className="text-foreground mt-3 max-w-md text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-5xl">
          What Parents Say About Us
        </h2>

        <div className="mt-12 flex items-start gap-8">
          <div className="min-w-0 flex-1">
            <Quote className="text-brand-600 dark:text-brand-400 h-10 w-10 shrink-0 rotate-180" />

            <blockquote className="text-text-muted mt-4 max-w-3xl text-sm leading-7">
              {current.quote}
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-3">
              <span className="bg-brand-600 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white">
                {current.initials}
              </span>
              <div>
                <p className="text-foreground text-sm font-bold tracking-wide uppercase">
                  {current.name}
                </p>
                <p className="text-brand-600 dark:text-brand-400 text-xs font-semibold tracking-wide uppercase">
                  {current.role}
                </p>
              </div>
            </figcaption>
          </div>

          {/* Vertical pager */}
          <div className="flex shrink-0 flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="text-text-subtle hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              <ChevronUp className="h-5 w-5" />
            </button>

            <div className="flex flex-col gap-2.5">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-current={i === active}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    i === active
                      ? "bg-brand-600"
                      : "bg-border hover:bg-text-subtle",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="text-text-subtle hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
