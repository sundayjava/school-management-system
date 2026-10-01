import { type SVGProps } from "react";

/**
 * lucide-react no longer ships trademarked brand logos, so social icons
 * are hand-rolled here as minimal inline SVGs.
 */

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.25c0-.87.24-1.46 1.49-1.46H16.5V4.14C16.24 4.1 15.36 4 14.33 4 12.17 4 10.7 5.32 10.7 7.7V10.5H8v3h2.7V21h2.8Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4.11V20h2.83V8.5ZM5.53 7.25a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28ZM20 13.35c0-3.02-1.61-4.43-3.76-4.43-1.73 0-2.5.95-2.94 1.62V8.5H10.5c.04.8 0 11.5 0 11.5h2.8v-6.42c0-.34.02-.69.13-.94.28-.69.92-1.41 1.99-1.41 1.4 0 1.96 1.07 1.96 2.64V20H20v-6.65Z" />
    </svg>
  );
}
