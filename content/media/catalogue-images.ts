import type { MediaAsset } from "@/types";
import { LOCAL_ASSETS, localMedia } from "./local-assets";

/**
 * Hip-hop / urban jewellery photography — thick gold, Cubans, iced dials.
 * Prefer local store photos from /public/assets/new; Unsplash is fallback only.
 */

export function unsplash(
  photoId: string,
  alt: string,
  width = 1200,
  height = 1500,
): MediaAsset {
  return {
    src: `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`,
    alt,
    width,
    height,
  };
}

/** Bling-forward Unsplash IDs (Cuban links, heavy gold, iced watches). */
export const CATALOGUE_PHOTOS = {
  icedCuban: "photo-1680068098868-0f5548165d3d",
  thickGoldChain: "photo-1611591437281-460bfbe1220a",
  heavyGoldCraft: "photo-1617038260897-41a1f14a8ca0",
  goldCraftMacro: "photo-1617038220319-276d3cfab638",
  diamondIceSpread: "photo-1515562141207-7a88fb7ce338",
  icedDialWatch: "photo-1773414685933-bfc3ccf89a3c",
  goldWatchBling: "photo-1547996160-81dfa63595aa",
  classicIcedWatch: "photo-1523170335258-f5ed11844a49",
  statementPendant: "photo-1599643478518-a784e5dc4c8f",
  goldPendant: "photo-1771515411694-57fb626159d1",
  customGold: "photo-1602173574767-37ac01994b2a",
  /** Alias to thick Cuban — previous editorial ID was lifestyle/perfume stock */
  goldEditorial: "photo-1680068098868-0f5548165d3d",
  goldBracelet: "photo-1611652022419-a9419f74343d",
  icedNecklace: "photo-1596944924616-7b38e7cfac36",
  diamondEarrings: "photo-1535632066927-ab7c9ab60908",
  icedStuds: "photo-1630019852942-f89202989a59",
  goldRingMacro: "photo-1601121141461-9d6647bca1ed",
  diamondRing: "photo-1605100804763-247f67b3557e",
  /** Alias to thick gold chain — avoid delicate flatlay stock */
  jewelleryFlatlay: "photo-1611591437281-460bfbe1220a",
  stackedIce: "photo-1573408301185-9146fe634ad0",
} as const;

export type CataloguePhotoKey = keyof typeof CATALOGUE_PHOTOS;

export function catalogueImage(
  key: CataloguePhotoKey,
  alt: string,
): MediaAsset {
  return unsplash(CATALOGUE_PHOTOS[key], alt);
}

const L = LOCAL_ASSETS;

/** Collection covers — store photography from public/assets/new. */
export const collectionImages = {
  diamonds: localMedia(
    L.diamonds.icedTrioSets,
    "Iced diamond hip-hop ring sets from Diamond Valley",
  ),
  chains: localMedia(
    L.chains.icedSilverCubanSet,
    "Iced silver Cuban chains from Diamond Valley",
  ),
  bracelets: localMedia(
    L.bracelet.statementSet,
    "Iced statement bracelets from Diamond Valley",
  ),
  rings: localMedia(
    L.diamonds.hipHopMenRings,
    "10K hip-hop men's rings from Diamond Valley",
  ),
  pendants: localMedia(
    L.pendant.legendary,
    "Iced legendary pendant set from Diamond Valley",
  ),
  earrings: catalogueImage(
    "diamondEarrings",
    "Iced diamond earrings with street shine",
  ),
  grillz: localMedia(
    L.grillz.fullyIcedSet,
    "Fully iced custom grillz from Diamond Valley",
  ),
  watches: localMedia(
    L.watch.icedRolexRose,
    "Iced Rolex-style bust-down watch from Diamond Valley",
  ),
  customs: localMedia(
    L.pendant.symbols,
    "Custom iced symbol pendants from Diamond Valley",
  ),
  necklaces: localMedia(
    L.chains.goldCubanSet,
    "Gold Cuban necklace and bracelet set from Diamond Valley",
  ),
} as const;

/** @deprecated Prefer catalogueImage() directly on products. */
export const productImages = {} as const;

type ImageRef = CataloguePhotoKey | (string & {});

function resolveSrc(ref: ImageRef): string {
  if (typeof ref === "string" && ref.startsWith("/")) return ref;
  return unsplash(CATALOGUE_PHOTOS[ref as CataloguePhotoKey], "").src;
}

export function subcategoryImageRefs(
  cover: ImageRef,
  hero?: ImageRef,
  gallery?: ImageRef,
): [string, string] | [string, string, string] {
  const coverSrc = resolveSrc(cover);
  const heroSrc = resolveSrc(hero ?? cover);
  if (!gallery) return [coverSrc, heroSrc];
  return [coverSrc, heroSrc, resolveSrc(gallery)];
}
