import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BrandInvoice — Support",
  description: "Help and frequently asked questions for the BrandInvoice invoicing app.",
};

const SF_FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif';

const BRAND = "#12B0DD";
const INK = "#04232C";

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
          className="underline underline-offset-4"
          style={{ textDecorationColor: `${INK}4D` }}
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
    <div
      className="flex min-h-screen flex-col bg-white text-[#04232C]"
      style={{ fontFamily: SF_FONT_STACK }}
    >
      <main className="page-shell flex-1 px-4 py-16 sm:px-6 sm:py-24 md:px-20">
        <p className="text-sm font-medium tracking-wide" style={{ color: `${INK}80` }}>
          BrandInvoice
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          Support<span style={{ color: BRAND }}>.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base sm:text-lg" style={{ color: `${INK}B3` }}>
          Need help with BrandInvoice? Start with the questions below, or email us directly and
          we&apos;ll get back to you, usually within a day or two.
        </p>

        <div
          className="mt-8 max-w-2xl rounded-2xl border p-6 sm:p-8"
          style={{ borderColor: `${INK}1A`, backgroundColor: "#E4F6FC" }}
        >
          <p className="font-semibold" style={{ color: INK }}>
            Contact
          </p>
          <a
            href="mailto:support@brandinvoice.app"
            className="mt-2 inline-block text-sm underline underline-offset-4"
            style={{ color: INK, textDecorationColor: `${INK}4D` }}
          >
            support@brandinvoice.app
          </a>
        </div>

        <h2
          className="mt-16 max-w-2xl border-b-2 pb-4 text-2xl font-bold tracking-tight sm:text-4xl"
          style={{ borderColor: INK }}
        >
          Frequently asked questions
        </h2>

        <div className="mt-8 max-w-2xl divide-y" style={{ borderColor: `${INK}1A` }}>
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6 first:pt-0">
              <summary className="cursor-pointer list-none text-base font-semibold sm:text-lg">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span
                    className="shrink-0 transition-transform group-open:rotate-45"
                    style={{ color: `${INK}66` }}
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="mt-3 text-base sm:text-lg" style={{ color: `${INK}B3` }}>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <p className="mt-16 max-w-2xl text-base sm:text-lg" style={{ color: `${INK}B3` }}>
          Still stuck? Email{" "}
          <a
            href="mailto:support@brandinvoice.app"
            className="underline underline-offset-4"
            style={{ textDecorationColor: `${INK}4D` }}
          >
            support@brandinvoice.app
          </a>{" "}
          with a short description of what happened and, if possible, your device model and iOS
          version — it helps track things down faster.
        </p>
      </main>
    </div>
  );
}
