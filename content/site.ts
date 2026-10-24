import { siteConfig } from "@/config/site.config";
import type { SiteMeta } from "@/types";

export const siteMeta: SiteMeta = {
  id: "diamond-valley",
  name: "Diamond Valley",
  vertical: "jewelry",
  baseUrl: siteConfig.baseUrl,
  features: {
    showTestimonials: true,
    showAnnouncement: false,
    showStickyCallCta: true,
  },
};
