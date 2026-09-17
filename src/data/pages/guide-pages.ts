import type { PageContent } from "@/types/content";

export const guidePages: PageContent[] = [
  {
    id: "fixed-beginners-guide-en-US",
    translationKey: "beginners-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "beginners-guide",
    url: "/beginners-guide",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Skibidi Wars Beginners Guide: Launch Day Starter Path",
    seoTitle: "Skibidi Wars Beginners Guide: Launch Day, Factions, Units",
    metaDescription:
      "A launch-day Skibidi Wars beginners guide covering how to install on Steam, pick a side (Cameraman vs Skibidi Toilets), choose a starter unit, and progress through the first missions.",
    summary:
      "Launch-day Skibidi Wars beginners guide: install via Steam AppID 4315830, pick a side, choose a starter unit, and progress through the store-described two-faction combat loop.",
    hero: {
      eyebrow: "Beginners Guide",
      subtitle:
        "On launch day 2026-09-17, this Skibidi Wars beginners guide walks new players through installing the game via Steam (AppID 4315830) and starting the two-faction combat loop between Cameraman and Skibidi Toilets.",
      ctas: [
        { label: "Controls", href: "/controls/" },
        { label: "Characters", href: "/characters/" },
      ],
    },
    quickAnswer:
      "On launch day 2026-09-17, this Skibidi Wars beginners guide walks new players through installing the game via Steam (AppID 4315830) and starting the store-described two-faction combat loop: pick a side (Cameraman or Skibidi Toilets), pick a starter unit, and play through the episode-driven mission flow. Camera, TV, Speaker, and Titan labels come from the YouTube Skibidi Toilet IP and are treated as legacy terminology. Because the game launched today, there is no third-party walkthrough yet.",
    keyFacts: [
      { label: "Install", value: "Steam AppID 4315830" },
      { label: "Launch date", value: "September 17, 2026 (Early Access)" },
      { label: "Faction choice", value: "Cameraman vs Skibidi Toilets" },
      { label: "Starter units", value: "Cameraman-side or Skibidi Toilets-side units" },
      { label: "Last verified", value: "2026-09-17" },
    ],
    modules: [
      {
        id: "callout-faq-beginners-launch-day",
        type: "callout",
        tone: "confirmed",
        title: "Is Skibidi Wars out on launch day?",
        body: "Yes. Skibidi Wars entered Steam Early Access on 2026-09-17 with a planned roughly six-month window before full release. Confirm the live store listing before purchasing in case the launch slot updates after the research date.",
      },
      {
        id: "callout-faq-beginners-best-starter",
        type: "callout",
        tone: "caution",
        title: "What is the best starter side in Skibidi Wars?",
        body: "The Steam store copy does not rank factions. Pick Cameraman if you want the IP-legacy Camera, TV, Speaker, and Titan sub-labels, or pick Skibidi Toilets if you want to play the primary antagonist side with Toilet Emperor.",
      },
      {
        id: "callout-faq-beginners-tutorial",
        type: "callout",
        tone: "caution",
        title: "Does Skibidi Wars have a tutorial?",
        body: "The Steam copy frames mission flow around an episode-driven combat loop. An official in-game tutorial beyond that framing is not announced as of the research date.",
      },
      {
        id: "callout-faq-beginners-updates",
        type: "callout",
        tone: "confirmed",
        title: "Where can I find launch-day updates?",
        body: "The Steam store page and Steam Community Hub for AppID 4315830 are the only first-party surfaces for Skibidi Wars launch content. The Community Hub is the live surface for developer announcements from Pakumi and bug reports.",
      },
      {
        id: "section-install",
        type: "prose",
        heading: "Step 1: Install Skibidi Wars on Steam",
        body: "Skibidi Wars launches on Steam under AppID 4315830. To start playing: open the Steam client and search for Skibidi Wars or open the store page directly via the AppID 4315830 URL; confirm the Early Access launch date is 2026-09-17 before purchasing, and check the supported languages banner against your locale; install the game through the Steam library, then launch it from the library once the install finishes.",
      },
      {
        id: "section-pick-faction",
        type: "prose",
        heading: "Step 2: Pick your side",
        body: "The Steam store copy places side choice at the start of every Skibidi Wars mission. The two Steam-confirmed sides are Cameraman and Skibidi Toilets. The Cameraman side draws on characters inherited from the Skibidi Toilet YouTube IP, including standard Cameramen plus IP-legacy Camera, TV, Speaker, and Titan sub-labels. The Skibidi Toilets side is the opposing force with Toilet Emperor as the headline antagonist. Camera, TV, Speaker, and Titan labels are recorded here as IP-legacy terminology rather than current-game faction names. New players who want a guided path should start on the Cameraman side, since that is the broader force the store copy describes.",
      },
      {
        id: "section-pick-starter",
        type: "prose",
        heading: "Step 3: Pick your starter unit",
        body: "Within your chosen side, the Steam store copy tells you to pick a character or unit. The store copy frames the Cameraman-side starter roster as standard Cameramen plus the IP-legacy Camera, TV, and Speaker units, with the Skibidi Toilets acting as the opposing starter roster. For first-time players, the simplest starter path is to pick one of the standard Cameraman-side units and learn the combat loop with that unit before exploring battle armor variants.",
      },
      {
        id: "section-mission-loop",
        type: "prose",
        heading: "Mission progression framework",
        body: "The Steam store copy frames Skibidi Wars progression around: mission start (pick your side and unit), combat phase (fight through opposing side units), named-boss encounter (face a named boss such as Toilet Emperor at the end of the mission), and episode gate (beat the boss to unlock the next episode). This loop is the only progression structure the Steam copy confirms.",
      },
    ],
    faqIds: [
      "faq-beginners-launch-day",
      "faq-beginners-best-starter",
      "faq-beginners-tutorial",
      "faq-beginners-updates",
    ],
    relatedPageIds: [],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-17",
  },
  {
    id: "fixed-controls-mechanics-en-US",
    translationKey: "controls-mechanics",
    locale: "en-US",
    routeKind: "fixed",
    slug: "controls",
    url: "/controls",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Skibidi Wars Controls: PC Combat Loop Explained",
    seoTitle: "Skibidi Wars Controls: PC Combat and Unit Mechanics",
    metaDescription:
      "Learn the Skibidi Wars controls loop on PC, how faction and unit selection drive combat, and what the Steam store confirms versus leaves unannounced.",
    summary:
      "Understand the Skibidi Wars PC combat loop, how faction and unit selection drive missions, and what the Steam store confirms versus leaves unannounced on launch day.",
    hero: {
      eyebrow: "Controls & Mechanics",
      subtitle:
        "The Steam store page for Skibidi Wars (AppID 4315830) frames the core loop as faction-versus-faction combat that flows from faction select, to unit select, to mission, to named-boss encounter.",
      ctas: [
        { label: "Beginners guide", href: "/beginners-guide/" },
        { label: "Characters", href: "/characters/" },
      ],
    },
    quickAnswer:
      "The Steam store page for Skibidi Wars (AppID 4315830) frames the core loop as faction-versus-faction combat that flows from faction select, to unit select, to mission, to named-boss encounter. Skibidi Wars is a mouse-and-keyboard PC title on Steam; exact in-game key bindings, mouse mappings, and accessibility settings are not announced as of the research date.",
    keyFacts: [
      { label: "Platform", value: "Windows PC (Steam)" },
      { label: "Input", value: "Mouse and keyboard" },
      { label: "Combat flow", value: "Faction select → Unit select → Mission → Boss" },
      { label: "Source", value: "Steam store description (AppID 4315830)" },
      { label: "Last verified", value: "2026-09-17" },
    ],
    modules: [
      {
        id: "callout-faq-controls-controller",
        type: "callout",
        tone: "caution",
        title: "Does Skibidi Wars support controllers?",
        body: "Controller support is not announced as of the research date. The Steam store copy describes a mouse-and-keyboard PC title.",
      },
      {
        id: "callout-faq-controls-rebind",
        type: "callout",
        tone: "caution",
        title: "Are there rebindable key bindings?",
        body: "Specific rebinding options are not announced by the Steam store as of the research date. The store copy does not list exact key bindings, so the rebinding surface must be confirmed in-game once the build is installed.",
      },
      {
        id: "callout-faq-controls-switch-mid",
        type: "callout",
        tone: "caution",
        title: "How do I switch factions mid-mission?",
        body: "The Steam store copy places faction-versus-faction selection at the start of each mission. Mid-mission faction switching is not announced as of the research date.",
      },
      {
        id: "callout-faq-controls-official-list",
        type: "callout",
        tone: "confirmed",
        title: "Where do I find the official controls list?",
        body: "The Steam store page and Steam Community Hub for AppID 4315830 are the only first-party surfaces for Skibidi Wars launch content. The store copy does not publish a key-binding list, so the in-game settings menu is the only authoritative controls surface on launch day.",
      },
      {
        id: "section-input",
        type: "prose",
        heading: "Mouse-and-keyboard expectations",
        body: "The Steam copy does not publish a key-binding list, but the gameplay framework tells you to expect: mouse input for faction and unit selection in the mission setup screen; keyboard input for in-mission abilities and unit commands during combat; mouse input for camera control during missions. Specific keys, mouse buttons, and rebinding options are not announced as of the research date.",
      },
      {
        id: "section-faction-select",
        type: "prose",
        heading: "Side select",
        body: "Each Skibidi Wars mission opens with a two-faction choice. The Steam store description tells you to expect Cameraman versus Skibidi Toilets as the headline pairing. Camera, TV, Speaker, and Titan labels come from the YouTube Skibidi Toilet IP and are recorded here as legacy terminology rather than current-game faction names.",
      },
      {
        id: "section-unit-select",
        type: "prose",
        heading: "Unit select",
        body: "Within the chosen side, you pick a character or unit. The store copy tells you to expect named units within the Cameraman-side roster (including IP-legacy Camera, TV, Speaker, and Titan references), battle armor variants that emerge as the player advances, and named-boss encounters for the Skibidi Toilets side.",
      },
      {
        id: "section-boss",
        type: "prose",
        heading: "Boss encounter",
        body: "Each mission ends with a named-boss encounter that gates progression to the next episode. The Steam store description names Toilet Emperor as the primary antagonist on the Skibidi Toilets side. The Titan sub-label appears in autocomplete and in the YouTube Skibidi Toilet IP for large named units, but the Steam store does not list it as a separate current-game faction. Specific boss HP, ability damage numbers, and counter-tactic charts are not announced as of the research date.",
      },
    ],
    faqIds: [
      "faq-controls-controller",
      "faq-controls-rebind",
      "faq-controls-switch-mid",
      "faq-controls-official-list",
    ],
    relatedPageIds: [],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-17",
  },
];