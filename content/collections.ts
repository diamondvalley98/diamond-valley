import type { Collection, FilterGroup } from "@/types";
import {
  braceletSubcategories,
  chainSubcategories,
  grillzSubcategories,
  pendantSubcategories,
  ringSubcategories,
  watchSubcategories,
} from "./collection-subcategories";
import { LOCAL_ASSETS as L, localMedia } from "./media/local-assets";

/** Section copy for Featured Collections — swap per vertical/client. */
export const collectionsSection = {
  label: "Collections",
  title: "Shop the Culture",
  description:
    "Iced Cubans, grillz, bust-downs, and custom pieces — hip-hop jewellery built for statement style.",
  exploreLabel: "Explore Collection",
} as const;

/** Collection detail page copy — swap labels/CTAs per vertical. */
export const collectionDetailCopy = {
  eyebrow: "Collection",
  piecesHeading: "Pieces in this collection",
  productCountLabel: (count: number) =>
    count === 1 ? "1 piece" : `${count} pieces`,
  highlights: ["Premium materials", "Handcrafted"] as const,
  empty: {
    title: "No pieces here yet",
    description:
      "This collection is being curated. Explore another collection while we finish selecting the perfect pieces.",
    ctaLabel: "Browse all collections",
    ctaHref: "/collections",
  },
  emptyFilters: {
    title: "No products match your selected filters.",
    description:
      "Try removing a filter or clear all to see every piece in this collection.",
    clearLabel: "Clear Filters",
  },
  customCta: {
    title: "Looking for something unique?",
    description:
      "Our craftsmen can create a completely custom piece tailored to your vision.",
    bookLabel: "Book Custom Design",
    bookHref: "/contact#enquiry",
    callLabel: "Call Store",
  },
} as const;

function facet(
  id: string,
  label: string,
  options: string[],
  attribute = id,
): FilterGroup {
  return { id, label, attribute, options };
}

/**
 * Collections pruned to match store photography in public/assets/new.
 * Subcategory tile names match filter options and product attributes.
 */
