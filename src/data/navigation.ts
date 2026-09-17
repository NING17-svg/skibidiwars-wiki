export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release-date/", labels: { "en-US": "Release Date" } },
  { href: "/system-requirements/", labels: { "en-US": "System Requirements" } },
  { href: "/price/", labels: { "en-US": "Price" } },
  { href: "/characters/", labels: { "en-US": "Characters" } },
  { href: "/toilet-emperor/", labels: { "en-US": "Toilet Emperor" } },
  { href: "/titan-speakerman/", labels: { "en-US": "Titan Speakerman" } },
  { href: "/titan-tv-man/", labels: { "en-US": "Titan TV Man" } },
  { href: "/titan-cameraman/", labels: { "en-US": "Titan Cameraman" } },
  { href: "/bosses/", labels: { "en-US": "Bosses" } },
  { href: "/enemies/", labels: { "en-US": "Enemies" } },
  { href: "/episodes/", labels: { "en-US": "Episodes" } },
  { href: "/beginners-guide/", labels: { "en-US": "Beginners Guide" } },
  { href: "/controls/", labels: { "en-US": "Controls" } },
  { href: "/wiki/", labels: { "en-US": "Wiki" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy Policy" } },
  { href: "/terms", labels: { "en-US": "Terms of Use" } },
  { href: "/non-official-disclaimer", labels: { "en-US": "Unofficial Disclaimer" } },
];

export function navigationLabel(item: LocalizedNavigationItem, locale: string): string {
  return item.labels[locale] || item.labels["en-US"] || Object.values(item.labels)[0];
}