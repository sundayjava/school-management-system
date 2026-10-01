import Link from "next/link";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/social";

const quickLinksA = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Check Result", href: "/results" },
  { label: "Announcements", href: "/#announcements" },
];

const quickLinksB = [
  { label: "Contact", href: "/#contact" },
  { label: "FAQs", href: "/faqs" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const socials = [
  { key: "facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { key: "instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { key: "linkedin", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
].filter((s) => Boolean(s.href));

const contactRows = [
  { Icon: MapPin, value: siteConfig.contact.address },
  { Icon: Mail, value: siteConfig.contact.email },
  { Icon: Phone, value: siteConfig.contact.phone },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-ink-950 scroll-mt-24 text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr_1fr_1.2fr_auto] lg:gap-12">
          {/* Logo badge */}
          <div className="shrink-0">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 text-white">
              <GraduationCap className="h-7 w-7" />
            </span>
          </div>

          <div>
            <p className="text-sm font-bold tracking-wide uppercase">
              Quick Links
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              <ul className="space-y-3">
                {quickLinksA.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-brand-400 text-xs tracking-wide text-white/70 uppercase transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {quickLinksB.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-brand-400 text-xs tracking-wide text-white/70 uppercase transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-sm font-bold tracking-wide uppercase">
              News Letter
            </p>
            {/* TODO: wire to a mailing-list provider; presentational for now. */}
            <form className="mt-5 max-w-xs">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                placeholder="Email"
                className="text-ink-950 focus-visible:ring-brand-500 placeholder:text-ink-400 h-10 w-full rounded-md bg-white px-4 text-xs focus-visible:ring-2 focus-visible:outline-none"
              />
              <button
                type="submit"
                className="bg-brand-600 hover:bg-brand-700 mt-3 h-10 w-full rounded-md text-xs font-bold tracking-wide text-white uppercase transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-bold tracking-wide uppercase">
              Contact Us
            </p>
            <ul className="mt-5 space-y-4">
              {contactRows.map(({ Icon, value }) => (
                <li key={value} className="flex items-start gap-3">
                  <span className="bg-brand-600 mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs leading-5 tracking-wide text-white/70 uppercase">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-bold tracking-wide uppercase">
              Social Media
            </p>
            <div className="mt-5 flex gap-4">
              {socials.map(({ key, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={key}
                  className="hover:text-brand-400 text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center gap-3 py-5 text-[0.65rem] tracking-wide text-white/50 uppercase sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <span aria-hidden>|</span>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms and Conditions
            </Link>
          </div>

          <p className="text-center">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          <Link href="#top" className="transition-colors hover:text-white">
            Back to top
          </Link>
        </Container>
      </div>
    </footer>
  );
}
