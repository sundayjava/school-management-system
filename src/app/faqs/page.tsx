import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Accordion, type AccordionItem } from "@/components/ui/accordion";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to the questions we hear most often.",
};

const faqs: AccordionItem[] = [
  {
    question: "Where do I get my student ID and result PIN?",
    answer:
      "Your student ID is printed on your admission letter and ID card. Your result PIN is issued by the school office at the start of each term — contact the office if you've lost yours.",
  },
  {
    question: "When are results released?",
    answer:
      "Results are typically published within two weeks of the end of each term. You'll see an announcement on the homepage once a term's results are live.",
  },
  {
    question: "Can my parent or guardian check my result too?",
    answer:
      "Yes. Parents and guardians can use the same student ID and result PIN to check and download a result on the Check Result page.",
  },
  {
    question: "What if my result looks incorrect?",
    answer:
      "Reach out through our Contact section with your student ID and the term in question, and the academic office will review it.",
  },
  {
    question: "Can I download a copy of my result?",
    answer:
      "Yes — once your result is displayed, you can download or print an official copy directly from the Check Result page.",
  },
];

export default function FaqsPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Support"
        title="Frequently Asked Questions"
        description="Can't find what you're looking for? Reach out and we'll help."
      />

      <Section>
        <Container className="max-w-3xl">
          <Accordion items={faqs} />
        </Container>
      </Section>
    </main>
  );
}
