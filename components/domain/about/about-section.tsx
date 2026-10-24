"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AboutHighlights } from "@/components/domain/about/about-highlights";
import { AboutStatistics } from "@/components/domain/about/about-statistics";
import { PageContainer, Section } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/types";

export type AboutSectionProps = {
  label: string;
  heading: string;
  paragraphs: string[];
  highlights: { id: string; title: string }[];
  image: MediaAsset;
  statistics: { id: string; value: string; label: string }[];
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Editorial About section — craftsmanship, philosophy, local identity.
 * Reusable across verticals by swapping content only.
 */
export function AboutSection({
  label,
  heading,
  paragraphs,
  highlights,
  image,
  statistics,
  className,
}: AboutSectionProps) {
  const reduced = useReducedMotion();

  return (
    <Section
      id="about"
      aria-labelledby="about-heading"
      className={cn(className)}
    >
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] shadow-token-sm md:aspect-[5/6] lg:aspect-[4/5]"
            initial={reduced ? false : { opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              placeholder={image.blurDataURL ? "blur" : "empty"}
              blurDataURL={image.blurDataURL}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,color-mix(in_srgb,var(--background)_40%,transparent)),linear-gradient(90deg,color-mix(in_srgb,var(--primary)_10%,transparent),transparent_60%)]"
            />
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease, delay: reduced ? 0 : 0.08 }}
          >
            <p className="text-overline text-[var(--primary)]">{label}</p>
            <h2
              id="about-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight md:text-5xl"
            >
              {heading}
            </h2>
            <div className="mt-6 space-y-4 max-w-prose">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-lg leading-relaxed text-[var(--muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <AboutHighlights highlights={highlights} />
          </motion.div>
        </div>

        <div className="mt-14 md:mt-16">
          <AboutStatistics statistics={statistics} />
        </div>
      </PageContainer>
    </Section>
  );
}
