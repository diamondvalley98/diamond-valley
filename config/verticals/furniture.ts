import type { VerticalConfig } from "@/types/vertical";

export const furnitureVertical: VerticalConfig = {
  id: "furniture",
  labels: {
    products: "Pieces",
    product: "Piece",
    collections: "Collections",
    collection: "Collection",
    services: "Services",
    service: "Service",
    enquire: "Enquire",
    visit: "Visit the showroom",
  },
  modules: {
    products: true,
    collections: true,
    services: true,
    testimonials: true,
    faq: true,
  },
};
