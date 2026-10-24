"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem as FaqItemType } from "@/types";

export type FAQItemProps = {
  faq: FaqItemType;
};

/**
 * Single FAQ accordion row — question + expandable answer.
 */
export function FAQItem({ faq }: FAQItemProps) {
  return (
    <AccordionItem value={faq.id} className="border-[var(--border)]">
      <AccordionTrigger className="py-5 text-lg md:text-xl">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-base leading-relaxed">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  );
}
