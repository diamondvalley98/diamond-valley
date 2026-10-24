import {
  CreditCard,
  FileText,
  Gem,
  Store,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { PageContainer, Section } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import type { FinancingStep } from "@/content/financing";

const icons: Record<FinancingStep["icon"], LucideIcon> = {
  gem: Gem,
  layers: CreditCard,
  file: FileText,
  store: Store,
};

export type HowFinancingWorksProps = {
  label: string;
  title: string;
  description?: string;
  steps: FinancingStep[];
};

/**
 * Four-step luxury timeline for the financing journey.
 */
export function HowFinancingWorks({
  label,
  title,
  description,
  steps,
}: HowFinancingWorksProps) {
  return (
    <Section
      id="how-it-works"
      aria-labelledby="how-financing-works-heading"
      className="border-y border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_55%,transparent)]"
    >
      <PageContainer>
        <FadeIn>
          <SectionHeading
            eyebrow={label}
            title={title}
            description={description}
            titleId="how-financing-works-heading"
          />
        </FadeIn>

        <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <li key={step.id} className="relative h-full">
                <FadeIn delay={0.08 * index} className="h-full">
                  <div
                    className={cn(
                      "relative flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] p-6 shadow-token-sm",
                    )}
                  >
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="font-[family-name:var(--font-display)] text-3xl text-[var(--primary)]">
                        {String(step.step).padStart(2, "0")}
                      </span>
                      <span className="flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] text-[var(--primary)]">
                        <Icon className="size-4" aria-hidden />
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              </li>
            );
          })}
        </ol>
      </PageContainer>
    </Section>
  );
}
