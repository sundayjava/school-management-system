import Image from "next/image";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Welcome() {
  // Accent the first word of the school name, so re-branding via site.ts
  // still produces the same two-tone heading.
  const [firstWord, ...restWords] = siteConfig.name.split(" ");

  return (
    <Section id="about" className="scroll-mt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-brand-600 dark:text-brand-400 text-sm font-bold tracking-widest uppercase">
              Our Story
            </p>
            <h2 className="text-foreground mt-4 text-3xl leading-tight font-black tracking-tight uppercase sm:text-4xl lg:text-5xl">
              Welcome to{" "}
              <span className="text-brand-600 dark:text-brand-400">
                {firstWord}
              </span>{" "}
              {restWords.join(" ")}
            </h2>
            <div className="text-text-muted mt-6 space-y-4 text-sm leading-7">
              <p>
                At {siteConfig.name}, our team is committed to providing the
                very best for every student, and to creating ever-better
                learning outcomes within a caring environment where everyone
                feels happy, safe and secure.
              </p>
              <p>
                With the dedication and support of well-experienced professional
                staff, every student is guided and motivated to develop their
                full potential across all areas of education. We encourage
                active participation from parents, teachers and the wider
                community, and we hope this portal gives you a thorough
                introduction to our vision, values and working methods.
              </p>
            </div>
          </div>

          <div className="relative aspect-7/6 overflow-hidden rounded-3xl shadow-xl">
            {/*
              TODO: swap for the school's own photography once supplied —
              Unsplash stock as a realistic placeholder.
            */}
            <Image
              src="/images/welcome-students.jpg"
              alt="Students studying together at Greenfield Secondary School"
              fill
              sizes="(min-width: 1024px) 36rem, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
