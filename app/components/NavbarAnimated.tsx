"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import type { HeroContent } from "../../sanity/lib/queries";
import CtaButton from "./CtaButton";

const links = [
  { label: "Works", href: "/#works" },
  { label: "Process", href: "/#process" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

export default function NavbarAnimated({ hero }: { hero: HeroContent }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();

  const [menuClosedForPathname, setMenuClosedForPathname] = useState(pathname);
  if (pathname !== menuClosedForPathname) {
    setMenuClosedForPathname(pathname);
    setIsMenuOpen(false);
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith("/") && href.includes("#")) {
      const hash = href.substring(href.indexOf("#"));

      if (pathname === "/") {
        if (lenis) {
          e.preventDefault();
          lenis.scrollTo(hash === "#top" ? 0 : hash);
          window.history.replaceState(null, "", hash === "#top" ? "/" : hash);
        }
      }
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-4"
    >
      <nav className="flex w-full max-w-5xl items-center justify-between gap-6 rounded-full border border-zinc-200 bg-white p-1.5 dark:border-zinc-800 dark:bg-black">
        <div className="flex items-center gap-4">
          <a
            href="/"
            title="Home"
            onClick={(e) => handleScroll(e, "/#top")}
            className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full"
            aria-label="Home"
          >
            <Image
              src="/gunalm-design.png"
              alt="gunalm.design"
              fill
              sizes="48px"
              className="object-cover"
            />
          </a>
          <div className="hidden h-0.5 w-24 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-900 sm:block">
            <motion.div
              style={{ scaleX }}
              className="h-full origin-left bg-zinc-950 dark:bg-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <ul className="hidden items-center gap-6 text-base text-zinc-600 dark:text-zinc-400 sm:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  title={link.label}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="transition-colors hover:text-zinc-950 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden sm:block">
            <CtaButton label={hero.ctaLabel} href={hero.ctaHref} shadow={false} />
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-zinc-950 transition-colors hover:bg-zinc-100 sm:hidden dark:text-white dark:hover:bg-zinc-900"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-4 top-[calc(100%+8px)] flex max-h-[calc(100vh-88px)] flex-col gap-1 overflow-y-auto rounded-3xl border border-zinc-200 bg-white p-4 shadow-lg sm:hidden dark:border-zinc-800 dark:bg-black"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                title={link.label}
                onClick={(e) => handleScroll(e, link.href)}
                className="rounded-xl px-4 py-3 text-base text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 px-4">
              <CtaButton label={hero.ctaLabel} href={hero.ctaHref} shadow={false} className="w-full justify-center" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
