import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Flame,
  HeartPulse,
  Lock,
  MapPin,
  Scale,
  Target,
  Trophy,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import AppleLogo from "../../components/AppleLogo";
import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ScreenMarquee from "../../components/ScreenMarquee";

export const metadata: Metadata = {
  title: "Pace — a walking app built for weight loss, in a week",
  description:
    "Case study: Pace, a native iOS walking and weight tracker with adaptive step targets, streaks that count easy days, and health data that stays on the device.",
};

const APP_STORE_URL = "https://apps.apple.com/us/app/pace-walking-weight-loss/id6811346253";

const meta = [
  { label: "Date", value: "Sep 2026" },
  { label: "Role", value: "Design, build, launch" },
  { label: "Stack", value: "Native iOS, Swift" },
  { label: "Built with", value: "Claude Code" },
  { label: "Supports", value: "iOS 18 and later" },
];

const stats = [
  { value: "1 week", label: "from idea to the App Store, built for myself" },
  { value: "1", label: "version: iPhone only, no multi-device launch" },
  { value: "$2.99", label: "one-time unlock, no subscription" },
  { value: "0", label: "data collected, per the App Store privacy label" },
];

const features = [
  {
    icon: Target,
    title: "Targets that adapt",
    body: "Weekly step targets adjust to what you actually do, so a bad week doesn't turn into a guilt trip.",
  },
  {
    icon: Scale,
    title: "Weight, with a trendline",
    body: "Track your weight toward a goal and see the trend, not just the daily noise.",
  },
  {
    icon: MapPin,
    title: "Walk with a map",
    body: "Record outdoor walks with GPS and share the route as a map.",
  },
  {
    icon: Flame,
    title: "Streaks that count easy days",
    body: "An easy day still keeps the streak alive, which makes the habit easier to keep.",
  },
  {
    icon: HeartPulse,
    title: "Built on Apple Health",
    body: "Steps, heart rate, distance, sleep and more come from Apple Health, with Apple Watch and widget support.",
  },
  {
    icon: Trophy,
    title: "Step challenges",
    body: "Challenges give a week a clear goal when you want a bit more push.",
  },
];

const screens = [1, 2, 3, 4, 5, 6, 7];

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`bg-white ${className.includes("rounded") ? "" : "rounded-[2rem]"} ${className}`}>{children}</div>;
}

