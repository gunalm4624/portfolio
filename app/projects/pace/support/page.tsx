import type { Metadata } from "next";
import { ArrowUpRight, ChevronDown, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pace — Support",
  description: "Help and frequently asked questions for the Pace walking app.",
};

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Pace isn't showing my steps / activity",
    answer: (
      <p>
        Open Settings → Health &amp; devices and check that Apple Health is connected. If it
        shows &ldquo;No data yet,&rdquo; go to iOS Settings → Privacy &amp; Security → Health →
        Pace and make sure the categories you want (Steps, Distance, Heart Rate, etc.) are turned
        on. Then pull to refresh or tap &ldquo;Sync now&rdquo; in Pace&apos;s Settings.
      </p>
    ),
  },
  {
    question: "My Apple Watch data isn't appearing",
    answer: (
      <p>
        Watch data arrives through Apple Health, the same as your phone&apos;s data. Make sure
        &ldquo;Sync with Apple Watch&rdquo; is on in Settings, and that your Watch has actually
        written today&apos;s data to Health (opening the Health app on your Watch or phone
        usually triggers a sync).
      </p>
    ),
  },
  {
    question: "How do I change my daily reminder time?",
    answer: (
      <p>
        Go to Settings → Reminders and pick a new time. If you&apos;ve never enabled
        notifications, you&apos;ll be asked to allow them first — you can also turn them on later
        from iOS Settings → Notifications → Pace.
      </p>
    ),
  },
  {
    question: "I purchased Pace Essential but it's not unlocked",
    answer: (
      <p>
        Go to Settings → Subscription and tap &ldquo;Restore purchases.&rdquo; This re-checks
        your purchase with the App Store using the Apple ID you bought it with. Make sure
        you&apos;re signed into the same Apple ID you used to buy it. If it still doesn&apos;t
        unlock, email us with your purchase date and we&apos;ll help sort it out.
      </p>
    ),
  },
  {
    question: "I switched phones / reinstalled the app — how do I get Essential back?",
    answer: (
      <p>
        Reinstall Pace, and either go through onboarding or open Settings → Subscription →
        Restore purchases (signed into the same Apple ID). Essential is a one-time purchase tied
        to your Apple ID, not your device, so it carries over.
      </p>
    ),
  },
  {
    question: "Does Pace track my location all the time?",
    answer: (
      <p>
        No. Location is only used while you&apos;re actively recording a walk, and stops when the
        walk ends. See our{" "}
        <Link
          href="/projects/pace/privacy"
          className="text-[#141413] underline decoration-[#141413]/30 underline-offset-4 hover:decoration-[#141413]"
        >
          Privacy Policy
        </Link>{" "}
        for details.
      </p>
    ),
  },
  {
    question: "How do I delete my data?",
    answer: (
      <p>
        Go to Settings → Delete My Data. This permanently removes your profile, weight history,
        walk history, streaks, and plan from your device. It doesn&apos;t touch anything already
        saved in Apple Health — manage that separately in the Health app.
      </p>
    ),
  },
];

export default function PaceSupportPage() {
  return (
    <div className="flex min-h-screen flex-col font-body text-[#141413]">
      <main className="page-shell flex-1 px-5 py-4 sm:px-8 md:px-10 lg:px-12">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex min-h-80 flex-col justify-between gap-12 rounded-[2rem] bg-white p-6 sm:p-10">
            <Link
              href="/work/pace"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F3EF] px-4 py-2 text-sm transition-colors hover:bg-[#E9E8E2]"
            >
              Pace
              <ArrowUpRight size={14} />
            </Link>
            <div className="flex flex-col gap-5">
              <h1 className="font-display text-6xl leading-[1] tracking-[-0.045em] sm:text-7xl">Support</h1>
              <p className="max-w-lg text-lg leading-relaxed text-[#6b6a66]">
                Need help with Pace? Start with the questions below, or email me directly and I&apos;ll get back to you, usually within a day or two.
              </p>
            </div>
          </div>

          <div className="flex min-h-80 flex-col justify-between gap-12 rounded-[2rem] bg-[#141413] p-6 text-white sm:p-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Mail size={17} strokeWidth={1.5} />
            </span>
            <div className="flex flex-col gap-4">
              <p className="text-[13px] text-white/50">Contact</p>
              <a
                href="mailto:gunalm4624@gmail.com"
                className="font-display text-2xl tracking-[-0.03em] break-all underline decoration-white/30 underline-offset-4 hover:decoration-white sm:text-3xl"
              >
                gunalm4624@gmail.com
              </a>
              <p className="text-sm text-white/60">Include your device model and iOS version, if you can.</p>
            </div>
          </div>
        </div>

        <section className="mt-4 flex flex-col gap-4">
          <div className="rounded-3xl bg-white p-6 sm:p-10">
            <h2 className="font-display text-4xl tracking-[-0.04em] sm:text-5xl">Frequently asked questions</h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl bg-white px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 font-display text-lg tracking-[-0.02em] sm:text-xl [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4F3EF] text-[#6b6a66] transition-transform group-open:rotate-180">
                    <ChevronDown size={18} />
                  </span>
                </summary>
                <div className="pb-6 text-[15px] leading-relaxed text-[#6b6a66] sm:text-base">{faq.answer}</div>
              </details>
            ))}
          </div>

          <div className="rounded-3xl bg-white p-6 sm:p-10">
            <p className="max-w-2xl text-[15px] leading-relaxed text-[#6b6a66] sm:text-base">
              Still stuck? Email{" "}
              <a
                href="mailto:gunalm4624@gmail.com"
                className="text-[#141413] underline decoration-[#141413]/30 underline-offset-4 hover:decoration-[#141413]"
              >
                gunalm4624@gmail.com
              </a>{" "}
              with a short description of what happened and, if possible, your device model and iOS version. It helps track things down faster.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
