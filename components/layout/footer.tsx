import { AppLink, footerLinkClassName } from "@/components/layout/app-link";
import { PageContainer } from "@/components/layout/page-container";
import { SocialLinks } from "@/components/shared/social-links";
import type { FooterContent, SocialLink } from "@/types";

export type FooterProps = {
  brandName: string;
  footer: FooterContent;
  socials?: SocialLink[];
  year?: number;
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterContent["columns"][number]["links"];
}) {
  return (
    <div>
      <p className="text-overline">{title}</p>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <AppLink
              href={link.href}
              external={link.external}
              className={footerLinkClassName()}
            >
              {link.label}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Site footer. Receives structured footer content + optional socials.
 */
export function Footer({
  brandName,
  footer,
  socials = [],
  year = new Date().getFullYear(),
}: FooterProps) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]">
      <PageContainer className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl">
              {brandName}
            </p>
            {footer.tagline ? (
              <p className="mt-2 text-sm text-[var(--muted)]">{footer.tagline}</p>
            ) : null}
            {footer.showSocials && socials.length > 0 ? (
              <div className="mt-6">
                <SocialLinks links={socials} />
              </div>
            ) : null}
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footer.columns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {brandName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            {footer.legalLinks.map((link) => (
              <li key={link.href}>
                <AppLink href={link.href} className="hover:text-[var(--accent)]">
                  {link.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>
      </PageContainer>
    </footer>
  );
}

/** @deprecated Prefer Footer */
export { Footer as SiteFooter };
