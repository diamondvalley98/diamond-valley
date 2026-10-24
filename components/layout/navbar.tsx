import { AppLink } from "@/components/layout/app-link";
import { BrandMark, MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import type { Navigation } from "@/types";

export type NavbarProps = {
  brandName: string;
  brandHref?: string;
  navigation: Navigation;
};

/**
 * Site header / navbar. All copy and links via props — no business hardcoding.
 */
export function Navbar({ brandName, brandHref = "/", navigation }: NavbarProps) {
  return (
    <header className="sticky top-0 z-[60] border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_82%,transparent)] backdrop-blur-md">
      <PageContainer className="flex h-16 items-center justify-between md:h-[var(--header-height)]">
        <BrandMark name={brandName} href={brandHref} />
        <MainNav items={navigation.primary} />
        <div className="flex items-center gap-2">
          {navigation.cta ? (
            <Button asChild variant="secondary" className="hidden sm:inline-flex">
              <AppLink href={navigation.cta.href}>{navigation.cta.label}</AppLink>
            </Button>
          ) : null}
          <MobileNav
            brandName={brandName}
            items={navigation.primary}
            cta={navigation.cta}
          />
        </div>
      </PageContainer>
    </header>
  );
}

/** @deprecated Prefer Navbar */
export const SiteHeader = Navbar;
