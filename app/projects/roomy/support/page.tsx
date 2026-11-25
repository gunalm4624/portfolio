import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { Card, Pill, RoomyShell, roomy } from "../RoomyShell";

export const metadata: Metadata = {
  title: "Roomy — Support",
  description: "Help and frequently asked questions for Roomy, the iPhone photo, video and contact cleaner.",
};

const link = "text-[#86F2B4] underline decoration-[#86F2B4]/30 underline-offset-4 hover:decoration-[#86F2B4]";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Roomy says it can't see my photos",
    answer: (
      <p>
        Open iOS Settings → Roomy → Photos and choose Full Access. With limited access Roomy only sees the photos you
        picked, so it finds far fewer duplicates.
      </p>
    ),
  },
  {
    question: "Will Roomy delete my photos without asking?",
    answer: (
      <p>
        No. Roomy adds items to a Delete list. Nothing is removed until you open that list and confirm. Deleted items
        move to Recently Deleted in Photos, where you can recover them for a while.
      </p>
    ),
  },
  {
    question: "How does Roomy pick the best photo in a group?",
    answer: (
      <p>
        It compares sharpness, faces (open eyes and a clear view), composition and lighting, resolution, and whether you
        favourited or edited a photo. It keeps the best one and suggests the rest. You can change any choice before
        deleting.
      </p>
    ),
  },
  {
    question: "I compressed a video but my storage didn't change",
    answer: (
      <p>
        Compressing saves a smaller copy and keeps the original. You free the space when you remove the original, which
        you can do from the video&apos;s card in Roomy. Remember that deleted items stay in Recently Deleted until iOS
        clears them, or until you empty it.
      </p>
    ),
  },
  {
    question: "Some photos are missing from my scan",
    answer: (
      <p>
        Roomy only works with photos that are stored on your iPhone. Photos that live only in iCloud are skipped. If you
        use Optimise iPhone Storage in Photos, download the originals first.
      </p>
    ),
  },
  {
    question: "I bought Roomy Pro but it isn't unlocked",
    answer: (
      <p>
        Open Roomy, then Settings, and tap Restore Purchases. Make sure you are signed in with the Apple ID you bought it
        with. If it still doesn&apos;t unlock, email us with your purchase date and we will sort it out.
      </p>
    ),
  },
  {
    question: "How do I cancel my subscription?",
    answer: (
      <p>
        Open iOS Settings → your name → Subscriptions → Roomy and tap Cancel. Deleting the app does not cancel a
        subscription. The lifetime option is a one-time payment, so there is nothing to cancel.
      </p>
    ),
  },
  {
    question: "Is my data uploaded anywhere?",
    answer: (
      <p>
        No. Photos, videos and contacts are analysed on your iPhone. Read the{" "}
        <Link href={roomy.privacyHref} className={link}>
          Privacy Policy
        </Link>{" "}
        for the full detail.
      </p>
    ),
  },
  {
    question: "How do I merge duplicate contacts?",
    answer: (
      <p>
        Open the report, choose Duplicate contacts, review each group and tap Merge into one, or Merge all. Contacts are
        never merged without you tapping.
      </p>
    ),
  },
];

export default function RoomySupportPage() {
  return (
    <RoomyShell>
      <section className="pb-10 pt-14">
        <Pill>We usually reply within a day or two</Pill>
        <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl">Support</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/60">
          Need help with Roomy? Start with the questions below, or email us directly.
        </p>
      </section>

      <div className="rounded-3xl bg-gradient-to-br from-[#86F2B4] to-[#20D574] p-6 text-[#03150B] sm:p-8">
        <p className="text-[13px] font-medium text-[#03150B]/60">Contact</p>
        <a
          href={`mailto:${roomy.email}`}
          className="mt-3 block break-all font-display text-2xl font-semibold tracking-[-0.03em] underline decoration-[#03150B]/30 underline-offset-4 hover:decoration-[#03150B] sm:text-3xl"
        >
          {roomy.email}
        </a>
        <p className="mt-3 text-sm text-[#03150B]/70">Include your iPhone model and iOS version if you can.</p>
      </div>

      <h2 className="mb-4 mt-12 font-display text-3xl font-semibold tracking-[-0.03em]">Frequently asked questions</h2>
      <div className="flex flex-col gap-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-2xl border border-white/10 bg-white/[0.05] px-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-semibold tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/70 transition-transform group-open:rotate-180">
                <ChevronDown size={18} />
              </span>
            </summary>
            <div className="pb-6 text-[15px] leading-relaxed text-white/60 sm:text-base">{faq.answer}</div>
          </details>
        ))}
      </div>

      <Card className="mt-4">
        <p className="text-[15px] leading-relaxed text-white/60 sm:text-base">
          Still stuck? Email{" "}
          <a href={`mailto:${roomy.email}`} className={link}>
            {roomy.email}
          </a>{" "}
          with a short description of what happened and your device model and iOS version.
        </p>
      </Card>
    </RoomyShell>
  );
}
