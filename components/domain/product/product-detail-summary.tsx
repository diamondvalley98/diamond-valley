import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AVAILABILITY_LABELS } from "@/components/domain/product/product-specs";
import type { Product } from "@/types";

export type ProductDetailSummaryProps = {
  product: Product;
  phoneHref: string;
  enquireHref?: string;
  enquireLabel?: string;
  callLabel?: string;
};

/**
 * Product information column — badges, copy, and primary CTAs.
 * TODO: Wire Enquire Now to enquiry modal instead of contact link.
 */
export function ProductDetailSummary({
  product,
  phoneHref,
  enquireHref = `/contact?interest=${encodeURIComponent(product.name)}`,
  enquireLabel = "Enquire Now",
  callLabel = "Call Store",
}: ProductDetailSummaryProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{product.category}</Badge>
        <Badge className="border-[var(--primary)]/40 text-[var(--foreground)]">
          {AVAILABILITY_LABELS[product.availability]}
        </Badge>
      </div>

      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight md:text-5xl">
        {product.name}
      </h1>

      {product.price ? (
        <p className="mt-4 text-lg font-medium text-[var(--accent)]">
          {product.price}
        </p>
      ) : null}

      <p className="mt-5 max-w-prose text-lg leading-relaxed text-[var(--muted)]">
        {product.shortDescription}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {/* TODO: Open enquiry modal instead of navigating to contact */}
        <Button asChild size="lg">
          <Link href={enquireHref}>{enquireLabel}</Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href={phoneHref}>{callLabel}</a>
        </Button>
      </div>
    </div>
  );
}
