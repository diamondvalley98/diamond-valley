import type {
  FilterGroup,
  FilterSelection,
  FilterableItem,
} from "@/schemas/filter";

function normalizeValues(
  value: string | string[] | undefined,
): string[] {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

/**
 * Generic facet matcher: AND across attributes, OR within an attribute.
 * Items missing a selected attribute do not match that facet.
 */
export function itemMatchesFilters(
  item: FilterableItem,
  selection: FilterSelection,
): boolean {
  for (const [attribute, selected] of Object.entries(selection)) {
    if (!selected.length) continue;
    const values = normalizeValues(item.attributes?.[attribute]);
    if (!values.length) return false;
    const hit = selected.some((option) => values.includes(option));
    if (!hit) return false;
  }
  return true;
}

export function applyFilters<T extends FilterableItem>(
  items: T[],
  selection: FilterSelection,
): T[] {
  if (!hasActiveFilters(selection)) return items;
  return items.filter((item) => itemMatchesFilters(item, selection));
}

export function hasActiveFilters(selection: FilterSelection): boolean {
  return Object.values(selection).some((values) => values.length > 0);
}

export function countActiveFilters(selection: FilterSelection): number {
  return Object.values(selection).reduce((sum, values) => sum + values.length, 0);
}

export type ActiveFilterChip = {
  attribute: string;
  label: string;
  value: string;
};

/** Flatten selection into removable chips using group labels from content. */
export function getActiveFilterChips(
  selection: FilterSelection,
  groups: FilterGroup[],
): ActiveFilterChip[] {
  const labelByAttribute = new Map(
    groups.map((group) => [group.attribute, group.label] as const),
  );

  const chips: ActiveFilterChip[] = [];
  for (const [attribute, values] of Object.entries(selection)) {
    for (const value of values) {
      chips.push({
        attribute,
        label: labelByAttribute.get(attribute) ?? attribute,
        value,
      });
    }
  }
  return chips;
}

export function toggleFilterValue(
  selection: FilterSelection,
  attribute: string,
  value: string,
): FilterSelection {
  const current = selection[attribute] ?? [];
  const next = current.includes(value)
    ? current.filter((item) => item !== value)
    : [...current, value];

  const updated: FilterSelection = { ...selection };
  if (next.length) updated[attribute] = next;
  else delete updated[attribute];
  return updated;
}

export function removeFilterValue(
  selection: FilterSelection,
  attribute: string,
  value: string,
): FilterSelection {
  const current = selection[attribute] ?? [];
  const next = current.filter((item) => item !== value);
  const updated: FilterSelection = { ...selection };
  if (next.length) updated[attribute] = next;
  else delete updated[attribute];
  return updated;
}

export function clearFilters(): FilterSelection {
  return {};
}
