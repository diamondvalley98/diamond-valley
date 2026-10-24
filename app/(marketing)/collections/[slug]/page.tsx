import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CollectionCustomCta,
  CollectionEmptyState,
  CollectionHero,
  CollectionIntro,
  CollectionProductBrowser,
} from "@/components/domain/collection";
import { PageContainer, Section } from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { collectionDetailCopy } from "@/content/collections";
import {
  getCollectionBySlug,
  getCollectionSlugs,
  getProductsByCollection,
} from "@/lib/content/get-collection";
import { getSite } from "@/lib/content/get-site";
import { JsonLd, breadcrumbJsonLd, collectionJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata, mergeSeo } from "@/lib/seo/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return getCollectionSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const site = getSite();
    const collection = getCollectionBySlug(slug);
    if (!collection) return {};

    return buildMetadata({
      seo: mergeSeo(site.seo.defaults, {
        ...collection.seo,
        title: collection.name,
        description:
          collection.seo.description ||
          collection.description ||
          collection.summary,
        ogImage: collection.image,
      }),
      path: `/collections/${slug}`,
      siteName: site.business.brandName,
    });
  });
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const site = getSite();
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const products = getProductsByCollection(slug);
  const copy = collectionDetailCopy;

  return (
    <>
      <Section>
        <PageContainer>
          <JsonLd
            data={[
              breadcrumbJsonLd([
                { name: "Home", path: "/" },
                { name: "Collections", path: "/collections" },
                { name: collection.name, path: `/collections/${slug}` },
              ]),
              collectionJsonLd(collection),
            ]}
          />

          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Collections", href: "/collections" },
              { label: collection.name },
            ]}
          />

          <CollectionHero
            collection={collection}
            eyebrow={copy.eyebrow}
          />

          <CollectionIntro
            className="mt-10 md:mt-12"
            summary={collection.summary}
            productCount={products.length}
            productCountLabel={copy.productCountLabel(products.length)}
            highlights={copy.highlights}
          />

          <div className="mt-14 md:mt-16">
            {products.length ? (
              <CollectionProductBrowser
                products={products}
                filters={collection.filters}
                subcategories={collection.subcategories}
                piecesHeading={copy.piecesHeading}
                enquireLabel="Enquire Now"
                emptyFiltersTitle={copy.emptyFilters.title}
                emptyFiltersDescription={copy.emptyFilters.description}
                clearFiltersLabel={copy.emptyFilters.clearLabel}
              />
            ) : (
              <CollectionEmptyState
                title={copy.empty.title}
                description={copy.empty.description}
                ctaLabel={copy.empty.ctaLabel}
                ctaHref={copy.empty.ctaHref}
              />
            )}
          </div>

          <div className="mt-16 md:mt-20">
            <CollectionCustomCta
              title={copy.customCta.title}
              description={copy.customCta.description}
              bookLabel={copy.customCta.bookLabel}
              bookHref={copy.customCta.bookHref}
              callLabel={copy.customCta.callLabel}
              phoneHref={site.business.phoneHref}
            />
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
