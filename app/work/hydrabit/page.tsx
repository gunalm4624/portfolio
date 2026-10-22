import { ArrowDown, ArrowRight, ArrowLeft, ArrowUpRight, Check, Globe } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import FadeIn from "../../components/FadeIn";
import AppleLogo from "../../components/AppleLogo";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ScreenMarquee from "../../components/ScreenMarquee";

export const metadata: Metadata = {
  title: "Hydrabit — built and launched in a week with Claude Code",
  description:
    "Case study: Hydrabit, a gamified hydration app where human organs fill with water each day. Designed and built with Claude Code, soft-launched in a week, now running an automated GTM system and aiming for an Apple Design Award.",
};

const APP_STORE_URL = "https://apps.apple.com/us/app/hydrabit-drink-water-tracker/id6809369645";
const SITE_URL = "https://www.hydrabit.app/";

const meta = [
  { label: "Date", value: "Oct 2026" },
  { label: "Role", value: "Design, build, launch" },
  { label: "Stack", value: "Native iOS, Swift" },
  { label: "Supports", value: "iOS 18 to 27.1" },
  { label: "Built with", value: "Claude Code" },
  { label: "Platforms", value: "iPhone, iPad, Watch, iPhone Duo" },
];

const stats = [
  { value: "1 week", label: "idea to soft launch, review time included" },
  { value: "11am", label: "a new blog post, every day, automatically" },
  { value: "4", label: "device families: iPhone, iPad, Watch, iPhone Duo" },
  { value: "ADA", label: "the target for the next release" },
];

const screens = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

