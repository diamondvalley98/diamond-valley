import type { HomeContent } from "@/types";
import { collectionsSection } from "./collections";
import { customJewellerySection } from "./custom-jewellery";
import { faqSection } from "./faq";
import { productsSection } from "./products";
import { testimonialsSection } from "./testimonials";

export const home: HomeContent = {
  modules: [
    { type: "hero", id: "home" },
    { type: "trust", id: "home-trust" },
    { type: "collections", id: "home-collections" },
    { type: "products", id: "home-products", filter: "featured" },
    { type: "custom-jewellery", id: "home-custom" },
    { type: "services", id: "home-services" },
    { type: "testimonials", id: "home-testimonials" },
    { type: "about", id: "home-about" },
    { type: "visit", id: "home-visit" },
    { type: "faq", id: "home-faq", limit: 6 },
    { type: "contact", id: "home-contact" },
  ],
  collectionsSection,
  productsSection,
  customJewellerySection,
  testimonialsSection,
  faqSection,
  heroes: {
    home: {
      variant: "video",
      label: "Diamond Valley",
      titleLines: ["Premium Diamond", "&", "Gold Jewelry"],
      subtitle:
        "Custom Grillz • Chains • Watches • Pendants • Rings\n\nLuxury jewelry crafted for personal style.\nServing Dover, Delaware.",
      image: {
        src: "/assets/hero_image.png",
        alt: "",
        width: 1600,
        height: 2000,
      },
      badges: [
        { id: "grillz", label: "Custom Grillz", icon: "Gem" },
        { id: "custom", label: "Custom Designs", icon: "Sparkles" },
        { id: "local", label: "Trusted Local Jeweler", icon: "BadgeCheck" },
      ],
      primaryCta: {
        label: "Shop Collections",
        href: "#collections",
      },
      secondaryCta: {
        label: "Book Custom Design",
        // TODO: Open enquiry modal when Modal enquiry flow is wired
        pendingModal: true,
        href: "/contact#enquiry",
      },
    },
  },
  ctas: {
    visit: {
      id: "visit",
      eyebrow: "Visit",
      title: "See the work up close",
      body: "Stop by for chains, diamonds, watches, custom grillz, and repairs — or send an enquiry and we will take it from there.",
      actions: [
        {
          label: "Get directions",
          href: "/contact",
          intent: "primary",
        },
        {
          label: "Send an enquiry",
          href: "/contact#enquiry",
          intent: "secondary",
        },
      ],
    },
  },
  trustItems: [
    {
      id: "custom",
      title: "Custom designs",
      body: "From name plates to grillz — custom pieces shaped around your style.",
      icon: "Sparkles",
    },
    {
      id: "repairs",
      title: "Expert repairs",
      body: "Resizing, stone work, chains, and restoration handled with care.",
      icon: "Wrench",
    },
    {
      id: "local",
      title: "Dover based",
      body: "A local jewellery house you can call, visit, and trust.",
      icon: "MapPin",
    },
  ],
};
