import type { PageContent } from "@/types/content";

const RESEARCH_DATE = "2026-09-17";

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "About Skibidi Wars Wiki",
    seoTitle: "About | Skibidi Wars Wiki",
    metaDescription:
      "About Skibidi Wars Wiki: an unofficial fan-built launch hub sourced from the Steam AppID 4315830 store page and the Pakumi developer profile.",
    summary:
      "What Skibidi Wars Wiki covers, how facts are sourced, and what readers should expect on launch day.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Skibidi Wars Wiki is an unofficial fan-built launch hub for Skibidi Wars (Steam AppID 4315830) sourced from the official Steam store page, the Steam Community Hub, SteamDB metadata, and the Pakumi developer profile on Steam.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      "Skibidi Wars Wiki is an unofficial fan-built launch hub for Skibidi Wars (Steam AppID 4315830), developed and published by Pakumi. DaFuq!?Boom! created the source YouTube Skibidi Toilet web series the game adapts. Every fact is dated to 2026-09-17 and re-verified against the live Steam store page and SteamDB metadata.",
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Developer & Publisher", value: "Pakumi" },
      { label: "IP creator", value: "DaFuq!?Boom! (Skibidi Toilet YouTube series)" },
      { label: "Research date", value: RESEARCH_DATE },
      { label: "Source rule", value: "Steam AppID 4315830 + Steam Community Hub + SteamDB + Pakumi profile" },
      { label: "Canonical anchor", value: "https://store.steampowered.com/app/4315830/" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body: "Skibidi Wars Wiki collects the launch-day reference surface for the Skibidi Wars Steam release so that first-time buyers and Skibidi Toilet YouTube IP fans can confirm launch status, the two-faction roster, character identity, system requirements, price, and episode context without scraping third-party trackers. The wiki is a launch-day reference, not a long-form encyclopedia, so every wiki topic is tied back to a single authoritative source rather than to community wikis that have not yet launched.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body: "Hard current-game facts come from the Steam store page for AppID 4315830 (official/store) and the SteamDB metadata mirror (official/store). The Steam Community Hub for AppID 4315830 (official/store) is the live announcement surface. The Pakumi developer profile on Steam is the publisher-side source. The Skibidi Toilet YouTube web series by DaFuq!?Boom! is used only for terminology clarification (character, episode, and variant labels) and never as a current-game fact source.",
      },
      {
        id: "boundary",
        type: "prose",
        heading: "Fact boundary",
        body: "In-game stats, ability damage, hit points, unlock conditions, final Early Access pricing shifts, demo availability, and final price are not announced as of the research date unless the Steam store explicitly lists them. Episode numbers 106, 111, and 112 are recorded as YouTube IP legacy-reference structure rather than confirmed current-game episode IDs. Camera, TV, Speaker, and Titan sub-faction labels are treated as IP-legacy terminology rather than current-game faction names. Variant labels like battle armor, upgraded, 3.0, and jr are inherited from the YouTube series and labeled as such.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact Skibidi Wars Wiki",
    seoTitle: "Contact | Skibidi Wars Wiki",
    metaDescription:
      "Contact Skibidi Wars Wiki for fact corrections or launch-day updates via the support email and Steam Community Hub channels.",
    summary:
      "Reach the Skibidi Wars Wiki team for fact corrections or launch-day updates through the support email or the Steam Community Hub for AppID 4315830.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use the support email or the Steam Community Hub to reach the Skibidi Wars Wiki team. We do not accept pitches or promotions.",
      ctas: [{ label: "About", href: "/about" }],
    },
    quickAnswer:
      "Email support@skibidiwars.wiki for fact corrections, launch-day updates, or sourcing questions. For launch-day bugs and community discussions, use the Steam Community Hub for AppID 4315830.",
    keyFacts: [
      { label: "Support email", value: "support@skibidiwars.wiki" },
      { label: "Community surface", value: "Steam Community Hub (AppID 4315830)" },
      { label: "Bug reports", value: "Steam Community Hub" },
      { label: "Developer & Publisher", value: "Pakumi" },
      { label: "Last reviewed", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "channels",
        type: "prose",
        heading: "Channels",
        body: "For sourcing corrections and wiki feedback, email support@skibidiwars.wiki. For launch-day bugs, in-game issues, or community discussion, use the Steam Community Hub for AppID 4315830. We do not accept pitches or promotional outreach through these channels.",
      },
      {
        id: "response",
        type: "prose",
        heading: "Response window",
        body: "The wiki team responds to sourcing corrections within a few business days during the launch window. Bug reports filed on the Steam Community Hub are routed to Pakumi as the developer and publisher.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy | Skibidi Wars Wiki",
    seoTitle: "Privacy Policy | Skibidi Wars Wiki",
    metaDescription:
      "Skibidi Wars Wiki privacy policy: what data is collected through Cloudflare analytics and Google Analytics, how it is used, and how to opt out.",
    summary:
      "The Skibidi Wars Wiki privacy policy covers analytics data, contact form submissions, and third-party services used by the launch-day site.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Skibidi Wars Wiki uses only first-party Cloudflare analytics and Google Analytics measurement. No advertising trackers run on launch day.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "Skibidi Wars Wiki collects anonymized page-view metrics through Cloudflare Web Analytics and Google Analytics 4. No personal data is sold or shared; cookies are limited to first-party analytics cookies.",
    keyFacts: [
      { label: "Analytics", value: "Cloudflare Web Analytics + Google Analytics 4" },
      { label: "Cookies", value: "First-party analytics cookies only" },
      { label: "Data sharing", value: "None" },
      { label: "Last reviewed", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "data-collected",
        type: "prose",
        heading: "Data collected",
        body: "Skibidi Wars Wiki uses Cloudflare Web Analytics and Google Analytics 4 to record anonymized page-view metrics. No personally identifiable information is required to use the wiki. Contact form submissions sent to support@skibidiwars.wiki are stored only as long as needed to respond.",
      },
      {
        id: "cookies",
        type: "prose",
        heading: "Cookies",
        body: "The wiki sets first-party analytics cookies only. No advertising trackers run on the site. Browsers can disable cookies without losing access to the wiki content.",
      },
      {
        id: "third-party",
        type: "prose",
        heading: "Third-party services",
        body: "The wiki links out to the Steam store page for AppID 4315830, the Steam Community Hub, SteamDB metadata, and the DaFuq!?Boom! YouTube channel (source of the Skibidi Toilet IP the game adapts). Those services run their own privacy policies when you click through.",
      },
      {
        id: "changes",
        type: "prose",
        heading: "Changes to this policy",
        body: "Updates to this privacy policy will be posted on this page with a revised research date. Material changes will be noted at the top of the wiki so returning readers can spot them.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use | Skibidi Wars Wiki",
    seoTitle: "Terms of Use | Skibidi Wars Wiki",
    metaDescription:
      "Skibidi Wars Wiki terms of use: the wiki is an unofficial fan reference, facts are dated to the research date, and Skibidi Wars is developed by Pakumi from the DaFuq!?Boom! IP.",
    summary:
      "The Skibidi Wars Wiki terms of use cover the unofficial nature of the wiki, the research-date fact boundary, and links to third-party services.",
    hero: { eyebrow: "Terms", subtitle: "Skibidi Wars Wiki is an unofficial fan reference.", ctas: [{ label: "Privacy", href: "/privacy-policy" }] },
    quickAnswer:
      "Skibidi Wars Wiki is an unofficial fan reference. Facts are dated to the research date and may need to be re-verified against the live Steam store page. Skibidi Wars is developed and published by Pakumi and adapts the Skibidi Toilet YouTube IP created by DaFuq!?Boom!.",
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Developer & Publisher", value: "Pakumi" },
      { label: "IP creator", value: "DaFuq!?Boom! (Skibidi Toilet YouTube series)" },
      { label: "Fact boundary", value: "Dated to 2026-09-17 research date" },
      { label: "Last reviewed", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial fan reference",
        body: "Skibidi Wars Wiki is not affiliated with, endorsed by, or sponsored by Pakumi, DaFuq!?Boom!, or any platform holder. Skibidi Wars is developed and published by Pakumi and adapts the Skibidi Toilet YouTube web series created by DaFuq!?Boom!. The wiki is an unofficial fan reference built from publicly available launch-day sources.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Accuracy and freshness",
        body: "Every fact on the wiki is dated to the 2026-09-17 research date. Readers should re-verify time-sensitive facts (release date, Early Access status, system requirements, price) against the live Steam store page for AppID 4315830 before acting on them. The wiki team will refresh dated facts as the Steam store updates.",
      },
      {
        id: "third-party",
        type: "prose",
        heading: "Third-party links",
        body: "The wiki links to the Steam store page, the Steam Community Hub, SteamDB metadata, and the DaFuq!?Boom! YouTube channel (source of the Skibidi Toilet IP the game adapts). Those services are operated by their respective owners and have their own terms.",
      },
      {
        id: "liability",
        type: "prose",
        heading: "Liability",
        body: "The wiki is provided as-is. While the team aims to keep facts accurate and dated, no warranty is given regarding fitness for any particular purpose. Decisions to purchase or play Skibidi Wars should be made against the live Steam store page.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
];