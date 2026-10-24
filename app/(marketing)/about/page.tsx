import type { Metadata } from "next";
import { AboutHighlights } from "@/components/domain/about/about-highlights";
import { AboutStatistics } from "@/components/domain/about/about-statistics";
import { PageContainer, Section } from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ResponsiveImage } from "@/components/shared/responsive-image";
import { getSite } from "@/lib/content/get-site";
import { buildMetadata, mergeSeo } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const site = getSite();
  return buildMetadata({
    seo: mergeSeo(site.seo.defaults, site.about.seo),
    path: "/about",
    siteName: site.business.brandName,
  });
}

export default function AboutPage() {
  const { about } = getSite();

  return (
    <Section>
      <PageContainer>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-overline text-[var(--primary)]">{about.label}</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl md:text-6xl">
              {about.heading}
            </h1>
            <div className="mt-8 space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-lg leading-relaxed text-[var(--muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <AboutHighlights highlights={about.highlights} />
          </div>
          <ResponsiveImage
            media={about.image}
            className="aspect-[4/5] rounded-[var(--radius-lg)] bg-[var(--card)]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="mt-14 md:mt-16">
          <AboutStatistics statistics={about.statistics} />
        </div>
      </PageContainer>
    </Section>
  );
}
