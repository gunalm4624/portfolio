import { ArrowDown } from "lucide-react";
import type { Metadata } from "next";

import CtaButton from "../components/CtaButton";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "About Gunal | Product Designer & Design Engineer",
  description:
    "Product Designer & Design Engineer building AI-native products and the systems behind them — product thinking, interaction design, AI, and code.",
};

type Role = {
  title: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
};

type Company = {
  name: string;
  roles: Role[];
};

const experience: Company[] = [
  {
    name: "Mareana",
    roles: [
      {
        title: "Product, Brand and Web UI/UX Designer",
        period: "Apr 2026 — Present",
        location: "Remote",
        summary:
          "Working across product and digital experiences for a B2B data intelligence platform serving pharmaceutical teams.",
        points: [
          "Designed and developed Lumis, a fully responsive AI assistant that helps pharma teams work with complex batch records and manufacturing data. The product is now being used by 10+ pharma CDMOs and virtual sponsors.",
          "Developed an AI Design Thinking workflow for LLM-assisted product development, helping avoid AI-slop interfaces while keeping Mareana's brand, visual language, and design principles consistent across AI-generated experiences.",
          "Built an AI-assisted design-to-code workflow that reduced page turnaround from 14 hours to 2 hours.",
          "Built a reusable Figma style guide and token system using Figma Agent and Figma Make, reducing documentation time from a day to roughly an hour per section.",
          "Designed and shipped a 12-page product and use-case rollout, with 4 pages live within the first 3 months.",
          "Leading the homepage redesign and brand guide refresh that defines the visual direction for Mareana's digital presence.",
          "Built conversion tracking with Microsoft Clarity funnels to understand how page changes influence demo requests.",
        ],
      },
    ],
  },
  {
    name: "Financial Software and Systems",
    roles: [
      {
        title: "Product Designer",
        period: "Aug 2023 — Mar 2026",
        location: "Chennai, India",
        summary:
          "Progressed from Product Designer Intern into a Product Designer role, working across enterprise fintech platforms for Tier-1 banks.",
        points: [
          "Led product design for white-label fintech platforms used by Tier-1 banks including QNB, Emirates NBD, FAB, and DIB, supporting products handling 1M+ daily transactions.",
          "Built a multi-tenant design system deployed across 5+ banking platforms, reducing delivery timelines by 40%.",
          "Redesigned merchant and customer onboarding experiences using progressive disclosure, increasing completion rates by 22% and reducing manual processing by 35%.",
          "Ran WCAG 2.1 AA accessibility audits across banking interfaces and translated findings into production improvements.",
          "Established a design-to-development handoff workflow that reduced frontend rework by 15%.",
          "Designed onboarding and payment workflows and contributed to the shared component library used across client projects.",
          "Mentored junior designers on enterprise UX patterns and design-system thinking.",
        ],
      },
      {
        title: "Product Designer Intern",
        period: "Feb 2023 — Jul 2023",
        location: "Chennai, India",
        summary:
          "Started my product design career at FSS, building a foundation in enterprise UX and design systems.",
        points: [
          "Gained foundational knowledge in design systems and enterprise UX while supporting product design across client projects.",
          "Helped manage, maintain, and update the Figma design system, keeping components and patterns consistent across product experiences.",
          "Contributed to the shared Figma component library and supported designers in maintaining consistency across client products.",
        ],
      },
    ],
  },
];

// Pulled from the AI System Thinking description itself — the ideas it names.
const aiSystemThinkingChips = [
  "Systems",
  "Principles",
  "Workflows",
  "Human + LLM",
  "Usability",
  "Product Identity",
  "Visual Consistency",
];

// `span` drives the bento hierarchy — the denser, higher-signal groups claim
// wider cells so the grid reads as tiers rather than a uniform table.
const skillGroups = [
  {
    name: "Product Design",
    span: "",
    detail:
      "Product Design · Interaction Design · Design Systems · Information Architecture · User Research · Usability Testing",
  },
  {
    name: "AI & Product",
    span: "",
    detail:
      "AI Product Design · LLM Workflows · AI-Assisted Design · AI System Thinking · Design-to-Code",
  },
  {
    name: "Tools",
    span: "lg:col-span-2",
    detail:
      "Figma · Claude · Claude Code · Cursor · Lovable · Figma MCP · Figma Make · Figma Agent · Obsidian · Photoshop · Illustrator · After Effects · Jitter · DaVinci Resolve",
  },
  {
    name: "Engineering",
    span: "lg:col-span-2",
    detail:
      "Product Engineering · HTML/CSS · React · Next.js · SwiftUI · Webflow · Framer · WordPress",
  },
  {
    name: "Enterprise UX",
    span: "lg:col-span-2",
    detail:
      "Complex Workflows · B2B SaaS · Fintech · Pharma · Healthcare · Life Sciences · Regulated Products · Accessibility · WCAG 2.1 AA",
  },
];

const education = [
  {
    degree: "Master of Computer Applications",
    detail: "SRM University, Chennai · 2021 — 2023",
  },
  {
    degree: "Bachelor of Computer Applications",
    detail: "The American College · 2018 — 2021",
  },
];

const awards = [
  {
    title: "FSS — Champion of the Quarter",
    detail: "Payment Gateway UX Delivery",
  },
  {
    title: "FSS — Team Excellence Award — FAB Bank · 2024",
    detail: "Enterprise UX migration across 20+ stakeholders",
  },
];

