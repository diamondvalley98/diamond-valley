import type { VerticalConfig } from "@/types/vertical";

export const restaurantVertical: VerticalConfig = {
  id: "restaurant",
  labels: {
    products: "Menu",
    product: "Dish",
    collections: "Menus",
    collection: "Menu",
    services: "Experiences",
    service: "Experience",
    enquire: "Reserve",
    visit: "Visit us",
  },
  modules: {
    products: true,
    collections: true,
    services: true,
    testimonials: true,
    faq: true,
  },
};
