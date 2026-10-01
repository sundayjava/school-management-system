"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type HeroSlide = {
  src: string;
  alt: string;
};

const INTERVAL_MS = 6000;

/**
 * Cross-fades between the hero photos. Only the image layer is a client
 * component so the hero's heading and CTAs stay server-rendered.
 *
 * Auto-rotation is skipped for visitors who prefer reduced motion — they
 * just see the first slide.
 */
export function HeroSlideshow({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 -z-10" aria-hidden>
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          // The first slide is the LCP image, so it loads eagerly; the rest
          // are fetched up front too, since they appear on a short timer.
          priority={i === 0}
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
    </div>
  );
}
