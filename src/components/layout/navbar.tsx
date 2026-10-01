"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

/** Anchor links (e.g. "/#about") point at a section on the homepage, not a
 * distinct route, so they're never shown as the active nav item. */
function isActiveLink(pathname: string, href: string) {
  if (href.includes("#")) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-border bg-background/90 sticky top-0 z-50 border-b backdrop-blur">
      <Container className="flex h-18 items-center justify-between">
        <Link
          href="/"
          className="text-foreground flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="bg-brand-600 inline-flex h-9 w-9 items-center justify-center rounded-xl text-white">
            <GraduationCap className="h-5 w-5" />
          </span>
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = isActiveLink(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "hover:text-brand-600 dark:hover:text-brand-400 text-text-muted text-sm font-medium transition-colors",
                  active && "text-brand-600 dark:text-brand-400",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link href="/results" className={buttonVariants({ size: "md" })}>
            Check Result
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-foreground inline-flex items-center justify-center rounded-full p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-border border-t lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-text-muted hover:bg-surface-muted hover:text-brand-600 dark:hover:text-brand-400 rounded-lg px-3 py-2 text-sm font-medium",
                  isActiveLink(pathname, item.href) &&
                    "text-brand-600 dark:text-brand-400",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/results"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ size: "md" }), "mt-2 w-full")}
            >
              Check Result
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
