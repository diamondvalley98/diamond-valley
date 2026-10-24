import type { MediaAsset } from "@/types";

/**
 * Local product photography under /public/assets/new/*
 * Folder layout mirrors catalogue categories.
 */
export function localMedia(
  path: string,
  alt: string,
  width = 1200,
  height = 1500,
): MediaAsset {
  return { src: path, alt, width, height };
}

/** Every scanned file from public/assets/new (URL-safe names). */
export const LOCAL_ASSETS = {
  bracelet: {
    statementSet: "/assets/new/bracelet/iced-statement-bracelets-set.jpeg",
    tennisSet: "/assets/new/bracelet/925-moissanite-tennis-bracelets.jpeg",
    heartSet: "/assets/new/bracelet/925-moissanite-heart-bracelets.jpeg",
    goldCubanStack: "/assets/new/bracelet/gold-cuban-bracelet-stack.png",
    thinRopeWrist: "/assets/new/bracelet/thin-rope-bracelets-on-wrist.png",
    /** Misfiled originally — iced cross pendants on Cuban chains */
    icedCrossCuban: "/assets/new/bracelet/iced-cross-pendants-cuban.jpeg",
  },
  chains: {
    icedSilverCubanNecklace: "/assets/new/chains/iced-silver-cuban-necklace.jpeg",
    icedSilverCubanSet: "/assets/new/chains/iced-silver-cuban-chains-set.jpeg",
    icedSilverTennis: "/assets/new/chains/iced-silver-tennis-chains.jpeg",
    tennisSizeGuide: "/assets/new/chains/tennis-chains-size-guide.jpeg",
    goldCubanSet: "/assets/new/chains/gold-cuban-necklace-bracelet-set.png",
    goldCubanWidths: "/assets/new/chains/gold-cuban-width-comparison.png",
    chainStylesGuide: "/assets/new/chains/gold-chain-styles-guide.png",
    guadalupeRope: "/assets/new/chains/guadalupe-pendant-rope-chain.png",
  },
  diamonds: {
    hipHopMenRings: "/assets/new/diamonds/10k-hip-hop-men-rings.jpeg",
    ovalLabGrown: "/assets/new/diamonds/14k-oval-lab-grown-ring.png",
    menDiamondBand: "/assets/new/diamonds/14k-natural-diamond-men-band.png",
    whiteGoldLabGrown: "/assets/new/diamonds/14k-white-gold-lab-grown-ring.png",
    shapesOnHand: "/assets/new/diamonds/diamond-shapes-on-hand.png",
    icedTrioSets: "/assets/new/diamonds/iced-trio-ring-sets.jpeg",
    shapesGuide: "/assets/new/diamonds/engagement-ring-shapes-guide.png",
  },
  grillz: {
    openFaceTwoTooth: "/assets/new/grillz/iced-open-face-two-tooth.png",
    fullyIcedSet: "/assets/new/grillz/fully-iced-grillz-set.png",
    goldOpenFaceSix: "/assets/new/grillz/gold-open-face-six.png",
    diamondCutWorn: "/assets/new/grillz/gold-diamond-cut-grillz-worn.png",
    silverTopBottom: "/assets/new/grillz/silver-iced-top-bottom-grillz.png",
  },
  pendant: {
    animals: "/assets/new/pendant/iced-animal-pendants.jpeg",
    worldInHand: "/assets/new/pendant/world-in-hand-pendants.jpeg",
    hustleText: "/assets/new/pendant/hustle-text-pendants.jpeg",
    legendary: "/assets/new/pendant/legendary-pendant-set.jpeg",
    symbols: "/assets/new/pendant/iced-symbol-pendants.jpeg",
  },
  watch: {
    icedRolexRose: "/assets/new/watch/iced-rolex-datejust-rose.jpg",
    video: "/assets/new/watch/iced-watch-video.mp4",
  },
} as const;

export function local(
  path: string,
  alt: string,
): MediaAsset[] {
  return [localMedia(path, alt)];
}