function Chapter({
  index,
  title,
  children,
  panel,
}: {
  index: string;
  title: string;
  children: ReactNode;
  panel: ReactNode;
}) {
  return (
    <FadeIn>
      <Card className="grid gap-8 p-3 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-10 p-3 sm:p-7">
          <span className="text-[13px] text-[#6b6a66]">{index}</span>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl">{title}</h2>
            <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-[#6b6a66] sm:text-base">{children}</div>
          </div>
        </div>
        <div className="flex min-h-72 flex-col justify-center rounded-[1.5rem] bg-[#F4F3EF] p-5 sm:p-8">{panel}</div>
      </Card>
    </FadeIn>
  );
}

export default function PaceCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col text-[#141413]">
      <Navbar />

      <main className="page-shell flex-1 px-5 pt-4 pb-16 font-body sm:px-8 md:px-10 lg:px-12">
        <Link href="/#works" className="mb-4 inline-flex items-center gap-2 px-2 text-sm text-[#6b6a66] transition-colors hover:text-[#141413]">
          <ArrowLeft size={14} /> Back to work
        </Link>

        <div className="flex flex-col gap-4">
          <FadeIn>
            <Card className="flex flex-col gap-10 p-6 sm:p-10">
              <div className="flex flex-col gap-6">
                <h1 className="max-w-5xl font-display text-5xl leading-[1.02] tracking-[-0.045em] sm:text-7xl">
                  Pace. A walking app that tells me how many steps to take.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-[#6b6a66] sm:text-xl">
                  I built Pace for myself, in a week. It is made for losing weight by walking, so instead of just showing a step count it tells me how many steps to hit each day.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-[#141413] px-5 text-sm text-white transition-colors hover:bg-[#2f2f2c]"
                  >
                    <AppleLogo />
                    View on the App Store
                    <ArrowUpRight size={14} />
                  </a>
                  <Link
                    href="/projects/pace/support"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-[#F4F3EF] px-5 text-sm transition-colors hover:bg-[#E9E8E2]"
                  >
                    Support
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-6 border-t border-[#141413]/10 pt-6 sm:grid-cols-3 lg:grid-cols-5">
                {meta.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <dt className="text-[13px] text-[#6b6a66]">{m.label}</dt>
                    <dd className="text-sm">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </FadeIn>

          <FadeIn>
            <div className="overflow-hidden rounded-[2rem] bg-[#F9D3DA] p-6 sm:p-12">
              <div className="flex items-start justify-center gap-3 sm:gap-10">
                {[1, 3, 5].map((n, i) => (
                  <Image
                    key={n}
                    src={`/work/pace/pace-${n}.png`}
                    alt={`Pace iPhone screen ${n}`}
                    width={1000}
                    height={2075}
                    priority
                    sizes="(min-width: 1024px) 25vw, 30vw"
                    className={`h-auto w-[30%] max-w-[320px] ${i === 1 ? "mt-8 sm:mt-14" : ""}`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <FadeIn key={s.value} delay={i * 0.05}>
                <Card className="flex h-full min-h-44 flex-col justify-between gap-6 p-6">
                  <p className="font-display text-5xl tracking-[-0.04em]">{s.value}</p>
                  <p className="text-sm leading-relaxed text-[#6b6a66]">{s.label}</p>
                </Card>
              </FadeIn>
            ))}
          </section>

          <Chapter
            index="01 · The week"
            title="Built for myself, shipped in a week."
            panel={
              <div className="flex flex-col gap-8">
                <div className="flex items-end justify-between gap-4">
                  <p className="font-display text-8xl leading-none tracking-[-0.05em]">7</p>
                  <p className="pb-2 text-right text-sm leading-snug text-[#6b6a66]">
                    days from idea to
                    <br />
                    the App Store
                  </p>
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                    <div key={d} className="flex flex-col gap-2">
                      <span className="h-2 rounded-full bg-[#141413]" />
                      <span className="text-center text-[11px] text-[#6b6a66]">D{d}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-white px-5 py-4 text-sm">
                  One version. iPhone only. No extra platforms to slow the launch down.
                </div>
              </div>
            }
          >
            <p>
              Like Hydrabit, I built Pace with Claude Code in about a week. This time I kept the scope to a single version, so the whole week went into one thing done well.
            </p>
            <p>
              I built it for myself first. I wanted to lose weight by walking, and nothing I tried was designed for that.
            </p>
          </Chapter>

          <Chapter
            index="02 · The idea"
            title="Not just a step counter."
            panel={
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-3 gap-2">
                  {["My weight", "My goal", "My timeframe"].map((t) => (
                    <div key={t} className="rounded-2xl bg-white px-3 py-4 text-center text-sm">
                      {t}
                    </div>
                  ))}
                </div>
                <ArrowDown size={16} className="self-center text-[#6b6a66]" />
                <div className="rounded-2xl bg-[#141413] p-6 text-white">
                  <p className="text-[13px] text-white/50">Pace works out</p>
                  <p className="mt-6 font-display text-3xl tracking-[-0.03em]">Steps to walk every day</p>
                </div>
              </div>
            }
          >
            <p>
              Most walking apps stop at showing the number of steps you took. That doesn&apos;t tell you whether it was enough to lose weight.
            </p>
            <p>
              Pace starts from my weight and how long I want to take, and suggests the number of steps to hit each day. The target adapts as my real activity comes in, so the plan keeps up with me.
            </p>
          </Chapter>

          <FadeIn>
            <Card className="flex flex-col gap-3 rounded-3xl p-6 sm:p-10">
              <h2 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                What it does.
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-[#6b6a66] sm:text-base">
                Pace keeps walking simple: a target that fits your week, a weight trend you can trust, and a streak that doesn&apos;t punish a rest day.
              </p>
            </Card>
          </FadeIn>

          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, body }, i) => (
              <FadeIn key={title} delay={(i % 3) * 0.05}>
                <Card className="flex h-full min-h-60 flex-col justify-between gap-10 p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F3EF]">
                    <Icon size={17} strokeWidth={1.5} />
                  </span>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-display text-xl tracking-[-0.02em]">{title}</h3>
                    <p className="text-[15px] leading-relaxed text-[#6b6a66]">{body}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </section>

          <FadeIn>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col justify-between gap-16 rounded-[2rem] bg-[#141413] p-7 text-white sm:p-10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Lock size={17} strokeWidth={1.5} />
                </span>
                <div className="flex flex-col gap-3">
                  <h2 className="font-display text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl">
                    Private by design.
                  </h2>
                  <p className="text-[15px] leading-relaxed text-white/60 sm:text-base">
                    Health data stays on your device and is read from Apple Health. The App Store privacy label says no data is collected.
                  </p>
                </div>
              </div>
              <Card className="flex flex-col justify-between gap-16 p-7 sm:p-10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F3EF]">
                  <Target size={17} strokeWidth={1.5} />
                </span>
                <div className="flex flex-col gap-3">
                  <h2 className="font-display text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl">
                    Pay once, keep it.
                  </h2>
                  <p className="text-[15px] leading-relaxed text-[#6b6a66] sm:text-base">
                    Pace is free to start. Pace Essential is a one-time $2.99 unlock, with no subscription.
                  </p>
                </div>
              </Card>
            </div>
          </FadeIn>

          <FadeIn>
            <Card className="flex flex-col gap-8 py-8 sm:py-12">
              <div className="flex flex-col gap-2 px-6 sm:px-10">
                <h2 className="font-display text-4xl tracking-[-0.04em] sm:text-5xl">All screens</h2>
                <p className="text-[15px] text-[#6b6a66]">Hover to pause.</p>
              </div>
              <ScreenMarquee srcs={screens.map((n) => `/work/pace/pace-${n}.png`)} alt="Pace iPhone" />
            </Card>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
