import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

export type CollectionEmptyStateProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
};

/**
 * Elegant empty state when a collection has no products yet.
 */
export function CollectionEmptyState({
  title,
  description,
  ctaLabel,
  ctaHref,
  className,
}: CollectionEmptyStateProps) {
  return (
    <FadeIn>
      <div
        role="status"
        className={cn(
          "rounded-[var(--radius-lg)] border border-dashed border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_70%,transparent)] px-6 py-14 text-center md:px-12",
          className,
        )}
      >
        <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">{description}</p>
        <Button asChild className="mt-8" size="lg">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </FadeIn>
  );
}
