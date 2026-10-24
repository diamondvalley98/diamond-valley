"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PageContainer, Section } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/types";

export type CustomJewelleryFeature = {
  id: string;
  title: string;
};

export type CustomJewelleryCTAProps = {
  label: string;
  title: string;
  description: string;
  features: CustomJewelleryFeature[];
  image: MediaAsset;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Editorial bespoke CTA — image + content split.
 * Vertical-agnostic: swap content for furniture, dining, tailoring, etc.
 */
export function CustomJewelleryCTA({
  label,
  title,
  description,
  features,
  image,
  primaryCta,
  secondaryCta,
  className,
}: CustomJewelleryCTAProps) {
  const reduced = useReducedMotion();

  return (
    <Section
      id="bespoke"
      aria-labelledby="bespoke-heading"
      className={cn(
        "bg-[linear-gradient(160deg,color-mix(in_srgb,var(--primary)_8%,transparent),transparent_50%),var(--card-elevated)]",
        className,
      )}
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
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,color-mix(in_srgb,var(--background)_45%,transparent)),linear-gradient(90deg,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_55%)]"
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
              id="bespoke-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight md:text-5xl"
            >
              {title}
            </h2>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-[var(--muted)]">
              {description}
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature.id}
                  className="flex items-center gap-3 text-[var(--foreground)]"
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.45,
                    ease,
                    delay: reduced ? 0 : 0.12 + index * 0.08,
                  }}
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]"
                  />
                  <span className="text-sm font-medium tracking-wide md:text-base">
                    {feature.title}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              {/* TODO: Open enquiry modal when Modal enquiry flow is wired */}
              <Button asChild size="lg">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </Section>
  );
}
