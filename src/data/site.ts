import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Skibidi Wars",
  brandMark: "SW",
  gameName: "Skibidi Wars",
  domain: "skibidiwars.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://skibidiwars.wiki").replace(/\/$/, ""),
  description:
    "Baseline identity for the Skibidi Wars wiki (Steam AppID 4315830). Content, theme and route details are finalized by the one-click-builder Skill sequence.",
  tagline: "Skibidi Wars wiki baseline — final content and theme follow.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Skibidi Wars Wiki Team",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Skibidi Wars on Steam (AppID 4315830)",
      href: "https://store.steampowered.com/app/4315830/",
      description: "Canonical Steam storefront entry for Skibidi Wars.",
    },
  ],
  disclaimer:
    "Skibidi Wars is the property of DaFuq!?Boom!. This site is an unofficial fan wiki sourced from the Steam AppID 4315830 store page; it is not endorsed by or affiliated with DaFuq!?Boom!.",
};
