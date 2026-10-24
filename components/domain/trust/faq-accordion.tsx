"use client";

import { FAQItem } from "@/components/domain/trust/faq-item";
import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

export type FAQAccordionProps = {
  faqs: FaqItem[];
  /** Open the first item by default when true */
  defaultOpenFirst?: boolean;
  className?: string;
};

/**
 * Single-panel FAQ accordion — keyboard accessible via Radix.
 */
export function FAQAccordion({
  faqs,
  defaultOpenFirst = true,
  className,
}: FAQAccordionProps) {
  if (!faqs.length) return null;

  const defaultValue = defaultOpenFirst ? faqs[0]?.id : undefined;

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultValue}
      className={cn("w-full", className)}
    >
      {faqs.map((faq) => (
        <FAQItem key={faq.id} faq={faq} />
      ))}
    </Accordion>
  );
}

/** @deprecated Prefer FAQAccordion */
export function FaqAccordion(props: FAQAccordionProps) {
  return <FAQAccordion {...props} />;
}
