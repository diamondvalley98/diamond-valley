import { ProviderCard } from "@/components/domain/financing/provider-card";
import { FadeIn } from "@/components/motion/fade-in";
import { PageContainer, Section } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { FinancingProvider } from "@/content/financing";

export type FinancingProvidersProps = {
  label: string;
  title: string;
  description?: string;
  providers: FinancingProvider[];
};

/**
 * Responsive provider gateway grid — links out to static financing HTML pages.
 */
export function FinancingProviders({
  label,
  title,
  description,
  providers,
}: FinancingProvidersProps) {
  return (
    <Section id="providers" aria-labelledby="financing-providers-heading">
      <PageContainer>
        <FadeIn>
          <SectionHeading
            eyebrow={label}
            title={title}
            description={description}
            titleId="financing-providers-heading"
          />
        </FadeIn>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {providers.map((provider, index) => (
            <li key={provider.id} className="h-full">
              <FadeIn delay={0.06 * index} className="h-full">
                <ProviderCard provider={provider} />
              </FadeIn>
            </li>
          ))}
        </ul>
      </PageContainer>
    </Section>
  );
}
