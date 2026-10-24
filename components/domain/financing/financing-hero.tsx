"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";

export type FinancingHeroProps = {
  label: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Editorial financing hero — black & gold, content-driven CTAs.
 */
export function FinancingHero({
  label,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: FinancingHeroProps) {
  return (
    <section
      aria-labelledby="financing-hero-heading"
      className={cn(
        "relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_70%_0%,rgba(201,169,110,0.14),transparent_55%),linear-gradient(180deg,#0c0b0a_0%,#12100e_50%,#0c0b0a_100%)]"
      />

      <PageContainer className="relative z-10 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <MotionBlock delay={0.08}>
            <p className="text-overline text-[var(--primary)]">{label}</p>
            <div
              className="mt-4 h-px w-16 bg-gradient-to-r from-[var(--primary)] to-transparent"
              aria-hidden
            />
          </MotionBlock>

          <MotionBlock delay={0.18}>
            <h1
              id="financing-hero-heading"
              className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.08] tracking-tight"
            >
              {title}
            </h1>
          </MotionBlock>

          <MotionBlock delay={0.3}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {subtitle}
            </p>
          </MotionBlock>

          <MotionBlock delay={0.42}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={primaryCta.href}>{primaryCta.label}</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </div>
          </MotionBlock>
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
