import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Layers,
  Lock,
  Percent,
  Share2,
  Users,
  WifiOff,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import AppleLogo from "../../components/AppleLogo";
import FadeIn from "../../components/FadeIn";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ScreenMarquee from "../../components/ScreenMarquee";

export const metadata: Metadata = {
  title: "BrandInvoice — branded invoices in under 20 seconds",
  description:
    "Case study: BrandInvoice, a native iOS invoice maker built in a week for MSME businesses. Branded invoices in under 20 seconds, with clients managed in one place.",
};

const APP_STORE_URL = "https://apps.apple.com/us/app/brandinvoice-invoice-maker/id6814859473";

const meta = [
  { label: "Date", value: "Sep 2026" },
  { label: "Role", value: "Design, build, launch" },
  { label: "Stack", value: "Native iOS, Swift" },
  { label: "Built with", value: "Claude Code" },
  { label: "Supports", value: "iOS 26 and later" },
];

const stats = [
  { value: "<20s", label: "to create a branded invoice" },
  { value: "1 week", label: "from idea to the App Store" },
  { value: "4", label: "invoice templates: Classic, Brand, Aura and Panel" },
  { value: "0", label: "data collected, per the App Store privacy label" },
];

const features = [
  { icon: Layers, title: "Brand it once", body: "Save your logo, signature and brand colour once, and they appear on every invoice after that." },
  { icon: FileText, title: "Four templates", body: "Classic, Brand, Aura and Panel, each with your own brand colour." },
  { icon: Percent, title: "Multiple taxes", body: "Add GST, VAT or any mix of taxes to one invoice. Each is itemised on the PDF." },
  { icon: Users, title: "Clients, sorted", body: "Keep your clients and their invoices together, so the next invoice starts from what you already have." },
  { icon: WifiOff, title: "Works offline", body: "Your business profile, clients and invoices live on the device, so it works without a connection." },
  { icon: Share2, title: "Share anywhere", body: "Export a PDF and send it through Mail, Messages, WhatsApp or any other app." },
];

const plans = [
  { name: "Free", price: "$0", note: "Unlimited Classic invoices, one export a month" },
  { name: "Monthly", price: "$1.99", note: "All templates, brand on every invoice, unlimited exports" },
  { name: "Yearly", price: "$9.99", note: "Everything in Essential, for a year" },
  { name: "Lifetime", price: "$19.99", note: "One-time, no subscription" },
];

const swatches = ["#00B7F0", "#7AC51F", "#0A8A7E", "#1559B8", "#C8141C", "#7A38C7", "#E58A0B"];

const screens = [1, 2, 3, 4, 5, 6];

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`bg-white ${className.includes("rounded") ? "" : "rounded-[2rem]"} ${className}`}>{children}</div>;
}

