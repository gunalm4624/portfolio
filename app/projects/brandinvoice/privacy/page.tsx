import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrandInvoice — Privacy Policy",
  description:
    "How BrandInvoice, an offline-first invoicing app, handles your business, client, and payment data.",
};

const SF_FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif';

const BRAND = "#12B0DD";
const INK = "#04232C";

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "What we collect",
    body: (
      <p>
        Nothing. BrandInvoice has no accounts, no analytics, no advertising, and no tracking. We
        do not receive your business name, your clients, your invoices, or anything else you
        enter into the app.
      </p>
    ),
  },
  {
    heading: "What stays on your device",
    body: (
      <p>
        Your business profile, logo, signature, clients, and every invoice you create are stored
        only on this device, using Apple&apos;s on-device storage. None of it is uploaded to any
        server we run — we don&apos;t operate one. If you delete the app, this information is
        deleted with it.
      </p>
    ),
  },
  {
    heading: "Sharing invoices",
    body: (
      <p>
        When you share or export an invoice, the PDF is handed to whichever app you choose
        through the system share sheet — Mail, Messages, Files, WhatsApp, or anything else
        installed on your device. From that point, it&apos;s governed by that app&apos;s own
        privacy policy, not ours.
      </p>
    ),
  },
  {
    heading: "Purchases",
    body: (
      <p>
        Payments for BrandInvoice Essential are processed entirely by Apple through the App
        Store&apos;s In-App Purchase system. We never see your payment details — Apple tells us
        only whether an Essential purchase is active, so the app can unlock its features.
      </p>
    ),
  },
  {
    heading: "Your choices",
    body: (
      <p>
        You can edit or delete any information in the app at any time. You can also cancel a
        subscription in your Apple Account settings — canceling stops future renewals, it
        doesn&apos;t delete anything already on your device.
      </p>
    ),
  },
  {
    heading: "Children's privacy",
    body: (
      <p>
        BrandInvoice is a business tool aimed at freelancers and small businesses, and is not
        directed at children.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        If this policy changes, the updated version appears here with a new effective date.
        Continued use of the app after a change means you accept the update.
      </p>
    ),
  },
];

export default function BrandInvoicePrivacyPage() {
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
          Privacy Policy<span style={{ color: BRAND }}>.</span>
        </h1>

        <p className="mt-4 text-sm" style={{ color: `${INK}80` }}>
          Effective date: September 20, 2026
        </p>

        <p className="mt-8 max-w-2xl text-base sm:text-lg" style={{ color: `${INK}B3` }}>
          BrandInvoice (&ldquo;the app&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) helps you
          create and share professional invoices. This policy explains what data the app uses,
          how it&apos;s stored, and what — if anything — ever leaves your device.
        </p>

        <p className="mt-5 max-w-2xl text-base font-semibold sm:text-lg" style={{ color: INK }}>
          The short version: BrandInvoice works entirely on your device. It has no accounts, runs
          no servers, and never sees your invoices, your clients, or your payment details.
        </p>

        <div
          className="mt-16 max-w-2xl divide-y"
          style={{ borderColor: `${INK}1A` }}
        >
          {sections.map((section) => (
            <section
              key={section.heading}
              className="py-10 first:pt-0"
              style={{ borderColor: `${INK}1A` }}
            >
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{section.heading}</h2>
              <div className="mt-4 text-base sm:text-lg" style={{ color: `${INK}B3` }}>
                {section.body}
              </div>
            </section>
          ))}
        </div>

        <div
          className="mt-4 max-w-2xl rounded-2xl border p-6 sm:p-8"
          style={{ borderColor: `${INK}1A`, backgroundColor: "#E4F6FC" }}
        >
          <p className="font-semibold" style={{ color: INK }}>
            Questions about this policy?
          </p>
          <a
            href="mailto:support@brandinvoice.app"
            className="mt-2 inline-block text-sm underline underline-offset-4"
            style={{ color: INK, textDecorationColor: `${INK}4D` }}
          >
            support@brandinvoice.app
          </a>
        </div>
      </main>
    </div>
  );
}
