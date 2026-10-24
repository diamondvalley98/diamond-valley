import { FadeIn } from "@/components/motion/fade-in";
import { PageContainer, Section } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

export type FinancingIntroProps = {
  label: string;
  title: string;
  body: string;
};

/**
 * Short editorial introduction under the financing hero.
 */
export function FinancingIntro({ label, title, body }: FinancingIntroProps) {
  return (
    <Section aria-labelledby="financing-intro-heading">
      <PageContainer>
        <FadeIn>
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow={label}
              title={title}
              titleId="financing-intro-heading"
              className="mb-5"
            />
            <p className="text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {body}
            </p>
          </div>
        </FadeIn>
      </PageContainer>
    </Section>
  );
}
