import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "FSS — SBI Merchant Verification",
  description:
    "Case study: a back-office application for the SBI Merchant team to verify merchants, review KYC documents, and clear action-needed cases.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": 0,
      "max-image-preview": "none",
      "max-snippet": 0,
    },
  },
};

const metaRow = [
  { label: "Role", value: "Product designer" },
  { label: "Client", value: "FSS · SBI Merchant" },
  { label: "Type", value: "Back office" },
  { label: "Focus", value: "Merchant KYC" },
];

const stats = [
  { value: "40%", label: "review time reduced", color: "#ed254e" },
];

const flow = [
  {
    step: "Queue",
    detail:
      "New merchants land pending. Action Needed is its own tab with a count — failures don't hide inside All Merchants.",
  },
  {
    step: "Review",
    detail:
      "The case splits: who they are on the left, Aadhaar and PAN (front and back) on the right. You approve or reject the page in view, not the whole file.",
  },
  {
    step: "Repair",
    detail:
      "A blurry scan gets a written reason and stays on the case. Primary action becomes Request Re-Upload — not Reject Merchant.",
  },
  {
    step: "Clear",
    detail:
      "Approve Merchant stays locked until the documents are clean. A toast confirms the last doc. Status moves to Active.",
  },
];

const beats = [
  {
    src: "/work/fss/post_login_dashboard.webp",
    screen: "Home",
    title: "Home is today's desk, not a landing page",
    choice:
      "The first screen after login is onboarded / pending / verified / rejected, a transaction chart, field tickets, and the merchant table with New vs Action Needed.",
    why: "Ops start the day asking what moved and what's stuck. If Home is only navigation, they click into Verification before they know the load.",
    not: "A marketing-style dashboard, or hiding the queue one click away.",
  },
  {
    src: "/work/fss/ippopay_merchant_verification.webp",
    screen: "Merchant queue",
    title: "Action Needed is a tab with a badge, not a filter",
    choice:
      "All Merchants and Action Needed sit as peer tabs. The failing queue carries a count so it can't be ignored. Review lives on the row.",
    why: "Filters reset. A separate tab is a second job list: someone already said no, and the merchant is waiting. Mixing them with fresh applications hides SLA risk.",
    not: "A status dropdown that defaults to All, or a single Pending pile.",
  },
  {
    src: "/work/fss/ippopay_merchant_verification_merchant_detail.webp",
    screen: "Verify merchant",
    title: "Identity stays visible while you look at the paper",
    choice:
      "Verify Merchant is a split: merchant + agent metadata locked on the left; document preview and page actions on the right.",
    why: "KYC is matching a person to a scan. If opening Aadhaar replaces the name, reviewers flip back and forth and miss mismatches.",
    not: "A full-screen image lightbox, or details above the fold that scroll away.",
  },
  {
    src: "/work/fss/ippopay_merchant_verification_merchant_detail_aadhar_back.webp",
    screen: "Aadhaar / PAN tabs",
    title: "Four pages, four statuses — not one KYC blob",
    choice:
      "Aadhaar Front, Aadhaar Back, PAN Front, PAN Back are tabs. Each shows Verification Pending, Document Approved, or Action Required.",
    why: "A merchant isn't blocked by 'documents'. They're blocked by one blurry back. The tab label is the work item.",
    not: "A PDF viewer with all pages in one scroll, or a single Documents approved checkbox.",
  },
  {
    src: "/work/fss/ippopay_merchant_verification_approved_aadhar_front.webp",
    screen: "Document vs merchant",
    title: "Approve the document and the merchant as two verbs",
    choice:
      "Under the scan: Reject Document / Approve Document. In the footer: Reject Merchant / Approve Merchant. Merchant approve waits until pages are clean.",
    why: "Rubber-stamping a merchant while PAN back is still pending is how bad KYC ships. Two verbs make the rule visible in the UI, not a hidden validation error.",
    not: "One Approve that greens the whole case.",
  },
  {
    src: "/work/fss/ippopay_action_needed_checker.webp",
    screen: "Action required",
    title: "Reject writes a reason onto the document",
    choice:
      "When a page fails, the reason stays under the preview — e.g. blurry upload — plus who rejected it. Reject Again is still available.",
    why: "The field agent has to reshoot the right page. The next reviewer shouldn't reverse-engineer a silent fail. History on the document is the handoff.",
    not: "A reject that only changes a badge, or a reason that lives in a ticket somewhere else.",
  },
  {
    src: "/work/fss/ippopay_action_needed_merchant_approved_action.webp",
    screen: "Request re-upload",
    title: "Re-upload is the default repair, not killing the merchant",
    choice:
      "With a rejected document on the case, the footer primary is Request Re-Upload. Reject Merchant remains, but it's the exception.",
    why: "Most fails in this queue are capture quality, not fraud. Ending the merchant for a blurry Aadhaar back punishes a shop that already completed onboarding.",
    not: "Reject Merchant as the only way out of Action Needed.",
  },
  {
    src: "/work/fss/ippopay_action_needed_document_approved_toast.webp",
    screen: "Document approved",
    title: "Stay in the case when a page clears",
    choice:
      "Approving a document shows a toast — document approved, submit to complete merchant verification — without sending the reviewer back to the table.",
    why: "There's usually another page. A round-trip to the queue after every scan is how cases get abandoned mid-KYC.",
    not: "A success screen, or auto-closing the modal on each approve.",
  },
  {
    src: "/work/fss/ippopay_merchant_verification_verified_list.webp",
    screen: "Verified list",
    title: "Status language is for scanning a table",
    choice:
      "Pending Verification, Action Required, Active Merchant, Document Approved. Color does the first pass: yellow wait, red repair, green live.",
    why: "Reviewers live in the list. Legal KYC copy in every cell slows the eye. The precise reason lives on the document, where they act.",
    not: "Long compliance sentences as the row status.",
  },
];

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="border-b-2 border-[#181510] pb-4 text-2xl font-extrabold tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}

