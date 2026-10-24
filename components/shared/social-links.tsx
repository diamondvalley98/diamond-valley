import Link from "next/link";
import type { SocialLink } from "@/types";

export function SocialLinks({ links }: { links: SocialLink[] }) {
  if (!links.length) return null;
  return (
    <ul className="flex flex-wrap gap-4">
      {links.map((link) => (
        <li key={link.platform}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (external) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
