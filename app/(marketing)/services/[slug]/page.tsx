import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceHero } from "@/components/domain/service/service-hero";
import { ServiceDetailSections } from "@/components/domain/service/service-detail-sections";
import { PageContainer, Section } from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { getServiceBySlug, getServiceSlugs } from "@/lib/content/get-service";
import { getSite } from "@/lib/content/get-site";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata, mergeSeo } from "@/lib/seo/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const site = getSite();
    const service = getServiceBySlug(slug);
    if (!service) return {};
    return buildMetadata({
      seo: mergeSeo(site.seo.defaults, service.seo),
      path: `/services/${slug}`,
      siteName: site.business.brandName,
    });
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <Section>
      <PageContainer>
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.name, path: `/services/${slug}` },
            ]),
            serviceJsonLd(service),
          ]}
        />
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.name },
          ]}
        />
        <ServiceHero service={service} />
        <ServiceDetailSections service={service} />
      </PageContainer>
    </Section>
  );
}
