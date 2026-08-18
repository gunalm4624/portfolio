import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LumisDemoTrigger from "./LumisDemoTrigger";

// Keep this case study out of search and off AI training/crawling. See app/robots.ts
// for the matching Disallow rules — meta tags alone only stop well-behaved crawlers.
export const metadata: Metadata = {
  title: "Lumis — AI Assistant for Pharma Batch Records",
  description:
    "Case study: designing Lumis, an AI assistant that helps pharma teams query batch records and manufacturing data in plain language.",
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
  { label: "Status", value: "Live · 10+ CDMOs & virtual sponsors" },
];

const stats = [
  { value: "10+", label: "pharma CDMOs & sponsors live", color: "#ed254e" },
  {
    value: "48h → <5min",
    label: "to answer a batch record question — inside the 15-min ELSA inspection-readiness bar",
    color: "#2F5DFF",
  },
  // TODO: swap for a real number once Sponsor/CDMO feedback is collected and calculated.
  { value: "In progress", label: "gathering feedback from Sponsors & CDMOs", color: "#22C55E" },
];

const pipeline = [
  {
    step: "Digitize",
    detail:
      "Paper batch records — anywhere from 1,000 to 20,000 pages per batch — are scanned and digitized directly in the platform.",
  },
  {
    step: "Exception review",
    detail:
      "Analysts don't re-read every page. Once digitized, they review only the exceptions the system flags.",
  },
  {
    step: "Knowledge graph",
    detail:
      "Reviewed data feeds into a knowledge graph — one connected, structured source of truth across every batch.",
  },
  {
    step: "Lumis (RAG)",
    detail:
      "Lumis is a retrieval-augmented assistant wired directly into that knowledge graph, so every answer is grounded in reviewed, structured data.",
  },
];

const researchFindings = [
  "Data for a single batch was often spread across dozens of documents and systems.",
  "Terminology and record structure varied from client to client — there was no single schema.",
  "Trust mattered more than speed. A confident wrong answer was worse than a slow right one.",
];

const contribution = [
  "Designed and developed the UI end-to-end for Lumis across desktop and mobile.",
  "Built and maintained the Figma design system and interaction patterns used across the assistant.",
  "Developed an AI Design Thinking workflow to keep LLM-generated screens on-brand and consistent, instead of drifting into generic \"AI-slop\" UI.",
  "Partnered with engineering on the design-to-code handoff, cutting page turnaround from 14 hours to 2.",
];

const outcomes = [
  "Live and in active use by 10+ pharma CDMOs and virtual sponsors.",
  "Cut batch record lookups from 48 hours to under 5 minutes — well inside the 15-minute ELSA inspection-readiness bar CDMOs are held to.",
];

const learnings = [
  "In a regulated industry, an AI product earns trust through traceability, not confidence — every answer needs a way back to its source.",
  "This project surfaced a bigger idea: an AI design system that carries the brand's design taste forward on its own, so future development — including what engineers build with AI — can ship without breaking brand or UI consistency across the product.",
];

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="border-b-2 border-[#181510] pb-4 text-2xl font-extrabold tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}

export default function LumisCaseStudy() {
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
              AI Product
            </span>
            <span className="rounded-full border border-[#181510]/20 px-4 py-1.5 font-mono text-xs text-[#181510]/70">
              Pharma & Life Sciences
            </span>
            <span className="rounded-full border border-[#181510]/20 px-4 py-1.5 font-mono text-xs text-[#181510]/70">
              Case Study
            </span>
          </div>
        </FadeIn>

        <FadeIn>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Making batch records instantly understandable with an AI assistant
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="mt-6 max-w-2xl text-base text-[#181510]/70 sm:text-lg">
            Pharma teams were losing hours digging through batch records and manufacturing data
            scattered across systems. I designed and helped build the assistant that lets them just
            ask.
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
          <div className="mt-10 grid grid-cols-1 gap-8 rounded-3xl border border-[#181510]/25 bg-[#FAF8F1] p-5 sm:grid-cols-3 sm:p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-3xl font-extrabold sm:text-4xl" style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <span className="font-mono text-xs leading-[2.0] text-[#181510]/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-14">
            <LumisDemoTrigger />
          </div>
        </FadeIn>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>Brief</SectionHeading>
          </FadeIn>
          <FadeIn>
            <p className="mt-6 text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              Pharma manufacturing teams manage enormous volumes of batch records, certificates of
              analysis, and compliance documentation — spread across PDFs, spreadsheets, and legacy
              systems. Finding a specific answer inside that data could take hours, and the people
              who needed it most weren&apos;t always the people who knew where to look.
            </p>
            <p className="mt-4 text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              Mareana asked a simple question: what if you could just ask, and get an answer grounded
              in the actual manufacturing data — without an analyst in the loop?
            </p>
          </FadeIn>
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>Understanding the problem</SectionHeading>
          </FadeIn>
          <FadeIn>
            <p className="mt-6 text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              Before designing an interface, I needed to understand how batch records actually get
              used — by quality teams, manufacturing leads, CDMOs, and virtual sponsors, each with a
              different reason to be in the data.
            </p>
          </FadeIn>
          <FadeIn>
            <ul className="mt-6 flex flex-col gap-3">
              {researchFindings.map((point) => (
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

          <FadeIn>
            <h3 className="mt-14 text-xl font-extrabold tracking-tight sm:text-2xl">
              How the data actually flows
            </h3>
          </FadeIn>

          <FadeIn>
            <div className="mt-6 grid divide-y divide-[#181510]/20 overflow-hidden rounded-3xl border border-[#181510]/25 bg-[#FAF8F1] lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {pipeline.map((item, index) => (
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
            <SectionHeading>Designing for trust, not just speed</SectionHeading>
          </FadeIn>
          <FadeIn>
            <p className="mt-6 text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              The hardest constraint wasn&apos;t the AI itself — it was making the AI feel like
              Mareana. In a regulated industry, an answer that sounds confident but can&apos;t be
              traced back to a source is worse than no answer at all.
            </p>
          </FadeIn>

          <FadeIn>
            <blockquote className="mt-8 border-l-4 border-[#181510] pl-6">
              <p className="text-xl leading-[1.5] font-bold tracking-tight text-balance sm:text-2xl">
                Every answer needed a way back to its source, or it didn&apos;t ship — a generated
                summary is never allowed to stand in as ground truth.
              </p>
            </blockquote>
          </FadeIn>

          <FadeIn>
            <p className="mt-8 text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              I also built an AI Design Thinking workflow for the broader team — a set of principles
              and checks that kept LLM-assisted screens consistent with Mareana&apos;s brand, visual
              language, and design system, instead of drifting into generic, ungrounded &quot;AI
              slop&quot; interfaces.
            </p>
          </FadeIn>
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>The solution</SectionHeading>
          </FadeIn>
          <FadeIn>
            <p className="mt-6 text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              Lumis is a fully responsive, conversational assistant embedded directly into
              Mareana&apos;s platform. It answers questions about batch records and manufacturing
              data in plain language, with every answer traceable back to its source — so teams get
              speed without giving up the ability to verify.
            </p>
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

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>Outcomes</SectionHeading>
          </FadeIn>
          <FadeIn>
            <ul className="mt-6 flex flex-col gap-3">
              {outcomes.map((point) => (
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
            <SectionHeading>Key learning</SectionHeading>
          </FadeIn>
          <FadeIn>
            <ul className="mt-6 flex flex-col gap-3">
              {learnings.map((point) => (
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
