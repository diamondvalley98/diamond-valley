import { TestimonialsGrid } from "@/components/domain/trust/testimonials-grid";
import type { Testimonial } from "@/types";

/**
 * Legacy alias — prefer TestimonialsGrid / TestimonialsSection.
 */
export function TestimonialSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return <TestimonialsGrid testimonials={testimonials} />;
}
