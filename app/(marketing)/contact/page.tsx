import type { Metadata } from "next";
import { ContactForm } from "@/components/domain/contact/contact-form";
import { ContactInfoCard } from "@/components/domain/contact/contact-info-card";
import { PageContainer, Section } from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { getSite } from "@/lib/content/get-site";
import { buildMetadata, mergeSeo } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const site = getSite();
  return buildMetadata({
    seo: mergeSeo(site.seo.defaults, site.contact.seo),
    path: "/contact",
    siteName: site.business.brandName,
  });
}

export default async function ContactPage() {
  const site = getSite();
  const { contact, location, business } = site;

  return (
    <Section>
      <PageContainer>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        <p className="text-overline text-[var(--primary)]">{contact.label}</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl md:text-6xl">
          {contact.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
          {contact.description}
        </p>

        <div id="enquiry" className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <ContactForm
            labels={contact.formLabels}
            successMessage={contact.successMessage}
            successTitle={contact.successTitle}
          />
          <ContactInfoCard
            businessName={business.brandName}
            phone={location.phone}
            phoneHref={location.phoneHref}
            email={location.email}
            address={location.address}
            hoursSummary={contact.hoursSummary}
            callLabel={contact.callLabel}
            directionsLabel={contact.directionsLabel}
            directionsHref={location.directionsHref}
          />
        </div>
      </PageContainer>
    </Section>
  );
}
