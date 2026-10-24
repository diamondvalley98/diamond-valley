import { FadeIn } from "@/components/motion/fade-in";
import { LocationCard } from "@/components/domain/location/location-card";
import { PageContainer, Section } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { storeExperiencePanelClassName } from "@/components/domain/marketing/store-experience-band";
import { cn } from "@/lib/utils";
import type { OpeningHours, PostalAddress } from "@/types";

export type VisitStoreSectionProps = {
  label: string;
  heading: string;
  description: string;
  address: PostalAddress;
  phone: string;
  phoneHref: string;
  email: string;
  hours: OpeningHours[];
  mapEmbedUrl: string;
  mapTitle: string;
  parkingNote?: string;
  directionsHref: string;
  directionsLabel: string;
  callLabel: string;
  /** Soft glass surface when nested in StoreExperienceBand */
  glassPanels?: boolean;
};

/**
 * Premium showroom / visit section with details + map.
 * Vertical-agnostic — restaurants, clinics, salons, etc. via content only.
 */
export function VisitStoreSection({
  label,
  heading,
  description,
  address,
  phone,
  phoneHref,
  email,
  hours,
  mapEmbedUrl,
  mapTitle,
  parkingNote,
  directionsHref,
  directionsLabel,
  callLabel,
  glassPanels = false,
}: VisitStoreSectionProps) {
  const panel = glassPanels ? storeExperiencePanelClassName : undefined;

  return (
    <Section id="visit" aria-labelledby="visit-heading">
      <PageContainer>
        <FadeIn>
          <SectionHeading
            eyebrow={label}
            title={heading}
            description={description}
            align="center"
            as="h2"
            titleId="visit-heading"
            className="mb-10 !flex-col !items-center md:mb-12"
          />
        </FadeIn>

        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <FadeIn className="h-full">
            <LocationCard
              className={cn("h-full", panel)}
              address={address}
              phone={phone}
              phoneHref={phoneHref}
              email={email}
              hours={hours}
              parkingNote={parkingNote}
            />
          </FadeIn>

          <FadeIn delay={0.08} className="h-full">
            <div
              className={cn(
                "relative h-full min-h-[18rem] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] shadow-token-sm md:min-h-[22rem]",
                panel,
              )}
            >
              <iframe
                title={mapTitle}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-10 flex flex-wrap items-center justify-center gap-3" delay={0.1}>
          <Button asChild size="lg">
            <a href={directionsHref} target="_blank" rel="noreferrer">
              {directionsLabel}
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href={phoneHref}>{callLabel}</a>
          </Button>
        </FadeIn>
      </PageContainer>
    </Section>
  );
}
