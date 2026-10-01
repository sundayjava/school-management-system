import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Check Result",
  description: "Enter your student ID to check and download your result.",
};

const terms = ["First Term", "Second Term", "Third Term"];

export default function ResultsPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Results"
        title="Check Your Result"
        description="Enter your student ID and select a term to view your result. Your guardian's PIN may be required to confirm it's you."
      />

      <Section>
        <Container className="max-w-xl">
          {/*
            TODO: wire this up to the school's student records system (an
            API route or external SIS integration) — it's presentational
            only for now.
          */}
          <form className="border-border bg-surface rounded-3xl border p-8 shadow-sm">
            <div>
              <label
                htmlFor="studentId"
                className="text-foreground text-sm font-medium"
              >
                Student ID
              </label>
              <Input
                id="studentId"
                name="studentId"
                placeholder="e.g. GSS/2024/0123"
                className="mt-2"
                required
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="pin"
                className="text-foreground text-sm font-medium"
              >
                Result PIN
              </label>
              <Input
                id="pin"
                name="pin"
                type="password"
                placeholder="Enter your result PIN"
                className="mt-2"
                required
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="term"
                className="text-foreground text-sm font-medium"
              >
                Term
              </label>
              <select
                id="term"
                name="term"
                defaultValue={terms[0]}
                className="border-border bg-surface text-foreground focus-visible:ring-brand-500 mt-2 h-11 w-full rounded-xl border px-4 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                {terms.map((term) => (
                  <option key={term} value={term}>
                    {term}
                  </option>
                ))}
              </select>
            </div>

            <Button type="submit" size="lg" className="mt-8 w-full">
              View Result
            </Button>

            <p className="text-text-subtle mt-4 flex items-center gap-2 text-xs">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              Your result PIN is issued by the school and kept private.
            </p>
          </form>
        </Container>
      </Section>
    </main>
  );
}
