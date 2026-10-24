"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/domain/marketing/feature-card";
import { PageContainer, Section } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

export type BrandPromiseFeature = {
  id: string;
  title: string;
  description: string;
  icon?: string;
};

export type BrandPromiseProps = {
  label: string;
  title: string;
  description: string;
  features: BrandPromiseFeature[];
};

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/**
 * Post-hero trust section — why this brand, before product browsing.
 */
export function BrandPromise({
  label,
  title,
  description,
  features,
}: BrandPromiseProps) {
  return (
    <Section
      id="brand-promise"
      aria-labelledby="brand-promise-heading"
      className="bg-[var(--card-elevated)]"
    >
      <PageContainer>
        <SectionHeading
          eyebrow={label}
          title={title}
          description={description}
          align="center"
          as="h2"
          titleId="brand-promise-heading"
          className="mb-12 !flex-col !items-center"
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </PageContainer>
    </Section>
  );
}
