import {
  TestimonialsGrid,
} from "@/components/domain/trust/testimonials-grid";
import { PageContainer, Section } from "@/components/layout/page-container";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Testimonial } from "@/types";

export type TestimonialMetric = {
  id: string;
  value: string;
  label: string;
};

export type TestimonialsSectionProps = {
  label: string;
  title: string;
  description: string;
  testimonials: Testimonial[];
  metrics?: TestimonialMetric[];
};

/**
 * Premium testimonials section with optional trust metrics strip.
 * Reusable across verticals by swapping content only.
 */
export function TestimonialsSection({
  label,
  title,
  description,
  testimonials,
  metrics = [],
}: TestimonialsSectionProps) {
  if (!testimonials.length) return null;

  return (
    <Section id="testimonials" aria-labelledby="testimonials-heading">
      <PageContainer>
        <FadeIn>
          <SectionHeading
            eyebrow={label}
            title={title}
            description={description}
            align="center"
            as="h2"
            titleId="testimonials-heading"
            className="mb-12 !flex-col !items-center"
          />
        </FadeIn>

        <TestimonialsGrid testimonials={testimonials} />

        {metrics.length ? (
          <FadeIn className="mt-14 md:mt-16" delay={0.08}>
            <ul className="grid gap-8 border-t border-[var(--border)] pt-10 text-center sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <li key={metric.id}>
                  <p className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--accent)] md:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-caption font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                    {metric.label}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>
        ) : null}
      </PageContainer>
    </Section>
  );
}
