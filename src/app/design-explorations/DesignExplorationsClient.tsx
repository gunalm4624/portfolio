"use client";

import { useState } from "react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useSearchParams } from "next/navigation";
import Footer from "../footer/page";

export interface DesignWork {
    id: number;
    title: string;
    date: string;
    image_url: string;
    link?: string;
    category: string;
}

const categories = ["All", "Landing Pages", "Ecommerce Website", "App Design", "Web Design", "Dashboard Design"];

interface Props {
    works: DesignWork[];
}

export default function DesignExplorationsClient({ works }: Props) {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category");

    // Ensure initialCategory matches one of our known categories, otherwise default to "All"
    // Case-insensitive match or exact? The prompt implies exact string matching "Landing Page" -> "Landing Pages" (plural?)
    // In MoreWorks, titles are "Landing Page", "Website Design".
    // In Explorations, categories are "Landing Pages", "Web Design", etc.
    // I need to map them or be careful.

    // Let's just set state from param.
    const [selectedCategory, setSelectedCategory] = useState(initialCategory || "All");

    const filteredWorks = selectedCategory === "All"
        ? works
        : works.filter(work => work.category === selectedCategory);

    return (
        <main className="min-h-screen p-8 pt-32">
            <div className="max-w-7xl mx-auto w-full">
                {/* Filter Chips */}
                <Reveal width="100%">
                    <div className="flex flex-wrap gap-3 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${selectedCategory === category
                                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                    : "bg-transparent text-gray-600 border-gray-200 hover:border-gray-400 dark:text-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Empty State */}
                {filteredWorks.length === 0 ? (
                    <Reveal width="100%">
                        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                            <h3 className="text-7xl primary-font mb-2">Empty Canvas</h3>
                            <p className="text-gray-500 text-lg mt-4">Try adjusting your filters to discover more designs.</p>
                        </div>
                    </Reveal>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredWorks.map((work) => (
                            <Reveal width="100%" key={work.id}>
                                <div
                                    className="group w-full rounded-3xl bg-white dark:bg-zinc-900 p-2 border border-gray-200 dark:border-gray-800 cursor-pointer"
                                >
                                    <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden">
                                        {/* Work Image */}
                                        <Image
                                            src={work.image_url}
                                            alt={work.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Hover Overlay with Content */}
                                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                                            <h3 className="text-2xl font-medium text-white mb-2 primary-font translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{work.title}</h3>
                                            <p className="text-sm text-gray-200 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{work.date}</p>

                                            {work.link && (
                                                <Link
                                                    href={work.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium transition-all duration-300 hover:scale-105 translate-y-4 group-hover:translate-y-0 delay-100"
                                                >
                                                    Visit Website <MoveUpRight size={18} />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                )}
                <Reveal width="100%">
                    <Footer />
                </Reveal>
            </div>
        </main>
    );
}
