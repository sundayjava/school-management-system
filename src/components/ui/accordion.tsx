"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-border divide-border divide-y rounded-2xl border">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-foreground text-sm font-semibold sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "text-text-muted h-5 w-5 shrink-0 transition-transform",
                  open && "rotate-180",
                )}
              />
            </button>
            {open && (
              <p className="text-text-muted px-6 pb-5 text-sm leading-6">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
