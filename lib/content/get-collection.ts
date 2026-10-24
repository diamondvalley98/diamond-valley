import { getSite } from "./get-site";
import { getProductsByCollectionSlug } from "./get-product";

export { getProductsByCollectionSlug } from "./get-product";

export function getCollectionBySlug(slug: string) {
  return getSite().collections.find((collection) => collection.slug === slug);
}

export function getAllCollections() {
  return [...getSite().collections].sort((a, b) => a.order - b.order);
}

export function getCollectionSlugs() {
  return getAllCollections().map((collection) => collection.slug);
}

/**
 * Products for a collection via getProductsByCollectionSlug,
 * ordered by the collection's productSlugs when present.
 */
export function getProductsByCollection(slug: string) {
  const collection = getCollectionBySlug(slug);
  const matched = getProductsByCollectionSlug(slug);
  if (!collection) return matched;

  const bySlug = new Map(matched.map((product) => [product.slug, product]));
  const ordered = collection.productSlugs
    .map((productSlug) => bySlug.get(productSlug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  const orderedIds = new Set(ordered.map((product) => product.id));
  const extras = matched.filter((product) => !orderedIds.has(product.id));
  return [...ordered, ...extras];
}
