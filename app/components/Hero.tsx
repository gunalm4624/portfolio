import { ArrowDown, Sparkle } from "lucide-react";

import CtaButton from "./CtaButton";
import FadeIn from "./FadeIn";

const skills = [
  "Product Design",
  "Rapid Prototyping",
  "Design Systems",
  "Frontend Engineering",
  "AI System Thinking",
  "MVP Builds",
  "Next.js & React",
  "iOS Swift",
  "SwiftUI",
  "Design-to-Code",
  "Growth & Conversion",
];

const stats = [
  { value: "3+", label: "years designing and shipping", color: "#ed254e" },
  { value: "24+", label: "projects delivered", color: "#2F5DFF" },
  { value: "15M+", label: "people touched", color: "#22C55E" },
  { value: "0", label: "px left unaligned", color: "#181510" },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#F2EEE3] text-[#181510]">
      <div className="page-shell flex w-full flex-col px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24 md:px-20">
        <div className="flex flex-col">
          <FadeIn>
            <h1 className="text-[2.5rem] leading-[1.12] font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">Designer.</span>
              <span className="block">
                Engineer.
                <span className="hidden md:inline"> who</span>
              </span>
              <span className="relative isolate mt-[0.12em] inline-block md:mt-0 md:whitespace-nowrap">
                <span
                  className="absolute inset-x-0 bottom-1.5 -z-10 h-[0.38em] -rotate-1 bg-[#FBBF24] sm:bottom-3"
                  aria-hidden="true"
                />
                <span className="md:hidden">who </span>
                skips the handoff.
              </span>
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="mt-6 flex max-w-xl flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm leading-relaxed text-[#181510]/60 sm:mt-8 sm:text-base sm:leading-[2]">
              {["Design Engineer", "Ships MVPs solo", "Startups & Founders", "Figma to production"].map(
                (item, index) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-[#181510]/30">
                        ·
                      </span>
                    ) : null}
                    {item}
                  </span>
                ),
              )}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-8 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
              <CtaButton
                label="See the work"
                href="#works"
                className="w-fit max-w-none"
                icon={<ArrowDown size={18} className="shrink-0" />}
                iconPosition="suffix"
              />
              <p className="font-mono text-sm text-[#181510]/60">Based in Chennai, India</p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="relative w-full overflow-hidden border-t border-[#181510]/10 bg-[#181510] py-5">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`} className="flex items-center gap-10">
              <span className="text-xl font-bold text-[#F2EEE3] sm:text-2xl">{skill}</span>
              <Sparkle
                className={index % 2 === 0 ? "text-[#ed254e]" : "text-[#4ADE80]"}
                size={18}
                fill="currentColor"
              />
            </span>
          ))}
        </div>
      </div>

      <div className="page-shell w-full px-4 py-12 sm:px-6 sm:py-16 md:px-20">
        <div className="grid grid-cols-2 divide-x divide-y divide-[#181510]/30 overflow-hidden rounded-3xl border border-[#181510]/30 sm:grid-cols-4 sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="flex min-w-0 flex-col gap-2 px-4 py-5 sm:px-8 sm:py-6">
              <span className="text-3xl font-extrabold sm:text-5xl" style={{ color: stat.color }}>
                {stat.value}
              </span>
              <span className="font-mono text-xs text-[#181510]/60 sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
