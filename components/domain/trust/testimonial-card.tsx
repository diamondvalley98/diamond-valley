"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

export type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

/**
 * Soft luxury testimonial card — vertical-agnostic via content props.
 */
export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const reduced = useReducedMotion();

  return (
    <figure
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] p-6 shadow-token-sm transition-token md:p-7",
        !reduced && "hover:-translate-y-1 hover:shadow-token-glow",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-2 font-[family-name:var(--font-display)] text-7xl leading-none text-[color-mix(in_srgb,var(--primary)_22%,transparent)] select-none"
      >
        “
      </span>

      <p
        className="relative text-sm tracking-wide text-[var(--primary)]"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {"★".repeat(testimonial.rating)}
        <span className="sr-only"> out of 5</span>
      </p>

      <blockquote className="relative mt-4 flex-1 text-base leading-relaxed text-[var(--foreground)] md:text-[1.05rem]">
        {testimonial.review}
      </blockquote>

      <figcaption className="relative mt-6 border-t border-[var(--border)] pt-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-medium tracking-wide">{testimonial.name}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{testimonial.location}</p>
          </div>
          {testimonial.purchaseType ? (
            <Badge className="border-[color-mix(in_srgb,var(--primary)_35%,var(--border))]">
              {testimonial.purchaseType}
            </Badge>
          ) : null}
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialCardMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="h-full"
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
