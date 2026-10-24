import { siteConfig } from "@/config/site.config";

export function absoluteUrl(path = "/") {
  const base = siteConfig.baseUrl.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
