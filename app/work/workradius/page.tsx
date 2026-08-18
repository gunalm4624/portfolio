import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import WorkRadiusEmbed from "./WorkRadiusEmbed";

export const metadata: Metadata = {
  title: "WorkRadius — commute-first job search for designers",
  description:
    "Case study: WorkRadius, a live job platform that puts design roles on a map so designers can find work near their commute, apply, and track applications.",
};

const metaRow = [
  { label: "Role", value: "Founder · design & build" },
  { label: "Type", value: "Independent product" },
  { label: "Status", value: "Live · ~42 people job hunting" },
  { label: "Site", value: "workradius.in" },
];

const stats = [
  { value: "15 days", label: "built and launched", color: "#ed254e" },
  { value: "~42", label: "people using it for job hunt", color: "#2F5DFF" },
];

const stack = [
  { step: "Next.js", detail: "App and UI, shipped as a solo build." },
  { step: "Supabase", detail: "Auth, jobs, applications, and tracking data." },
  { step: "shadcn/ui", detail: "Component layer for the product chrome." },
  { step: "Dodo Payments", detail: "Subscriptions for the paid tier." },
  { step: "Clarity + GA", detail: "Microsoft Clarity and Google Analytics for how people hunt." },
];

const product = [
  "Jobs float on a map — not a 40-page list — so commute is visible before you apply.",
  "Filter by role, location, and what actually matters for UI/UX and product designers.",
  "Apply from the listing, then track applications in one place.",
];

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="border-b-2 border-[#181510] pb-4 text-2xl font-extrabold tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}

export default function WorkRadiusCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F2EEE3] text-[#181510]">
      <Navbar />

      <main className="flex-1 px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24 md:px-20">
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
              Independent
            </span>
            <span className="rounded-full border border-[#181510]/20 px-4 py-1.5 font-mono text-xs text-[#181510]/70">
              Live product
            </span>
            <span className="rounded-full border border-[#181510]/20 px-4 py-1.5 font-mono text-xs text-[#181510]/70">
              Job search
            </span>
            <span className="rounded-full border border-[#181510]/20 px-4 py-1.5 font-mono text-xs text-[#181510]/70">
              Case Study
            </span>
          </div>
        </FadeIn>

        <FadeIn>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Making job hunting fun — roles near your commute, on a map
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="mt-6 max-w-2xl text-base text-[#181510]/70 sm:text-lg">
            WorkRadius is my own product: a commute-first job platform for designers. Jobs float on
            a map, you apply from there, and you track every application — instead of drowning in
            lists.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-8">
            <a
              href="https://www.workradius.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b-2 border-[#ed254e] font-mono text-sm font-bold text-[#181510] transition-opacity hover:opacity-70"
            >
              Visit workradius.in <ArrowUpRight size={16} />
            </a>
          </div>
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
                <span className="font-mono text-xs text-[#181510]/60 sm:whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-14">
            <WorkRadiusEmbed />
          </div>
        </FadeIn>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>Why it exists</SectionHeading>
          </FadeIn>
          <FadeIn>
            <p className="mt-6 text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              Job boards treat commute as a filter buried in a sidebar. For designers hunting in a
              city, distance is the job. I wanted hunting to feel closer to exploring a map than
              grinding a spreadsheet — something you&apos;d actually open again.
            </p>
          </FadeIn>
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>What it does</SectionHeading>
          </FadeIn>
          <FadeIn>
            <ul className="mt-6 flex flex-col gap-3">
              {product.map((point) => (
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
            <SectionHeading>Stack</SectionHeading>
          </FadeIn>
          <FadeIn>
            <div className="mt-6 grid divide-y divide-[#181510]/20 overflow-hidden rounded-3xl border border-[#181510]/25 bg-[#FAF8F1] sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
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
      </main>

      <Footer />
    </div>
  );
}
