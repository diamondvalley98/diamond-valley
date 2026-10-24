import type { Business } from "@/types";

export const business: Business = {
  legalName: "Diamond Valley",
  brandName: "Diamond Valley",
  tagline: "Premium diamond & gold jewellery, custom grillz, and iced pieces in Dover.",
  phone: "(302) 580-4053",
  phoneHref: "tel:+13025804053",
  email: "diamondvalley98@gmail.com",
  website: "https://www.diamondvalley.net",
  address: {
    street: "1365 N Dupont Hwy",
    suite: "#5052",
    city: "Dover",
    region: "DE",
    postalCode: "19901",
    country: "US",
  },
  geo: {
    lat: 39.1582,
    lng: -75.5244,
  },
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      open: "10:00",
      close: "18:00",
    },
    {
      days: ["Saturday"],
      open: "11:00",
      close: "16:00",
    },
    {
      days: ["Sunday"],
      open: "Closed",
      close: "Closed",
      note: "By appointment",
    },
  ],
  socials: [
    {
      platform: "instagram",
      href: "https://www.instagram.com/",
      label: "Instagram",
    },
  ],
  priceRange: "$$",
  foundingYear: 1998,
  brandPromise: {
    label: "Why Diamond Valley",
    title: "Luxury Built for Your Style",
    description:
      "Premium diamond and gold jewellery, custom grillz, and statement pieces with craftsmanship you can trust.",
    features: [
      {
        id: "craftsmanship",
        title: "Premium Craftsmanship",
        description:
          "Diamond and gold pieces finished with exceptional attention to detail.",
        icon: "Gem",
      },
      {
        id: "custom",
        title: "Custom Designs",
        description:
          "One-of-a-kind chains, pendants, grillz, and iced pieces designed for you.",
        icon: "Sparkles",
      },
      {
        id: "repairs",
        title: "Expert Repairs",
        description:
          "Chain repair, stone work, polishing, and restoration for everyday pieces.",
        icon: "ShieldCheck",
      },
      {
        id: "local",
        title: "Trusted Local Jeweller",
        description:
          "Serving Dover with premium urban jewellery and personalized service.",
        icon: "MapPin",
      },
    ],
  },
};
