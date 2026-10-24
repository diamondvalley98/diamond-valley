import type { FaqItem } from "@/types";

export type FinancingProvider = {
  id: string;
  name: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export type FinancingStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: "gem" | "layers" | "file" | "store";
};

export type FinancingHelpContact = {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  addressLines: string[];
};

export const financingPage = {
  seo: {
    title: "Financing | Diamond Valley",
    description:
      "Explore financing options available at Diamond Valley through our trusted financing partners.",
  },
  hero: {
    label: "Financing",
    title: "Flexible Financing Options",
    subtitle:
      "Take home the jewelry you love today with flexible payment solutions through our trusted financing partners.",
    primaryCta: {
      label: "View Financing Options",
      href: "#providers",
    },
    secondaryCta: {
      label: "Contact Us",
      href: "/contact",
    },
  },
  introduction: {
    label: "About financing",
    title: "Premium jewellery. Flexible paths to purchase.",
    body: "Diamond Valley partners with trusted third-party financing providers to help customers explore flexible payment options for premium jewellery. Availability, eligibility, and terms are determined by each provider — our team can help you choose the right next step.",
  },
  providersSection: {
    label: "Partners",
    title: "Financing Providers",
    description:
      "Learn more about each partner, then continue to their application experience.",
  },
  providers: [
    {
      id: "american-first-finance",
      name: "American First Finance",
      description: "Flexible financing for qualifying customers.",
      href: "/financing/american-first-finance.html",
      ctaLabel: "Learn More",
    },
    {
      id: "acima",
      name: "Acima",
      description: "Lease-to-own payment solutions for eligible customers.",
      href: "/financing/acima-financing.html",
      ctaLabel: "Learn More",
    },
    {
      id: "snap-finance",
      name: "Snap Finance",
      description:
        "Flexible payment options for your Diamond Valley purchase.",
      href: "/financing/snap-finance.html",
      ctaLabel: "Learn More",
    },
  ] satisfies FinancingProvider[],
  howItWorks: {
    label: "Process",
    title: "How Financing Works",
    description:
      "A simple path from choosing your piece to completing your purchase.",
    steps: [
      {
        id: "choose",
        step: 1,
        title: "Choose Your Jewelry",
        description:
          "Browse collections in-store or online and select the piece you love.",
        icon: "gem",
      },
      {
        id: "select",
        step: 2,
        title: "Select Your Financing Provider",
        description:
          "Compare our partner options and choose the provider that fits your needs.",
        icon: "layers",
      },
      {
        id: "apply",
        step: 3,
        title: "Complete the Online Application",
        description:
          "Continue to the provider’s secure application to review eligibility and terms.",
        icon: "file",
      },
      {
        id: "complete",
        step: 4,
        title: "Return to Diamond Valley and Complete Your Purchase",
        description:
          "Once you have a decision from the provider, our team helps you finish your purchase.",
        icon: "store",
      },
    ] satisfies FinancingStep[],
  },
  faq: {
    label: "FAQ",
    title: "Financing Questions",
    description:
      "General answers about financing at Diamond Valley. Provider-specific details are confirmed during each application.",
    items: [
      {
        id: "fin-providers",
        question: "What financing providers are available?",
        answer:
          "Diamond Valley currently partners with American First Finance, Acima, and Snap Finance. Each provider sets its own eligibility criteria, terms, and payment options.",
        category: "financing",
      },
      {
        id: "fin-apply",
        question: "How do I apply?",
        answer:
          "Choose a financing partner on this page, then follow the Learn More link to that provider’s application experience. You can also ask our team in-store for guidance before you begin.",
        category: "financing",
      },
      {
        id: "fin-decision",
        question: "Will I receive an instant decision?",
        answer:
          "Many applications receive a quick response, but timing and outcomes vary by provider and individual circumstances. Diamond Valley does not control or guarantee approval decisions.",
        category: "financing",
      },
      {
        id: "fin-custom",
        question: "Can I use financing on custom jewelry?",
        answer:
          "Financing may be available for qualifying purchases, including certain custom pieces, subject to the selected provider’s policies and your approval terms. Ask our team for help confirming what applies to your order.",
        category: "financing",
      },
    ] satisfies FaqItem[],
  },
  disclaimer: {
    title: "Financing disclaimer",
    body: "Financing is offered through independent third-party providers. Approval, terms, conditions, and payment options are determined by the selected financing provider. Diamond Valley does not guarantee approval or specific payment terms.",
  },
  help: {
    label: "Support",
    title: "Need help deciding?",
    description:
      "Contact Diamond Valley. Our team can walk you through the options and help you take the next step.",
    contactCtaLabel: "Contact Us",
    contactCtaHref: "/contact",
    callLabel: "Call Store",
  },
} as const;

export function getFinancingHelpContact(input: {
  phone: string;
  phoneHref: string;
  email: string;
  address: {
    street: string;
    suite?: string;
    city: string;
    region: string;
    postalCode: string;
  };
}): FinancingHelpContact {
  const { address } = input;
  return {
    phone: input.phone,
    phoneHref: input.phoneHref,
    email: input.email,
    emailHref: `mailto:${input.email}`,
    addressLines: [
      [address.street, address.suite].filter(Boolean).join(" "),
      `${address.city}, ${address.region} ${address.postalCode}`,
    ],
  };
}