function Chapter({
  index,
  title,
  children,
  panel,
}: {
  index: string;
  title: string;
  children: ReactNode;
  panel: ReactNode;
}) {
  return (
    <FadeIn>
      <Card className="grid gap-8 p-3 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-10 p-3 sm:p-7">
          <span className="text-[13px] text-[#6b6a66]">{index}</span>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl">{title}</h2>
            <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-[#6b6a66] sm:text-base">{children}</div>
          </div>
        </div>
        <div className="flex min-h-72 flex-col justify-center rounded-[1.5rem] bg-[#F4F3EF] p-5 sm:p-8">{panel}</div>
      </Card>
    </FadeIn>
  );
}

export default function BrandInvoiceCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col text-[#141413]">
      <Navbar />

      <main className="page-shell flex-1 px-5 pt-4 pb-16 font-body sm:px-8 md:px-10 lg:px-12">
        <Link href="/#works" className="mb-4 inline-flex items-center gap-2 px-2 text-sm text-[#6b6a66] transition-colors hover:text-[#141413]">
          <ArrowLeft size={14} /> Back to work
        </Link>

        <div className="flex flex-col gap-4">
          <FadeIn>
            <Card className="flex flex-col gap-10 p-6 sm:p-10">
              <div className="flex flex-col gap-6">
                <h1 className="max-w-5xl font-display text-5xl leading-[1.02] tracking-[-0.045em] sm:text-7xl">
                  BrandInvoice. A branded invoice in under 20 seconds.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-[#6b6a66] sm:text-xl">
                  An invoice maker for MSME businesses. Their logo, signature and brand colour on every invoice, and their clients managed with ease. Built in a week.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-[#141413] px-5 text-sm text-white transition-colors hover:bg-[#2f2f2c]"
                  >
                    <AppleLogo />
                    View on the App Store
                    <ArrowUpRight size={14} />
                  </a>
                  <Link
                    href="/projects/brandinvoice/support"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-[#F4F3EF] px-5 text-sm transition-colors hover:bg-[#E9E8E2]"
                  >
                    Support
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-6 border-t border-[#141413]/10 pt-6 sm:grid-cols-3 lg:grid-cols-5">
                {meta.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <dt className="text-[13px] text-[#6b6a66]">{m.label}</dt>
                    <dd className="text-sm">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </FadeIn>

          <FadeIn>
            <div className="overflow-hidden rounded-[2rem] bg-[#D3EAF7] p-6 sm:p-12">
              <div className="flex items-start justify-center gap-3 sm:gap-10">
                {[1, 3, 5].map((n, i) => (
                  <Image
                    key={n}
                    src={`/work/brandinvoice/bi-${n}.png`}
                    alt={`BrandInvoice iPhone screen ${n}`}
                    width={1000}
                    height={2075}
                    priority
                    sizes="(min-width: 1024px) 25vw, 30vw"
                    className={`h-auto w-[30%] max-w-[320px] ${i === 1 ? "mt-8 sm:mt-14" : ""}`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <FadeIn key={s.value} delay={i * 0.05}>
                <Card className="flex h-full min-h-44 flex-col justify-between gap-6 p-6">
                  <p className="font-display text-5xl tracking-[-0.04em]">{s.value}</p>
                  <p className="text-sm leading-relaxed text-[#6b6a66]">{s.label}</p>
                </Card>
              </FadeIn>
            ))}
          </section>

          <Chapter
            index="01 · The week"
            title="Built in a week, again."
            panel={
              <div className="flex flex-col gap-8">
                <div className="flex items-end justify-between gap-4">
                  <p className="font-display text-8xl leading-none tracking-[-0.05em]">7</p>
                  <p className="pb-2 text-right text-sm leading-snug text-[#6b6a66]">
                    days from idea to
                    <br />
                    the App Store
                  </p>
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                    <div key={d} className="flex flex-col gap-2">
                      <span className="h-2 rounded-full bg-[#141413]" />
                      <span className="text-center text-[11px] text-[#6b6a66]">D{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            }
          >
            <p>
              BrandInvoice is my third app built with Claude Code, and again it went from idea to the App Store in about a week.
            </p>
            <p>
              It is made for small businesses that need to send a proper invoice without learning accounting software.
            </p>
          </Chapter>

          <Chapter
            index="02 · The idea"
            title="An invoice with your brand, in under 20 seconds."
            panel={
              <div className="flex flex-col gap-3">
                {["Pick a client", "Add the items", "Share the PDF"].map((t, i) => (
                  <div key={t} className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 text-sm">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F4F3EF] text-xs">{i + 1}</span>
                      {t}
                    </div>
                    {i < 2 ? <ArrowDown size={16} className="self-center text-[#6b6a66]" /> : null}
                  </div>
                ))}
                <div className="mt-1 flex items-center justify-between rounded-2xl bg-[#141413] px-5 py-4 text-white">
                  <span className="text-sm text-white/60">Total time</span>
                  <span className="font-display text-2xl tracking-[-0.03em]">under 20s</span>
                </div>
              </div>
            }
          >
            <p>
              For a small business, a branded invoice usually means a template to dig out, a logo to paste in and a PDF to export. BrandInvoice does all of that once, up front.
            </p>
            <p>
              After the logo, signature and brand colour are saved, every new invoice already looks like your business, so making one takes seconds.
            </p>
          </Chapter>

          <Chapter
            index="03 · Your brand"
            title="Your colours on every invoice."
            panel={
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-3">
                  {swatches.map((c) => (
                    <span key={c} className="h-11 w-11 rounded-full" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm">
                  <span className="text-[#6b6a66]">Custom</span>
                  <span className="font-mono">#02C7FF</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Classic", "Brand", "Aura", "Panel"].map((t) => (
                    <span key={t} className="rounded-full bg-white px-3.5 py-1.5 text-[13px]">{t}</span>
                  ))}
                </div>
              </div>
            }
          >
            <p>
              Pick a brand colour from the presets or enter your own, then choose one of four templates. The invoice updates as you go.
            </p>
            <p>
              Clients are kept in one place too, so billing the same customer again is a tap, not a re-type.
            </p>
          </Chapter>

          <FadeIn>
            <Card className="flex flex-col gap-3 rounded-3xl p-6 sm:p-10">
              <h2 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                What it does.
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-[#6b6a66] sm:text-base">
                Everything a small business needs to invoice properly, and nothing it has to learn first.
              </p>
            </Card>
          </FadeIn>

          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, body }, i) => (
              <FadeIn key={title} delay={(i % 3) * 0.05}>
                <Card className="flex h-full min-h-60 flex-col justify-between gap-10 p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F3EF]">
                    <Icon size={17} strokeWidth={1.5} />
                  </span>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-display text-xl tracking-[-0.02em]">{title}</h3>
                    <p className="text-[15px] leading-relaxed text-[#6b6a66]">{body}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </section>

          <FadeIn>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col justify-between gap-16 rounded-[2rem] bg-[#141413] p-7 text-white sm:p-10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Lock size={17} strokeWidth={1.5} />
                </span>
                <div className="flex flex-col gap-3">
                  <h2 className="font-display text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl">
                    Private by design.
                  </h2>
                  <p className="text-[15px] leading-relaxed text-white/60 sm:text-base">
                    No accounts, analytics, tracking or ads. Your business profile, clients and invoices are stored only on your device.
                  </p>
                </div>
              </div>
              <Card className="flex flex-col gap-6 p-7 sm:p-10">
                <h2 className="font-display text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl">Simple pricing.</h2>
                <ul className="flex flex-col">
                  {plans.map((p) => (
                    <li key={p.name} className="flex items-center justify-between gap-4 border-t border-[#141413]/10 py-3.5 text-sm">
                      <span className="flex flex-col">
                        <span>{p.name}</span>
                        <span className="text-[13px] text-[#6b6a66]">{p.note}</span>
                      </span>
                      <span className="flex items-center gap-2 font-display text-xl tracking-[-0.02em]">
                        {p.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </FadeIn>

          <FadeIn>
            <Card className="flex flex-col gap-8 py-8 sm:py-12">
              <div className="flex flex-col gap-2 px-6 sm:px-10">
                <h2 className="font-display text-4xl tracking-[-0.04em] sm:text-5xl">All screens</h2>
                <p className="text-[15px] text-[#6b6a66]">Hover to pause.</p>
              </div>
              <ScreenMarquee srcs={screens.map((n) => `/work/brandinvoice/bi-${n}.png`)} alt="BrandInvoice iPhone" />
            </Card>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
