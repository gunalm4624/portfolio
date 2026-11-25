import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Card, Pill, RoomyShell, roomy } from "../RoomyShell";

export const metadata: Metadata = {
  title: "Roomy — Privacy Policy",
  description:
    "How Roomy, an iPhone photo, video and contact cleaner, handles your photos, contacts and purchase data. Everything is analysed on your device.",
};

const sections: { heading: string; body: ReactNode }[] = [
  {
    heading: "Your photos and videos",
    body: (
      <>
        <p>
          With your permission, Roomy reads your photo library to find duplicate and similar photos, screenshots and
          large videos. The analysis, including picking the best shot in a group, runs on your iPhone using Apple&apos;s
          on-device Vision framework. Your photos and videos are never uploaded to us or to anyone else.
        </p>
        <p className="mt-4">
          Roomy only works with items that are already on your iPhone. It does not download photos that live only in
          iCloud.
        </p>
      </>
    ),
  },
  {
    heading: "Deleting and compressing",
    body: (
      <>
        <p>
          Roomy never deletes anything on its own. Items you choose go onto a Delete list, and nothing is removed until
          you review that list and confirm. iOS then moves them to Recently Deleted in Photos, where you can recover
          them.
        </p>
        <p className="mt-4">
          When you compress a video, Roomy saves a smaller copy to your library. The original stays until you choose to
          remove it.
        </p>
      </>
    ),
  },
  {
    heading: "Your contacts",
    body: (
      <p>
        If you use the duplicate contacts tool, Roomy reads your contacts on your device to find repeated names, numbers
        and email addresses. Contacts are only merged when you tap Merge. They are never uploaded or shared.
      </p>
    ),
  },
  {
    heading: "What Roomy stores",
    body: (
      <p>
        Roomy keeps the result of your last scan (counts, sizes and item identifiers), your Delete list and a few
        settings on your device so the app opens quickly. The widgets read a small summary of that result (for example,
        how much space can be freed) through an App Group that only Roomy can access. None of this leaves your iPhone,
        and deleting the app removes it.
      </p>
    ),
  },
  {
    heading: "Analytics",
    body: (
      <p>
        Roomy uses TelemetryDeck, a privacy-focused analytics service, to count anonymous events such as &ldquo;scan
        completed&rdquo; or &ldquo;purchase started&rdquo;. It uses a random identifier that is not linked to you and
        does not collect your IP address. These events never include your photos, contacts, file names or any personal
        information. We do not use them for advertising and we do not track you across other apps or websites.
      </p>
    ),
  },
  {
    heading: "Purchases",
    body: (
      <>
        <p>
          Roomy is free to download. Roomy Pro is available as an annual subscription or a one-time lifetime purchase.
          Payments are handled entirely by Apple through the App Store. We never see or store your payment details.
        </p>
        <p className="mt-4">
          Purchases are managed with RevenueCat, which receives your App Store purchase receipt and an anonymous app
          identifier so Roomy Pro can be unlocked on your devices and restored if you reinstall. It does not receive your
          name, photos or contacts.
        </p>
      </>
    ),
  },
  {
    heading: "Notifications",
    body: (
      <p>
        If you turn on the reminder, Roomy schedules a local notification on your device. It is handled by iOS and does
        not use a push server.
      </p>
    ),
  },
  {
    heading: "What we never do",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Sell or rent your data</li>
        <li>Upload your photos, videos or contacts</li>
        <li>Show ads or share data with advertisers</li>
        <li>Ask you to create an account</li>
      </ul>
    ),
  },
  {
    heading: "Your choices",
    body: (
      <p>
        You can change Photos and Contacts access at any time in iOS Settings → Roomy. Without access, Roomy cannot scan
        those items. To remove everything Roomy has stored, delete the app.
      </p>
    ),
  },
  {
    heading: "Children's privacy",
    body: (
      <p>
        Roomy is not directed at children under 13, and we do not knowingly collect data from children under 13.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        If this policy changes, we will update the effective date above. Continuing to use Roomy after a change means you
        accept the updated policy.
      </p>
    ),
  },
];

export default function RoomyPrivacyPage() {
  return (
    <RoomyShell>
      <section className="pb-10 pt-14">
        <Pill>Effective November 25, 2026</Pill>
        <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/60">
          Roomy (&ldquo;the app&rdquo;, &ldquo;we&rdquo;) is a photo, video and contact cleaner for iPhone, published by
          Gunal M. This page explains what Roomy uses, where it stays, and what, if anything, leaves your device.
        </p>
      </section>

      <div className="rounded-3xl bg-gradient-to-br from-[#86F2B4] to-[#20D574] p-6 text-[#03150B] sm:p-8">
        <p className="text-[13px] font-medium text-[#03150B]/60">The short version</p>
        <p className="mt-3 font-display text-2xl font-semibold leading-snug tracking-[-0.03em] sm:text-3xl">
          Roomy works on your iPhone. Your photos, videos and contacts are never uploaded, nothing is deleted until you
          approve it, and there is no account.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {sections.map((section, i) => (
          <Card key={section.heading}>
            <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-10">
              <div className="flex items-baseline gap-3">
                <span className="text-[13px] text-[#20D574]">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="font-display text-xl font-semibold tracking-[-0.02em]">{section.heading}</h2>
              </div>
              <div className="text-[15px] leading-relaxed text-white/60 sm:text-base">{section.body}</div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <p className="font-display text-xl font-semibold tracking-[-0.02em]">Questions about this policy?</p>
        <a
          href={`mailto:${roomy.email}`}
          className="inline-flex w-fit items-center rounded-full bg-[#20D574] px-5 py-3 text-sm font-semibold text-[#03150B] transition-colors hover:bg-[#86F2B4]"
        >
          {roomy.email}
        </a>
      </Card>
    </RoomyShell>
  );
}