export const collections: Collection[] = [
  {
    id: "col-chains",
    slug: "chains",
    name: "Chains",
    summary: "Cubans and iced tennis chains with real street weight.",
    description:
      "Gold Cubans and iced silver links photographed in-store — enquire for width and length.",
    image: localMedia(
      L.chains.icedSilverCubanSet,
      "Iced silver Cuban chains from Diamond Valley",
    ),
    productSlugs: [
      "gold-cuban-chain",
      "iced-silver-cuban-chain",
      "iced-tennis-chain",
    ],
    filters: [
      facet("material", "Material", ["Gold", "Silver"]),
      facet("style", "Style", ["Cuban", "Tennis"]),
      facet("color", "Color", ["Yellow Gold", "Silver"]),
    ],
    subcategories: chainSubcategories,
    seo: {
      title: "Chains",
      description: "Cuban and tennis chains at Diamond Valley, Dover DE.",
    },
    order: 1,
  },
  {
    id: "col-bracelets",
    slug: "bracelets",
    name: "Bracelets",
    summary: "Cuban stacks, tennis ice, rope, and statement wrist pieces.",
    description:
      "Cuban, tennis, rope, and iced statement bracelets from the store floor.",
    image: localMedia(
      L.bracelet.statementSet,
      "Iced statement bracelets from Diamond Valley",
    ),
    productSlugs: [
      "gold-cuban-bracelet",
      "iced-statement-bracelet",
      "moissanite-tennis-bracelet",
      "heart-tennis-bracelet",
      "rope-bracelet",
    ],
    filters: [
      facet("material", "Material", ["Gold", "Silver"]),
      facet("style", "Style", ["Cuban", "Tennis", "Rope", "Statement"]),
      facet("color", "Color", ["Yellow Gold", "Silver"]),
    ],
    subcategories: braceletSubcategories,
    seo: {
      title: "Bracelets",
      description: "Iced bracelets at Diamond Valley in Dover, Delaware.",
    },
    order: 2,
  },
  {
    id: "col-pendants",
    slug: "pendants",
    name: "Pendants",
    summary: "Crosses, Guadalupe, animals, hustle nameplates, and custom icons.",
    description:
      "Hip-hop pendants from the store — crosses, religious, animals, nameplates, and symbols.",
    image: localMedia(
      L.pendant.legendary,
      "Legendary iced pendant set from Diamond Valley",
    ),
    productSlugs: [
      "iced-cross-pendant",
      "guadalupe-pendant",
      "iced-animal-pendant",
      "world-in-hand-pendant",
      "hustle-nameplate-pendant",
      "legendary-pendant-set",
      "iced-symbol-pendant",
    ],
    filters: [
      facet("style", "Style", [
        "Cross",
        "Religious",
        "Animal",
        "Nameplate",
        "Symbol",
        "Custom",
      ]),
      facet("material", "Material", ["Gold", "Silver"]),
    ],
    subcategories: pendantSubcategories,
    seo: {
      title: "Pendants",
      description: "Hip-hop pendants at Diamond Valley in Dover, Delaware.",
    },
    order: 3,
  },
  {
    id: "col-rings",
    slug: "rings",
    name: "Rings",
    summary: "Hip-hop men's rings, iced trio sets, bands, and women's styles.",
    description:
      "Street rings with weight — men's hip-hop, iced trios, diamond bands, and women's lab-grown options.",
    image: localMedia(
      L.diamonds.icedTrioSets,
      "Iced trio ring sets from Diamond Valley",
    ),
    productSlugs: [
      "hip-hop-men-rings",
      "iced-trio-ring-sets",
      "mens-diamond-band",
      "oval-lab-grown-ring",
      "white-gold-lab-grown-ring",
    ],
    filters: [
      facet("gender", "Gender", ["Men's", "Women's"]),
      facet("style", "Style", ["Hip-Hop", "Iced", "Band", "Solitaire"]),
      facet("color", "Color", ["Yellow Gold", "White Gold"]),
    ],
    subcategories: ringSubcategories,
    seo: {
      title: "Rings",
      description: "Hip-hop rings at Diamond Valley, Dover DE.",
    },
    order: 4,
  },
  {
    id: "col-grillz",
    slug: "grillz",
    name: "Grillz",
    summary: "Open-face, diamond-cut, and fully iced custom grillz.",
    description:
      "Custom grillz from mold to finish — open-face, diamond-cut, or fully iced.",
    image: localMedia(
      L.grillz.fullyIcedSet,
      "Fully iced grillz from Diamond Valley",
    ),
    productSlugs: [
      "fully-iced-grillz",
      "open-face-grillz",
      "six-piece-grillz",
      "diamond-cut-grillz",
      "top-bottom-grillz",
    ],
    filters: [
      facet("style", "Style", ["Fully Iced", "Open Face", "Diamond Cut"]),
    ],
    subcategories: grillzSubcategories,
    seo: {
      title: "Custom Grillz",
      description: "Custom grillz by Diamond Valley in Dover, Delaware.",
    },
    order: 5,
  },
  {
    id: "col-watches",
    slug: "watches",
    name: "Watches",
    summary: "Bust-down iced watches — Rolex-style street luxury.",
    description:
      "Iced bust-down watches photographed in-store. Enquire for available bases.",
    image: localMedia(
      L.watch.icedRolexRose,
      "Iced Rolex-style bust-down from Diamond Valley",
    ),
    productSlugs: ["iced-rolex-bust-down"],
    filters: [
      facet("style", "Style", ["Bust Down"]),
      facet("brand", "Brand", ["Rolex Style"]),
    ],
    subcategories: watchSubcategories,
    seo: {
      title: "Watches",
      description: "Bust-down iced watches at Diamond Valley, Dover DE.",
    },
    order: 6,
  },
];
