import { ArrowUpRight } from "lucide-react";

import { BOOKING_HREF } from "../../lib/cal";
import FadeIn from "./FadeIn";

export default function ContactCta() {
  return (
    <section id="contact" className="page-shell w-full scroll-mt-6 px-5 pt-12 pb-16 font-body sm:px-8 sm:pt-16 sm:pb-24 md:px-10 lg:px-12">
      <FadeIn>
        <div className="flex flex-col items-start gap-10 rounded-[2rem] bg-[#141413] p-7 text-white sm:p-12 md:p-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[13px] text-white/80">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7bd36f] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7bd36f]" />
            </span>
            Open to work
          </span>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Have a product that needs <span className="text-white/45 ">both halves of the brain?</span>
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-white/60">
            The first call is always free. Tell me what you&apos;re building and I&apos;ll tell you how I&apos;d approach it.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={BOOKING_HREF}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm text-[#141413] transition-colors hover:bg-[#E9E8E2]"
            >
              Start a project
              <ArrowUpRight size={14} />
            </a>
            <a
              href="mailto:hey@gunalm.design"
              className="inline-flex h-11 items-center rounded-full bg-white/10 px-5 text-sm transition-colors hover:bg-white/15"
            >
              hey@gunalm.design
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
