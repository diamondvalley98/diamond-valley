import { cn } from "@/lib/utils";
import type { OpeningHours } from "@/types";

export type BusinessHoursProps = {
  hours: OpeningHours[];
  className?: string;
};

function formatTime(value: string) {
  if (value === "Closed") return "Closed";
  const [hourRaw, minuteRaw = "00"] = value.split(":");
  const hour = Number(hourRaw);
  if (Number.isNaN(hour)) return value;
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minuteRaw.padStart(2, "0")} ${period}`;
}

function formatRange(slot: OpeningHours) {
  if (slot.open === "Closed") {
    return slot.note ?? "Closed";
  }
  return `${formatTime(slot.open)} – ${formatTime(slot.close)}${
    slot.note ? ` (${slot.note})` : ""
  }`;
}

/**
 * Accessible opening-hours list — reusable across verticals.
 */
export function BusinessHours({ hours, className }: BusinessHoursProps) {
  return (
    <ul className={cn("space-y-2 text-sm", className)}>
      {hours.map((slot) => (
        <li
          key={slot.days.join("-")}
          className="flex justify-between gap-4 border-b border-[var(--border)]/60 pb-2 last:border-0 last:pb-0"
        >
          <span className="text-[var(--muted)]">{slot.days.join(", ")}</span>
          <span className="text-right font-medium">{formatRange(slot)}</span>
        </li>
      ))}
    </ul>
  );
}
