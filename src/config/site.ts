export type NavLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  nav: NavLink[];
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
};

/**
 * Single source of truth for school branding. When cloning this repo for a
 * new school, update this file (and the brand color tokens in
 * src/app/globals.css) before touching any component.
 */
export const siteConfig: SiteConfig = {
  name: "Greenfield Secondary School",
  tagline: "Check Your Results Anytime, From Anywhere",
  description:
    "A simple, secure portal for students to check exam results, view term reports, and stay up to date with school announcements.",
  url: "https://example.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Check Result", href: "/results" },
    { label: "Announcements", href: "/#announcements" },
    { label: "Contact", href: "/#contact" },
  ],
  contact: {
    address: "12 School Road, Lagos, Nigeria",
    phone: "(234) 555-0120",
    email: "info@example.com",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};
