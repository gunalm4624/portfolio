import type { Metadata } from "next";

import LegalPage from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "Everstep — Privacy Policy",
  description:
    "How Everstep, a walking and weight-loss coaching app, handles your health, location, and personal data.",
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Data Everstep reads from Apple Health",
    body: (
      <>
        <p>
          With your permission, Everstep reads the following from Apple Health so your daily plan
          and progress screens reflect your real activity:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Steps, distance, flights climbed, calories, and workouts</li>
          <li>Heart rate and heart rate variability</li>
          <li>Weight, height, and body measurements</li>
          <li>Sleep, stand hours, walking speed, and walking steadiness</li>
        </ul>
        <p className="mt-4">
          This data is read directly from HealthKit on your device and is used only to power the
          app&apos;s own screens (Home, Progress, Apple Watch). It is never transmitted to us, to
          any server, or to any third party.
        </p>
      </>
    ),
  },
  {
    heading: "Data Everstep writes to Apple Health",
    body: (
      <p>
        When you log a weight entry or complete a walk in the app or on your Apple Watch, Everstep
        writes that entry back to Apple Health, with your permission, so your records stay
        consistent across apps.
      </p>
    ),
  },
  {
    heading: "Apple Watch",
    body: (
      <p>
        The Everstep watch app shows your steps, streak, heart rate and progress. It receives
        these figures from the app on your iPhone and reads your live heart rate from Apple Health
        while a page that shows it is open. Nothing is sent to us.
      </p>
    ),
  },
  {
    heading: "Location data",
    body: (
      <p>
        When you start a tracked walk, Everstep uses your location to draw the route map and
        calculate distance and pace, including while your screen is locked so the recording
        isn&apos;t interrupted. This route data is stored only on your device (and, if you use
        iCloud, may sync privately across your own devices via Apple&apos;s infrastructure). It is
        never uploaded to us and is only shared if you explicitly choose to share a walk or a
        progress card.
      </p>
    ),
  },
  {
    heading: "Camera and photos",
    body: (
      <p>
        With your permission, Everstep uses the camera to scan a food barcode, to photograph a
        meal so its calories can be estimated, and to take a photo for a progress card you share.
        Meal photos are analysed on your phone and are not uploaded. Photos you don&apos;t
        explicitly choose are never accessed.
      </p>
    ),
  },
  {
    heading: "Food logging",
    body: (
      <p>
        Meals you log (names, calories and nutrients) are stored on your device. When you scan a
        barcode, only that barcode number is sent to the Open Food Facts database to look up the
        product; no other information is sent.
      </p>
    ),
  },
  {
    heading: "Nova, your walking coach",
    body: (
      <>
        <p>
          Nova answers questions about your own Everstep data using Apple&apos;s on-device model.
          Your questions and data stay on your phone. Nova is not medical advice.
        </p>
        <p className="mt-4">
          If you talk to Nova by voice, Everstep uses the microphone and Apple&apos;s speech
          recognition to turn your speech into text. Recognition runs on your device when your
          language supports it; otherwise Apple may process the audio on its servers under
          Apple&apos;s own privacy policy. Everstep does not record or keep your audio.
        </p>
      </>
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
        Everstep uses a privacy-respecting analytics tool (TelemetryDeck) to understand which
        features are used, so we can improve the app. It uses a random anonymous identifier that
        is not linked to you, and it does not collect your IP address. This is limited to
        anonymous product events (for example, &ldquo;onboarding completed&rdquo; or &ldquo;walk
        logged&rdquo;) and never includes your name, health data, location, weight, or any other
        personal or identifying information. We do not use this data for advertising, and we do
        not build cross-app or cross-site profiles of you.
      </p>
    ),
  },
  {
    heading: "Purchases and subscriptions",
    body: (
      <>
        <p>
          Everstep Essential is offered as a monthly or yearly subscription, with a free trial for
          new subscribers, or as a one-time lifetime purchase. Payment is handled entirely by
          Apple through the App Store&apos;s In-App Purchase system. We never see or store your
          payment details. See Apple&apos;s own privacy policy for how App Store purchases are
          handled.
        </p>
        <p className="mt-4">
          Purchases are managed with RevenueCat, which receives your App Store purchase receipt
          and an anonymous app identifier so we can unlock Essential on your devices and restore
          it if you reinstall. It does not receive your name, health data or location.
        </p>
      </>
    ),
  },
  {
    heading: "Notifications",
    body: (
      <p>
        If you enable reminders, Everstep schedules a local notification on your device at your
        chosen time. This is handled entirely by iOS on-device and involves no server or push
        service.
      </p>
    ),
  },
  {
    heading: "Data deletion",
    body: (
      <p>
        You can delete all data Everstep has stored at any time from Settings → Delete account.
        This permanently removes your profile, weight history, walk history, food log, streaks,
        and plan from your device. It does not delete data already written to Apple Health — you
        can manage or delete that separately from the Apple Health app, under your own control.
      </p>
    ),
  },
  {
    heading: "Children's privacy",
    body: (
      <p>
        Everstep is not directed at children under 13, and we do not knowingly collect data from
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

export default function EverstepPrivacyPage() {
  return (
    <LegalPage
      brand="Everstep"
      backHref="/work/pace"
      title="Privacy Policy"
      effective="November 10, 2026"
      contactEmail="gunalm4624@gmail.com"
      intro={
        <>
          Everstep (&ldquo;the app&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;), formerly Pace, is a walking and weight-loss coaching app published by Gunal M. This policy explains what data the app uses, how it&apos;s stored, and what, if anything, ever leaves your device.
        </>
      }
      summary={
        <>
          Everstep has no sign-up, no servers of its own, and never sells your data. Your health, location, weight and food data stay on your device and in your own iCloud. The only things that leave are anonymous usage events and a food barcode number if you scan one.
        </>
      }
      sections={sections}
    />
  );
}
