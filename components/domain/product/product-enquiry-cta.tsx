import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ProductEnquiryCtaProps = {
  title?: string;
  description?: string;
  enquireLabel?: string;
  enquireHref?: string;
  phoneHref?: string;
  phoneLabel?: string;
  className?: string;
};

/**
 * Luxury enquiry panel for product detail pages.
 * TODO: Open enquiry modal on primary CTA instead of navigating to contact.
 */
export function ProductEnquiryCta({
  title = "Interested in this piece?",
  description = "Have questions about sizing, customization, availability, or pricing? Our team is here to help.",
  enquireLabel = "Enquire Now",
  enquireHref = "/contact",
  phoneHref,
  phoneLabel = "Call Store",
  className,
}: ProductEnquiryCtaProps) {
  return (
    <aside
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_80%,transparent)] p-6 shadow-token-sm md:p-8",
        className,
      )}
    >
      <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-prose text-[var(--muted)]">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {/* TODO: Open enquiry modal instead of navigating to contact */}
        <Button asChild size="lg">
          <Link href={enquireHref}>{enquireLabel}</Link>
        </Button>
        {phoneHref ? (
          <Button asChild variant="secondary" size="lg">
            <a href={phoneHref}>{phoneLabel}</a>
          </Button>
        ) : null}
      </div>
    </aside>
  );
}
