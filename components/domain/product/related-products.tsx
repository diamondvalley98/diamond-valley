import { ProductGrid } from "@/components/domain/product/product-grid";
import { PageContainer, Section } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getRelatedProducts } from "@/lib/content/get-product";

export type RelatedProductsProps = {
  currentProductId: string;
  collectionSlug: string;
  limit?: number;
  label?: string;
  title?: string;
  description?: string;
  enquireLabel?: string;
  basePath?: string;
};

/**
 * Related offerings from the same collection (excludes current product).
 */
export function RelatedProducts({
  currentProductId,
  collectionSlug,
  limit = 4,
  label = "Related",
  title = "You may also like",
  description,
  enquireLabel,
  basePath,
}: RelatedProductsProps) {
  const related = getRelatedProducts(currentProductId, collectionSlug, limit);
  if (!related.length) return null;

  return (
    <Section aria-labelledby="related-products-heading" className="!pt-8">
      <PageContainer>
        <SectionHeading
          eyebrow={label}
          title={title}
          description={description}
          as="h2"
          titleId="related-products-heading"
          className="mb-8"
        />
        <ProductGrid
          products={related}
          enquireLabel={enquireLabel}
          basePath={basePath}
          columns={4}
        />
      </PageContainer>
    </Section>
  );
}
