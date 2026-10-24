import { getAllCollections } from "./get-collection";
import { getFeaturedProducts } from "./get-product";
import { getAllServices } from "./get-service";
import { getSite } from "./get-site";

export function listFaqs(limit?: number) {
  const faqs = getSite().faqs;
  return typeof limit === "number" ? faqs.slice(0, limit) : faqs;
}

export function listTestimonials() {
  return getSite().testimonials;
}

export function listHomeCollections(limit?: number) {
  const collections = getAllCollections();
  return typeof limit === "number" ? collections.slice(0, limit) : collections;
}

export function listHomeProducts(filter?: "featured") {
  if (filter === "featured") return getFeaturedProducts();
  return getSite().products;
}

export function listHomeServices() {
  return getAllServices();
}
