import type { Metadata } from "next";
import { ServiceCard } from "@/components/domain/service/service-card";
import { PageContainer, Section } from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { getAllServices } from "@/lib/content/get-service";
import { getSite } from "@/lib/content/get-site";
import { buildMetadata, mergeSeo } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const site = getSite();
  return buildMetadata({
    seo: mergeSeo(site.seo.defaults, site.seo.routes["/services"]),
    path: "/services",
    siteName: site.business.brandName,
  });
}

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <Section>
      <PageContainer>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl">
          Services
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          Custom jewellery, repairs, grillz, and gold & diamond guidance.
        </p>
        <div className="mt-12 space-y-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
