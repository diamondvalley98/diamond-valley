import { CollectionGrid } from "@/components/domain/collection/collection-grid";
import { PageContainer, Section } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Collection } from "@/types";

export type FeaturedCollectionsProps = {
  label: string;
  title: string;
  description: string;
  collections: Collection[];
  exploreLabel?: string;
  basePath?: string;
};

/**
 * Featured / signature collections showroom section.
 * Vertical-agnostic: swap content + labels for menus, departments, etc.
 */
export function FeaturedCollections({
  label,
  title,
  description,
  collections,
  exploreLabel = "Explore Collection",
  basePath = "/collections",
}: FeaturedCollectionsProps) {
  if (!collections.length) return null;

  return (
    <Section id="collections" aria-labelledby="featured-collections-heading">
      <PageContainer>
        <SectionHeading
          eyebrow={label}
          title={title}
          description={description}
          align="center"
          as="h2"
          titleId="featured-collections-heading"
          className="mb-12 !flex-col !items-center"
        />
        <CollectionGrid
          collections={collections}
          exploreLabel={exploreLabel}
          basePath={basePath}
          columns={4}
        />
      </PageContainer>
    </Section>
  );
}