const process = ["Think", "Design", "Prototype", "Build", "Ship"];

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="border-b-2 border-[#181510] pb-4 text-2xl font-extrabold tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F2EEE3] text-[#181510]">
      <Navbar />

      <main className="flex-1 px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24 md:px-20">
        <FadeIn>
          <p className="font-mono text-sm text-[#181510]/50">About</p>
        </FadeIn>

        <div className="mt-3">
            <FadeIn>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                Hi, I&apos;m Gunal<span className="text-[#ed254e]">.</span>
              </h1>
            </FadeIn>

            <FadeIn>
              <p className="mt-8 max-w-2xl text-lg font-medium sm:text-xl">
                Product Designer &amp; Design Engineer building AI-native products and the systems
                behind them.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="mt-5 max-w-2xl text-base text-[#181510]/70 sm:text-lg">
                I design complex digital products from problem to interface — and when it helps, I
                build them too.
              </p>
            </FadeIn>

            <FadeIn>
              <p className="mt-5 max-w-2xl text-base text-[#181510]/70 sm:text-lg">
                My work sits at the intersection of product thinking, interaction design, AI, and
                code. I&apos;m particularly interested in AI System Thinking — designing the
                systems, principles, and workflows that help humans and LLMs create better product
                experiences without losing usability, product identity, or visual consistency.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <CtaButton
                  label="Download resume"
                  href="/Gunal%20Product%20Design%20Engineer.pdf"
                  icon={<ArrowDown size={16} className="shrink-0" />}
                  iconPosition="suffix"
                />
                <a
                  href="mailto:hey@gunalm.design"
                  title="Email Gunal"
                  className="flex h-12 items-center rounded-full border border-[#181510] px-6 font-mono text-sm font-bold text-[#181510] transition-colors hover:bg-[#181510] hover:text-[#F2EEE3]"
                >
                  hey@gunalm.design
                </a>
              </div>
            </FadeIn>
        </div>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>Experience</SectionHeading>
          </FadeIn>

          {experience.map((company) => (
            <FadeIn key={company.name}>
              <div className="py-10">
                <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {company.name}
                </h3>

                <div className="mt-6 flex flex-col gap-10">
                  {company.roles.map((role) => (
                    <div key={role.title}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-lg font-bold tracking-tight sm:text-xl">
                          {role.title}
                        </h4>
                        <span className="font-mono text-xs text-[#181510]/50">
                          {role.period} · {role.location}
                        </span>
                      </div>

                      <p className="mt-3 max-w-3xl text-base text-[#181510]/70">{role.summary}</p>

                      <ul className="mt-5 flex flex-col gap-3">
                        {role.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-base text-[#181510]/70 sm:text-[17px]"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#181510]/40"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>Education</SectionHeading>
          </FadeIn>

          {education.map((study) => (
            <FadeIn key={study.degree}>
              <div className="py-8">
                <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                  {study.degree}
                </h3>
                <p className="mt-2 font-mono text-xs text-[#181510]/50">{study.detail}</p>
              </div>
            </FadeIn>
          ))}
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>Skills</SectionHeading>
          </FadeIn>

          {/* Bento on a 4-col grid: feature takes a 2x2 block, the two short groups
              sit as 1x1 tiles beside it, and the three dense groups run 2-wide.
              Rows: [feature | PD | AI&P] / [feature | Tools] / [Engineering | Ent UX] */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FadeIn className="sm:col-span-2 lg:row-span-2">
              <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-[#181510] p-8 text-[#F2EEE3]">
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                    AI System Thinking
                  </h3>
                  <p className="mt-4 text-base leading-[2.0] text-[#F2EEE3]/70 sm:text-[17px]">
                    Designing systems, principles, and workflows that help humans and LLMs create
                    better product experiences while maintaining product and brand consistency.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {aiSystemThinkingChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-[#F2EEE3]/25 px-3.5 py-1.5 font-mono text-xs text-[#F2EEE3]/80"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {skillGroups.map((group) => (
              <FadeIn key={group.name} className={group.span}>
                <div className="flex h-full flex-col gap-3 rounded-3xl border border-[#181510]/25 bg-[#FAF8F1] p-6">
                  <h3 className="font-mono text-xs tracking-tight text-[#181510]/50">
                    {group.name}
                  </h3>
                  <p className="text-base leading-[2.0] text-[#181510]/80">{group.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>Awards</SectionHeading>
          </FadeIn>

          {awards.map((award) => (
            <FadeIn key={award.title}>
              <div className="py-8">
                <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">{award.title}</h3>
                <p className="mt-2 font-mono text-xs text-[#181510]/50">{award.detail}</p>
              </div>
            </FadeIn>
          ))}
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>Currently</SectionHeading>
          </FadeIn>

          <FadeIn>
            <p className="mt-10 max-w-4xl text-2xl leading-[1.35] font-extrabold tracking-tight text-balance sm:text-3xl md:text-4xl">
              I&apos;m exploring the space between product design, AI, and engineering — building
              products, design systems, and workflows that make the distance between an idea and a
              working product{" "}
              <span className="relative isolate inline-block">
                <span
                  className="absolute inset-x-0 bottom-1 -z-10 h-[0.35em] -rotate-1 bg-[#FBBF24]"
                  aria-hidden="true"
                />
                smaller.
              </span>
            </p>
          </FadeIn>

          <FadeIn>
            {/* Segmented strip, echoing the stats bar on the home page. */}
            <div className="mt-12 grid divide-y divide-[#181510]/20 overflow-hidden rounded-3xl border border-[#181510]/25 bg-[#FAF8F1] lg:grid-cols-5 lg:divide-x lg:divide-y-0">
              {process.map((step, index) => (
                <div key={step} className="flex flex-col gap-2 px-6 py-6">
                  <span className="font-mono text-xs text-[#181510]/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-extrabold tracking-tight">{step}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
