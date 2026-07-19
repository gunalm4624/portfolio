import type { Image } from "sanity";

import { BOOKING_HREF } from "../../lib/cal";
import { isSanityConfigured } from "../env";
import { getClient } from "./client";
import { urlForImage, urlForImageFit } from "./image";

export type HeroContent = {
  headingLine1: string;
  headingLine2: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
};

export type ProjectCard = {
  name: string;
  accent: "orange" | "zinc";
  imageUrl?: string;
};

const defaultHero: HeroContent = {
  headingLine1: "I build websites that",
  headingLine2: "impress, attract, and convert",
  subheading:
    "UI/UX and web design for pre-seed and seed companies — designed to scale with you as you grow.",
  ctaLabel: "Book an intro call",
  ctaHref: BOOKING_HREF,
};

const defaultProjects: ProjectCard[] = [
  { name: "Acme Inc", accent: "orange" },
  { name: "Nova Labs", accent: "zinc" },
  { name: "Bright Co", accent: "zinc" },
  { name: "Vertex", accent: "orange" },
  { name: "Northwind", accent: "zinc" },
  { name: "Orbit", accent: "zinc" },
];

export async function getHero(): Promise<HeroContent> {
  if (!isSanityConfigured) return defaultHero;

  const data = await getClient().fetch<Partial<HeroContent> | null>(
    `*[_type == "hero"][0]{headingLine1, headingLine2, subheading, ctaLabel, ctaHref}`,
    {},
    { next: { revalidate: 30 } },
  );

  // Book-a-call CTAs always go straight to the booking page — ctaHref is
  // intentionally not sourced from Sanity here.
  return { ...defaultHero, ...data, ctaHref: BOOKING_HREF };
}

type RawProject = {
  name: string;
  accent: "orange" | "zinc";
  image?: Image;
};

export type WorkItem = {
  name: string;
  description: string;
  coverImageUrl: string;
  coverAspectRatio?: number;
  liveLink?: string;
  pageType?: string;
  duration?: string;
  testimonial?: {
    quote?: string;
    name?: string;
    role?: string;
    company?: string;
    avatarUrl?: string;
    rating?: number;
  };
};

const defaultWorks: WorkItem[] = [
  {
    name: "Strida",
    description:
      "smooth and powerful experience when presenting your work in a full-screen format",
    coverImageUrl: "",
    liveLink: "#",
    pageType: "Multi Page",
    duration: "3 Weeks",
    testimonial: {
      quote:
        "The entire process felt effortless. The site looks sharp, loads fast, and reflects our brand perfectly — couldn't ask for more.",
      name: "Sarah Mitchell",
      role: "Head of Marketing",
      company: "FintechCo",
      avatarUrl: "",
      rating: 5,
    },
  },
];

export async function getProjects(): Promise<ProjectCard[]> {
  if (!isSanityConfigured) return defaultProjects;

  const data = await getClient().fetch<RawProject[]>(
    `*[_type == "project"] | order(order asc){name, accent, image}`,
    {},
    { next: { revalidate: 30 } },
  );

  if (!data?.length) return defaultProjects;

  return data.map(({ name, accent, image }) => ({
    name,
    accent,
    imageUrl: image ? urlForImage(image) : undefined,
  }));
}

type RawWork = {
  name: string;
  description: string;
  coverImage?: Image;
  coverImageDimensions?: { width: number; height: number };
  liveLink?: string;
  pageType?: string;
  duration?: string;
  testimonial?: {
    quote?: string;
    name?: string;
    role?: string;
    company?: string;
    avatar?: Image;
    rating?: number;
  };
};

export async function getWorks(): Promise<WorkItem[]> {
  if (!isSanityConfigured) return defaultWorks;

  const data = await getClient().fetch<RawWork[]>(
    `*[_type == "work"] | order(order asc){name, description, coverImage, "coverImageDimensions": coverImage.asset->metadata.dimensions, liveLink, pageType, duration, testimonial}`,
    {},
    { next: { revalidate: 30 } },
  );

  if (!data?.length) return defaultWorks;

  return data.map(({ coverImage, coverImageDimensions, testimonial, ...rest }) => ({
    ...rest,
    coverImageUrl: coverImage ? urlForImageFit(coverImage) : "",
    coverAspectRatio: coverImageDimensions
      ? coverImageDimensions.width / coverImageDimensions.height
      : undefined,
    testimonial: testimonial
      ? {
          ...testimonial,
          avatarUrl: testimonial.avatar
            ? urlForImage(testimonial.avatar)
            : undefined,
        }
      : undefined,
  }));
}

export type WhatWeDoContent = {
  sectionLabel: string;
  textBefore: string;
  textHighlight: string;
  textAfter: string;
};

const defaultWhatWeDo: WhatWeDoContent = {
  sectionLabel: "< what I do >",
  textBefore: "I'm Gunal, a solo UI/UX and web designer.",
  textHighlight: "I design, write, and build your website —",
  textAfter: "from concept to launch, no handoffs.",
};

