import { siteContent } from "@/content";
import { siteContentSchema } from "@/schemas/site";
import type { SiteContent } from "@/types";

let cached: SiteContent | null = null;

export function getSite(): SiteContent {
  // In development, never keep a process-level cache — Turbopack HMR can
  // update content modules while this module still returns stale `cached`.
  if (process.env.NODE_ENV !== "development" && cached) return cached;
  cached = siteContentSchema.parse(siteContent);
  return cached;
}

export function getBusiness() {
  return getSite().business;
}

export function getMainNav() {
  return getSite().navigation;
}

export function getVerticalId() {
  return getSite().site.vertical;
}
