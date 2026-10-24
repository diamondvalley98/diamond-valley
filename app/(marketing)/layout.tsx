import { PageShell } from "@/components/layout/page-shell";
import { getSite } from "@/lib/content/get-site";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = getSite();

  return (
    <PageShell
      brandName={site.business.brandName}
      navigation={site.navigation}
      footer={site.footer}
      socials={site.business.socials}
      announcement={{
        enabled: site.site.features.showAnnouncement,
      }}
      stickyCallCta={{
        enabled: site.site.features.showStickyCallCta,
        href: site.business.phoneHref,
        label: "Call",
      }}
    >
      {children}
    </PageShell>
  );
}
