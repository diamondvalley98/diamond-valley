import type { MediaAsset, Product } from "@/types";
import { LOCAL_ASSETS as L, localMedia } from "./media/local-assets";

/** Homepage Featured Products section copy — swap per vertical/client. */
export const productsSection = {
  label: "Featured Products",
  title: "Signature Ice",
  description:
    "Iced Cubans, custom grillz, bust-down watches, and statement pendants — Diamond Valley street luxury.",
  limit: 4,
  enquireLabel: "Enquire Now",
  bottomCta: {
    text: "Looking for something different?",
    primaryLabel: "Shop Collections",
    primaryHref: "/collections",
    secondaryLabel: "Book Custom Design",
    secondaryHref: "/contact#enquiry",
  },
} as const;

function shot(path: string, alt: string): MediaAsset[] {
  return [localMedia(path, alt)];
}

function shots(...items: MediaAsset[]): MediaAsset[] {
  return items;
}

type ProductDraft = Omit<Product, "availability" | "featured"> & {
  availability?: Product["availability"];
  featured?: boolean;
};

function product(draft: ProductDraft): Product {
  return {
    availability: "enquiry-only",
    featured: false,
    ...draft,
  };
}

/**
 * Catalogue rebuilt from public/assets/new store photography only.
 * One product (or tight set) per real photo — hip-hop / urban jewellery.
 */
