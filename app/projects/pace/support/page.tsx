import type { Metadata } from "next";
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
          className="underline decoration-[#181510]/30 underline-offset-4 hover:text-[#ed254e]"
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
    <div className="flex min-h-screen flex-col bg-white text-[#181510]">
      <main className="page-shell flex-1 px-4 py-16 sm:px-6 sm:py-24 md:px-20">
        <p className="font-mono text-sm text-[#181510]/50">Pace</p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Support<span className="text-[#ed254e]">.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base text-[#181510]/70 sm:text-lg">
          Need help with Pace? Start with the questions below, or email me directly and
          I&apos;ll get back to you, usually within a day or two.
        </p>

        <div className="mt-8 max-w-2xl rounded-2xl border border-[#181510]/10 bg-[#F2EEE3] p-6 sm:p-8">
          <p className="font-semibold text-[#181510]">Contact</p>
          <a
            href="mailto:gunalm4624@gmail.com"
            className="mt-2 inline-block font-mono text-sm text-[#181510] underline decoration-[#181510]/30 underline-offset-4 hover:text-[#ed254e]"
          >
            gunalm4624@gmail.com
          </a>
        </div>

        <h2 className="mt-16 border-b-2 border-[#181510] pb-4 text-2xl font-extrabold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-8 max-w-2xl divide-y divide-[#181510]/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6 first:pt-0">
              <summary className="cursor-pointer list-none text-base font-semibold sm:text-lg">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="shrink-0 text-[#181510]/40 transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <div className="mt-3 text-base text-[#181510]/70 sm:text-lg">{faq.answer}</div>
            </details>
          ))}
        </div>

        <p className="mt-16 max-w-2xl text-base text-[#181510]/70 sm:text-lg">
          Still stuck? Email{" "}
          <a
            href="mailto:gunalm4624@gmail.com"
            className="underline decoration-[#181510]/30 underline-offset-4 hover:text-[#ed254e]"
          >
            gunalm4624@gmail.com
          </a>{" "}
          with a short description of what happened and, if possible, your device model and iOS
          version — it helps track things down faster.
        </p>
      </main>
    </div>
  );
}
