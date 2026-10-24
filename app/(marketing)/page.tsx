import { Hero } from "@/components/domain/marketing/hero";
import { BrandPromise } from "@/components/domain/marketing/brand-promise";
import { CustomJewelleryCTA } from "@/components/domain/marketing/custom-jewellery-cta";
import { FeaturedCollections } from "@/components/domain/collection/featured-collections";
import { CtaBand } from "@/components/domain/marketing/cta-band";
import { StoreExperienceBand } from "@/components/domain/marketing/store-experience-band";
import { FeaturedProductsSection } from "@/components/domain/product/featured-products-section";
import { ServiceCard } from "@/components/domain/service/service-card";
import { TestimonialsSection } from "@/components/domain/trust/testimonials-section";
import { AboutSection } from "@/components/domain/about/about-section";
import { FAQSection } from "@/components/domain/trust/faq-section";
import { VisitStoreSection } from "@/components/domain/location/visit-store-section";
import { ContactSection } from "@/components/domain/contact/contact-section";
import { PageContainer, Section } from "@/components/layout/page-container";
import { FadeIn } from "@/components/motion/fade-in";
import { getSite } from "@/lib/content/get-site";
import {
  listFaqs,
  listHomeCollections,
  listHomeServices,
  listTestimonials,
} from "@/lib/content/queries";
import { buildMetadata, mergeSeo } from "@/lib/seo/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { PageModule, SiteContent } from "@/types";

export function generateMetadata(): Metadata {
  const site = getSite();
  return buildMetadata({
    seo: mergeSeo(site.seo.defaults, site.seo.routes["/"]),
    path: "/",
    siteName: site.business.brandName,
  });
}

const STORE_EXPERIENCE_TYPES = new Set(["visit", "faq", "contact"]);

function renderHomeModule(
  module: PageModule,
  site: SiteContent,
  options?: { glassPanels?: boolean },
) {
  const glassPanels = options?.glassPanels ?? false;

  if (module.type === "hero") {
    const hero = site.home.heroes[module.id];
    return hero ? (
      <Hero
        key={module.id}
        content={hero}
        locationLabel={`${site.business.address.city}, Delaware`}
        phone={site.business.phone}
        phoneHref={site.business.phoneHref}
      />
    ) : null;
  }

  if (module.type === "trust") {
    const promise = site.business.brandPromise;
    if (!promise) return null;
    return (
      <BrandPromise
        key={module.id}
        label={promise.label}
        title={promise.title}
        description={promise.description}
        features={promise.features}
      />
    );
  }

  if (module.type === "collections") {
    const section = site.home.collectionsSection;
    if (!section) return null;
    return (
      <FeaturedCollections
        key={module.id}
        label={section.label}
        title={section.title}
        description={section.description}
        exploreLabel={section.exploreLabel}
        collections={listHomeCollections(module.limit)}
      />
    );
  }

  if (module.type === "products") {
    const section = site.home.productsSection;
    if (!section) return null;
    return (
      <FeaturedProductsSection
        key={module.id}
        label={section.label}
        title={section.title}
        description={section.description}
        limit={section.limit}
        enquireLabel={section.enquireLabel}
        bottomCta={section.bottomCta}
      />
    );
  }

  if (module.type === "custom-jewellery") {
    const section = site.home.customJewellerySection;
    if (!section) return null;
    return (
      <CustomJewelleryCTA
        key={module.id}
        label={section.label}
        title={section.title}
        description={section.description}
        features={section.features}
        image={section.image}
        primaryCta={section.primaryCta}
        secondaryCta={section.secondaryCta}
      />
    );
  }

  if (module.type === "services") {
    const services = listHomeServices();
    return (
      <Section key={module.id}>
        <PageContainer>
          <FadeIn>
            <div className="mb-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
                Services
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl md:text-5xl">
                How we can help
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-10">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </PageContainer>
      </Section>
    );
  }

  if (module.type === "testimonials" && site.site.features.showTestimonials) {
    const section = site.home.testimonialsSection;
    if (!section) return null;
    return (
      <TestimonialsSection
        key={module.id}
        label={section.label}
        title={section.title}
        description={section.description}
        testimonials={listTestimonials()}
        metrics={section.metrics}
      />
    );
  }

  if (module.type === "about") {
    const { about } = site;
    return (
      <AboutSection
        key={module.id}
        label={about.label}
        heading={about.heading}
        paragraphs={about.paragraphs}
        highlights={about.highlights}
        image={about.image}
        statistics={about.statistics}
      />
    );
  }

  if (module.type === "visit") {
    const { location } = site;
    return (
      <VisitStoreSection
        key={module.id}
        label={location.label}
        heading={location.heading}
        description={location.description}
        address={location.address}
        phone={location.phone}
        phoneHref={location.phoneHref}
        email={location.email}
        hours={location.hours}
        mapEmbedUrl={location.mapEmbedUrl}
        mapTitle={location.mapTitle}
        parkingNote={location.parkingNote}
        directionsHref={location.directionsHref}
        directionsLabel={location.directionsLabel}
        callLabel={location.callLabel}
        glassPanels={glassPanels}
      />
    );
  }

  if (module.type === "cta") {
    const cta = site.home.ctas[module.id];
    return cta ? <CtaBand key={module.id} content={cta} /> : null;
  }

  if (module.type === "faq") {
    const section = site.home.faqSection;
    if (!section) return null;
    return (
      <FAQSection
        key={module.id}
        label={section.label}
        title={section.title}
        description={section.description}
        faqs={listFaqs(module.limit)}
        bottomCta={section.bottomCta}
        phoneHref={site.business.phoneHref}
        glassPanels={glassPanels}
      />
    );
  }

  if (module.type === "contact") {
    const { contact, location, business } = site;
    return (
      <ContactSection
        key={module.id}
        label={contact.label}
        heading={contact.heading}
        description={contact.description}
        formLabels={contact.formLabels}
        successMessage={contact.successMessage}
        successTitle={contact.successTitle}
        businessName={business.brandName}
        phone={location.phone}
        phoneHref={location.phoneHref}
        email={location.email}
        address={location.address}
        hoursSummary={contact.hoursSummary}
        callLabel={contact.callLabel}
        directionsLabel={contact.directionsLabel}
        directionsHref={location.directionsHref}
        glassPanels={glassPanels}
      />
    );
  }

  return null;
}

export default function HomePage() {
  const site = getSite();
  const modules = site.home.modules;
  const nodes: ReactNode[] = [];

  for (let i = 0; i < modules.length; ) {
    const homeModule = modules[i];

    if (STORE_EXPERIENCE_TYPES.has(homeModule.type)) {
      const group: ReactNode[] = [];
      while (
        i < modules.length &&
        STORE_EXPERIENCE_TYPES.has(modules[i].type)
      ) {
        group.push(
          renderHomeModule(modules[i], site, { glassPanels: true }),
        );
        i += 1;
      }
      nodes.push(
        <StoreExperienceBand key="store-experience">{group}</StoreExperienceBand>,
      );
      continue;
    }

    nodes.push(renderHomeModule(homeModule, site));
    i += 1;
  }

  return <>{nodes}</>;
}
