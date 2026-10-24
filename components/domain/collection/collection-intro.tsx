import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

export type CollectionIntroProps = {
  summary: string;
  productCount?: number;
  productCountLabel?: string;
  highlights?: readonly string[];
  className?: string;
};

/**
 * Short editorial introduction under the collection hero.
 */
export function CollectionIntro({
  summary,
  productCount,
  productCountLabel,
  highlights = [],
  className,
}: CollectionIntroProps) {
  const chips = [
    productCountLabel ??
      (typeof productCount === "number"
        ? productCount === 1
          ? "1 piece"
          : `${productCount} pieces`
        : null),
    ...highlights,
  ].filter(Boolean) as string[];

  return (
    <FadeIn className={cn("max-w-3xl", className)}>
      <p className="text-lg leading-relaxed text-[var(--muted)] md:text-xl">
        {summary}
      </p>
      {chips.length ? (
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {chips.map((chip) => (
            <li
              key={chip}
              className="text-caption font-medium uppercase tracking-[0.16em] text-[var(--accent)]"
            >
              {chip}
            </li>
          ))}
        </ul>
      ) : null}
    </FadeIn>
  );
}
