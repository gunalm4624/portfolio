import { AppWindow, Layers, Megaphone, PenTool, Rocket, Repeat, Smartphone, Triangle } from "lucide-react";

import ClaudeMark from "./ClaudeMark";
import FadeIn from "./FadeIn";

const facts = [
  { label: "Based in", value: "Chennai, India" },
  { label: "Works in", value: "Figma, Claude, Next.js, SwiftUI" },
  { label: "Currently", value: "Mareana" },
];

const systems = [
  { icon: PenTool, label: "Figma MCP × Claude" },
  { icon: Smartphone, label: "iOS Agent" },
  { icon: Triangle, label: "Next.js Agent" },
  { icon: AppWindow, label: "WebOS" },
  { icon: Megaphone, label: "GTM Agent", status: "In progress" },
];

const principles = [
  {
    icon: Layers,
    title: "Prototype in the real medium",
    body: "A coded prototype answers in a day what a static mock-up argues about for a week.",
  },
  {
    icon: Repeat,
    title: "Fewer handoffs, fewer surprises",
    body: "When the person who drew it also builds it, the details survive the trip to production.",
  },
  {
    icon: Rocket,
    title: "Ship, then listen",
    body: "Release something small, watch how people use it, and let that decide what comes next.",
  },
];

export default function About() {
  return (
    <section id="about" className="page-shell w-full scroll-mt-6 px-5 py-12 font-body text-[#141413] sm:px-8 sm:py-16 md:px-10 lg:px-12">
      <FadeIn>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-5xl tracking-[-0.04em] sm:text-6xl">About</h2>
          <p className="max-w-xs text-[15px] leading-relaxed text-[#6b6a66]">
            Based in Chennai, working with product teams and founders across timezones.
          </p>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <FadeIn>
          <div className="flex h-full flex-col justify-between gap-12 rounded-[2rem] bg-white p-6 sm:p-10">
            <div className="flex flex-col gap-8">
              <p className="font-display text-3xl leading-[1.1] tracking-[-0.035em] sm:text-[2.6rem]">
                I design the product and build it, <span className="text-[#141413]/45 ">so nothing falls through the handoff.</span>
              </p>
              <div className="grid gap-6 text-[15px] leading-relaxed text-[#6b6a66] sm:grid-cols-2">
                <p>
                  Most product problems hide in the gap between a design file and a browser. I work in that gap. I sketch in Figma, then move into code, where spacing, loading states and motion become real decisions instead of annotations.
                </p>
                <p>
                  Teams bring me in when they need one person to own an interface from first flow to shipped front end, from AI-native products to the design systems behind them.
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-5 border-t border-[#141413]/10 pt-6 sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col gap-1">
                  <dt className="text-[13px] text-[#6b6a66]">{f.label}</dt>
                  <dd className="text-sm">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex h-full min-h-[380px] flex-col justify-between gap-10 rounded-[2rem] bg-[#141413] p-6 text-white sm:p-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[13px] text-white/70">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7bd36f] opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7bd36f]" />
                </span>
                Currently working with
              </span>
              <ClaudeMark size={34} />
              </div>
              <h3 className="font-display text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl">
                Building systems using Claude.
              </h3>
            </div>
            <ul className="flex flex-col">
              {systems.map(({ icon: Icon, label, status }) => (
                <li key={label} className="flex items-center gap-3 border-t border-white/15 py-3.5 text-sm text-white/85">
                  <Icon size={15} strokeWidth={1.5} className="text-white/60" />
                  {label}
                  {status ? (
                    <span className="ml-auto rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/70">{status}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {principles.map(({ icon: Icon, title, body }, i) => (
          <FadeIn key={title} delay={i * 0.06}>
            <div className="flex h-full min-h-56 flex-col justify-between gap-8 rounded-[2rem] bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F3EF]">
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl ">{title}</h3>
                <p className="text-sm leading-relaxed text-[#6b6a66]">{body}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
