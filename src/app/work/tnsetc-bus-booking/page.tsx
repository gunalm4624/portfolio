"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
    "/assets/images/project-3/1.png",
    "/assets/images/project-3/2.png",
    "/assets/images/project-3/3.png",
    "/assets/images/project-3/4.png",
    "/assets/images/project-3/5.png",
    "/assets/images/project-3/6.png",
    "/assets/images/project-3/7.png",
    "/assets/images/project-3/8.png",
    "/assets/images/project-3/9.png",
    "/assets/images/project-3/10.png",
    "/assets/images/project-3/11.png",
    "/assets/images/project-3/12.png",
    "/assets/images/project-3/13.png",
    "/assets/images/project-3/14.png",
    "/assets/images/project-3/15.png",
    "/assets/images/project-3/16.png",
    "/assets/images/project-3/17.png",
    "/assets/images/project-3/18.png",
    "/assets/images/project-3/19.png",
    "/assets/images/project-3/20.png",
    "/assets/images/project-3/21.png",
];

export default function TNSETCCaseStudy() {
    return (
        <div className="min-h-screen bg-zinc-50">
            {/* Sticky Navigation Bar */}


            {/* Content - Image Stack */}
            <main className="max-w-7xl mx-auto pt-24 pb-24 px-4 sm:px-6 space-y-4">
                {images.map((src, index) => (
                    <div key={index} className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-zinc-100 bg-white">
                        <Image
                            src={src}
                            alt={`TNSETC Case Study Slide ${index + 1}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            priority={index < 2}
                            unoptimized
                        />
                    </div>
                ))}
            </main>

            {/* Footer Navigation */}
            <div className="max-w-7xl mx-auto px-6 pb-24 text-center">
                <p className="text-zinc-500 mb-8">Role: Product Designer (Personal Project)</p>
                <Link
                    href="/work"
                    className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all hover:scale-105"
                >
                    View Other Projects
                </Link>
            </div>
        </div>
    );
}
