import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/page-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects student information.`,
};

const sections = [
  {
    heading: "Information We Collect",
    body: "We collect information needed to manage student records, including name, student ID, class, and academic results. Contact details for parents and guardians may also be stored to share important updates.",
  },
  {
    heading: "How We Use Student Information",
    body: "Information is used solely to manage enrollment, record and share academic results, and communicate school announcements. We do not sell student information to third parties.",
  },
  {
    heading: "Result Access & Security",
    body: "Results are only accessible with a valid student ID and result PIN. We use industry-standard safeguards to protect student records from unauthorized access.",
  },
  {
    heading: "Parental Access",
    body: "Parents and guardians may access their child's results using the same credentials issued to the student, in line with the school's enrollment agreement.",
  },
  {
    heading: "Your Choices",
    body: "Parents and guardians can request a copy of, or correction to, their child's records at any time by contacting the school office.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated January 2026. This is placeholder content for the template — replace it with your own policy, reviewed by counsel, before going live."
      />

      <Section>
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-foreground text-xl font-semibold">
                  {section.heading}
                </h2>
                <p className="text-text-muted mt-3 text-base leading-7">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
