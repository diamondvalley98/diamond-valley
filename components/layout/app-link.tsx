import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

function isExternalHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")
  );
}

export type AppLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
};

/**
 * Internal Next Link vs native anchor — shared by Navbar, Footer, MobileNav.
 */
export const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ href, children, className, onClick, external }, ref) => {
    const useAnchor = external || isExternalHref(href);

    if (useAnchor) {
      const newTab = href.startsWith("http");
      return (
        <a
          ref={ref}
          href={href}
          className={className}
          onClick={onClick}
          {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link ref={ref} href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  },
);
AppLink.displayName = "AppLink";

export function navLinkClassName(active?: boolean) {
  return cn(
    "text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)] transition-token-fast hover:text-[var(--foreground)]",
    active && "text-[var(--foreground)]",
  );
}

export function footerLinkClassName() {
  return "text-sm text-[var(--muted)] transition-token-fast hover:text-[var(--accent)]";
}
