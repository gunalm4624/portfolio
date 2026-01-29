"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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

    if (pathname && pathname.startsWith("/manage-portfolio")) {
        return null;
    }

    const navItems = [
        { label: "Design Explorations", path: "/design-explorations" },
        { label: "About", path: "/about" },
        // { label: "AI", path: "/ai" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <nav className="fixed top-6 z-50 w-full px-4 md:px-8">
            <div
                className={cn(
                    "flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-xl border max-w-7xl mx-auto w-full relative z-50",
                    isDarkRoute
                        ? "bg-black/80 border-white/10"
                        : "bg-[#F5F5F7]/80 dark:bg-black/50 border-white/20 dark:border-white/10"
                )}
            >
                {/* Brand */}
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

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => {
                        const { path, label } = item;
                        const active = isActive(path);

                        return (
                            <li key={path}>
                                <Link
                                    href={path}
                                    className={cn(
                                        "text-sm transition-all",
                                        active
                                            ? "font-medium"
                                            : "hover:text-foreground",
                                        isDarkRoute
                                            ? active
                                                ? "text-white"
                                                : "text-white/70 hover:text-white"
                                            : active
                                                ? "text-foreground"
                                                : "text-gray-600 dark:text-gray-400"
                                    )}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "md:hidden p-1",
                        isDarkRoute ? "text-white" : "text-foreground"
                    )}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-4 right-4 mt-2 p-4 rounded-3xl bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/20 shadow-lg md:hidden flex flex-col gap-2">
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
                </div>
            )}
        </nav>
    );
}
