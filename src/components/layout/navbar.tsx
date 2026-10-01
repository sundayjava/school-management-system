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
    <header className="absolute inset-x-0 top-0 z-50 py-4 sm:py-6">
      <Container>
        {/* Narrower than the hero card below it, so the photo's top edge
            reads as cutting the bar in half (see Hero's top padding). */}
        <div className="dark:bg-ink-900/90 mx-auto flex h-16 max-w-5xl items-center justify-between rounded-full bg-white/95 px-5 shadow-lg shadow-black/5 backdrop-blur sm:px-6">
          <Link
            href="/"
            className="text-ink-950 flex items-center gap-2 text-base font-bold tracking-tight dark:text-white"
          >
            <span className="bg-brand-600 inline-flex h-9 w-9 items-center justify-center rounded-full text-white">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {siteConfig.nav.map((item) => {
              const active = isActiveLink(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "hover:text-brand-600 dark:hover:text-brand-400 text-ink-600 dark:text-ink-300 text-xs font-semibold tracking-wide uppercase transition-colors",
                    active && "text-brand-600 dark:text-brand-400",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link
              href="/results"
              className={cn(buttonVariants({ size: "sm" }), "rounded-full")}
            >
              Check Result
            </Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="text-ink-950 inline-flex items-center justify-center rounded-full p-2 dark:text-white"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="bg-surface border-border mx-auto mt-2 max-w-5xl rounded-3xl border p-4 shadow-lg lg:hidden">
            <div className="flex flex-col gap-1">
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
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
