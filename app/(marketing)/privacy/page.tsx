import type { Metadata } from "next";
import { PageContainer, Section } from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Prose } from "@/components/shared/prose";
import { getSite } from "@/lib/content/get-site";
import { buildMetadata, mergeSeo } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const site = getSite();
  return buildMetadata({
    seo: mergeSeo(site.seo.defaults, site.privacy.seo),
    path: "/privacy",
    siteName: site.business.brandName,
  });
}

export default function PrivacyPage() {
  const { privacy } = getSite();

  return (
    <Section>
      <PageContainer>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
        <h1 className="font-[family-name:var(--font-display)] text-5xl">{privacy.title}</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Updated {privacy.updatedAt}</p>
        <div className="mt-10 space-y-8">
          {privacy.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-[family-name:var(--font-display)] text-2xl">
                {section.heading}
              </h2>
              <Prose className="mt-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </Prose>
            </div>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
