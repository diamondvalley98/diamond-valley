import type { MediaAsset } from "@/types";
import { CATALOGUE_PHOTOS } from "@/content/media/catalogue-images";

/**
 * Fallback pool for any remaining editorial query-string imageRefs.
 * Prefer absolute Unsplash URLs from catalogue-images (pass-through below).
 */
const UNSPLASH_PHOTO_POOL = Object.values(CATALOGUE_PHOTOS);

function hashRef(value: string) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function unsplashSrc(photoId: string, width = 1200) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

/**
 * Resolve a content image reference to a MediaAsset.
 * Absolute URLs pass through; editorial query strings map onto the catalogue pool.
 */
export function resolveImageRef(
  ref: string,
  alt = "",
  width = 1200,
  height = 1500,
): MediaAsset {
  const trimmed = ref.trim();
  if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith("/")) {
    return { src: trimmed, alt: alt || trimmed, width, height };
  }

  const photoId =
    UNSPLASH_PHOTO_POOL[hashRef(trimmed) % UNSPLASH_PHOTO_POOL.length];

  return {
    src: unsplashSrc(photoId, width),
    alt: alt || trimmed,
    width,
    height,
  };
}

/** Cover = first imageRef (collection subcategory convention). */
export function resolveCoverImageRef(
  imageRefs: string[] | undefined,
  alt = "",
): MediaAsset | null {
  const cover = imageRefs?.[0];
  if (!cover) return null;
  return resolveImageRef(cover, alt);
}
