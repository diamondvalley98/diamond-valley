import type { AboutContent } from "@/types";

/**
 * About section + page content — swap copy/image per vertical
 * (restaurants, clinics, furniture, law, interior design, etc.).
 */
export const about: AboutContent = {
  label: "About",
  heading: "Craftsmanship Rooted in Trust",
  paragraphs: [
    "Every piece begins with careful attention — from the first conversation to the final polish. We believe jewellery should feel personal, intentional, and built for the way you actually wear it.",
    "As Dover’s urban jewellery house, we build lasting relationships through premium materials and personalized service. Whether you want iced chains, custom grillz, a one-off pendant, or a repair, we guide each step with care.",
  ],
  highlights: [
    { id: "craftsmanship", title: "Premium Craftsmanship" },
    { id: "custom", title: "Custom Design Expertise" },
    { id: "local", title: "Trusted Local Service" },
    { id: "detail", title: "Attention to Detail" },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1400&q=80",
    alt: "Jeweller shaping a handcrafted piece at the workbench",
    width: 1400,
    height: 1750,
  },
  statistics: [
    { id: "years", value: "25+", label: "Years Serving" },
    { id: "custom", value: "500+", label: "Custom Pieces" },
    { id: "clients", value: "2,000+", label: "Satisfied Clients" },
  ],
  seo: {
    title: "About",
    description:
      "Learn about our craftsmanship, philosophy, and personalized jewellery service.",
  },
};
