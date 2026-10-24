import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProductDescription,
  ProductDetailSummary,
  ProductEnquiryCta,
  ProductGallery,
  ProductSpecs,
  RelatedProducts,
} from "@/components/domain/product";
import { PageContainer, Section } from "@/components/layout/page-container";
import { FadeIn } from "@/components/motion/fade-in";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { getCollectionBySlug } from "@/lib/content/get-collection";
import { getProductBySlug, getProductSlugs } from "@/lib/content/get-product";
import { getSite } from "@/lib/content/get-site";
import { JsonLd, breadcrumbJsonLd, productJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata, mergeSeo } from "@/lib/seo/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const site = getSite();
    const product = getProductBySlug(slug);
    if (!product) return {};

    return buildMetadata({
      seo: mergeSeo(site.seo.defaults, {
        ...product.seo,
        title: product.name,
        description: product.seo.description || product.description,
        ogImage: product.images[0],
      }),
      path: `/products/${slug}`,
      siteName: site.business.brandName,
    });
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const site = getSite();
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const collection = getCollectionBySlug(product.collectionSlug);
  const brandName = site.business.brandName;
  const enquireHref = `/contact?interest=${encodeURIComponent(product.name)}`;

  return (
    <>
      <Section>
        <PageContainer>
          <JsonLd
            data={[
              breadcrumbJsonLd([
                { name: "Home", path: "/" },
                { name: "Collections", path: "/collections" },
                ...(collection
                  ? [
                      {
                        name: collection.name,
                        path: `/collections/${collection.slug}`,
                      },
                    ]
                  : []),
                { name: product.name, path: `/products/${slug}` },
              ]),
              productJsonLd(product, brandName),
            ]}
          />

          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Collections", href: "/collections" },
              ...(collection
                ? [
                    {
                      label: collection.name,
                      href: `/collections/${collection.slug}`,
                    },
                  ]
                : []),
              { label: product.name },
            ]}
          />

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <FadeIn>
              <ProductGallery images={product.images} />
            </FadeIn>
            <FadeIn delay={0.08}>
              <ProductDetailSummary
                product={product}
                phoneHref={site.business.phoneHref}
                enquireHref={enquireHref}
              />
            </FadeIn>
          </div>

          <div className="mt-16 space-y-12 md:mt-20 md:space-y-16">
            <FadeIn>
              <ProductDescription description={product.description} />
            </FadeIn>

            <FadeIn delay={0.06}>
              <section aria-labelledby="product-specs-heading">
                <h2
                  id="product-specs-heading"
                  className="font-[family-name:var(--font-display)] text-3xl tracking-tight"
                >
                  Specifications
                </h2>
                <ProductSpecs
                  product={product}
                  className="mt-6 grid gap-3 border-t border-[var(--border)] pt-6"
                />
              </section>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ProductEnquiryCta
                enquireHref={enquireHref}
                phoneHref={site.business.phoneHref}
                phoneLabel={`Call ${brandName}`}
              />
            </FadeIn>
          </div>
        </PageContainer>
      </Section>

      <RelatedProducts
        currentProductId={product.id}
        collectionSlug={product.collectionSlug}
        enquireLabel="Enquire Now"
      />
    </>
  );
}
