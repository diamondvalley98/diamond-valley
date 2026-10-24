import type { SeoMeta } from "@/types";

export const defaultSeo: SeoMeta = {
  title: "Diamond Valley | Premium Diamond & Gold Jewellery — Dover, DE",
  description:
    "Diamond Valley in Dover, Delaware — diamond & gold jewellery, chains, custom grillz, watches, and custom pieces. Enquire or visit the showroom.",
  ogImage: {
    src: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
    alt: "Diamond Valley jewellery",
    width: 1200,
    height: 630,
  },
  keywords: [
    "Diamond Valley",
    "Dover jewellery",
    "hip hop jewellery Dover",
    "Cuban chains Delaware",
    "custom grillz Dover",
    "iced watches Dover",
    "custom jewellery Delaware",
  ],
};

export const routesSeo: Record<string, Partial<SeoMeta>> = {
  "/collections": {
    title: "Collections",
    description:
      "Browse chains, bracelets, pendants, rings, grillz, and bust-down watches at Diamond Valley.",
  },
  "/services": {
    title: "Services",
    description:
      "Custom jewellery, repairs, grillz, and gold & diamond services in Dover, DE.",
  },
  "/faq": {
    title: "FAQ",
    description: "Frequently asked questions about Diamond Valley jewellery services.",
  },
  "/financing": {
    title: "Financing | Diamond Valley",
    description:
      "Explore financing options available at Diamond Valley through our trusted financing partners.",
  },
};
