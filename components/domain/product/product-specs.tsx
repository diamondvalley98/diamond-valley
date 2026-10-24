import type { Product } from "@/types";

export const AVAILABILITY_LABELS: Record<Product["availability"], string> = {
  "in-stock": "In stock",
  "made-to-order": "Made to order",
  "enquiry-only": "Available by enquiry",
};

export type ProductSpecsProps = {
  product: Product;
  /** Optional extra rows */
  extra?: { label: string; value: string }[];
  className?: string;
};

/**
 * Builds a consistent specs table from product fields.
 * Vertical-agnostic: metal/stone map to material attributes in other industries.
 */
export function ProductSpecs({ product, extra = [], className }: ProductSpecsProps) {
  const rows = [
    product.metal ? { label: "Material", value: product.metal } : null,
    product.stone ? { label: "Stone", value: product.stone } : null,
    { label: "Category", value: product.category },
    {
      label: "Availability",
      value: AVAILABILITY_LABELS[product.availability],
    },
    ...extra,
  ].filter(Boolean) as { label: string; value: string }[];

  if (!rows.length) return null;

  return (
    <dl className={className ?? "mt-8 grid gap-3 border-t border-[var(--border)] pt-6"}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-[8rem_1fr] gap-3 text-sm md:grid-cols-[10rem_1fr]"
        >
          <dt className="text-[var(--muted)]">{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
