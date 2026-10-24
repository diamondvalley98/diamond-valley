import { cn } from "@/lib/utils";

export type ProductDescriptionProps = {
  title?: string;
  description: string;
  className?: string;
};

/**
 * Full product description block with comfortable reading width.
 */
export function ProductDescription({
  title = "About this Piece",
  description,
  className,
}: ProductDescriptionProps) {
  return (
    <section
      aria-labelledby="product-description-heading"
      className={cn("max-w-3xl", className)}
    >
      <h2
        id="product-description-heading"
        className="font-[family-name:var(--font-display)] text-3xl tracking-tight"
      >
        {title}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
        {description}
      </p>
    </section>
  );
}
