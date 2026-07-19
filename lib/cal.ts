export const CAL_NAMESPACE = "15min";

// Set NEXT_PUBLIC_CAL_LINK to your Cal.com event slug.
export const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "gunalm.design/15min";

// Buttons whose href is this special value open the Cal.com booking modal
// instead of navigating — see CtaButton.tsx.
export const CAL_HREF = `cal:${CAL_LINK}`;

// "Book a call" CTAs across the site link here — a dedicated page with the
// Cal.com booking widget embedded inline, rather than a popup modal.
export const BOOKING_HREF = "/booking";

export function calLinkFromHref(href: string): string | null {
  return href.startsWith("cal:") ? href.slice(4) : null;
}
