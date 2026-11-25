import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Roomy's own look for its App Store pages: deep green-black, the same green glow as the app,
 * Bricolage Grotesque headings and the brand green. Deliberately separate from the portfolio theme.
 */
export const roomy = {
  email: "gunalm4624@gmail.com",
  privacyHref: "/projects/roomy/privacy",
  supportHref: "/projects/roomy/support",
};

export function RoomyShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#060D0B] font-body text-white">
      {/* The app's top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_70%_100%_at_50%_0%,rgba(29,158,117,0.55),rgba(29,158,117,0.12)_55%,transparent_80%)]"
      />
      <div className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 pb-16 pt-8 sm:px-8">
        <header className="flex items-center justify-between">
          <Link href="/projects/roomy/support" className="flex items-center gap-3">
            <Image src="/roomy/logo.png" alt="" width={36} height={36} className="h-9 w-9" />
            <span className="font-display text-xl font-semibold tracking-[-0.02em]">Roomy</span>
          </Link>
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href={roomy.supportHref}
              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-white/80 transition-colors hover:bg-white/[0.12]"
            >
              Support
            </Link>
            <Link
              href={roomy.privacyHref}
              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-white/80 transition-colors hover:bg-white/[0.12]"
            >
              Privacy
            </Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="mt-16 text-sm text-white/40">
          Roomy: Clean Up Storage, by Gunal M ·{" "}
          <a href={`mailto:${roomy.email}`} className="underline decoration-white/20 underline-offset-4 hover:text-white/70">
            {roomy.email}
          </a>
        </footer>
      </div>
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8 ${className}`}>{children}</div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full bg-[#20D574]/15 px-3 py-1 text-[13px] font-medium text-[#86F2B4]">
      {children}
    </span>
  );
}
