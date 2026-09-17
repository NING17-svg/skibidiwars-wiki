# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Skibidi Wars launch hub | Find Pakumi launch status, two-faction roster, Early Access roadmap | Release Date / Characters | Hub | Names Pakumi as developer and publisher; clarifies DaFuq!?Boom! as IP creator. |
| `/wiki` | `src/data/pages/wiki-pages.ts` | Guide | Skibidi Wars wiki | Understand confirmed Steam facts | Characters / Episodes | Hub | Names Pakumi and the two-faction Steam-confirmed roster. |
| `/guides` | `src/data/pages/guide-pages.ts` | Guide | Skibidi Wars guides | Find launch-day starter path | Controls / Characters | Hub | Beginners guide and controls use the two-faction framing. |
| `/release-date` | `src/data/pages/release-pages.ts` | Guide | Skibidi Wars release date | Confirm Early Access launch window and roadmap | System Requirements / Price | Supporting hub | Steam-confirmed Early Access state with ~6 month window. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | Skibidi Wars FAQ | Get short answers | Release Info / Contact | Answer hub | FAQ schema enabled. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | About Skibidi Wars Wiki | Trust and editorial policy | Contact | Trust | Explains unofficial status, Pakumi attribution, IP-legacy sub-faction terminology. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | Contact Skibidi Wars Wiki | Corrections and source updates | About | Trust | Contact channel pending; bug reports routed to Pakumi. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Pakumi attribution; clarifies DaFuq!?Boom! as IP creator. |
| `/price` | `src/data/pages/release-pages.ts` | Guide | Skibidi Wars price | Confirm Early Access price and price-stability promise | Release Date / System Requirements | Supporting hub | Surfaces Early Access price-stability promise from Pakumi. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/faq`
- Official facts and safe guide structure: `/wiki`, `/guides`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- Wiki should link to guide and release pages.
- Guides should link to wiki and release pages.
- Release Date should link to FAQ and official sources.
- FAQ should include all current high-demand answer pages.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
