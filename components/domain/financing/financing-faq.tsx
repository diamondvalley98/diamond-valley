import { FAQAccordion } from "@/components/domain/trust/faq-accordion";
import { FadeIn } from "@/components/motion/fade-in";
import { PageContainer, Section } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { FaqItem } from "@/types";

export type FinancingFAQProps = {
  label: string;
  title: string;
  description?: string;
  items: FaqItem[];
};

/**
 * Financing FAQ section — reuses existing FAQ accordion.
 */
export function FinancingFAQ({
  label,
  title,
  description,
  items,
}: FinancingFAQProps) {
  return (
    <Section id="financing-faq" aria-labelledby="financing-faq-heading">
      <PageContainer>
        <FadeIn>
          <SectionHeading
            eyebrow={label}
            title={title}
            description={description}
            titleId="financing-faq-heading"
          />
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="max-w-3xl">
            <FAQAccordion faqs={items} defaultOpenFirst />
          </div>
        </FadeIn>
      </PageContainer>
    </Section>
  );
}