export default function FssCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F2EEE3] text-[#181510]">
      <Navbar />

      <main className="flex-1 px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24 md:px-20">
        <FadeIn>
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#181510]/60 transition-colors hover:text-[#181510]"
          >
            <ArrowLeft size={16} />
            Back to work
          </Link>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#181510] px-4 py-1.5 font-mono text-xs text-[#F2EEE3]">
              FSS
            </span>
            <span className="rounded-full border border-[#181510]/20 px-4 py-1.5 font-mono text-xs text-[#181510]/70">
              SBI Merchant
            </span>
            <span className="rounded-full border border-[#181510]/20 px-4 py-1.5 font-mono text-xs text-[#181510]/70">
              Back office
            </span>
            <span className="rounded-full border border-[#181510]/20 px-4 py-1.5 font-mono text-xs text-[#181510]/70">
              Case Study
            </span>
          </div>
        </FadeIn>

        <FadeIn>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Merchant verification for SBI — KYC that ops can actually finish
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="mt-6 max-w-2xl text-base text-[#181510]/70 sm:text-lg">
            A back-office app for the SBI Merchant team: pull a case from the queue, check Aadhaar
            and PAN page by page, reject what&apos;s blurry, request a re-upload, then approve the
            merchant — without losing the trail.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {metaRow.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#181510]/50">{item.label}</span>
                <span className="text-sm font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-8 rounded-3xl border border-[#181510]/25 bg-[#FAF8F1] p-5 sm:grid-cols-2 sm:p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-3xl font-extrabold sm:text-4xl" style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <span className="font-mono text-xs text-[#181510]/60 sm:whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>The job</SectionHeading>
          </FadeIn>
          <FadeIn>
            <p className="mt-6 text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              SBI agents onboard merchants in the field. The back office has to confirm the person
              and the papers before the account goes live. If verification is one giant Approve
              button, bad scans stall everyone. If every reject kills the merchant, good shops get
              bounced for a blurry Aadhaar back.
            </p>
            <p className="mt-4 text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              The product had to make the queue, the evidence, and the repair path obvious — so a
              Super Admin can finish KYC without inventing a process in Slack.
            </p>
          </FadeIn>
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>How a case moves</SectionHeading>
          </FadeIn>
          <FadeIn>
            <div className="mt-6 grid divide-y divide-[#181510]/20 overflow-hidden rounded-3xl border border-[#181510]/25 bg-[#FAF8F1] lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {flow.map((item, index) => (
                <div key={item.step} className="flex flex-col gap-2 px-6 py-6">
                  <span className="font-mono text-xs text-[#181510]/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-extrabold tracking-tight">{item.step}</span>
                  <p className="text-sm leading-[1.7] text-[#181510]/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="mt-24">
          <FadeIn>
            <SectionHeading>Decisions</SectionHeading>
          </FadeIn>
          <FadeIn>
            <p className="mt-6 max-w-2xl text-base leading-[1.8] text-[#181510]/80 sm:text-lg">
              Screenshot, then the fork. Each of these was a choice — the screen is the record of
              which side we took.
            </p>
          </FadeIn>
          <div className="mt-12 flex flex-col gap-24">
            {beats.map((item, index) => (
              <FadeIn key={item.src}>
                <article>
                  <div className="overflow-hidden rounded-[16px] bg-white p-[6px]">
                    <div className="overflow-hidden rounded-[12px] bg-[#f4f4f5]">
                      <Image
                        src={item.src}
                        alt={item.screen}
                        width={1600}
                        height={1000}
                        sizes="100vw"
                        unoptimized
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                  <div className="mt-8 max-w-3xl">
                    <span className="font-mono text-xs text-[#181510]/40">
                      {String(index + 1).padStart(2, "0")} · {item.screen}
                    </span>
                    <h3 className="mt-2 text-xl font-extrabold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-[1.8] text-[#181510]/80">{item.choice}</p>
                    <p className="mt-3 text-base leading-[1.8] text-[#181510]/80">
                      <span className="font-bold">Why. </span>
                      {item.why}
                    </p>
                    <p className="mt-3 text-base leading-[1.8] text-[#181510]/60">
                      <span className="font-bold text-[#181510]/80">Not. </span>
                      {item.not}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
