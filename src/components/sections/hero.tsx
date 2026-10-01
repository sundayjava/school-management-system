import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import {
  HeroSlideshow,
  type HeroSlide,
} from "@/components/sections/hero-slideshow";

const stats = [
  { value: "15+", label: "Years of excellence" },
  { value: "3,000+", label: "Students enrolled" },
  { value: "98%", label: "On-time result release" },
];

/*
  TODO: swap for the school's own campus/student photos once supplied —
  these are Unsplash stock photography as realistic placeholders.
*/
const slides: HeroSlide[] = [
  {
    src: "/images/hero-students.jpg",
    alt: "Students in class at Greenfield Secondary School",
  },
  {
    src: "/images/hero-graduation.jpg",
    alt: "Graduating students throwing their caps in the air",
  },
  {
    src: "/images/hero-campus.jpg",
    alt: "The Greenfield Secondary School campus building",
  },
  {
    src: "/images/hero-classroom.jpg",
    alt: "A teacher leading a lesson in a Greenfield classroom",
  },
];

export function Hero() {
  // Deliberately a plain <section> rather than the shared <Section>: its top
  // padding has to be exactly half the navbar's height (navbar: py-4 + h-16 →
  // centre at 48px; sm: py-6 + h-16 → 56px) so the photo's top edge cuts the
  // floating nav bar in half, and Section's own lg:py-24 would override that.
  return (
    <section className="pt-12 pb-16 sm:pt-14 sm:pb-20 lg:pb-24">
      <Container>
        {/* w-full is load-bearing: with aspect-video and min-h both set and
            no explicit width, the browser derives width from the min-height
            (480 * 16/9 = 853px) and overflows the container at tablet sizes. */}
        <div className="relative isolate flex min-h-120 w-full flex-col justify-center overflow-hidden rounded-[2.5rem] p-8 sm:aspect-video sm:p-12 lg:p-16">
          <HeroSlideshow slides={slides} />

          {/* Two scrims: bottom-up for depth, left-to-right to keep the
              headline legible over the brighter slides. */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/25 to-transparent" />

          <div className="relative">
            <p className="text-xs font-semibold tracking-wide text-white uppercase sm:text-sm sm:tracking-widest">
              {siteConfig.tagline}
            </p>
            <h1 className="mt-2 max-w-md text-4xl leading-[0.95] font-black tracking-tight text-white uppercase sm:max-w-xl sm:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/results"
                className={buttonVariants({
                  size: "md",
                  className: "rounded-full",
                })}
              >
                Check My Result
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#about"
                className="text-ink-950 inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium transition-colors hover:bg-white/90"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-border bg-surface mx-auto mt-8 grid w-full max-w-2xl grid-cols-3 gap-4 rounded-2xl border p-6 shadow-sm sm:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-brand-600 dark:text-brand-400 text-xl font-bold sm:text-2xl">
                {stat.value}
              </p>
              <p className="text-text-subtle mt-1 text-xs sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
