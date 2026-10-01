import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";

const stats = [
  { value: "15+", label: "Years of excellence" },
  { value: "3,000+", label: "Students enrolled" },
  { value: "98%", label: "On-time result release" },
];

export function Hero() {
  return (
    <Section className="pt-0 pb-16 sm:pb-20">
      <Container>
        {/*
          TODO: swap for the school's own campus/student photo once
          supplied — this is Unsplash stock photography as a realistic
          placeholder.
        */}
        <div className="relative isolate flex min-h-136 flex-col justify-end overflow-hidden rounded-[2.5rem] p-8 sm:aspect-16/10 sm:min-h-0 sm:p-12 lg:p-16">
          <Image
            src="/images/hero-students.jpg"
            alt="Students at Greenfield Secondary School"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/10" />

          <div className="relative">
            <p className="text-brand-400 text-xs font-semibold tracking-wide uppercase sm:text-sm sm:tracking-widest">
              {siteConfig.tagline}
            </p>
            <h1 className="mt-2 max-w-3xl text-4xl leading-[0.95] font-black tracking-tight text-white uppercase sm:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/results"
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-full",
                })}
              >
                Check My Result
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#about"
                className="inline-flex h-13 items-center justify-center rounded-full border border-white/50 px-8 text-base font-medium text-white transition-colors hover:bg-white/10"
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
    </Section>
  );
}
