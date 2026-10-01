import Link from "next/link";
import {
  ClipboardCheck,
  CreditCard,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type QuickLink = {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  href: string;
  /** One card is filled in brand colour to mark the portal's main action. */
  featured?: boolean;
};

const links: QuickLink[] = [
  {
    icon: ClipboardCheck,
    title: "Check Result",
    description:
      "Enter your student ID and result PIN to view and download your result for any term.",
    cta: "View Result",
    href: "/results",
    featured: true,
  },
  {
    icon: CreditCard,
    title: "Fee Payment",
    description:
      "Pay school fees online and download your receipt straight away, without a trip to the office.",
    cta: "Pay Now",
    href: "/#contact",
  },
  {
    icon: Users,
    title: "Parent Portal",
    description:
      "Parents and guardians can follow attendance, results and teacher feedback in one place.",
    cta: "View Portal",
    href: "/#contact",
  },
  {
    icon: UserPlus,
    title: "Admission Enquiry",
    description:
      "Thinking of joining us? Send an enquiry and our admissions team will get back to you.",
    cta: "Enquire Now",
    href: "/#contact",
  },
];

export function QuickLinks() {
  return (
    <Section className="bg-surface-muted">
      <Container>
        <p className="text-brand-600 dark:text-brand-400 text-sm font-bold tracking-widest uppercase">
          Contact Us
        </p>
        <h2 className="text-foreground mt-3 max-w-md text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-5xl">
          Quick Link To Connect
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(
            ({ icon: Icon, title, description, cta, href, featured }) => (
              <div
                key={title}
                className={cn(
                  "flex flex-col rounded-2xl p-6 shadow-sm",
                  featured ? "bg-brand-600" : "border-border bg-surface border",
                )}
              >
                <Icon
                  className={cn(
                    "h-8 w-8",
                    featured
                      ? "text-white"
                      : "text-brand-600 dark:text-brand-400",
                  )}
                  strokeWidth={1.5}
                />
                <p
                  className={cn(
                    "mt-4 text-sm font-bold tracking-wide uppercase",
                    featured ? "text-white" : "text-foreground",
                  )}
                >
                  {title}
                </p>
                <p
                  className={cn(
                    "mt-3 flex-1 text-xs leading-6",
                    featured ? "text-white/80" : "text-text-muted",
                  )}
                >
                  {description}
                </p>
                <Link
                  href={href}
                  className={cn(
                    "mt-6 inline-flex h-9 items-center justify-center rounded-full border px-5 text-xs font-semibold tracking-wide uppercase transition-colors",
                    featured
                      ? "text-brand-600 border-white bg-white hover:bg-white/90"
                      : "border-brand-600 text-brand-600 dark:border-brand-400 dark:text-brand-400 hover:bg-brand-600 dark:hover:bg-brand-400 dark:hover:text-ink-950 hover:text-white",
                  )}
                >
                  {cta}
                </Link>
              </div>
            ),
          )}
        </div>
      </Container>
    </Section>
  );
}
