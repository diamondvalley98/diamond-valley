import type { CollectionSubcategory } from "@/types";
import { LOCAL_ASSETS as L } from "./media/local-assets";

function refs(
  id: string,
  name: string,
  cover: string,
  hero?: string,
  gallery?: string,
): CollectionSubcategory {
  const imageRefs = [cover, hero ?? cover];
  if (gallery) imageRefs.push(gallery);
  return { id, name, imageRefs };
}

/** Subcategory names MUST match filter option labels exactly. */

export const chainSubcategories: CollectionSubcategory[] = [
  refs("cuban", "Cuban", L.chains.icedSilverCubanSet, L.chains.goldCubanSet, L.chains.goldCubanWidths),
  refs("tennis", "Tennis", L.chains.icedSilverTennis, L.chains.tennisSizeGuide),
];

export const braceletSubcategories: CollectionSubcategory[] = [
  refs("cuban", "Cuban", L.bracelet.goldCubanStack, L.chains.goldCubanSet),
  refs("tennis", "Tennis", L.bracelet.tennisSet, L.bracelet.heartSet),
  refs("rope", "Rope", L.bracelet.thinRopeWrist, L.chains.guadalupeRope),
  refs("statement", "Statement", L.bracelet.statementSet, L.bracelet.tennisSet),
];

export const pendantSubcategories: CollectionSubcategory[] = [
  refs("cross", "Cross", L.bracelet.icedCrossCuban, L.pendant.symbols),
  refs("religious", "Religious", L.chains.guadalupeRope, L.bracelet.icedCrossCuban),
  refs("animal", "Animal", L.pendant.animals, L.pendant.legendary),
  refs("nameplate", "Nameplate", L.pendant.hustleText, L.pendant.symbols),
  refs("symbol", "Symbol", L.pendant.symbols, L.pendant.animals),
  refs("custom", "Custom", L.pendant.legendary, L.pendant.worldInHand),
];

export const ringSubcategories: CollectionSubcategory[] = [
  refs("mens", "Men's", L.diamonds.hipHopMenRings, L.diamonds.icedTrioSets, L.diamonds.menDiamondBand),
  refs("womens", "Women's", L.diamonds.ovalLabGrown, L.diamonds.whiteGoldLabGrown),
  refs("hip-hop", "Hip-Hop", L.diamonds.hipHopMenRings, L.diamonds.icedTrioSets),
  refs("iced", "Iced", L.diamonds.icedTrioSets, L.diamonds.hipHopMenRings),
  refs("band", "Band", L.diamonds.menDiamondBand, L.diamonds.shapesOnHand),
  refs("solitaire", "Solitaire", L.diamonds.ovalLabGrown, L.diamonds.whiteGoldLabGrown),
];

export const grillzSubcategories: CollectionSubcategory[] = [
  refs("fully-iced", "Fully Iced", L.grillz.fullyIcedSet, L.grillz.silverTopBottom),
  refs("open-face", "Open Face", L.grillz.openFaceTwoTooth, L.grillz.goldOpenFaceSix),
  refs("diamond-cut", "Diamond Cut", L.grillz.diamondCutWorn, L.grillz.fullyIcedSet),
];

export const watchSubcategories: CollectionSubcategory[] = [
  refs("bust-down", "Bust Down", L.watch.icedRolexRose, L.watch.icedRolexRose),
  refs("rolex-style", "Rolex Style", L.watch.icedRolexRose, L.watch.icedRolexRose),
];
