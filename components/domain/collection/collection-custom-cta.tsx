import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

export type CollectionCustomCtaProps = {
  title: string;
  description: string;
  bookLabel: string;
  bookHref: string;
  callLabel: string;
  phoneHref: string;
  className?: string;
};

/**
 * Luxury custom-work callout for collection detail pages.
 * TODO: Wire Book Consultation to enquiry modal when available.
 */
export function CollectionCustomCta({
  title,
  description,
  bookLabel,
  bookHref,
  callLabel,
  phoneHref,
  className,
}: CollectionCustomCtaProps) {
  return (
    <FadeIn>
      <aside
        className={cn(
          "rounded-[var(--radius-lg)] border border-[var(--border)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_45%),var(--card)] p-6 shadow-token-sm md:p-10",
          className,
        )}
      >
        <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {/* TODO: Open enquiry modal instead of navigating to contact */}
          <Button asChild size="lg">
            <Link href={bookHref}>{bookLabel}</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href={phoneHref}>{callLabel}</a>
          </Button>
        </div>
      </aside>
    </FadeIn>
  );
}
