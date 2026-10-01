import { Megaphone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const announcements = [
  {
    date: "Jan 12, 2026",
    tag: "Results",
    title: "First Term results are now available",
    body: "Students can check and download their First Term 2025/2026 results from the Check Result page.",
  },
  {
    date: "Jan 5, 2026",
    tag: "Admissions",
    title: "JSS1 admission forms now open",
    body: "Applications for the new academic session are open. Visit the admissions office or contact us for details.",
  },
  {
    date: "Dec 18, 2025",
    tag: "Events",
    title: "End-of-term prize-giving day",
    body: "Join us as we celebrate this term's top-performing students across all classes.",
  },
];

export function Announcements() {
  return (
    <Section id="announcements" className="bg-surface-muted scroll-mt-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Latest Announcements
          </h2>
          <p className="text-text-muted mt-4 text-base leading-7">
            Stay up to date with news from the school.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {announcements.map((item) => (
            <div
              key={item.title}
              className="border-border bg-surface rounded-2xl border p-6"
            >
              <div className="flex items-center justify-between">
                <Badge>{item.tag}</Badge>
                <span className="text-text-subtle text-xs">{item.date}</span>
              </div>
              <span className="bg-brand-500/10 text-brand-600 dark:text-brand-400 mt-4 inline-flex h-9 w-9 items-center justify-center rounded-lg">
                <Megaphone className="h-4 w-4" />
              </span>
              <p className="text-foreground mt-3 text-base font-semibold">
                {item.title}
              </p>
              <p className="text-text-muted mt-2 text-sm leading-6">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
