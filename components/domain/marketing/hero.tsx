"use client";

import { motion } from "framer-motion";
import { HeroActions } from "@/components/domain/marketing/hero-actions";
import { HeroBadges } from "@/components/domain/marketing/hero-badges";
import { HeroContactStrip } from "@/components/domain/marketing/hero-contact-strip";
import { HeroMedia } from "@/components/domain/marketing/hero-media";
import { PageContainer } from "@/components/layout/page-container";
import type { Hero as HeroContent } from "@/types";

export type HeroProps = {
  content: HeroContent;
  locationLabel: string;
  phone: string;
  phoneHref: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Cinematic full-bleed video hero — left-aligned copy over promotional footage.
 * All copy/contact via props; no business hardcoding.
 */
export function Hero({ content, locationLabel, phone, phoneHref }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden bg-[var(--background)]"
    >
      <HeroMedia posterSrc={content.image.src} />

      <PageContainer className="relative z-10 flex min-h-[100svh] items-center py-24 md:py-28">
        <div className="w-full max-w-xl lg:max-w-[34rem]">
          <MotionBlock delay={0.1}>
            <p className="text-overline text-[var(--primary)]">{content.label}</p>
            <div
              className="mt-4 h-px w-16 bg-gradient-to-r from-[var(--primary)] to-transparent"
              aria-hidden
            />
          </MotionBlock>

          <MotionBlock delay={0.22}>
            <h1
              id="hero-heading"
              className="text-display mt-6 max-w-[12ch] text-[clamp(2.75rem,6vw,4.75rem)]"
            >
              {content.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </MotionBlock>

          <MotionBlock delay={0.36}>
            <p className="mt-6 max-w-md whitespace-pre-line text-body text-[var(--muted)] md:text-lg">
              {content.subtitle}
            </p>
          </MotionBlock>

          <HeroBadges badges={content.badges} />
          <HeroActions
            primary={content.primaryCta}
            secondary={content.secondaryCta}
          />
          <HeroContactStrip
            locationLabel={locationLabel}
            phone={phone}
            phoneHref={phoneHref}
          />
        </div>
      </PageContainer>
    </section>
  );
}

function MotionBlock({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
