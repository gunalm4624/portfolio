import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DesignSystemTrigger from "./DesignSystemTrigger";

export const metadata: Metadata = {
  title: "AI Design System — tokens, style guide, and critique in markdown",
  description:
    "Case study: an AI design system that packages tokens, style guide, and components as markdown so developers stay on-brand and focus on functionality.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": 0,
      "max-image-preview": "none",
      "max-snippet": 0,
    },
  },
};

const metaRow = [
  { label: "Role", value: "Product Design Engineer" },
  { label: "Company", value: "Mareana" },
  { label: "Timeline", value: "2026" },
  { label: "Format", value: "Markdown spec + live system" },
];

const stats = [
  { value: "85%", label: "AI slop & inconsistent UI avoided", color: "#ed254e" },
  { value: "Org-wide", label: "product & eng using this", color: "#2F5DFF" },
];

const stack = [
  {
    step: "Foundations",
    detail: "Color roles, type scale, space, radius, elevation, motion, and icons — named so a model cannot invent a second accent.",
  },
  {
    step: "Components",
    detail: "Buttons, forms, selection, feedback, navigation, overlays, data display, and app chrome — including empty, error, and loading.",
  },
  {
    step: "Patterns",
    detail: "Grid, density, responsive collapse, content voice, and accessibility (contrast, tap size, focus, reduced motion).",
  },
  {
    step: "Critique",
    detail: "Do / don't, iteration rules, and known gaps so generated UI is reviewed against the spec, not taste.",
  },
];

const problem = [
  "LLM-assisted UI drifted into generic layouts the moment a developer asked for a new screen.",
  "Brand, type, and spacing lived in Figma, while engineering worked in chat — two sources of truth.",
  "Critique happened after the fact. There was no way to keep the model on-track while it was generating.",
];

const contribution = [
  "Wrote the system as a markdown spec: tokens, style guide, components, and critique rules in one file.",
  "Designed the live spec so the same system can be browsed — color, type, controls, cards, and guidelines.",
  "Framed the workflow from planning layouts to critiquing output, so developers can stay on the design track and focus on functionality.",
];

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="border-b-2 border-[#181510] pb-4 text-2xl font-extrabold tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}

export default function AiDesignSystemCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F2EEE3] text-[#181510]">
      <Navbar />

      <main className="page-shell flex-1 px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24 md:px-20">
        <FadeIn>
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#181510]/60 transition-colors hover:text-[#181510]"
          >
            <ArrowLeft size={16} />
            Back to work
          </Link>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#181510] px-4 py-1.5 font-mono text-xs text-[#F2EEE3]">
              Mareana
            </span>
            <span className="rounded-full border border-[#181510]/20 px-4 py-1.5 font-mono text-xs text-[#181510]/70">
              AI Design System
            </span>
            <span className="rounded-full border border-[#181510]/20 px-4 py-1.5 font-mono text-xs text-[#181510]/70">
              Design Engineering
            </span>
            <span className="rounded-full border border-[#181510]/20 px-4 py-1.5 font-mono text-xs text-[#181510]/70">
              Case Study
            </span>
          </div>
        </FadeIn>

        <FadeIn>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl">
            An AI design system developers can actually ship with
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="mt-6 max-w-2xl text-base text-[#181510]/70 sm:text-lg">
            Tokens, style guide, and components live in a markdown file — so teams stay on the design
            track from planning layouts to critiquing output, and developers can focus on
            functionality.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {metaRow.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#181510]/50">{item.label}</span>
                <span className="text-sm font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-8 rounded-3xl border border-[#181510]/25 bg-[#FAF8F1] p-5 sm:grid-cols-2 sm:p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-3xl font-extrabold sm:text-4xl" style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <span className="font-mono text-xs text-[#181510]/60 sm:whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-14">
            <DesignSystemTrigger />
          </div>
        </FadeIn>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>Brief</SectionHeading>
          </FadeIn>
          <FadeIn>
            <p className="mt-6 text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              As Mareana started building more with AI, the product&apos;s taste was the first thing
              to slip. Screens looked plausible, but they didn&apos;t look like Mareana — spacing,
              type, and components drifted the moment a developer asked the model for a new layout.
            </p>
            <p className="mt-4 text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              I built a system that could travel with the work: a markdown spec that includes every
              design token, the style guide, and the component system — plus the rules to plan a
              layout and critique it afterward.
            </p>
          </FadeIn>
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>The problem</SectionHeading>
          </FadeIn>
          <FadeIn>
            <ul className="mt-6 flex flex-col gap-3">
              {problem.map((point) => (
                <li key={point} className="flex gap-3 text-base text-[#181510]/80 sm:text-lg">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#181510]/40"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>What&apos;s in the system</SectionHeading>
          </FadeIn>
          <FadeIn>
            <p className="mt-6 text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              Everything a developer or a model needs to stay on-brand lives in one markdown file.
              The live spec below is that file, rendered — so you can browse the same tokens and
              patterns the system encodes.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="mt-6 grid divide-y divide-[#181510]/20 overflow-hidden rounded-3xl border border-[#181510]/25 bg-[#FAF8F1] lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {stack.map((item, index) => (
                <div key={item.step} className="flex flex-col gap-2 px-6 py-6">
                  <span className="font-mono text-xs text-[#181510]/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-extrabold tracking-tight">{item.step}</span>
                  <p className="text-sm leading-[1.7] text-[#181510]/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>The idea</SectionHeading>
          </FadeIn>
          <FadeIn>
            <blockquote className="mt-6 border-l-4 border-[#181510] pl-6">
              <p className="text-xl leading-[1.5] font-bold tracking-tight text-balance sm:text-2xl">
                If the design system can be read by a model, developers don&apos;t have to babysit
                the visuals — they can stay on the design track and focus on functionality.
              </p>
            </blockquote>
          </FadeIn>
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>My contribution</SectionHeading>
          </FadeIn>
          <FadeIn>
            <ul className="mt-6 flex flex-col gap-3">
              {contribution.map((point) => (
                <li key={point} className="flex gap-3 text-base text-[#181510]/80 sm:text-lg">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#181510]/40"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
