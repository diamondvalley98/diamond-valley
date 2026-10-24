import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer, type FooterProps } from "@/components/layout/footer";
import { Navbar, type NavbarProps } from "@/components/layout/navbar";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { StickyCallCta } from "@/components/layout/sticky-call-cta";

export type PageShellProps = {
  children: React.ReactNode;
  brandName: string;
  navigation: NavbarProps["navigation"];
  footer: FooterProps["footer"];
  socials?: FooterProps["socials"];
  announcement?: {
    enabled: boolean;
    message?: string;
  };
  stickyCallCta?: {
    enabled: boolean;
    href: string;
    label: string;
  };
};

/**
 * Marketing chrome shell: skip link, optional announcement, navbar, main, footer.
 * Pages pass data in — PageShell does not load content modules.
 */
export function PageShell({
  children,
  brandName,
  navigation,
  footer,
  socials,
  announcement,
  stickyCallCta,
}: PageShellProps) {
  return (
    <>
      <SkipToContent />
      <AnnouncementBar
        enabled={announcement?.enabled ?? false}
        message={announcement?.message}
      />
      <Navbar brandName={brandName} navigation={navigation} />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer brandName={brandName} footer={footer} socials={socials} />
      {stickyCallCta?.enabled ? (
        <StickyCallCta href={stickyCallCta.href} label={stickyCallCta.label} />
      ) : null}
    </>
  );
}