export const products: Product[] = [
  // ── Chains ─────────────────────────────────────────────────────────────
  product({
    id: "prod-gold-cuban-chain",
    slug: "gold-cuban-chain",
    name: "Gold Cuban Link Chain",
    category: "Chains",
    collectionSlug: "chains",
    collectionSlugs: ["chains"],
    shortDescription: "Thick gold Cuban links — store width options available.",
    description:
      "Gold Cuban link chains photographed in-store. Enquire for width, length, and karat.",
    metal: "Gold",
    featured: true,
    attributes: {
      material: "Gold",
      style: "Cuban",
      color: "Yellow Gold",
    },
    images: shots(
      localMedia(L.chains.goldCubanSet, "Gold Cuban necklace and bracelet set"),
      localMedia(L.chains.goldCubanWidths, "Gold Cuban chain width comparison"),
      localMedia(L.chains.chainStylesGuide, "Gold chain styles guide"),
    ),
    tags: ["cuban", "gold", "chain"],
    seo: {
      title: "Gold Cuban Link Chain",
      description: "Gold Cuban chains at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-iced-silver-cuban",
    slug: "iced-silver-cuban-chain",
    name: "Iced Silver Cuban Chain",
    category: "Chains",
    collectionSlug: "chains",
    collectionSlugs: ["chains"],
    shortDescription: "Iced silver Cuban links with full street shine.",
    description:
      "Iced silver Cuban chains from the store set. Enquire for length and stone options.",
    metal: "Silver",
    stone: "Moissanite / CZ",
    featured: true,
    attributes: {
      material: "Silver",
      style: "Cuban",
      color: "Silver",
    },
    images: shots(
      localMedia(L.chains.icedSilverCubanNecklace, "Iced silver Cuban necklace"),
      localMedia(L.chains.icedSilverCubanSet, "Iced silver Cuban chains set"),
    ),
    tags: ["cuban", "silver", "iced"],
    seo: {
      title: "Iced Silver Cuban Chain",
      description: "Iced silver Cubans at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-iced-tennis-chain",
    slug: "iced-tennis-chain",
    name: "Iced Tennis Chain",
    category: "Chains",
    collectionSlug: "chains",
    collectionSlugs: ["chains"],
    shortDescription: "Iced tennis chains — continuous sparkle down the neck.",
    description:
      "Iced silver tennis chains. Size guide available in-store; enquire for length.",
    metal: "Silver",
    stone: "Moissanite / CZ",
    attributes: {
      material: "Silver",
      style: "Tennis",
      color: "Silver",
    },
    images: shots(
      localMedia(L.chains.icedSilverTennis, "Iced silver tennis chains"),
      localMedia(L.chains.tennisSizeGuide, "Tennis chains size guide"),
    ),
    tags: ["tennis", "iced", "chain"],
    seo: {
      title: "Iced Tennis Chain",
      description: "Tennis chains at Diamond Valley, Dover DE.",
    },
  }),

  // ── Bracelets ──────────────────────────────────────────────────────────
  product({
    id: "prod-gold-cuban-bracelet",
    slug: "gold-cuban-bracelet",
    name: "Gold Cuban Bracelet",
    category: "Bracelets",
    collectionSlug: "bracelets",
    collectionSlugs: ["bracelets"],
    shortDescription: "Stacked gold Cuban bracelets with real wrist weight.",
    description:
      "Gold Cuban bracelet stacks from the store. Enquire for size and karat.",
    metal: "Gold",
    attributes: {
      material: "Gold",
      style: "Cuban",
      color: "Yellow Gold",
    },
    images: shot(L.bracelet.goldCubanStack, "Gold Cuban bracelet stack"),
    tags: ["cuban", "bracelet", "gold"],
    seo: {
      title: "Gold Cuban Bracelet",
      description: "Cuban bracelets at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-iced-statement-bracelet",
    slug: "iced-statement-bracelet",
    name: "Iced Statement Bracelets",
    category: "Bracelets",
    collectionSlug: "bracelets",
    collectionSlugs: ["bracelets"],
    shortDescription: "Iced statement bracelet set — maximum wrist ice.",
    description:
      "Iced statement bracelets photographed in-store. Enquire for available pieces.",
    metal: "Silver / Gold tone",
    stone: "Moissanite / CZ",
    featured: true,
    attributes: {
      material: "Silver",
      style: "Statement",
      color: "Silver",
    },
    images: shot(L.bracelet.statementSet, "Iced statement bracelets set"),
    tags: ["iced", "bracelet", "statement"],
    seo: {
      title: "Iced Statement Bracelets",
      description: "Iced bracelets at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-moissanite-tennis-bracelet",
    slug: "moissanite-tennis-bracelet",
    name: "925 Moissanite Tennis Bracelet",
    category: "Bracelets",
    collectionSlug: "bracelets",
    collectionSlugs: ["bracelets"],
    shortDescription: "925 silver moissanite tennis bracelets.",
    description:
      "Classic tennis bracelet ice in 925 with moissanite. Enquire for length.",
    metal: "925 Silver",
    stone: "Moissanite",
    attributes: {
      material: "Silver",
      style: "Tennis",
      color: "Silver",
    },
    images: shot(L.bracelet.tennisSet, "925 moissanite tennis bracelets"),
    tags: ["tennis", "moissanite", "bracelet"],
    seo: {
      title: "Moissanite Tennis Bracelet",
      description: "Tennis bracelets at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-heart-tennis-bracelet",
    slug: "heart-tennis-bracelet",
    name: "925 Moissanite Heart Bracelet",
    category: "Bracelets",
    collectionSlug: "bracelets",
    collectionSlugs: ["bracelets"],
    shortDescription: "Heart-link moissanite bracelets in 925 silver.",
    description:
      "Heart tennis-style bracelets with moissanite. Enquire for available sizes.",
    metal: "925 Silver",
    stone: "Moissanite",
    attributes: {
      material: "Silver",
      style: "Tennis",
      color: "Silver",
    },
    images: shot(L.bracelet.heartSet, "925 moissanite heart bracelets"),
    tags: ["heart", "tennis", "bracelet"],
    seo: {
      title: "Heart Tennis Bracelet",
      description: "Heart bracelets at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-rope-bracelet",
    slug: "rope-bracelet",
    name: "Rope Bracelet",
    category: "Bracelets",
    collectionSlug: "bracelets",
    collectionSlugs: ["bracelets"],
    shortDescription: "Thin rope bracelets stacked on the wrist.",
    description:
      "Rope bracelets for everyday layering. Enquire for metal and size.",
    metal: "Gold Options",
    attributes: {
      material: "Gold",
      style: "Rope",
      color: "Yellow Gold",
    },
    images: shot(L.bracelet.thinRopeWrist, "Thin rope bracelets on wrist"),
    tags: ["rope", "bracelet"],
    seo: {
      title: "Rope Bracelet",
      description: "Rope bracelets at Diamond Valley, Dover DE.",
    },
  }),

  // ── Pendants ───────────────────────────────────────────────────────────
  product({
    id: "prod-iced-cross-pendant",
    slug: "iced-cross-pendant",
    name: "Iced Cross Pendant",
    category: "Pendants",
    collectionSlug: "pendants",
    collectionSlugs: ["pendants"],
    shortDescription: "Iced cross pendants on Cuban chains.",
    description:
      "Iced cross pendants from the store set. Enquire for size and stone options.",
    metal: "Silver / Gold tone",
    stone: "Moissanite / CZ",
    attributes: {
      style: "Cross",
      material: "Silver",
    },
    images: shot(L.bracelet.icedCrossCuban, "Iced cross pendants on Cuban chains"),
    tags: ["cross", "pendant", "iced"],
    seo: {
      title: "Iced Cross Pendant",
      description: "Cross pendants at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-guadalupe-pendant",
    slug: "guadalupe-pendant",
    name: "Guadalupe Pendant",
    category: "Pendants",
    collectionSlug: "pendants",
    collectionSlugs: ["pendants"],
    shortDescription: "Guadalupe pendant on rope chain.",
    description:
      "Religious Guadalupe pendant with rope chain. Enquire for metal options.",
    metal: "Gold Options",
    attributes: {
      style: "Religious",
      material: "Gold",
    },
    images: shot(L.chains.guadalupeRope, "Guadalupe pendant on rope chain"),
    tags: ["guadalupe", "religious", "pendant"],
    seo: {
      title: "Guadalupe Pendant",
      description: "Guadalupe pendants at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-animal-pendant",
    slug: "iced-animal-pendant",
    name: "Iced Animal Pendants",
    category: "Pendants",
    collectionSlug: "pendants",
    collectionSlugs: ["pendants"],
    shortDescription: "Iced animal motif pendants from the store.",
    description:
      "Animal iced pendants — enquire for available designs.",
    metal: "Silver / Gold tone",
    stone: "Moissanite / CZ",
    attributes: {
      style: "Animal",
      material: "Silver",
    },
    images: shot(L.pendant.animals, "Iced animal pendants"),
    tags: ["animal", "pendant", "iced"],
    seo: {
      title: "Iced Animal Pendants",
      description: "Animal pendants at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-world-hand-pendant",
    slug: "world-in-hand-pendant",
    name: "World in Hand Pendant",
    category: "Pendants",
    collectionSlug: "pendants",
    collectionSlugs: ["pendants"],
    shortDescription: "World-in-hand statement pendants.",
    description:
      "World-in-hand iced pendants. Enquire to reserve or customize.",
    metal: "Silver / Gold tone",
    stone: "Moissanite / CZ",
    attributes: {
      style: "Custom",
      material: "Silver",
    },
    images: shot(L.pendant.worldInHand, "World in hand pendants"),
    tags: ["world", "pendant", "custom"],
    seo: {
      title: "World in Hand Pendant",
      description: "World in hand pendants at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-hustle-pendant",
    slug: "hustle-nameplate-pendant",
    name: "Hustle Nameplate Pendant",
    category: "Pendants",
    collectionSlug: "pendants",
    collectionSlugs: ["pendants"],
    shortDescription: "Hustle and custom text nameplate pendants.",
    description:
      "Iced hustle / text nameplates. Custom wording available on enquiry.",
    metal: "Silver / Gold tone",
    stone: "Moissanite / CZ",
    availability: "made-to-order",
    attributes: {
      style: "Nameplate",
      material: "Silver",
    },
    images: shot(L.pendant.hustleText, "Hustle text pendants"),
    tags: ["hustle", "nameplate", "pendant"],
    seo: {
      title: "Hustle Nameplate Pendant",
      description: "Nameplate pendants at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-legendary-pendant",
    slug: "legendary-pendant-set",
    name: "Legendary Pendant Set",
    category: "Pendants",
    collectionSlug: "pendants",
    collectionSlugs: ["pendants"],
    shortDescription: "Iced legendary pendant set from the store.",
    description:
      "Statement legendary iced pendants. Enquire for available pieces.",
    metal: "Silver / Gold tone",
    stone: "Moissanite / CZ",
    featured: true,
    attributes: {
      style: "Custom",
      material: "Silver",
    },
    images: shot(L.pendant.legendary, "Legendary iced pendant set"),
    tags: ["legendary", "pendant", "iced"],
    seo: {
      title: "Legendary Pendant Set",
      description: "Statement pendants at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-symbol-pendant",
    slug: "iced-symbol-pendant",
    name: "Iced Symbol Pendants",
    category: "Pendants",
    collectionSlug: "pendants",
    collectionSlugs: ["pendants"],
    shortDescription: "Iced symbol and icon pendants.",
    description:
      "Symbol iced pendants from the store set. Enquire for available designs.",
    metal: "Silver / Gold tone",
    stone: "Moissanite / CZ",
    attributes: {
      style: "Symbol",
      material: "Silver",
    },
    images: shot(L.pendant.symbols, "Iced symbol pendants"),
    tags: ["symbol", "pendant", "iced"],
    seo: {
      title: "Iced Symbol Pendants",
      description: "Symbol pendants at Diamond Valley, Dover DE.",
    },
  }),

  // ── Rings (photos lived under diamonds/) ───────────────────────────────
  product({
    id: "prod-hip-hop-men-rings",
    slug: "hip-hop-men-rings",
    name: "10K Hip-Hop Men's Rings",
    category: "Rings",
    collectionSlug: "rings",
    collectionSlugs: ["rings"],
    shortDescription: "10K hip-hop men's rings with street weight.",
    description:
      "Men's 10K hip-hop rings from the store. Enquire for size and style.",
    metal: "10K Gold",
    featured: true,
    attributes: {
      gender: "Men's",
      style: "Hip-Hop",
      color: "Yellow Gold",
    },
    images: shot(L.diamonds.hipHopMenRings, "10K hip-hop men's rings"),
    tags: ["ring", "mens", "hip-hop"],
    seo: {
      title: "Hip-Hop Men's Rings",
      description: "Men's hip-hop rings at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-iced-trio-rings",
    slug: "iced-trio-ring-sets",
    name: "Iced Trio Ring Sets",
    category: "Rings",
    collectionSlug: "rings",
    collectionSlugs: ["rings"],
    shortDescription: "Fully iced trio ring sets — maximum finger ice.",
    description:
      "Iced trio ring sets photographed in-store. Enquire for sizing.",
    metal: "Gold Options",
    stone: "Diamonds / Moissanite",
    featured: true,
    attributes: {
      gender: "Men's",
      style: "Iced",
      color: "Yellow Gold",
    },
    images: shot(L.diamonds.icedTrioSets, "Iced trio ring sets"),
    tags: ["ring", "iced", "trio"],
    seo: {
      title: "Iced Trio Ring Sets",
      description: "Iced ring sets at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-mens-diamond-band",
    slug: "mens-diamond-band",
    name: "14K Natural Diamond Men's Band",
    category: "Rings",
    collectionSlug: "rings",
    collectionSlugs: ["rings"],
    shortDescription: "14K men's band with natural diamonds.",
    description:
      "14K natural diamond men's band. Enquire for size and available stock.",
    metal: "14K Gold",
    stone: "Natural Diamonds",
    attributes: {
      gender: "Men's",
      style: "Band",
      color: "Yellow Gold",
    },
    images: shot(L.diamonds.menDiamondBand, "14K natural diamond men's band"),
    tags: ["ring", "band", "diamond"],
    seo: {
      title: "Men's Diamond Band",
      description: "Men's diamond bands at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-oval-lab-ring",
    slug: "oval-lab-grown-ring",
    name: "14K Oval Lab-Grown Ring",
    category: "Rings",
    collectionSlug: "rings",
    collectionSlugs: ["rings"],
    shortDescription: "14K oval lab-grown diamond ring.",
    description:
      "14K oval lab-grown ring from the store. Enquire for size and details.",
    metal: "14K Gold",
    stone: "Lab Grown",
    attributes: {
      gender: "Women's",
      style: "Solitaire",
      color: "Yellow Gold",
    },
    images: shot(L.diamonds.ovalLabGrown, "14K oval lab-grown ring"),
    tags: ["ring", "lab-grown", "womens"],
    seo: {
      title: "Oval Lab-Grown Ring",
      description: "Lab-grown rings at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-white-gold-lab-ring",
    slug: "white-gold-lab-grown-ring",
    name: "14K White Gold Lab-Grown Ring",
    category: "Rings",
    collectionSlug: "rings",
    collectionSlugs: ["rings"],
    shortDescription: "14K white gold lab-grown diamond ring.",
    description:
      "14K white gold lab-grown ring. Enquire for size and available stock.",
    metal: "14K White Gold",
    stone: "Lab Grown",
    attributes: {
      gender: "Women's",
      style: "Solitaire",
      color: "White Gold",
    },
    images: shot(L.diamonds.whiteGoldLabGrown, "14K white gold lab-grown ring"),
    tags: ["ring", "lab-grown", "white-gold"],
    seo: {
      title: "White Gold Lab-Grown Ring",
      description: "White gold lab-grown rings at Diamond Valley, Dover DE.",
    },
  }),

  // ── Grillz ─────────────────────────────────────────────────────────────
  product({
    id: "prod-fully-iced-grillz",
    slug: "fully-iced-grillz",
    name: "Fully Iced Grillz",
    category: "Grillz",
    collectionSlug: "grillz",
    collectionSlugs: ["grillz"],
    shortDescription: "Fully iced grillz set — maximum diamond coverage.",
    description:
      "Fully iced custom grillz. Mold appointment required — enquire to start.",
    metal: "Gold Options",
    stone: "Diamonds / Moissanite",
    availability: "made-to-order",
    featured: true,
    attributes: {
      style: "Fully Iced",
    },
    images: shot(L.grillz.fullyIcedSet, "Fully iced grillz set"),
    tags: ["grillz", "iced"],
    seo: {
      title: "Fully Iced Grillz",
      description: "Iced grillz at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-open-face-grillz",
    slug: "open-face-grillz",
    name: "Open Face Grillz",
    category: "Grillz",
    collectionSlug: "grillz",
    collectionSlugs: ["grillz"],
    shortDescription: "Iced open-face two-tooth grillz.",
    description:
      "Open-face iced grillz. Book a mold appointment to start.",
    metal: "Gold Options",
    stone: "Moissanite / CZ",
    availability: "made-to-order",
    attributes: {
      style: "Open Face",
    },
    images: shot(L.grillz.openFaceTwoTooth, "Iced open-face two-tooth grillz"),
    tags: ["grillz", "open-face"],
    seo: {
      title: "Open Face Grillz",
      description: "Open face grillz at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-six-piece-grillz",
    slug: "six-piece-grillz",
    name: "6-Piece Open Face Grillz",
    category: "Grillz",
    collectionSlug: "grillz",
    collectionSlugs: ["grillz"],
    shortDescription: "Gold open-face six-piece grillz.",
    description:
      "Classic 6-piece open-face gold grillz. Mold required.",
    metal: "Gold Options",
    availability: "made-to-order",
    attributes: {
      style: "Open Face",
    },
    images: shot(L.grillz.goldOpenFaceSix, "Gold open-face six-piece grillz"),
    tags: ["grillz", "six-piece"],
    seo: {
      title: "6-Piece Grillz",
      description: "6-piece grillz at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-diamond-cut-grillz",
    slug: "diamond-cut-grillz",
    name: "Diamond Cut Grillz",
    category: "Grillz",
    collectionSlug: "grillz",
    collectionSlugs: ["grillz"],
    shortDescription: "Gold diamond-cut grillz with faceted shine.",
    description:
      "Diamond-cut gold grillz worn style. Enquire for fit process.",
    metal: "Gold Options",
    availability: "made-to-order",
    attributes: {
      style: "Diamond Cut",
    },
    images: shot(L.grillz.diamondCutWorn, "Gold diamond-cut grillz worn"),
    tags: ["grillz", "diamond-cut"],
    seo: {
      title: "Diamond Cut Grillz",
      description: "Diamond cut grillz at Diamond Valley, Dover DE.",
    },
  }),
  product({
    id: "prod-top-bottom-grillz",
    slug: "top-bottom-grillz",
    name: "Top & Bottom Iced Grillz",
    category: "Grillz",
    collectionSlug: "grillz",
    collectionSlugs: ["grillz"],
    shortDescription: "Silver iced top and bottom grillz set.",
    description:
      "Full top-and-bottom iced grillz. Mold appointment required.",
    metal: "Silver / Gold Options",
    stone: "Moissanite / CZ",
    availability: "made-to-order",
    attributes: {
      style: "Fully Iced",
    },
    images: shot(L.grillz.silverTopBottom, "Silver iced top and bottom grillz"),
    tags: ["grillz", "top-bottom", "iced"],
    seo: {
      title: "Top & Bottom Grillz",
      description: "Top and bottom grillz at Diamond Valley, Dover DE.",
    },
  }),

  // ── Watches ────────────────────────────────────────────────────────────
  product({
    id: "prod-iced-rolex-bust-down",
    slug: "iced-rolex-bust-down",
    name: "Iced Rolex-Style Bust Down",
    category: "Watches",
    collectionSlug: "watches",
    collectionSlugs: ["watches"],
    shortDescription: "Rose iced Datejust-style bust-down watch.",
    description:
      "Iced Rolex-style Datejust bust-down in rose. Enquire for available bases and ice options.",
    metal: "Rose / Two-Tone",
    stone: "Diamonds / Moissanite",
    featured: true,
    attributes: {
      style: "Bust Down",
      brand: "Rolex Style",
    },
    images: shot(L.watch.icedRolexRose, "Iced Rolex Datejust rose bust-down"),
    tags: ["watch", "bust-down", "iced"],
    seo: {
      title: "Iced Rolex-Style Bust Down",
      description: "Bust-down watches at Diamond Valley, Dover DE.",
    },
  }),
];
