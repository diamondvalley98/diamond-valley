import type { Testimonial } from "@/types";

/** Homepage testimonials section copy — swap per vertical/client. */
export const testimonialsSection = {
  label: "Testimonials",
  title: "Trusted by Our Community",
  description:
    "Our clients trust us for iced chains, custom grillz, diamond pieces, and craftsmanship that holds up.",
  metrics: [
    { id: "years", value: "25+", label: "Years of Craftsmanship" },
    { id: "custom", value: "500+", label: "Custom Designs" },
    { id: "repairs", value: "1,000+", label: "Repairs Completed" },
    { id: "customers", value: "2,000+", label: "Satisfied Customers" },
  ],
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Jordan M.",
    rating: 5,
    review:
      "They took my rough idea for a custom Cuban and made something better than I imagined. Clear communication from sketch to the final piece.",
    location: "Dover, DE",
    purchaseType: "Custom Chain",
  },
  {
    id: "t2",
    name: "Samira K.",
    rating: 5,
    review:
      "I commissioned a custom name pendant. The craftsmanship is clean, the diamonds hit different, and every detail feels intentional.",
    location: "Kent County, DE",
    purchaseType: "Custom Pendant",
  },
  {
    id: "t3",
    name: "Chris R.",
    rating: 5,
    review:
      "Brought in a broken chain clasp. The repair was careful, honest, and finished faster than I expected.",
    location: "Smyrna, DE",
    purchaseType: "Jewellery Repair",
  },
  {
    id: "t4",
    name: "Elena V.",
    rating: 5,
    review:
      "Got my grillz fitted here — precise, comfortable, and the finish is premium. Warm service and no pressure.",
    location: "Milford, DE",
    purchaseType: "Custom Grillz",
  },
];
