import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gunalm-design/" },
  { label: "Behance", href: "https://www.behance.net/gunaldesigns" },
  { label: "YouTube", href: "https://www.youtube.com/@GunalDesigns" },
];

export default function Footer() {
  return (
    <footer className="w-full pb-28 text-[#141413] sm:pb-32">
      <div className="page-shell flex flex-col gap-6 px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="flex flex-col gap-6 border-t border-[#141413]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-sm">
            <a href="mailto:hey@gunalm.design" className="underline-offset-4 hover:underline">
              hey@gunalm.design
            </a>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#6b6a66] transition-colors hover:text-[#141413]"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-sm text-[#6b6a66]">
            <Link href="/#about" className="hover:text-[#141413]">About</Link>
            <Link href="/contact" className="hover:text-[#141413]">Contact</Link>
            <span>© 2026 Gunal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
