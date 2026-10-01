import { Download, Lock, Smartphone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const features = [
  {
    icon: Smartphone,
    title: "Check From Any Device",
    description:
      "No app to install — results are available from any phone, tablet, or computer with an internet connection.",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description:
      "Only the student and their guardians can view a result, verified with a student ID and a secure PIN.",
  },
  {
    icon: Download,
    title: "Download Your Report",
    description:
      "Save or print an official copy of your result sheet for your records, in one tap.",
  },
];

export function Features() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need, In One Portal
          </h2>
          <p className="text-text-muted mt-4 text-base leading-7">
            Built to make result day stress-free for students, parents, and
            staff alike.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="border-border bg-surface rounded-2xl border p-6 text-center"
            >
              <span className="bg-brand-500/10 text-brand-600 dark:text-brand-400 mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-foreground mt-4 text-base font-semibold">
                {title}
              </p>
              <p className="text-text-muted mt-2 text-sm leading-6">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
