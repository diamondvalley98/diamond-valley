import type { Metadata } from "next";
import {
  FinancingDisclaimer,
  FinancingFAQ,
  FinancingHelpCta,
  FinancingHero,
  FinancingIntro,
  FinancingProviders,
  HowFinancingWorks,
} from "@/components/domain/financing";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageContainer, Section } from "@/components/layout/page-container";
import {
  financingPage,
  getFinancingHelpContact,
} from "@/content/financing";
import { getSite } from "@/lib/content/get-site";
import { JsonLd, faqJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata, mergeSeo } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const site = getSite();
  return buildMetadata({
    seo: mergeSeo(site.seo.defaults, {
      ...site.seo.routes["/financing"],
      title: financingPage.seo.title,
      description: financingPage.seo.description,
    }),
    path: "/financing",
    siteName: site.business.brandName,
  });
}

export default function FinancingPage() {
  const site = getSite();
  const content = financingPage;
  const helpContact = getFinancingHelpContact({
    phone: site.business.phone,
    phoneHref: site.business.phoneHref,
    email: site.business.email,
    address: site.business.address,
  });

  return (
    <>
      <FinancingHero
        label={content.hero.label}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
      />

      <Section className="pt-6 md:pt-8">
        <PageContainer>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Financing" },
            ]}
          />
        </PageContainer>
      </Section>

      <FinancingIntro
        label={content.introduction.label}
        title={content.introduction.title}
        body={content.introduction.body}
      />

      <FinancingProviders
        label={content.providersSection.label}
        title={content.providersSection.title}
        description={content.providersSection.description}
        providers={[...content.providers]}
      />

      <HowFinancingWorks
        label={content.howItWorks.label}
        title={content.howItWorks.title}
        description={content.howItWorks.description}
        steps={[...content.howItWorks.steps]}
      />

      <FinancingFAQ
        label={content.faq.label}
        title={content.faq.title}
        description={content.faq.description}
        items={[...content.faq.items]}
      />

      <JsonLd data={faqJsonLd([...content.faq.items])} />

      <FinancingDisclaimer
        title={content.disclaimer.title}
        body={content.disclaimer.body}
      />

      <FinancingHelpCta
        label={content.help.label}
        title={content.help.title}
        description={content.help.description}
        contactCtaLabel={content.help.contactCtaLabel}
        contactCtaHref={content.help.contactCtaHref}
        callLabel={content.help.callLabel}
        contact={helpContact}
      />
    </>
  );
}
