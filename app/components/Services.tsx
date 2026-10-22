import { Braces, Check, PenTool, Timer } from "lucide-react";

import FadeIn from "./FadeIn";

const services = [
  {
    icon: PenTool,
    title: "Product design",
    body: "Flows, interface and a design system your engineers will actually adopt.",
    points: ["Research and flows", "Interface and motion", "Design system"],
  },
  {
    icon: Braces,
    title: "Front-end build",
    body: "Production React or SwiftUI, typed and reviewed like the rest of your codebase.",
    points: ["Next.js and TypeScript", "SwiftUI", "Accessibility pass"],
  },
  {
    icon: Timer,
    title: "MVP sprint",
    body: "From a rough idea to a live product you can put in front of customers, built solo.",
    points: ["Fixed scope", "Real data, real devices", "No handoffs"],
    dark: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="page-shell w-full scroll-mt-6 px-5 py-12 font-body text-[#141413] sm:px-8 sm:py-16 md:px-10 lg:px-12">
      <FadeIn>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-5xl tracking-[-0.04em] sm:text-6xl">Services</h2>
          <p className="max-w-xs text-[15px] leading-relaxed text-[#6b6a66]">
            Three ways to work together. Fixed scope and regular demos, with no surprises.
          </p>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {services.map(({ icon: Icon, title, body, points, dark }, i) => (
          <FadeIn key={title} delay={i * 0.06}>
            <div
              className={`flex h-full flex-col rounded-[2rem] p-7 ${
                dark ? "bg-[#141413] text-white" : "bg-white"
              }`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  dark ? "bg-white/10" : "bg-[#F4F3EF]"
                }`}
              >
                <Icon size={17} strokeWidth={1.5} />
              </span>

              <div className="mt-16 flex flex-col gap-2.5">
                <h3 className="font-display text-xl tracking-[-0.02em]">{title}</h3>
                <p className={`text-[15px] leading-relaxed ${dark ? "text-white/60" : "text-[#6b6a66]"}`}>{body}</p>
              </div>

              <ul className="mt-10 flex flex-col">
                {points.map((p) => (
                  <li
                    key={p}
                    className={`flex items-center gap-3 border-t py-3.5 text-sm first:mt-0 ${
                      dark ? "border-white/15 text-white/80" : "border-[#141413]/10 text-[#141413]/80"
                    }`}
                  >
                    <Check size={13} className={dark ? "text-white/60" : "text-[#6b6a66]"} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
