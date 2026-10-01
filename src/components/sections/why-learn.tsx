import Image from "next/image";
import {
  BookOpen,
  Building2,
  GraduationCap,
  Pencil,
  type LucideIcon,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type Highlight = {
  icon: LucideIcon;
  label: string;
  image: string;
  alt: string;
};

/*
  TODO: swap for the school's own photography once supplied — Unsplash
  stock as realistic placeholders.
*/
const highlights: Highlight[] = [
  {
    icon: Building2,
    label: "Modern Campus",
    image: "/images/why-campus.jpg",
    alt: "The school's main campus building",
  },
  {
    icon: Pencil,
    label: "Hands-On Learning",
    image: "/images/why-learning.jpg",
    alt: "Students working on a classroom project",
  },
  {
    icon: BookOpen,
    label: "Library & Study Spaces",
    image: "/images/why-library.jpg",
    alt: "The school library and study hall",
  },
  {
    icon: GraduationCap,
    label: "Door To A Bright Future",
    image: "/images/why-future.jpg",
    alt: "Graduating students raising their caps",
  },
];

export function WhyLearn() {
  const [firstWord] = siteConfig.name.split(" ");

  return (
    <Section className="bg-ink-950">
      <Container>
        <p className="text-brand-500 text-sm font-bold tracking-widest uppercase">
          Choose {firstWord}?
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white uppercase sm:text-4xl lg:text-5xl">
          Why Learn With Us?
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, label, image, alt }) => (
            <div
              key={label}
              className="relative aspect-5/7 overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 20rem, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <Icon className="h-5 w-5 text-white" />
                <p className="mt-2 text-xs font-bold tracking-wide text-white uppercase sm:text-sm">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
