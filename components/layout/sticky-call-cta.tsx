import { AppLink } from "@/components/layout/app-link";

export type StickyCallCtaProps = {
  href: string;
  label: string;
  className?: string;
};

/**
 * Optional mobile sticky CTA. Parent decides visibility via feature flags.
 */
export function StickyCallCta({ href, label, className }: StickyCallCtaProps) {
  return (
    <AppLink
      href={href}
      className={
        className ??
        "fixed bottom-4 right-4 z-[var(--z-header)] rounded-[var(--radius-full)] bg-[var(--primary)] px-4 py-3 text-sm font-medium text-[var(--primary-foreground)] shadow-token-md md:hidden"
      }
    >
      {label}
    </AppLink>
  );
}
