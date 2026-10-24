import type { FaqItem } from "@/types";

/** Homepage FAQ section copy — swap per vertical/client. */
export const faqSection = {
  label: "FAQ",
  title: "Frequently Asked Questions",
  description:
    "Find answers to some of the most common questions about our jewellery, custom work, repairs, and consultations.",
  bottomCta: {
    text: "Still have a question?",
    primaryLabel: "Contact Us",
    primaryHref: "/contact",
    secondaryLabel: "Call Store",
  },
};

export const faqs: FaqItem[] = [
  {
    id: "faq-custom",
    question: "Do you create custom jewellery?",
    answer:
      "Yes. We work with you one-on-one to design a piece shaped around your vision, occasion, and preferences — from the first sketch through the finished craft.",
    category: "custom",
  },
  {
    id: "faq-repair",
    question: "Do you repair jewellery?",
    answer:
      "Absolutely. We handle resizing, stone work, chain repair, polishing, and thoughtful restoration for everyday and statement pieces alike.",
    category: "repairs",
  },
  {
    id: "faq-timeline",
    question: "How long does a custom piece take?",
    answer:
      "Timelines vary with design complexity and materials. After your consultation, we share a clear estimate so you know what to expect before we begin.",
    category: "custom",
  },
  {
    id: "faq-resize",
    question: "Can I resize a ring?",
    answer:
      "In most cases, yes. Bring your ring in and we will advise on the safest approach based on the metal, setting, and how much adjustment you need.",
    category: "repairs",
  },
  {
    id: "faq-appointment",
    question: "Do I need an appointment?",
    answer:
      "Walk-ins are welcome during store hours. For custom consultations or detailed repairs, booking ahead helps us give you focused, unrushed time.",
    category: "visit",
  },
  {
    id: "faq-pricing",
    question: "How do I request pricing?",
    answer:
      "Reach out by phone or through our contact form with details or photos of what you have in mind. We will guide you through options and pricing without pressure.",
    category: "contact",
  },
];
