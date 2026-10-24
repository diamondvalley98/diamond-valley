"use client";

import { motion } from "framer-motion";
import {
  TestimonialCard,
  TestimonialCardMotion,
} from "@/components/domain/trust/testimonial-card";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

export type TestimonialsGridProps = {
  testimonials: Testimonial[];
  className?: string;
};

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/**
 * 2×2 editorial grid (1 col mobile, 2 cols tablet+).
 */
export function TestimonialsGrid({
  testimonials,
  className,
}: TestimonialsGridProps) {
  if (!testimonials.length) return null;

  return (
    <motion.div
      className={cn(
        "grid auto-rows-fr gap-5 sm:grid-cols-2 sm:gap-6",
        className,
      )}
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      {testimonials.map((testimonial) => (
        <TestimonialCardMotion key={testimonial.id}>
          <TestimonialCard testimonial={testimonial} />
        </TestimonialCardMotion>
      ))}
    </motion.div>
  );
}
