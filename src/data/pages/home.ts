import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "media-hero" },
  h1: "Skibidi Wars Wiki: Launch Hub for the 2026 Steam Release",
  seoTitle: "Skibidi Wars Wiki — Launch Hub, Roster & Status (2026)",
  metaDescription:
    "Skibidi Wars wiki hub for the 2026 Steam launch by Pakumi. Two-faction roster (Cameraman vs Skibidi Toilets), Early Access roadmap, price and launch status.",
  summary:
    "Skibidi Wars wiki hub that routes first-day buyers and Skibidi Toilet IP fans to launch status, two-faction roster, Toilet Emperor boss info, Early Access roadmap, system requirements, price, and the launch-day FAQ surface.",
  hero: {
    eyebrow: "Launch hub",
    subtitle:
      "Skibidi Wars is a Windows PC adaptation of the YouTube Skibidi Toilet web series, developed and published by Pakumi on Steam (AppID 4315830). The Steam store description names exactly two factions: Cameraman versus Skibidi Toilets, with Toilet Emperor leading the Toilet faction. DaFuq!?Boom! created the original Skibidi Toilet IP the game draws on, but is not the studio behind this Steam title.",
    ctas: [
      { label: "Release date", href: "/release-date/" },
      { label: "System requirements", href: "/system-requirements/" },
      { label: "Characters", href: "/characters/" },
    ],
  },
  quickAnswer:
    "Skibidi Wars wiki for the 2026 Steam launch. Skibidi Wars is developed and published by Pakumi and adapts the YouTube Skibidi Toilet web series IP that DaFuq!?Boom! created. The Steam store description names two factions: Cameraman versus Skibidi Toilets. Toilet Emperor heads the Skibidi Toilets and is the headline boss on launch day.",
  keyFacts: [
    { label: "Launch date", value: "September 17, 2026" },
    { label: "Early Access", value: "Active at launch (~6 month window)" },
    { label: "Developer & Publisher", value: "Pakumi" },
    { label: "IP creator", value: "DaFuq!?Boom! (Skibidi Toilet YouTube series)" },
    { label: "Platforms", value: "Windows PC (Steam)" },
    { label: "Factions", value: "Cameraman vs Skibidi Toilets" },
    { label: "Headline boss", value: "Toilet Emperor" },
    { label: "Last verified", value: "2026-09-17" },
  ],
  modules: [
    {
      id: "cluster-launch-status",
      type: "prose",
      heading: "Launch & Status",
      body: "Pakumi launched Skibidi Wars on Steam on September 17, 2026 as an Early Access title with a planned roughly six-month window before full release. The release date status page reflects that Early Access state from the Steam store and SteamDB metadata. The system requirements page points at the live Steam store spec list for AppID 4315830. Pricing and any edition tier live on the price hub, including the launch-window price-stability promise.",
    },
    {
      id: "cluster-characters-factions",
      type: "prose",
      heading: "Characters & Factions",
      body: "The Steam store description frames Skibidi Wars as a two-faction game: Cameraman versus Skibidi Toilets. Camera, TV, Speaker, and Titan labels come from the Skibidi Toilet YouTube IP and are treated here as legacy IP terminology rather than current-game faction names. Toilet Emperor heads the Skibidi Toilets and is the headline boss for new players. The characters hub breaks down each confirmed character and notes which sub-faction labels trace back to the parent series.",
    },
    {
      id: "cluster-episodes-story",
      type: "prose",
      heading: "Episodes & Story",
      body: "Skibidi Wars treats the YouTube Skibidi Toilet IP episode numbers as legacy-reference structure for the Steam launch. The episode hub lists the characters and bosses that appear in each chapter without presenting YouTube episode numbers as current-game store facts. The Steam store description, not the IP episode list, is the authoritative source for what each launch mission contains.",
    },
    {
      id: "cluster-new-player",
      type: "prose",
      heading: "Skibidi Wars Wiki for New Players",
      body: "The Skibidi Wars wiki for new players collects the three starting points every first-time buyer and Skibidi Toilet fan needs. The beginners guide covers launch-day combat basics from the Steam store description. The controls page explains the two-faction loop and how character or unit selection shapes a mission. The wiki hub points at launch-day FAQ clusters drawn from autocomplete data so the most common first-day questions route to a single answer surface.",
    },
    {
      id: "callout-faq-home-what-is-skibidi-wars",
      type: "callout",
      tone: "confirmed",
      title: "What is Skibidi Wars?",
      body: "Skibidi Wars is a 2026 Steam Early Access title developed and published by Pakumi. The game adapts the YouTube Skibidi Toilet web series by DaFuq!?Boom! into a two-faction PC shooter: Cameraman versus Skibidi Toilets.",
    },
    {
      id: "callout-faq-home-when-did-skibidi-wars-launch",
      type: "callout",
      tone: "confirmed",
      title: "When did Skibidi Wars launch on Steam?",
      body: "Skibidi Wars entered Steam Early Access on September 17, 2026 with a planned roughly six-month window before full release. The Steam store page is the authoritative source for the live launch date and any post-launch timing shift.",
    },
    {
      id: "callout-faq-home-who-developed-skibidi-wars",
      type: "callout",
      tone: "confirmed",
      title: "Who developed Skibidi Wars?",
      body: "Skibidi Wars is developed and published by Pakumi. DaFuq!?Boom! created the original Skibidi Toilet web series the game adapts, but is not the studio behind this Steam title. The Pakumi developer profile on Steam lists Skibidi Wars as its launch-day Steam title.",
    },
    {
      id: "callout-faq-home-launch-factions",
      type: "callout",
      tone: "confirmed",
      title: "Which factions are in Skibidi Wars?",
      body: "The Steam store description names two factions: Cameraman and Skibidi Toilets. Toilet Emperor is the Skibidi Toilets' headline boss. Camera, TV, Speaker, and Titan labels come from the YouTube Skibidi Toilet IP and are recorded here as legacy terminology rather than current-game faction names.",
    },
  ],
  faqIds: [
    "faq-home-what-is-skibidi-wars",
    "faq-home-when-did-skibidi-wars-launch",
    "faq-home-who-developed-skibidi-wars",
    "faq-home-launch-factions",
  ],
  relatedPageIds: [],
  schemaTypes: ["WebSite", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-09-17",
};