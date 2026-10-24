import type { FooterContent } from "@/types";

export const footer: FooterContent = {
  tagline: "Diamonds · Chains · Grillz · Watches · Customs",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Collections", href: "/collections" },
        { label: "Services", href: "/services" },
        { label: "Financing", href: "/financing" },
        { label: "About", href: "/about" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Custom jewellery", href: "/services/custom-jewellery" },
        { label: "Repairs", href: "/services/repairs" },
        { label: "Grillz", href: "/services/grillz" },
        { label: "Gold & diamond", href: "/services/gold-diamond-jewellery" },
      ],
    },
    {
      title: "Visit",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Call (302) 580-4053", href: "tel:+13025804053" },
        {
          label: "Email us",
          href: "mailto:diamondvalley98@gmail.com",
        },
      ],
    },
  ],
  showSocials: true,
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};
