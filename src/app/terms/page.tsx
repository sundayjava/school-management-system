import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/page-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that govern use of the ${siteConfig.name} result portal.`,
};

const sections = [
  {
    heading: "Acceptance of Terms",
    body: "By using this portal to check or download results, you agree to these Terms & Conditions and our Privacy Policy.",
  },
  {
    heading: "Account Credentials",
    body: "Your student ID and result PIN are personal to you. Do not share your PIN with anyone outside your household — the school is not responsible for results viewed using a shared or compromised PIN.",
  },
  {
    heading: "Accuracy of Results",
    body: "While we take care to ensure results are published accurately, any discrepancy should be reported to the academic office for review before being treated as final.",
  },
  {
    heading: "Availability",
    body: "The portal is provided on a best-effort basis. Scheduled maintenance or technical issues may occasionally affect availability, particularly around result release dates.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these terms from time to time. Continued use of the portal after changes are posted constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Last updated January 2026. This is placeholder content for the template — replace it with your own terms, reviewed by counsel, before going live."
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
