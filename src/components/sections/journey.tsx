"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Stage = {
  label: string;
  title: string;
  body: string;
  images: [string, string, string];
  alts: [string, string, string];
};

const stages: Stage[] = [
  {
    label: "Junior Secondary",
    title: "Junior Secondary",
    body: "Our JSS programme builds the habits that carry a student through the rest of their education — curiosity, consistency and confidence. Core subjects are taught in small groups so no one slips through, and termly reports give parents a clear picture of progress from the very first year.",
    images: [
      "/images/journey-junior.jpg",
      "/images/why-learning.jpg",
      "/images/hero-classroom.jpg",
    ],
    alts: [
      "A teacher leading a junior secondary lesson",
      "Junior students working on a class project",
      "A junior secondary classroom in session",
    ],
  },
  {
    label: "Senior Secondary",
    title: "Senior Secondary",
    body: "In SSS, students specialise across the sciences, arts and commercial streams while preparing for WAEC and NECO. Dedicated subject teachers, well-equipped laboratories and a structured revision timetable keep every candidate on track for the grades they are capable of.",
    images: [
      "/images/journey-senior.jpg",
      "/images/journey-lab.jpg",
      "/images/why-library.jpg",
    ],
    alts: [
      "Senior students working together on laptops",
      "Science laboratory equipment",
      "The school library and study spaces",
    ],
  },
  {
    label: "Graduation & Beyond",
    title: "Graduation & Beyond",
    body: "Final-year students leave us with more than a certificate. Our guidance team supports university applications, scholarship searches and career planning, and our alumni network keeps the door open long after the last exam is written.",
    images: [
      "/images/why-future.jpg",
      "/images/hero-graduation.jpg",
      "/images/why-campus.jpg",
    ],
    alts: [
      "Graduating students raising their caps",
      "Graduates celebrating at sunset",
      "The school campus building",
    ],
  },
];

export function Journey() {
  const [active, setActive] = useState(0);
  const [firstWord] = siteConfig.name.split(" ");

  const go = (delta: number) =>
    setActive((i) => (i + delta + stages.length) % stages.length);

  return (
    <Section className="bg-surface-muted overflow-hidden">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-text-muted text-sm font-bold tracking-widest uppercase">
              Our Programme
            </p>
            <h2 className="text-foreground mt-3 text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-5xl">
              Journey of Education at{" "}
              <span className="text-brand-600 dark:text-brand-400">
                {firstWord}
              </span>
            </h2>
          </div>

          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous stage"
              className="border-border text-foreground hover:border-brand-600 hover:text-brand-600 dark:hover:border-brand-400 dark:hover:text-brand-400 inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next stage"
              className="border-border text-foreground hover:border-brand-600 hover:text-brand-600 dark:hover:border-brand-400 dark:hover:text-brand-400 inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Progress track: 4 nodes bounding 3 labelled stages, filled up to
            the end of the active one. */}
        <div className="mt-10 max-w-2xl">
          <div className="relative">
            <div className="bg-border h-0.5 w-full rounded-full" />
            <div
              className="bg-brand-600 absolute top-0 left-0 h-0.5 rounded-full transition-all duration-500"
              style={{ width: `${((active + 1) / stages.length) * 100}%` }}
            />
            {stages.map((stage, i) => (
              <span
                key={stage.label}
                className={cn(
                  "absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-500",
                  i <= active ? "bg-brand-600" : "bg-border",
                )}
                style={{ left: `${(i / stages.length) * 100}%` }}
              />
            ))}
            <span
              className={cn(
                "absolute top-1/2 right-0 h-2.5 w-2.5 translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-500",
                active === stages.length - 1 ? "bg-brand-600" : "bg-border",
              )}
            />
          </div>

          <div className="mt-4 flex">
            {stages.map((stage, i) => (
              <button
                key={stage.label}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "flex-1 text-left text-[0.7rem] font-bold tracking-wide uppercase transition-colors sm:text-xs",
                  i === active
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-text-subtle hover:text-foreground",
                )}
              >
                {stage.label}
              </button>
            ))}
          </div>
        </div>

        {/* Slide track. --slide drives both the slide width and the
            translate, so the next card peeks in on wide screens. */}
        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out [--slide:100%] lg:[--slide:94%]"
            style={{
              transform: `translateX(calc(${active} * -1 * var(--slide)))`,
            }}
          >
            {stages.map((stage) => (
              <div
                key={stage.label}
                className="w-[var(--slide)] shrink-0 pr-0 lg:pr-10"
              >
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative col-span-2 aspect-16/9 overflow-hidden rounded-2xl">
                      <Image
                        src={stage.images[0]}
                        alt={stage.alts[0]}
                        fill
                        sizes="(min-width: 1024px) 32rem, 90vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                      <Image
                        src={stage.images[1]}
                        alt={stage.alts[1]}
                        fill
                        sizes="(min-width: 1024px) 16rem, 45vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                      <Image
                        src={stage.images[2]}
                        alt={stage.alts[2]}
                        fill
                        sizes="(min-width: 1024px) 16rem, 45vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-foreground text-2xl font-black tracking-tight uppercase sm:text-3xl">
                      {stage.title}
                    </h3>
                    <p className="text-text-muted mt-5 text-sm leading-7">
                      {stage.body}
                    </p>
                    <Link
                      href="/#contact"
                      className="bg-brand-600 hover:bg-brand-700 mt-7 inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-6 text-xs font-bold tracking-wide text-white uppercase transition-colors"
                    >
                      Read More
                      <span className="text-brand-600 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
