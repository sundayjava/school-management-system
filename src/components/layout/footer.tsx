import Link from "next/link";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

const supportLinks = [
  { label: "FAQs", href: "/faqs" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-border bg-surface-muted scroll-mt-24 border-t"
    >
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-foreground flex items-center gap-2 text-lg font-bold">
            <span className="bg-brand-600 inline-flex h-8 w-8 items-center justify-center rounded-lg text-white">
              <GraduationCap className="h-4 w-4" />
            </span>
            {siteConfig.name}
          </p>
          <p className="text-text-muted mt-4 text-sm leading-6">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <p className="text-foreground text-sm font-semibold">Quick Links</p>
          <ul className="mt-4 space-y-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-text-muted hover:text-brand-600 dark:hover:text-brand-400 text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-foreground text-sm font-semibold">Support</p>
          <ul className="mt-4 space-y-3">
            {supportLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-text-muted hover:text-brand-600 dark:hover:text-brand-400 text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-foreground text-sm font-semibold">Get in Touch</p>
          <ul className="text-text-muted mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <span>{siteConfig.contact.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <span>{siteConfig.contact.email}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-border border-t">
        <Container className="text-text-subtle flex flex-col items-center justify-center py-6 text-xs">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
