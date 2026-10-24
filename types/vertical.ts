export type VerticalId =
  | "jewelry"
  | "restaurant"
  | "salon"
  | "clinic"
  | "law"
  | "furniture";

export type VerticalLabels = {
  products: string;
  product: string;
  collections: string;
  collection: string;
  services: string;
  service: string;
  enquire: string;
  visit: string;
};

export type VerticalConfig = {
  id: VerticalId;
  labels: VerticalLabels;
  modules: {
    products: boolean;
    collections: boolean;
    services: boolean;
    testimonials: boolean;
    faq: boolean;
  };
};
