import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-gold-diamond",
    slug: "gold-diamond-jewellery",
    name: "Gold & Diamond Jewellery",
    summary: "Curated gold and diamond pieces for everyday luxury and statement style.",
    description:
      "Browse chains, rings, earrings, watches, and iced jewellery — or enquire about a piece that fits your style and budget.",
    image: {
      src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80",
      alt: "Gold and diamond jewellery display",
      width: 1400,
      height: 933,
    },
    benefits: [
      "Wide selection of gold and diamond styles",
      "Guidance on fit, finish, and wear",
      "Local Dover showroom support",
    ],
    cta: {
      label: "View collections",
      href: "/collections",
      intent: "primary",
    },
    seo: {
      title: "Gold & Diamond Jewellery",
      description:
        "Gold and diamond jewellery services at Diamond Valley in Dover, Delaware.",
    },
    order: 1,
  },
  {
    id: "svc-custom",
    slug: "custom-jewellery",
    name: "Custom Jewellery",
    summary: "Your design. Our craft.",
    description:
      "Share a reference, a photo, or a full brief. We guide materials, proportions, and finish until the piece feels unmistakably yours.",
    image: {
      src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=80",
      alt: "Custom jewellery design",
      width: 1400,
      height: 933,
    },
    process: [
      {
        title: "Consult",
        body: "Tell us the vision, budget, timeline, and any stones or metals you already own.",
      },
      {
        title: "Design",
        body: "We refine the concept together — style, metal, and proportions.",
      },
      {
        title: "Craft",
        body: "Your piece is made with care and finished for lasting wear.",
      },
    ],
    benefits: [
      "Personal consultation",
      "Name plates, grillz, and one-offs welcome",
      "Clear communication at every step",
    ],
    cta: {
      label: "Start a custom enquiry",
      href: "/contact?interest=custom-jewellery",
      intent: "primary",
    },
    seo: {
      title: "Custom Jewellery",
      description: "Custom jewellery design at Diamond Valley, Dover DE.",
    },
    order: 2,
  },
  {
    id: "svc-repairs",
    slug: "repairs",
    name: "Expert Repairs",
    summary: "Restoration and repair handled with precision.",
    description:
      "Resizing, stone securing, chain repair, polishing, and restoration so everyday and statement pieces stay wearable.",
    image: {
      src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1400&q=80",
      alt: "Jeweller repairing a piece",
      width: 1400,
      height: 933,
    },
    benefits: [
      "Resizing and stone work",
      "Chain and clasp repair",
      "Polishing and restoration",
    ],
    cta: {
      label: "Enquire about a repair",
      href: "/contact?interest=repairs",
      intent: "primary",
    },
    seo: {
      title: "Jewellery Repairs",
      description: "Expert jewellery repairs at Diamond Valley in Dover, Delaware.",
    },
    order: 3,
  },
  {
    id: "svc-grillz",
    slug: "grillz",
    name: "Grillz",
    summary: "Custom grillz with fit and finish that hold up.",
    description:
      "Gold, diamond, and mixed looks measured and crafted for a precise fit — from open-face to fully set styles.",
    image: {
      src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1400&q=80",
      alt: "Custom gold grillz style piece",
      width: 1400,
      height: 933,
    },
    process: [
      {
        title: "Consult",
        body: "Choose style, metal, and stone preferences.",
      },
      {
        title: "Fit",
        body: "We take impressions for a custom fit.",
      },
      {
        title: "Finish",
        body: "Your grillz are crafted and finished to order.",
      },
    ],
    cta: {
      label: "Enquire about grillz",
      href: "/contact?interest=grillz",
      intent: "primary",
    },
    seo: {
      title: "Custom Grillz",
      description: "Custom grillz by Diamond Valley in Dover, DE.",
    },
    order: 4,
  },
];
