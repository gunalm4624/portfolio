"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "work", href: "/#works" },
  { label: "about", href: "/about" },
  { label: "play with gunal", href: "/play" },
];

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

function OpenToWorkBadge({ className }: { className: string }) {
  return (
    <div
      className={`items-center gap-2 rounded-full border border-zinc-200 px-4 py-2.5 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ed254e] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ed254e]" />
      </span>
      Open to work
    </div>
  );
}

export default function NavbarAnimated() {
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
          lenis.scrollTo(hash === "#top" ? 0 : hash, {
            offset: hash === "#top" ? 0 : -8,
            duration: 1.8,
          });
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
      className="fixed inset-x-0 top-0 z-50 w-full"
    >
      <nav className="w-full border-b border-zinc-200/60 bg-background/70 backdrop-blur-xl backdrop-saturate-150 dark:border-zinc-800/60">
        <div className="page-shell flex w-full items-center justify-between gap-3 px-4 py-3 sm:gap-6 md:px-20">
        <div className="flex items-center gap-4">
          <a
            href="/"
            title="Home"
            onClick={(e) => handleScroll(e, "/#top")}
            className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white"
            aria-label="Home"
          >
            <Image
              src="/gunalm-design.png"
              alt="gunalm.design"
              fill
              sizes="48px"
              className="object-cover grayscale"
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
          <ul className="hidden items-center gap-6 font-mono text-sm text-zinc-600 dark:text-zinc-400 sm:flex">
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

          <OpenToWorkBadge className="hidden sm:inline-flex" />

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
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full flex max-h-[calc(100vh-64px)] flex-col gap-1 overflow-y-auto border-b border-zinc-200/60 bg-background/90 p-4 shadow-lg backdrop-blur-xl sm:hidden dark:border-zinc-800/60"
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
              <OpenToWorkBadge className="flex w-full justify-center" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
