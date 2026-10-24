import { getSite } from "./get-site";

export function getServiceBySlug(slug: string) {
  return getSite().services.find((service) => service.slug === slug);
}

export function getAllServices() {
  return [...getSite().services].sort((a, b) => a.order - b.order);
}

export function getServiceSlugs() {
  return getAllServices().map((service) => service.slug);
}
