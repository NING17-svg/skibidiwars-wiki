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
    "Skibidi Wars wiki hub for the 2026 Steam launch. Find the roster, factions, Toilet Emperor boss, system requirements, price and launch status.",
  summary:
    "Skibidi Wars wiki hub that routes first-day buyers and Skibidi Toilet IP fans to launch status, faction roster, Toilet Emperor boss info, system requirements, price, episode context, and the launch-day FAQ surface.",
  hero: {
    eyebrow: "Launch hub",
    subtitle:
      "Skibidi Wars is the first official Skibidi Wars game, released September 17, 2026 by DaFuq!?Boom!. The title is a Windows PC adaptation of the YouTube Skibidi Toilet web series IP and is currently available only on Steam. The launch roster includes six factions: Allies, Toilets, Cameras, TVs, Speakers, and Titans.",
    ctas: [
      { label: "Release date", href: "/release-date/" },
      { label: "System requirements", href: "/system-requirements/" },
      { label: "Characters", href: "/characters/" },
    ],
  },
  quickAnswer:
    "Skibidi Wars wiki for the 2026 Steam launch. Skibidi Wars is the first official Skibidi Wars game, released September 17, 2026 by DaFuq!?Boom!. The title is a Windows PC adaptation of the YouTube Skibidi Toilet web series IP and is currently available only on Steam. The launch roster includes six factions: Allies, Toilets, Cameras, TVs, Speakers, and Titans. Headline characters such as Toilet Emperor, Titan Speakerman, Titan TV Man, and Titan Cameraman are confirmed on the Steam store description.",
  keyFacts: [
    { label: "Launch date", value: "September 17, 2026" },
    { label: "Early Access", value: "None as of 2026-09-17" },
    { label: "Platforms", value: "Windows PC (Steam)" },
    { label: "Factions", value: "Allies, Toilets, Cameras, TVs, Speakers, Titans" },
    { label: "Headline boss", value: "Toilet Emperor" },
    { label: "Last verified", value: "2026-09-17" },
  ],
  modules: [
    {
      id: "cluster-launch-status",
      type: "prose",
      heading: "Launch & Status",
      body: "The launch and status cluster covers the first things every US buyer checks on launch day. The release date status page locks in the September 17, 2026 launch window and confirms there is no Early Access as of the September 17, 2026 research date. The system requirements page points back at the live Steam store spec list for AppID 4315830. Pricing and any edition tier live on the price hub.",
    },
    {
      id: "cluster-characters-factions",
      type: "prose",
      heading: "Characters & Factions",
      body: "Six factions frame every fight in Skibidi Wars: Allies, Toilets, Cameras, TVs, Speakers, and Titans. The characters and units hub breaks down each faction with autocomplete-confirmed character names from the Steam store description. Toilet Emperor leads the Toilet faction and is the headline boss for new players. The Speaker, Camera, and TV faction headliners — Titan Speakerman, Titan Cameraman, and Titan TV Man — sit one click deeper from the characters hub.",
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
      body: "The Skibidi Wars wiki for new players collects the three starting points every first-time buyer and Skibidi Toilet fan needs. The beginners guide covers launch-day combat basics from the Steam store description. The controls page explains the faction-versus-faction loop and how character or unit selection shapes a mission. The wiki hub points at launch-day FAQ clusters drawn from autocomplete data so the most common first-day questions route to a single answer surface.",
    },
    {
      id: "callout-faq-home-what-is-skibidi-wars",
      type: "callout",
      tone: "confirmed",
      title: "What is Skibidi Wars?",
      body: "Skibidi Wars is the first official Skibidi Wars game, a launch-day 2026 Steam title by DaFuq!?Boom! that adapts the YouTube Skibidi Toilet web series into a faction-versus-faction PC game. It ships with the Allies, Toilets, Cameras, TVs, Speakers, and Titans factions on Steam.",
    },
    {
      id: "callout-faq-home-when-did-skibidi-wars-launch",
      type: "callout",
      tone: "confirmed",
      title: "When did Skibidi Wars launch on Steam?",
      body: "Skibidi Wars launched on September 17, 2026 on Steam, with no Early Access period as of the September 17, 2026 research date. The Steam store page is the authoritative source for the live launch date and any post-launch timing shift.",
    },
    {
      id: "callout-faq-home-who-developed-skibidi-wars",
      type: "callout",
      tone: "confirmed",
      title: "Who developed Skibidi Wars?",
      body: "Skibidi Wars is developed and published by DaFuq!?Boom!, the same creator behind the YouTube Skibidi Toilet web series. The DaFuq!?Boom! developer profile on Steam lists Skibidi Wars as the studio's launch-day Steam title.",
    },
    {
      id: "callout-faq-home-launch-factions",
      type: "callout",
      tone: "confirmed",
      title: "Which factions are confirmed for the Skibidi Wars launch roster?",
      body: "Allies, Toilets, Cameras, TVs, Speakers, and Titans are the six factions confirmed on the Steam store description. Named characters such as Toilet Emperor, Titan Speakerman, Titan TV Man, and Titan Cameraman are referenced through the Steam store copy and the autocomplete clusters captured for the en-US locale.",
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