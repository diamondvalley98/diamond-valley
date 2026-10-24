import type { Metadata } from "next";
import { CollectionGrid } from "@/components/domain/collection/collection-grid";
import { PageContainer, Section } from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { getAllCollections } from "@/lib/content/get-collection";
import { getSite } from "@/lib/content/get-site";
import { buildMetadata, mergeSeo } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const site = getSite();
  return buildMetadata({
    seo: mergeSeo(site.seo.defaults, site.seo.routes["/collections"]),
    path: "/collections",
    siteName: site.business.brandName,
  });
}

export default function CollectionsPage() {
  const site = getSite();
  const collections = getAllCollections();
  const section = site.home.collectionsSection;

  return (
    <Section>
      <PageContainer>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Collections" },
          ]}
        />
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl">
          {section?.title ?? "Collections"}
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          {section?.description ?? "Explore our signature jewellery collections."}
        </p>
        <div className="mt-12">
          <CollectionGrid
            collections={collections}
            exploreLabel={section?.exploreLabel}
            columns={4}
          />
        </div>
      </PageContainer>
    </Section>
  );
}