export async function getWhatWeDo(): Promise<WhatWeDoContent> {
  if (!isSanityConfigured) return defaultWhatWeDo;

  const data = await getClient().fetch<Partial<WhatWeDoContent> | null>(
    `*[_type == "whatWeDo"][0]{sectionLabel, textBefore, textHighlight, textAfter}`,
    {},
    { next: { revalidate: 30 } },
  );

  return { ...defaultWhatWeDo, ...data };
}

export type ProcessItem = {
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
};

export type ProcessPhase = {
  phase: string;
  items: ProcessItem[];
};

export type ProcessContent = {
  sectionLabel: string;
  headingLead: string;
  headingRest: string;
  phases: ProcessPhase[];
};

const defaultProcess: ProcessContent = {
  sectionLabel: "< The Process >",
  headingLead: "My method",
  headingRest: "is simple and transparent at every step, from zero to live.",
  phases: [
    {
      phase: "Kickoff",
      items: [
        {
          title: "Free 15-minute consulting session",
          description: "We'll discuss your goals and confirm we're the right fit.",
          actionLabel: "Book a call",
          actionHref: BOOKING_HREF,
        },
        {
          title: "Fixed-quote scope proposal",
          description: "One clear price, no hidden fees, all revisions included.",
        },
        {
          title: "Comms setup",
          description: "Live preview link + Slack for direct access throughout.",
        },
      ],
    },
    {
      phase: "Execution",
      items: [
        {
          title: "Discovery",
          description: "Live preview shared immediately; you watch the site take shape.",
        },
        {
          title: "Structure",
          description: "Full site draft built live.",
        },
        {
          title: "Polishing",
          description: "High-fidelity visuals and interactions added for a world-class feel.",
        },
        {
          title: "Revisions",
          description: "No revision limits. We refine together until it's right.",
        },
      ],
    },
    {
      phase: "Handoff",
      items: [
        {
          title: "Delivery",
          description: "Transferred to your platform of choice, domain connected, live.",
        },
        {
          title: "Instructions",
          description: "Recorded walkthrough so you can edit content yourself.",
        },
        {
          title: "Feedback",
          description: "A final check that the site actually serves your business goals.",
        },
      ],
    },
  ],
};

export async function getProcess(): Promise<ProcessContent> {
  if (!isSanityConfigured) return defaultProcess;

  const data = await getClient().fetch<Partial<ProcessContent> | null>(
    `*[_type == "process"][0]{sectionLabel, headingLead, headingRest, phases}`,
    {},
    { next: { revalidate: 30 } },
  );

  if (!data?.phases?.length) return defaultProcess;

  return { ...defaultProcess, ...data };
}

export type ServicesSectionContent = {
  sectionLabel: string;
  heading: string;
  subheadingPrefix: string;
  email: string;
  ctaLabel: string;
  ctaHref: string;
};

const defaultServicesSection: ServicesSectionContent = {
  sectionLabel: "< Services >",
  heading: "Ready to jam? Let's connect",
  subheadingPrefix: "Book a free discovery session or drop us a line to",
  email: "hey@gunalm.design",
  ctaLabel: "Book a 15-min discovery call",
  ctaHref: BOOKING_HREF,
};

export async function getServicesSection(): Promise<ServicesSectionContent> {
  if (!isSanityConfigured) return defaultServicesSection;

  const data = await getClient().fetch<Partial<ServicesSectionContent> | null>(
    `*[_type == "servicesSection"][0]{sectionLabel, heading, subheadingPrefix, email, ctaLabel, ctaHref}`,
    {},
    { next: { revalidate: 30 } },
  );

  return { ...defaultServicesSection, ...data };
}

export type ServiceItem = {
  title: string;
  price: string;
  description?: string;
  tags?: string[];
};

const defaultServices: ServiceItem[] = [
  {
    title: "UI/UX Product Design",
    price: "From $450",
    description:
      "End-to-end product design — research, wireframes, prototypes, and design systems that hold up as your product scales.",
    tags: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing", "Figma"],
  },
  {
    title: "Landing Pages",
    price: "From $250",
    description: "A single high-converting page, built and live in 1 week.",
    tags: ["1 Week", "Responsive", "High Conversion", "Next.js / Framer / Webflow", "Animations", "SEO Optimized"],
  },
  {
    title: "Website Development",
    price: "From $650",
    description: "A full site built for performance, CMS-ready, responsive by default.",
    tags: ["Next.js / React", "Framer / Webflow", "CMS Integration", "Performance Optimized", "Responsive Design"],
  },
];

export async function getServices(): Promise<ServiceItem[]> {
  if (!isSanityConfigured) return defaultServices;

  const data = await getClient().fetch<ServiceItem[]>(
    `*[_type == "service"] | order(order asc){title, price, description, tags}`,
    {},
    { next: { revalidate: 30 } },
  );

  if (!data?.length) return defaultServices;

  return data;
}

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
