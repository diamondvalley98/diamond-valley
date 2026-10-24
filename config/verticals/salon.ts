import type { VerticalConfig } from "@/types/vertical";

export const salonVertical: VerticalConfig = {
  id: "salon",
  labels: {
    products: "Looks",
    product: "Look",
    collections: "Collections",
    collection: "Collection",
    services: "Services",
    service: "Service",
    enquire: "Book",
    visit: "Visit the salon",
  },
  modules: {
    products: true,
    collections: true,
    services: true,
    testimonials: true,
    faq: true,
  },
};
