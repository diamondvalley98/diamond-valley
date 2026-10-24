import type { VerticalConfig } from "@/types/vertical";

export const clinicVertical: VerticalConfig = {
  id: "clinic",
  labels: {
    products: "Treatments",
    product: "Treatment",
    collections: "Care areas",
    collection: "Care area",
    services: "Services",
    service: "Service",
    enquire: "Request appointment",
    visit: "Visit the clinic",
  },
  modules: {
    products: true,
    collections: true,
    services: true,
    testimonials: true,
    faq: true,
  },
};
