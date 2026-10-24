import type { VerticalConfig, VerticalId } from "@/types/vertical";
import { clinicVertical } from "./clinic";
import { furnitureVertical } from "./furniture";
import { jewelryVertical } from "./jewelry";
import { lawVertical } from "./law";
import { restaurantVertical } from "./restaurant";
import { salonVertical } from "./salon";

const verticals: Record<VerticalId, VerticalConfig> = {
  jewelry: jewelryVertical,
  restaurant: restaurantVertical,
  salon: salonVertical,
  clinic: clinicVertical,
  law: lawVertical,
  furniture: furnitureVertical,
};

export function getVertical(id: VerticalId): VerticalConfig {
  return verticals[id];
}

export { clinicVertical, furnitureVertical, jewelryVertical, lawVertical, restaurantVertical, salonVertical };
