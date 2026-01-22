interface NavigationItem {
  label: string;
  href: string;
  authRequired: boolean;
}

export type { NavigationItem };

export const navigationItems: NavigationItem[] = [
  {
    label: "Pricing",
    href: "/pricing",
    authRequired: false,
  },
  {
    label: "Vibe",
    href: "/about",
    authRequired: false,
  },
  {
    label: "Manifesto",
    href: "/blog",
    authRequired: false,
  },
  {
    label: "Feed",
    href: "/feed",
    authRequired: true,
  },
  {
    label: "Spending",
    href: "/spending",
    authRequired: true,
  },
  {
    label: "Analytics",
    href: "/analytics",
    authRequired: true,
  },
];
