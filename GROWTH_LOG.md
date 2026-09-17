# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-18 - Pakumi attribution, Early Access roadmap, and two-faction roster batch

- Task: Apply content-updater-20260917T174509Z-40667 batch (developer-publisher-identity, early-access-status-and-roadmap, faction-roster) for the Skibidi Wars launch hub.
- Files changed: `src/data/pages/home.ts`, `src/data/pages/release-pages.ts` (release-date and price pages), `src/data/pages/site-pages.ts` (about, contact, privacy, terms), `src/data/pages/wiki-pages.ts` (characters, wiki hub, episodes, bosses, enemies, three Titan pages, Toilet Emperor), `src/data/pages/guide-pages.ts` (beginners guide, controls), `src/data/faq.ts`, `CONTENT_INDEX.md`.
- URLs affected: `/`, `/release-date/`, `/price/`, `/about/`, `/contact/`, `/privacy-policy/`, `/terms/`, `/wiki/`, `/characters/`, `/episodes/`, `/bosses/`, `/enemies/`, `/titan-speakerman/`, `/titan-tv-man/`, `/titan-cameraman/`, `/toilet-emperor/`, `/beginners-guide/`, `/controls/`.
- Attribution changed: Skibidi Wars developer and publisher corrected to Pakumi across home, release-date, about, characters, wiki hub, terms, and Toilet Emperor pages. DaFuq!?Boom! is now recorded as the Skibidi Toilet YouTube IP creator, not the game studio.
- Status changed: Steam Early Access state surfaced on home, release-date, wiki hub, and beginners guide, replacing the prior "no Early Access" claim. Added the Early Access roadmap section listing planned full-release additions (new maps, more characters, upgraded matchmaking, deeper customization, smarter AI, performance) and surfaced the Early Access price-stability promise on the price page.
- Faction framing changed: replaced the six-faction framing (Allies, Toilets, Cameras, TVs, Speakers, Titans) with the Steam store's two-faction framing (Cameraman vs Skibidi Toilets) on home, characters, enemies, bosses, and beginners guide pages. Camera/TV/Speaker/Titan sub-faction labels are now recorded as IP-legacy terminology rather than current-game factions.
- Verification: Typecheck, lint, template/content/SEO validation, IndexNow test, and full verify required before commit.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
