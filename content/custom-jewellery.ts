import type { MediaAsset } from "@/types";

export type CustomJewelleryFeature = {
  id: string;
  title: string;
};

export type CustomJewelleryCtaContent = {
  label: string;
  title: string;
  description: string;
  features: CustomJewelleryFeature[];
  image: MediaAsset;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

/**
 * Bespoke / custom-work CTA — swap copy + image per vertical
 * (custom furniture, private dining, luxury tailoring, etc.).
 */
export const customJewellerySection: CustomJewelleryCtaContent = {
  label: "Bespoke Design",
  title: "Create Something Truly Yours",
  description:
    "Work one-on-one with our jewellers to design custom grillz, name plates, iced pieces, and one-of-a-kind jewellery built for your style.",
  features: [
    { id: "collaborative", title: "Collaborative Design Process" },
    { id: "materials", title: "Premium Materials" },
    { id: "precision", title: "Handcrafted Precision" },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1400&q=80",
    alt: "Jeweller crafting a bespoke gold and diamond piece at the bench",
    width: 1400,
    height: 1750,
  },
  primaryCta: {
    label: "Book Custom Design",
    // TODO: Open enquiry modal when Modal enquiry flow is wired
    href: "/contact#enquiry",
  },
  secondaryCta: {
    label: "Shop Collections",
    href: "/collections",
  },
};
