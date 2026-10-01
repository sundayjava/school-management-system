import Link from "next/link";
import { ArrowRight, FileCheck2, ShieldCheck, Zap } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";

const stats = [
  { value: "15+", label: "Years of excellence" },
  { value: "3,000+", label: "Students enrolled" },
  { value: "98%", label: "On-time result release" },
];

const features = [
  { icon: Zap, label: "Instant access" },
  { icon: ShieldCheck, label: "Secure & private" },
];

export function Hero() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wide uppercase">
              {siteConfig.name}
            </p>
            <h1 className="text-foreground mt-3 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="text-text-muted mt-6 max-w-md text-base leading-7">
              {siteConfig.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link href="/results" className={buttonVariants({ size: "lg" })}>
                Check My Result
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#about"
                className="text-foreground hover:text-brand-600 dark:hover:text-brand-400 text-sm font-semibold"
              >
                Learn more
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="bg-brand-600 inline-flex h-11 w-11 items-center justify-center rounded-full text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-foreground text-sm font-semibold">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-border bg-surface rounded-3xl border p-8 shadow-sm sm:p-10">
            <span className="bg-brand-500/10 text-brand-600 dark:text-brand-400 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
              <FileCheck2 className="h-6 w-6" />
            </span>
            <p className="text-foreground mt-5 text-lg font-semibold">
              Your result, in three steps
            </p>
            <ol className="text-text-muted mt-4 space-y-3 text-sm leading-6">
              <li>1. Enter your student ID and select the term.</li>
              <li>2. Confirm your details to verify it&apos;s you.</li>
              <li>3. View and download your result instantly.</li>
            </ol>

            <div className="border-border bg-surface-muted mt-8 grid grid-cols-3 gap-4 rounded-2xl border p-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-brand-600 dark:text-brand-400 text-xl font-bold sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-text-subtle mt-1 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
