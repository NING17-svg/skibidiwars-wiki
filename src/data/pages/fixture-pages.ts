import type { PageContent } from "@/types/content";

export const fixturePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Skibidi Wars Guides Hub",
    seoTitle: "Skibidi Wars Guides Hub",
    metaDescription:
      "Skibidi Wars guides hub collecting launch-day references for first-time players.",
    summary:
      "Collect the launch-day references new Skibidi Wars players need before installing the game.",
    hero: {
      eyebrow: "Guides",
      subtitle: "Launch-day Skibidi Wars guides for new players.",
      ctas: [{ label: "Beginners guide", href: "/beginners-guide/" }],
    },
    quickAnswer:
      "Use the Skibidi Wars guides hub to find launch-day references for first-time players, including the beginners guide and the controls breakdown.",
    keyFacts: [{ label: "Status", value: "Launch-day reference hub" }],
    modules: [
      {
        id: "guides-overview",
        type: "prose",
        heading: "Overview",
        body: "The guides hub points new players at the beginners guide and the controls page so the launch-day combat loop is easy to follow.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-17",
  },
];