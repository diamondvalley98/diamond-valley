import Link from "next/link";
import { ProductGrid } from "@/components/domain/product/product-grid";
import { PageContainer, Section } from "@/components/layout/page-container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedProducts } from "@/lib/content/get-product";

export type FeaturedProductsSectionProps = {
  label: string;
  title: string;
  description: string;
  limit?: number;
  enquireLabel?: string;
  bottomCta: {
    text: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

/**
 * Homepage featured products — reuses ProductGrid / ProductCard only.
 */
export function FeaturedProductsSection({
  label,
  title,
  description,
  limit = 4,
  enquireLabel = "Enquire Now",
  bottomCta,
}: FeaturedProductsSectionProps) {
  const products = getFeaturedProducts().slice(0, limit);
  if (!products.length) return null;

  return (
    <Section id="featured-products" aria-labelledby="featured-products-heading">
      <PageContainer>
        <FadeIn>
          <SectionHeading
            eyebrow={label}
            title={title}
            description={description}
            align="center"
            as="h2"
            titleId="featured-products-heading"
            className="mb-12 !flex-col !items-center"
          />
        </FadeIn>

        <ProductGrid
          products={products}
          enquireLabel={enquireLabel}
          columns={4}
        />

        <FadeIn className="mt-14 text-center md:mt-16" delay={0.08}>
          <p className="text-lg text-[var(--muted)]">{bottomCta.text}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href={bottomCta.primaryHref}>{bottomCta.primaryLabel}</Link>
            </Button>
            {/* TODO: Open enquiry modal when Modal enquiry flow is wired */}
            <Button asChild variant="secondary" size="lg">
              <Link href={bottomCta.secondaryHref}>
                {bottomCta.secondaryLabel}
              </Link>
            </Button>
          </div>
        </FadeIn>
      </PageContainer>
    </Section>
  );
}
