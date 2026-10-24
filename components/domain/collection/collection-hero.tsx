import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import type { Collection } from "@/types";

export type CollectionHeroProps = {
  collection: Collection;
  eyebrow?: string;
  /** Soft gradient for text legibility over the image */
  showOverlay?: boolean;
  className?: string;
};

/**
 * Editorial collection hero — name, description, and full-bleed image.
 */
export function CollectionHero({
  collection,
  eyebrow = "Collection",
  showOverlay = true,
  className,
}: CollectionHeroProps) {
  const copy = collection.description ?? collection.summary;

  return (
    <FadeIn className={cn("relative", className)}>
      <div className="relative min-h-[min(70vh,36rem)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] md:min-h-[28rem]">
        <Image
          src={collection.image.src}
          alt={collection.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder={collection.image.blurDataURL ? "blur" : "empty"}
          blurDataURL={collection.image.blurDataURL}
        />
        {showOverlay ? (
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(105deg,color-mix(in_srgb,var(--background)_88%,transparent)_0%,color-mix(in_srgb,var(--background)_55%,transparent)_42%,transparent_72%)]"
          />
        ) : null}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:max-w-xl md:justify-center md:p-10 lg:p-14">
          <p className="text-caption font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {collection.name}
          </h1>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-[var(--muted)]">
            {copy}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
