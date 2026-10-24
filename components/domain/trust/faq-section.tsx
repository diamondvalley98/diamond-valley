import Link from "next/link";
import { FAQAccordion } from "@/components/domain/trust/faq-accordion";
import { PageContainer, Section } from "@/components/layout/page-container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { storeExperiencePanelClassName } from "@/components/domain/marketing/store-experience-band";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

export type FAQSectionProps = {
  label: string;
  title: string;
  description: string;
  faqs: FaqItem[];
  bottomCta: {
    text: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
  };
  phoneHref: string;
  /** Soft glass surface when nested in StoreExperienceBand */
  glassPanels?: boolean;
};

/**
 * Premium FAQ section with accordion + bottom CTA.
 * Vertical-agnostic — swap content only for other industries.
 */
export function FAQSection({
  label,
  title,
  description,
  faqs,
  bottomCta,
  phoneHref,
  glassPanels = false,
}: FAQSectionProps) {
  if (!faqs.length) return null;

  return (
    <Section id="faq" aria-labelledby="faq-heading">
      <PageContainer>
        <FadeIn>
          <SectionHeading
            eyebrow={label}
            title={title}
            description={description}
            align="center"
            as="h2"
            titleId="faq-heading"
            className="mb-10 !flex-col !items-center md:mb-12"
          />
        </FadeIn>

        <FadeIn className="mx-auto max-w-3xl" delay={0.06}>
          <div
            className={cn(
              glassPanels &&
                cn(
                  "rounded-[var(--radius-lg)] border p-5 shadow-token-sm md:p-8",
                  storeExperiencePanelClassName,
                ),
            )}
          >
            <FAQAccordion faqs={faqs} defaultOpenFirst />
          </div>
        </FadeIn>

        <FadeIn className="mt-12 text-center md:mt-14" delay={0.1}>
          <p className="text-lg text-[var(--muted)]">{bottomCta.text}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href={bottomCta.primaryHref}>{bottomCta.primaryLabel}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={phoneHref}>{bottomCta.secondaryLabel}</a>
            </Button>
          </div>
        </FadeIn>
      </PageContainer>
    </Section>
  );
}