export default function HydrabitCaseStudy() {
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
                  Hydrabit. I built and shipped it in a week, with Claude Code.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-[#6b6a66] sm:text-xl">
                  A simple hydration reminder with a gamified twist: every day, each human organ fills with water. Designed and built end to end with Claude Code.
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
                  <a
                    href={SITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-[#F4F3EF] px-5 text-sm transition-colors hover:bg-[#E9E8E2]"
                  >
                    <Globe size={15} />
                    Visit site
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-6 border-t border-[#141413]/10 pt-6 sm:grid-cols-3 lg:grid-cols-6">
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
            <div className="overflow-hidden rounded-[2rem] bg-[#CDEBF0] p-6 sm:p-12">
              <div className="flex items-start justify-center gap-3 sm:gap-10">
                {[1, 4, 6].map((n, i) => (
                  <Image
                    key={n}
                    src={`/work/hydrabit/iphone-${n}.png`}
                    alt={`Hydrabit iPhone screen ${n}`}
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
            title="From idea to soft launch in seven days."
            panel={
              <div className="flex flex-col gap-8">
                <div className="flex items-end justify-between gap-4">
                  <p className="font-display text-8xl leading-none tracking-[-0.05em]">7</p>
                  <p className="pb-2 text-right text-sm leading-snug text-[#6b6a66]">
                    days from idea to
                    <br />
                    soft launch
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
                <div className="flex gap-1.5">
                  {["Design", "Build", "Submit", "Review", "Live"].map((t, i, arr) => (
                    <span
                      key={t}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] ${
                        i === arr.length - 1 ? "bg-[#141413] text-white" : "bg-white"
                      }`}
                    >
                      {i === arr.length - 1 ? <Check size={13} /> : null}
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#6b6a66]">Apple&apos;s review time is included in those seven days.</p>
              </div>
            }
          >
            <p>
              I designed and built Hydrabit completely with Claude Code, and soft-launched it within a week. That week includes the time Apple takes to review a build.
            </p>
            <p>
              The idea is deliberately simple. You log a drink, and a 3D human organ fills with water. Every day, each organ gets its turn, so hydration is something you watch happen instead of a number you track.
            </p>
          </Chapter>

          <Chapter
            index="02 · The rejection"
            title="The App Store said no. I wrote down why."
            panel={
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-[13px] text-[#6b6a66]">Submission 1</p>
                    <span className="mt-3 inline-flex rounded-full bg-[#F6D5D2] px-3 py-1 text-xs text-[#9a3a32]">Rejected</span>
                  </div>
                  <ArrowRight size={16} className="text-[#6b6a66]" />
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-[13px] text-[#6b6a66]">Submission 2</p>
                    <span className="mt-3 inline-flex rounded-full bg-[#E4F0E0] px-3 py-1 text-xs text-[#3b6f35]">Approved</span>
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-5">
                  <p className="font-mono text-xs text-[#6b6a66]">app-review-learnings.md</p>
                  <ul className="mt-4 flex flex-col gap-3 text-sm">
                    {["What got rejected", "How Claude fixed it", "Added to my agent's checklist"].map((t) => (
                      <li key={t} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#141413] text-white">
                          <Check size={12} />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            }
          >
            <p>
              My first submission was rejected. I fixed the issue and submitted again, and this time I documented exactly what went wrong.
            </p>
            <p>
              That write-up is now part of how my agent works. The next time I ship an app, Claude Code already knows what to avoid before the review team has to tell me.
            </p>
          </Chapter>

          <Chapter
            index="03 · What's next"
            title="Organs first. Then animals."
            panel={
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-white p-5">
                  <div className="flex items-center justify-between text-sm">
                    <span>Human organs</span>
                    <span className="rounded-full bg-[#E4F0E0] px-2.5 py-1 text-xs text-[#3b6f35]">Live</span>
                  </div>
                  <p className="mt-1 text-sm text-[#6b6a66]">One organ a day. Every sip fills it with water.</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#141413]/10">
                    <div className="h-full w-3/4 rounded-full bg-[#141413]" />
                  </div>
                </div>
                <div className="flex justify-center text-[#6b6a66]"><ArrowDown size={16} /></div>
                <div className="rounded-2xl bg-white/60 p-5">
                  <div className="flex items-center justify-between text-sm">
                    <span>Animal organs</span>
                    <span className="rounded-full bg-[#141413]/8 px-2.5 py-1 text-xs text-[#6b6a66]">Planned</span>
                  </div>
                  <p className="mt-1 text-sm text-[#6b6a66]">Unlocks once every human organ is complete.</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#141413]/10" />
                </div>
              </div>
            }
          >
            <p>
              Once every human organ is filled, the plan is to bring in animal organs, so there is always a new thing to unlock and a reason to open the app tomorrow.
            </p>
            <p>
              Streaks, tips and widgets keep the daily loop light, and the app stays what it set out to be: a simple hydration reminder.
            </p>
          </Chapter>

          <Chapter
            index="04 · Standing out"
            title="Habit trackers flood the store. So I'm building the GTM system too."
            panel={
              <div className="flex flex-col gap-3">
                {["11:00 · Claude Code writes the day's blog post", "Publishes it to Sanity", "It appears on the Hydrabit product page"].map((t, i) => (
                  <div key={t} className="flex flex-col gap-3">
                    <div className="rounded-2xl bg-white px-5 py-4 text-sm">{t}</div>
                    {i < 2 ? <ArrowDown size={16} className="self-center text-[#6b6a66]" /> : null}
                  </div>
                ))}
                <p className="mt-2 flex items-center gap-2 text-sm text-[#6b6a66]">
                  More automation on the way <ArrowRight size={14} />
                </p>
              </div>
            }
          >
            <p>
              Habit trackers are everywhere, and I want Hydrabit to stand out. So alongside the app, I am building a completely automated go-to-market system.
            </p>
            <p>
              The first piece is live. Every day at 11am, Claude Code writes a blog post and publishes it to Sanity, and it appears on the product page. More automation is on the way.
            </p>
          </Chapter>

          <FadeIn>
            <Card className="flex flex-col gap-3 rounded-3xl p-6 sm:p-10">
              <h2 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                The second launch: every screen, and an eye on Apple Design Awards.
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-[#6b6a66] sm:text-base">
                The second release adds iPad, Apple Watch and iPhone Duo support. The goal is to compete for an Apple Design Award.
              </p>
            </Card>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2">
            <FadeIn>
              <Card className="flex h-full flex-col gap-4 p-6">
                <span className="text-[13px] text-[#6b6a66]">iPad</span>
                <div className="relative min-h-[420px] flex-1">
                  <Image src="/work/hydrabit/ipad.png" alt="Hydrabit on iPad" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-contain" />
                </div>
              </Card>
            </FadeIn>
            <div className="grid gap-4">
              <FadeIn>
                <Card className="flex flex-col gap-4 p-6">
                  <span className="text-[13px] text-[#6b6a66]">iPhone Duo</span>
                  <Image src="/work/hydrabit/fold.png" alt="Hydrabit on iPhone Duo" width={1800} height={1308} sizes="(min-width: 768px) 45vw, 100vw" className="h-auto w-full" />
                </Card>
              </FadeIn>
              <FadeIn delay={0.05}>
                <Card className="flex flex-col gap-4 p-6">
                  <span className="text-[13px] text-[#6b6a66]">Apple Watch Ultra</span>
                  <Image src="/work/hydrabit/watch.png" alt="Hydrabit on Apple Watch Ultra" width={1000} height={1000} sizes="(min-width: 768px) 45vw, 100vw" className="mx-auto h-auto w-full max-w-sm" />
                </Card>
              </FadeIn>
            </div>
          </div>

          <FadeIn>
            <Card className="flex flex-col gap-8 py-8 sm:py-12">
              <div className="flex flex-col gap-2 px-6 sm:px-10">
                <h2 className="font-display text-4xl tracking-[-0.04em] sm:text-5xl">All screens</h2>
                <p className="text-[15px] text-[#6b6a66]">Hover to pause.</p>
              </div>
              <ScreenMarquee srcs={screens.map((n) => `/work/hydrabit/iphone-${n}.png`)} alt="Hydrabit iPhone" />
            </Card>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
