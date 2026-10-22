import type { Metadata } from "next";

import LegalPage from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "BrandInvoice — Privacy Policy",
  description:
    "How BrandInvoice, an offline-first invoicing app, handles your business, client, and payment data.",
};

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
    <LegalPage
      brand="BrandInvoice"
      backHref="/work/brandinvoice"
      title="Privacy Policy"
      effective="September 20, 2026"
      contactEmail="support@brandinvoice.app"
      intro={
        <>
          BrandInvoice (&ldquo;the app&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) helps you create and share professional invoices. This policy explains what data the app uses, how it&apos;s stored, and what, if anything, ever leaves your device.
        </>
      }
      summary={
        <>
          BrandInvoice works entirely on your device. It has no accounts, runs no servers, and never sees your invoices, your clients, or your payment details.
        </>
      }
      sections={sections}
    />
  );
}
