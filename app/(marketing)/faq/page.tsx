import type { Metadata } from "next";
import { FAQAccordion } from "@/components/domain/trust/faq-accordion";
import { PageContainer, Section } from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { getSite } from "@/lib/content/get-site";
import { listFaqs } from "@/lib/content/queries";
import { JsonLd, faqJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata, mergeSeo } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const site = getSite();
  return buildMetadata({
    seo: mergeSeo(site.seo.defaults, site.seo.routes["/faq"]),
    path: "/faq",
    siteName: site.business.brandName,
  });
}

export default function FaqPage() {
  const faqs = listFaqs();
  const section = getSite().home.faqSection;

  return (
    <Section>
      <PageContainer>
        <JsonLd data={faqJsonLd(faqs)} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl">
          {section?.title ?? "Frequently Asked Questions"}
        </h1>
        {section?.description ? (
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            {section.description}
          </p>
        ) : null}
        <div className="mt-10 max-w-3xl">
          <FAQAccordion faqs={faqs} defaultOpenFirst />
        </div>
      </PageContainer>
    </Section>
  );
}
