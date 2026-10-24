import { ContactForm } from "@/components/domain/contact/contact-form";
import { ContactInfoCard } from "@/components/domain/contact/contact-info-card";
import { PageContainer, Section } from "@/components/layout/page-container";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { storeExperiencePanelClassName } from "@/components/domain/marketing/store-experience-band";
import type { ContactFormLabels } from "@/components/domain/contact/contact-form";
import type { PostalAddress } from "@/types";

export type ContactSectionProps = {
  label: string;
  heading: string;
  description: string;
  formLabels: ContactFormLabels;
  successMessage: string;
  successTitle?: string;
  businessName: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: PostalAddress;
  hoursSummary: string;
  callLabel: string;
  directionsLabel: string;
  directionsHref: string;
  /** Soft glass surface when nested in StoreExperienceBand */
  glassPanels?: boolean;
};

/**
 * Homepage contact section — form + business summary.
 * Vertical-agnostic via typed content props.
 */
export function ContactSection({
  label,
  heading,
  description,
  formLabels,
  successMessage,
  successTitle,
  businessName,
  phone,
  phoneHref,
  email,
  address,
  hoursSummary,
  callLabel,
  directionsLabel,
  directionsHref,
  glassPanels = false,
}: ContactSectionProps) {
  const panel = glassPanels ? storeExperiencePanelClassName : undefined;

  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <PageContainer>
        <FadeIn>
          <SectionHeading
            eyebrow={label}
            title={heading}
            description={description}
            align="center"
            as="h2"
            titleId="contact-heading"
            className="mb-10 !flex-col !items-center md:mb-12"
          />
        </FadeIn>

        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <FadeIn>
            <ContactForm
              labels={formLabels}
              successMessage={successMessage}
              successTitle={successTitle}
              className={panel}
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <ContactInfoCard
              businessName={businessName}
              phone={phone}
              phoneHref={phoneHref}
              email={email}
              address={address}
              hoursSummary={hoursSummary}
              callLabel={callLabel}
              directionsLabel={directionsLabel}
              directionsHref={directionsHref}
              className={panel}
            />
          </FadeIn>
        </div>
      </PageContainer>
    </Section>
  );
}
