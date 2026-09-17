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
    "Unofficial fan-built Skibidi Wars wiki hub for the September 17, 2026 Steam release of Skibidi Wars (AppID 4315830), sourced from the live Steam store page and SteamDB.",
  tagline: "Skibidi Wars wiki — launch-day reference for release, system requirements, factions and characters.",
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
