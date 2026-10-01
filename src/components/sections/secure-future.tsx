import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, Sparkle } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

/* Reuses photography from the rest of the page — each card is small and
   heavily overlapped, so the arc reads as a collage rather than a gallery. */
const PHOTOS = [
  { src: "/images/why-learning.jpg", alt: "Students working on a project" },
  { src: "/images/hero-classroom.jpg", alt: "A lesson in progress" },
  { src: "/images/welcome-students.jpg", alt: "Students studying together" },
  { src: "/images/journey-junior.jpg", alt: "A teacher leading a class" },
  { src: "/images/hero-students.jpg", alt: "Students in class" },
  { src: "/images/journey-senior.jpg", alt: "Senior students at work" },
  { src: "/images/why-library.jpg", alt: "The school library" },
  { src: "/images/why-future.jpg", alt: "Graduating students" },
  { src: "/images/hero-graduation.jpg", alt: "Graduation celebration" },
];

const SPREAD_DEG = 76;

/*
  The arc's radii and pivot live in CSS custom properties (set on the card,
  below) rather than constants here, so they can differ per breakpoint: on a
  narrow screen the arch is compressed into the top half, otherwise its ends
  swing down into the space the headline needs.
*/
function arcPosition(index: number, total: number) {
  const t = total === 1 ? 0 : (index / (total - 1)) * 2 - 1; // -1 .. 1
  const angle = t * SPREAD_DEG;
  const rad = (angle * Math.PI) / 180;
  return {
    angle,
    left: `calc(50% + (${Math.sin(rad).toFixed(4)} * var(--arc-rx)))`,
    top: `calc(var(--arc-py) - (${Math.cos(rad).toFixed(4)} * var(--arc-ry)))`,
  };
}

export function SecureFuture() {
  const middle = (PHOTOS.length - 1) / 2;

  return (
    <Section className="bg-surface-muted">
      <Container>
        {/* w-full guards the aspect-ratio + min-height width-derivation trap. */}
        <div className="bg-ink-950 relative w-full overflow-hidden rounded-3xl xl:aspect-12/5">
          {/* Doodles */}
          <Heart
            className="absolute top-[8%] left-[18%] h-6 w-6 -rotate-12 text-red-500/80 sm:h-9 sm:w-9"
            strokeWidth={1.5}
          />
          <Heart
            className="absolute top-[10%] right-[6%] h-7 w-7 rotate-12 text-red-500/80 sm:h-10 sm:w-10"
            strokeWidth={1.5}
          />
          <Sparkle
            className="absolute top-[38%] left-[6%] h-6 w-6 text-red-500/80 sm:h-9 sm:w-9"
            strokeWidth={1.5}
          />
          <Sparkle
            className="absolute top-[36%] right-[12%] h-6 w-6 text-red-500/80 sm:h-9 sm:w-9"
            strokeWidth={1.5}
          />
          <Sparkle
            className="absolute top-[22%] left-[24%] h-3.5 w-3.5 text-red-500/70 sm:h-5 sm:w-5"
            strokeWidth={1.5}
          />

          {/*
            Below lg the card is too short to sit the copy on top of the arch
            without the two colliding, so the arch gets its own band and the
            copy flows underneath. At lg there's room for the overlay.
          */}
          <div className="relative h-56 [--arc-py:72%] [--arc-rx:40%] [--arc-ry:42%] sm:h-80 xl:absolute xl:inset-0 xl:h-auto xl:[--arc-py:96%] xl:[--arc-rx:38%] xl:[--arc-ry:66%]">
            {PHOTOS.map((photo, i) => {
              const { angle, left, top } = arcPosition(i, PHOTOS.length);
              return (
                <div
                  key={photo.src}
                  aria-hidden
                  className="absolute aspect-3/4 w-[13%] overflow-hidden rounded-lg shadow-lg xl:w-[11%]"
                  style={{
                    left,
                    top,
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    zIndex: Math.round(10 - Math.abs(i - middle)),
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="12vw"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>

          {/* Copy: stacked under the arch below lg, overlaid at lg */}
          <div className="relative z-20 flex flex-col items-center px-6 pb-10 text-center xl:absolute xl:inset-x-0 xl:bottom-[8%] xl:pb-0">
            <p className="text-xs font-semibold tracking-widest text-white uppercase">
              Work Together
            </p>
            <h2 className="mt-3 max-w-xl text-2xl leading-tight font-black tracking-tight text-white uppercase sm:text-4xl xl:text-5xl">
              Let&apos;s Secure Your Kid&apos;s Future
            </h2>
            <Link
              href="/#contact"
              className="bg-brand-600 hover:bg-brand-700 mt-6 inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-6 text-xs font-bold tracking-wide text-white uppercase transition-colors"
            >
              Join Now
              <span className="text-brand-600 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
