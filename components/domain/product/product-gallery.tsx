"use client";

import { useCallback, useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/types";

export type ProductGalleryProps = {
  images: MediaAsset[];
  className?: string;
};

/**
 * Accessible product gallery — main image + thumbnail strip.
 */
export function ProductGallery({ images, className }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const labelId = useId();
  const reduced = useReducedMotion();
  const current = images[active] ?? images[0];

  const select = useCallback((index: number) => {
    setActive(index);
  }, []);

  const step = useCallback(
    (delta: number) => {
      select((active + delta + images.length) % images.length);
    },
    [active, images.length, select],
  );

  const onThumbKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      select((index + 1) % images.length);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      select((index - 1 + images.length) % images.length);
    }
    if (event.key === "Home") {
      event.preventDefault();
      select(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      select(images.length - 1);
    }
  };

  const onMainKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  };

  if (!current) return null;

  return (
    <div className={cn("space-y-3", className)}>
      <div
        role="region"
        aria-roledescription="image gallery"
        tabIndex={0}
        aria-labelledby={labelId}
        onKeyDown={onMainKeyDown}
        className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
      >
        <span id={labelId} className="sr-only">
          {current.alt}. Use arrow keys to change images.
        </span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.src}
            className="absolute inset-0"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority={active === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 ? (
        <div
          role="listbox"
          aria-label="Product images"
          aria-activedescendant={`gallery-thumb-${active}`}
          className="flex gap-2 overflow-x-auto pb-1"
        >
          {images.map((image, index) => {
            const selected = index === active;
            return (
              <button
                key={`${image.src}-${index}`}
                id={`gallery-thumb-${index}`}
                type="button"
                role="option"
                aria-selected={selected}
                aria-label={`View image ${index + 1}: ${image.alt}`}
                onClick={() => select(index)}
                onKeyDown={(event) => onThumbKeyDown(event, index)}
                className={cn(
                  "relative h-20 w-20 shrink-0 overflow-hidden rounded-[var(--radius-sm)] border transition-token focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
                  selected
                    ? "border-[var(--primary)] opacity-100"
                    : "border-transparent opacity-70 hover:opacity-100",
                )}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
