"use client";

import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { Gamepad2, House, LayoutGrid, Mail, Shapes, User } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/", icon: House },
  { label: "Work", href: "/#works", icon: LayoutGrid },
  { label: "About", href: "/#about", icon: User },
  { label: "Explorations", href: "/explorations", icon: Shapes },
  { label: "Play with Gunal", href: "/play", icon: Gamepad2 },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function NavbarAnimated() {
  const pathname = usePathname();
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== "/" || !lenis) return;
    if (href === "/") {
      e.preventDefault();
      lenis.scrollTo(0, { duration: 1.6 });
    } else if (href.startsWith("/#")) {
      e.preventDefault();
      lenis.scrollTo(href.slice(1), { offset: -24, duration: 1.6 });
    }
  };

  const isActive = (href: string) => (href.startsWith("/#") ? false : href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <motion.nav
      aria-label="Primary"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-6"
    >
      <ul className="pointer-events-auto flex items-center gap-1 rounded-full bg-[#141413]/92 p-1.5 shadow-[0_12px_40px_-8px_rgba(20,20,19,0.45)] backdrop-blur-xl">
        {links.map(({ label, href, icon: Icon }) => {
          const active = isActive(href);
          return (
            <li key={label} className="group relative">
              <a
                href={href}
                aria-label={label}
                onClick={(e) => handleClick(e, href)}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors sm:h-11 sm:w-11 ${
                  active ? "bg-white text-[#141413]" : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} strokeWidth={1.75} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              </a>
              <span className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-1 rounded-full bg-[#141413] px-3 py-1 font-body text-xs whitespace-nowrap text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
