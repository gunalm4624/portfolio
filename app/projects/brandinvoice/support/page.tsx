import type { Metadata } from "next";
import { ArrowUpRight, ChevronDown, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BrandInvoice — Support",
  description: "Help and frequently asked questions for the BrandInvoice invoicing app.",
};

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "I purchased Essential but the app still shows Free",
    answer: (
      <p>
        Open the paywall (Settings → Essential, or any &ldquo;Upgrade&rdquo; prompt) and tap
        &ldquo;Restore purchase.&rdquo; This re-checks your purchase with the App Store using the
        Apple Account you bought it with. Make sure you&apos;re signed into that same Apple
        Account. If it still doesn&apos;t unlock after a minute, force-quit and reopen the app —
        entitlements occasionally take a moment to sync.
      </p>
    ),
  },
  {
    question: "I switched phones — how do I get Essential back?",
    answer: (
      <p>
        Reinstall BrandInvoice and open the paywall → &ldquo;Restore purchase,&rdquo; signed into
        the same Apple Account you originally purchased with. Monthly and yearly plans follow
        your Apple Account automatically; Lifetime restores the same way.
      </p>
    ),
  },
  {
    question: "What's included in the free plan?",
    answer: (
      <p>
        The free plan includes unlimited invoices with the Classic template, and one invoice
        export or share per calendar month. BrandInvoice Essential removes that limit and unlocks
        every template, your own brand color, and custom logo/signature on every PDF.
      </p>
    ),
  },
  {
    question: "How do I add multiple taxes to an invoice?",
    answer: (
      <p>
        Open an invoice, scroll to &ldquo;Tax &amp; discount,&rdquo; and tap &ldquo;Add another
        tax.&rdquo; Each tax applies to the same discounted subtotal and appears as its own line
        on the PDF — useful for GST + a local surcharge, or any combination your region requires.
      </p>
    ),
  },
  {
    question: "How do I change my brand color, logo, or signature?",
    answer: (
      <p>
        Go to Settings → Profile. Your logo and signature are drawn once and reused on every
        invoice; your brand color can be picked from the palette or entered as a hex code, and
        applies across every template.
      </p>
    ),
  },
  {
    question: "Can I invoice in a different currency?",
    answer: (
      <p>
        Yes. Set your default currency in Settings → Currency &amp; tax, or change it per invoice
        while editing. Amounts, symbols, and rounding follow that currency&apos;s own formatting
        rules automatically.
      </p>
    ),
  },
  {
    question: "Does BrandInvoice work without an internet connection?",
    answer: (
      <p>
        Yes — creating, editing, and exporting invoices all work fully offline. The only moment
        that needs a connection is verifying an Essential purchase with the App Store. See our{" "}
        <Link
          href="/projects/brandinvoice/privacy"
          className="text-[#141413] underline decoration-[#141413]/30 underline-offset-4 hover:decoration-[#141413]"
        >
          Privacy Policy
        </Link>{" "}
        for details on what stays on your device.
      </p>
    ),
  },
  {
    question: "How do I delete an invoice?",
    answer: (
      <p>
        Swipe left on the invoice in the Invoices list and tap Delete, or open the invoice and use
        the delete option in its menu. You&apos;ll be asked to confirm before anything is removed.
      </p>
    ),
  },
];

export default function BrandInvoiceSupportPage() {
  return (
    <div className="flex min-h-screen flex-col font-body text-[#141413]">
      <main className="page-shell flex-1 px-5 py-4 sm:px-8 md:px-10 lg:px-12">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex min-h-80 flex-col justify-between gap-12 rounded-[2rem] bg-white p-6 sm:p-10">
            <Link
              href="/work/brandinvoice"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F3EF] px-4 py-2 text-sm transition-colors hover:bg-[#E9E8E2]"
            >
              BrandInvoice
              <ArrowUpRight size={14} />
            </Link>
            <div className="flex flex-col gap-5">
              <h1 className="font-display text-6xl leading-[1] tracking-[-0.045em] sm:text-7xl">Support</h1>
              <p className="max-w-lg text-lg leading-relaxed text-[#6b6a66]">
                Need help with BrandInvoice? Start with the questions below, or email us directly and we&apos;ll get back to you, usually within a day or two.
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
                href="mailto:support@brandinvoice.app"
                className="font-display text-2xl tracking-[-0.03em] break-all underline decoration-white/30 underline-offset-4 hover:decoration-white sm:text-3xl"
              >
                support@brandinvoice.app
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
                href="mailto:support@brandinvoice.app"
                className="text-[#141413] underline decoration-[#141413]/30 underline-offset-4 hover:decoration-[#141413]"
              >
                support@brandinvoice.app
              </a>{" "}
              with a short description of what happened and, if possible, your device model and iOS version. It helps track things down faster.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
