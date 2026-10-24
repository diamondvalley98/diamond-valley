import { FadeIn } from "@/components/motion/fade-in";
import { PageContainer, Section } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";

export type FinancingDisclaimerProps = {
  title: string;
  body: string;
  className?: string;
};

/**
 * Third-party financing disclaimer block.
 */
export function FinancingDisclaimer({
  title,
  body,
  className,
}: FinancingDisclaimerProps) {
  return (
    <Section aria-label="Financing disclaimer" className={className}>
      <PageContainer>
        <FadeIn>
          <aside
            className={cn(
              "rounded-[var(--radius-lg)] border border-dashed border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_70%,transparent)] px-6 py-6 md:px-8 md:py-7",
            )}
          >
            <h2 className="text-caption font-medium uppercase tracking-[0.16em] text-[var(--primary)]">
              {title}
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[var(--muted)]">
              {body}
            </p>
          </aside>
        </FadeIn>
      </PageContainer>
    </Section>
  );
}
