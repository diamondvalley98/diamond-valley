import Link from "next/link";
import { AppLink, navLinkClassName } from "@/components/layout/app-link";
import type { NavigationItem } from "@/types";

export type MainNavProps = {
  items: NavigationItem[];
  className?: string;
};

export function MainNav({ items, className }: MainNavProps) {
  return (
    <nav
      aria-label="Primary"
      className={className ?? "hidden items-center gap-7 lg:flex"}
    >
      {items.map((item) => (
        <AppLink
          key={`${item.href}-${item.label}`}
          href={item.href}
          external={item.external}
          className={navLinkClassName()}
        >
          {item.label}
        </AppLink>
      ))}
    </nav>
  );
}

/** Brand mark used in Navbar + MobileNav */
export function BrandMark({
  name,
  href = "/",
  className,
  onNavigate,
}: {
  name: string;
  href?: string;
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={
        className ??
        "font-[family-name:var(--font-display)] text-xl tracking-wide md:text-2xl"
      }
    >
      {name}
    </Link>
  );
}
