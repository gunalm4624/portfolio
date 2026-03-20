"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === "/work") {
            return pathname === "/work" || pathname === "/";
        }
        return pathname === path;
    };

    const isDarkRoute = ["/about"].includes(pathname);

    if (pathname && (pathname.startsWith("/manage-portfolio") || pathname.startsWith("/feedback/"))) {
        return null;
    }

    const navItems = [
        { label: "Design Explorations", path: "/design-explorations" },
        { label: "About", path: "/about" },
        // { label: "AI", path: "/ai" },
    ];

    return (
        <nav className="fixed top-6 z-50 w-full px-4 md:px-8">
            <div
                className={cn(
                    "flex items-center justify-between pl-6 pr-2.5 py-2.5 rounded-full backdrop-blur-xl border max-w-7xl mx-auto w-full relative z-50",
                    "shadow-[0_1px_4px_rgba(0,0,0,0.04),_0_0_1px_rgba(0,0,0,0.1)]",
                    isDarkRoute
                        ? "bg-black/80 border-white/10"
                        : "bg-white/80 dark:bg-black/50 border-white/20 dark:border-white/10"
                )}
            >
                {/* Brand - Left */}
                <Link
                    href="/"
                    className={cn(
                        "text-base tracking-tight hover:opacity-80 transition-opacity font-semibold",
                        isDarkRoute ? "text-white" : "text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                >
                    gunalm.design
                </Link>

                {/* Right Group: Desktop Menu + Ping Me */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex items-center gap-6">
                        {navItems.map((item) => {
                            const { path, label } = item;
                            const active = isActive(path);

                            return (
                                <li key={path}>
                                    <Link
                                        href={path}
                                        className={cn(
                                            "text-base transition-all",
                                            active
                                                ? "font-semibold"
                                                : "hover:text-foreground font-medium",
                                            isDarkRoute
                                                ? active
                                                    ? "text-white"
                                                    : "text-white/70 hover:text-white"
                                                : active
                                                    ? "text-foreground"
                                                    : "text-zinc-800"
                                        )}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <Link href="/contact" className="group">
                        <motion.div
                            className="flex items-center gap-3 bg-black pl-5 pr-1.5 py-1.5 rounded-full border border-white/10 hover:bg-zinc-900 transition-colors"
                            whileHover="hover"
                            initial="initial"
                        >
                            <span className="text-xs font-bold text-white tracking-wide uppercase">Ping Me</span>
                            <div className="bg-zinc-800/80 px-3 py-1.5 rounded-full relative overflow-hidden h-7 w-12 flex items-center justify-center">
                                <motion.div
                                    className="relative flex items-center justify-center w-full h-full"
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                >
                                    <motion.div
                                        variants={{
                                            hover: { x: 30, opacity: 0 },
                                            initial: { x: 0, opacity: 1 }
                                        }}
                                        className="absolute"
                                    >
                                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                                    </motion.div>
                                    <motion.div
                                        variants={{
                                            hover: { x: 0, opacity: 1 },
                                            initial: { x: -30, opacity: 0 }
                                        }}
                                        className="absolute"
                                    >
                                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "md:hidden p-1 ml-auto",
                        isDarkRoute ? "text-white" : "text-foreground"
                    )}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-4 right-4 mt-2 p-4 rounded-3xl bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-white/20 shadow-lg md:hidden flex flex-col gap-2 z-40"
                    >
                        {navItems.map((item) => {
                            const { path, label } = item;
                            const active = isActive(path);
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                                        active
                                            ? "bg-black/5 dark:bg-white/10 text-foreground dark:text-white"
                                            : "text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5"
                                    )}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between px-4 py-3 rounded-xl bg-black text-white text-base font-medium"
                        >
                            <span>Ping Me</span>
                            <ArrowRight className="w-5 h-5 text-white" />
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
