import type { SiteMeta } from "@/types";

export function AnnouncementBar({
  message,
  enabled,
}: {
  message?: string;
  enabled: SiteMeta["features"]["showAnnouncement"];
}) {
  if (!enabled || !message) return null;
  return (
    <div className="bg-[var(--primary)] px-4 py-2 text-center text-sm font-medium text-[var(--primary-foreground)]">
      {message}
    </div>
  );
}
