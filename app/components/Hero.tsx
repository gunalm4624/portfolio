import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

import { BOOKING_HREF } from "../../lib/cal";
import FadeIn from "./FadeIn";
import LocalTime from "./LocalTime";

const teams = [
  "Tier-1 banks across the Middle East and India",
  "A national payments bank",
  "Enterprise fintech platforms",
  "White-label banking products",
  "Pharma data intelligence teams",
  "Early-stage founders",
];

export default function Hero() {
  return (
    <section className="page-shell w-full px-5 pt-4 pb-6 font-body text-[#141413] sm:px-8 md:px-10 lg:px-12">
      <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
        <FadeIn>
          <div className="flex h-full min-h-[520px] flex-col justify-between gap-12 rounded-[2rem] bg-white p-6 sm:p-9">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image src="/gunalm-design.png" alt="Gunal" fill sizes="44px" className="object-cover" priority />
                </div>
                <div className="leading-tight">
                  <p className="font-display text-lg">Gunal M</p>
                  <p className="text-[13px] text-[#6b6a66]">Design engineer, Chennai</p>
                </div>
              </div>
              <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#141413] px-3.5 py-1.5 text-[13px]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7bd36f] opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7bd36f]" />
                </span>
                <span className="shimmer-text">Building WorkRadius</span>
              </span>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
              <h1 className="font-display text-[2.6rem] leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4.25rem]">
                Interfaces designed and built <span className="font-normal  text-[#141413]/45">without the handoff.</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[#6b6a66] sm:text-xl">
                I&apos;m Gunal, a design engineer. I take products from the first sketch to the shipped front end, so nothing gets lost between the design file and the pull request.
              </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={BOOKING_HREF}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[#141413] px-5 text-sm text-white transition-colors hover:bg-[#2f2f2c]"
                >
                  Book a call
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="#works"
                  className="inline-flex h-11 items-center rounded-full bg-[#F4F3EF] px-5 text-sm transition-colors hover:bg-[#E9E8E2]"
                >
                  See the work
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="min-h-[420px]">
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] bg-[#d9d6cc]">
            <Image
              src="/gunalm-design.png"
              alt="Portrait of Gunal"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-[13px] backdrop-blur-md">
              <MapPin size={13} />
              Chennai, IN
            </span>
          </div>
        </FadeIn>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FadeIn>
          <div className="flex h-full min-h-44 flex-col justify-between rounded-[2rem] bg-white p-6">
            <div className="flex justify-between text-[13px] text-[#6b6a66]">
              <span>Local time</span>
              <span>Chennai</span>
            </div>
            <p className="font-display text-5xl tracking-[-0.04em] tabular-nums">
              <LocalTime />
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="flex h-full min-h-44 flex-col justify-between rounded-[2rem] bg-white p-6">
            <span className="text-[13px] text-[#6b6a66]">Experience</span>
            <p className="font-display text-5xl tracking-[-0.04em]">
              3+ <span className="text-2xl text-[#6b6a66]">years</span>
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="sm:col-span-2 lg:col-span-1">
          <div className="flex h-full min-h-44 flex-col justify-between rounded-[2rem] bg-[#141413] p-6 text-white">
            <span className="text-[13px] text-white/50">Currently</span>
            <p className="font-display text-2xl leading-tight tracking-[-0.03em]">
              Lead Brand and Web Designer at Mareana
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="mt-4 flex flex-col gap-4 overflow-hidden rounded-3xl bg-white p-6 sm:flex-row sm:items-center sm:gap-10 sm:px-8">
          <span className="shrink-0 text-[13px] text-[#6b6a66]">Worked with</span>
          <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div style={{ animationDuration: "50s" }} className="animate-marquee flex w-max gap-12 font-display text-xl tracking-[-0.02em] whitespace-nowrap">
              {[...teams, ...teams].map((t, i) => (
                <span key={`${t}-${i}`} className="flex items-center gap-12 text-[#141413]/70">{t}<span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#141413]/25" /></span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
