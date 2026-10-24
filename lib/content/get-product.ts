import { getSite } from "./get-site";
import type { Product } from "@/types";

export function getProductBySlug(slug: string) {
  return getSite().products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return getSite().products.find((product) => product.id === id);
}

export function getAllProducts() {
  return getSite().products;
}

export function getFeaturedProducts() {
  return getSite().products.filter((product) => product.featured);
}

export function getProductSlugs() {
  return getSite().products.map((product) => product.slug);
}

export function getProductsByCollectionSlug(collectionSlug: string) {
  return getSite().products.filter(
    (product) =>
      product.collectionSlug === collectionSlug ||
      product.collectionSlugs.includes(collectionSlug),
  );
}

/**
 * Related products from the same collection, excluding the current product.
 */
export function getRelatedProducts(
  currentProductId: string,
  collectionSlug: string,
  limit = 4,
): Product[] {
  return getProductsByCollectionSlug(collectionSlug)
    .filter((product) => product.id !== currentProductId)
    .slice(0, limit);
}
