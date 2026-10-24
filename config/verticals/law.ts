import type { VerticalConfig } from "@/types/vertical";

export const lawVertical: VerticalConfig = {
  id: "law",
  labels: {
    products: "Insights",
    product: "Insight",
    collections: "Practice areas",
    collection: "Practice area",
    services: "Services",
    service: "Service",
    enquire: "Request consultation",
    visit: "Visit the office",
  },
  modules: {
    products: true,
    collections: true,
    services: true,
    testimonials: true,
    faq: true,
  },
};
