import { ArrowDown, ArrowUpRight, Send } from "lucide-react";

import { BOOKING_HREF } from "../../lib/cal";
import FadeIn from "./FadeIn";

const links = [
  { label: "Book an intro call", href: BOOKING_HREF, icon: <ArrowDown size={16} /> },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gunalm-design/",
    icon: <ArrowUpRight size={16} />,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/gunaldesigns",
    icon: <ArrowUpRight size={16} />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@GunalDesigns",
    icon: <ArrowUpRight size={16} />,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#181510] text-[#F2EEE3]">
      <div className="page-shell px-4 pt-16 pb-10 sm:px-6 md:px-20 md:pt-28 md:pb-16">
      <FadeIn>
        <p className="font-mono text-sm text-[#F2EEE3]/50">Still tweaking this footer, probably.</p>
      </FadeIn>

      <FadeIn>
        <h2 className="mt-6 max-w-5xl text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-6xl md:text-8xl">
          That&apos;s the work. Here&apos;s the{" "}
          <span className="text-[#F2EEE3]/[0.08]">awkward</span> reaching out part.
        </h2>
      </FadeIn>

      <FadeIn>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:hey@gunalm.design"
            title="Drop an email"
            className="flex h-12 items-center gap-2 rounded-full bg-[#ed254e] px-6 font-mono text-sm font-bold text-[#F2EEE3] transition-opacity hover:opacity-90"
          >
            <Send size={16} />
            Drop an Email
          </a>

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              title={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-12 items-center gap-2 rounded-full border border-[#F2EEE3]/25 px-6 font-mono text-sm font-bold text-[#F2EEE3] transition-colors hover:border-[#F2EEE3]/60"
            >
              {link.label}
              {link.icon}
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="mt-16 flex flex-col gap-4 border-t border-[#F2EEE3]/15 pt-6 sm:mt-32 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <span className="flex items-center gap-2.5 font-mono text-xs text-[#F2EEE3]/50">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ed254e] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ed254e]" />
          </span>
          Open to work — know of a role or referral? Send it my way.
        </span>
        <span className="font-mono text-xs text-[#F2EEE3]/50">
          © 2026 gunalm.design. All rights reserved.
        </span>
      </div>
      </div>
    </footer>
  );
}
