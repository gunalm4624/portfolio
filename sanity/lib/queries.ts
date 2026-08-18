import { BOOKING_HREF } from "../../lib/cal";
import { isSanityConfigured } from "../env";
import { getClient } from "./client";

export type FaqSectionContent = {
  sectionLabel: string;
  heading: string;
};

const defaultFaqSection: FaqSectionContent = {
  sectionLabel: "< FAQ >",
  heading: "Answers to your questions",
};

export async function getFaqSection(): Promise<FaqSectionContent> {
  if (!isSanityConfigured) return defaultFaqSection;

  const data = await getClient().fetch<Partial<FaqSectionContent> | null>(
    `*[_type == "faqSection"][0]{sectionLabel, heading}`,
    {},
    { next: { revalidate: 30 } },
  );

  return { ...defaultFaqSection, ...data };
}

export type FaqItem = {
  question: string;
  answer: string;
};

const defaultFaqs: FaqItem[] = [
  {
    question: "What is the typical timeline for a project?",
    answer:
      "2-6 weeks depending on scope. Landing pages ship in about a week; full websites take longer. We lock the exact timeline on the kickoff call.",
  },
  {
    question: "Do you work with clients outside your timezone?",
    answer: "Yes — async communication via Slack and a live preview link keeps you updated regardless of timezone.",
  },
  {
    question: "How does your pricing work?",
    answer:
      "Fixed-quote pricing starting from $250, confirmed after a free 15-minute discovery call. No hourly billing, no hidden fees, all revisions included.",
  },
  {
    question: "Will I be able to update the website myself?",
    answer: "Yes — you get a recorded walkthrough so you can edit content without needing a developer.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes — you get one month of free support after launch for fixes and questions (not new feature updates). After that, ongoing maintenance is available through a paid retainer.",
  },
  {
    question: "What's the difference between a landing page and a full website?",
    answer:
      "A landing page is one focused, high-conversion page built in about a week. A full website covers multiple pages with CMS integration for content you'll update over time.",
  },
];

export async function getFaqs(): Promise<FaqItem[]> {
  if (!isSanityConfigured) return defaultFaqs;

  const data = await getClient().fetch<FaqItem[]>(
    `*[_type == "faq"] | order(order asc){question, answer}`,
    {},
    { next: { revalidate: 30 } },
  );

  if (!data?.length) return defaultFaqs;

  return data;
}

export type ContactButton = {
  label: string;
  href: string;
};

export type ContactContent = {
  sectionLabel: string;
  buttons: ContactButton[];
  copyrightText: string;
};

const defaultContact: ContactContent = {
  sectionLabel: "< Let it happen >",
  buttons: [
    { label: "Book an intro call", href: BOOKING_HREF },
    { label: "Send an email", href: "mailto:hey@gunalm.design" },
    { label: "Subscribe on Youtube", href: "https://www.youtube.com/@GunalDesigns" },
  ],
  copyrightText: "© 2026 gunalm.design. All rights reserved.",
};

export async function getContact(): Promise<ContactContent> {
  if (!isSanityConfigured) return defaultContact;

  const data = await getClient().fetch<Partial<ContactContent> | null>(
    `*[_type == "contact"][0]{sectionLabel, buttons, copyrightText}`,
    {},
    { next: { revalidate: 30 } },
  );

  if (!data?.buttons?.length) return defaultContact;

  return { ...defaultContact, ...data };
}
