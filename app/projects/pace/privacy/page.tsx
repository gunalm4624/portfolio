import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pace — Privacy Policy",
  description:
    "How Pace, a walking and weight-loss coaching app, handles your health, location, and personal data.",
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Data Pace reads from Apple Health",
    body: (
      <>
        <p>
          With your permission, Pace reads the following from Apple Health so your daily plan and
          progress screens reflect your real activity:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Steps, distance, flights climbed, calories, and workouts</li>
          <li>Heart rate and heart rate variability</li>
          <li>Weight, height, and body measurements</li>
          <li>Sleep, stand hours, walking speed, and walking steadiness</li>
        </ul>
        <p className="mt-4">
          This data is read directly from HealthKit on your device and is used only to power the
          app&apos;s own screens (Today, Health, Progress). It is never transmitted to us, to any
          server, or to any third party.
        </p>
      </>
    ),
  },
  {
    heading: "Data Pace writes to Apple Health",
    body: (
      <p>
        When you log a weight entry or complete a walk in the app, Pace writes that entry back to
        Apple Health, with your permission, so your records stay consistent across apps.
      </p>
    ),
  },
  {
    heading: "Location data",
    body: (
      <p>
        When you start a tracked walk, Pace uses your location to draw the route map and
        calculate distance and pace, including while your screen is locked so the recording
        isn&apos;t interrupted. This route data is stored only on your device (and, if you use
        iCloud, may sync privately across your own devices via Apple&apos;s infrastructure). It is
        never uploaded to us and is only shared if you explicitly choose to share a walk or a
        progress card.
      </p>
    ),
  },
  {
    heading: "Camera",
    body: (
      <p>
        If you choose to add a photo as the background of a shareable progress card, Pace
        accesses your camera or photo library only for that purpose, with your permission. Photos
        you don&apos;t explicitly choose are never accessed.
      </p>
    ),
  },
  {
    heading: "Data stored on your device",
    body: (
      <p>
        Your profile, goals, weight history, walk history, and streaks are stored locally on your
        device using Apple&apos;s on-device storage (and, if enabled, synced privately between
        your own devices via your personal iCloud account — Apple&apos;s infrastructure, not
        ours). We do not operate a database of user data and cannot see it.
      </p>
    ),
  },
  {
    heading: "Analytics",
    body: (
      <p>
        Pace uses a privacy-respecting analytics tool (PostHog) to understand which features are
        used, so we can improve the app. This is limited to anonymous product events (for
        example, &ldquo;onboarding completed&rdquo; or &ldquo;walk logged&rdquo;) and never
        includes your name, health data, location, weight, or any other personal or identifying
        information. We do not use this data for advertising, and we do not build cross-app or
        cross-site profiles of you.
      </p>
    ),
  },
  {
    heading: "Purchases",
    body: (
      <p>
        Pace Essential is a one-time purchase handled entirely by Apple through the App
        Store&apos;s In-App Purchase system. We never see or store your payment details — Apple
        processes the transaction and tells the app whether you&apos;re entitled to Essential
        features. See Apple&apos;s own privacy policy for how App Store purchases are handled.
      </p>
    ),
  },
  {
    heading: "Notifications",
    body: (
      <p>
        If you enable reminders, Pace schedules a local notification on your device at your
        chosen time. This is handled entirely by iOS on-device and involves no server or push
        service.
      </p>
    ),
  },
  {
    heading: "Data deletion",
    body: (
      <p>
        You can delete all data Pace has stored at any time from Settings → Delete My Data. This
        permanently removes your profile, weight history, walk history, streaks, and plan from
        your device. It does not delete data already written to Apple Health — you can manage or
        delete that separately from the Apple Health app, under your own control.
      </p>
    ),
  },
  {
    heading: "Children's privacy",
    body: (
      <p>
        Pace is not directed at children under 13, and we do not knowingly collect data from
        children under 13.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        If this policy changes, we&apos;ll update the effective date above. Continued use of the
        app after a change means you accept the updated policy.
      </p>
    ),
  },
];

export default function PacePrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#181510]">
      <main className="page-shell flex-1 px-4 py-16 sm:px-6 sm:py-24 md:px-20">
        <p className="font-mono text-sm text-[#181510]/50">Pace</p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Privacy Policy<span className="text-[#ed254e]">.</span>
        </h1>

        <p className="mt-4 font-mono text-sm text-[#181510]/50">
          Effective date: February 2026
        </p>

        <p className="mt-8 max-w-2xl text-base text-[#181510]/70 sm:text-lg">
          Pace (&ldquo;the app&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is a walking and
          weight-loss coaching app published by Gunal M. This policy explains what data the app
          uses, how it&apos;s stored, and what — if anything — ever leaves your device.
        </p>

        <p className="mt-5 max-w-2xl text-base font-semibold text-[#181510] sm:text-lg">
          The short version: Pace does not have user accounts, does not run its own servers, and
          does not sell or share your personal data with anyone. Your health, location, and body
          data never leave your device except to Apple Health and Apple&apos;s own services,
          which you control.
        </p>

        <div className="mt-16 max-w-2xl divide-y divide-[#181510]/10">
          {sections.map((section) => (
            <section key={section.heading} className="py-10 first:pt-0">
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-4 text-base text-[#181510]/70 sm:text-lg">{section.body}</div>
            </section>
          ))}
        </div>

        <div className="mt-4 max-w-2xl rounded-2xl border border-[#181510]/10 bg-[#F2EEE3] p-6 sm:p-8">
          <p className="font-semibold text-[#181510]">Questions about this policy?</p>
          <a
            href="mailto:gunalm4624@gmail.com"
            className="mt-2 inline-block font-mono text-sm text-[#181510] underline decoration-[#181510]/30 underline-offset-4 hover:text-[#ed254e]"
          >
            gunalm4624@gmail.com
          </a>
        </div>
      </main>
    </div>
  );
}
