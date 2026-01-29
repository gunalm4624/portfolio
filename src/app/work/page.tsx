"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    metrics: { label: string; value: string }[];
    bgImage: string;
    projectImage?: string;
    slug: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Bank Back Office Dashboard",
        description: "A comprehensive redesign of the internal merchant verification portal to streamline document review, reduce verification time by 60%, and improve agent productivity through a unified split-screen interface.",
        metrics: [
            { label: "Reduced Verification Time", value: "-40%" },
            { label: "Workflow Speed", value: "+80%" }
        ],
        bgImage: "/assets/images/BG-4.jpg",
        projectImage: "/assets/images/BOB - Post Login - Dashboard.png",
        slug: "bank-back-office-dashboard"
    },
    {
        id: 2,
        title: "White-Label UPI Payment App",
        description: "A seamless white-label UPI payment solution for Axis Bank, featuring a redesigned 'Send Money' flow and 'UPI Circle' for family delegation. Focused on reducing friction and building trust.",
        metrics: [
            { label: "Onboarding Time", value: "-45%" },
            { label: "Transaction Speed", value: "+49%" }
        ],
        bgImage: "/assets/images/BG-5.jpg",
        projectImage: "/assets/images/Project-2/Cover-main.png",
        slug: "upi-white-label"
    },
    {
        id: 3,
        title: "TNSETC Bus Booking App Redesign",
        description: "A comprehensive redesign of the government bus booking platform to enhance accessibility, simplify the booking flow, and modernize the user interface for millions of commuters.",
        metrics: [
            { label: "Project Type", value: "Personal Project" }
        ],
        bgImage: "/assets/images/BG-3.jpg",
        projectImage: "/assets/images/Project-3/Cover.png",
        slug: "tnsetc-bus-booking"
    }
];

export default function WorkPage() {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        let animationFrameId: number;

        const updateScales = () => {
            projects.forEach((_, index) => {
                const card = cardRefs.current[index];
                if (!card) return;

                const cardRect = card.getBoundingClientRect();
                const cardStickyTop = 80 + index * 20;

                // Default scale
                let scale = 1;

                // If card has reached its sticky position, apply static scale
                if (cardRect.top <= cardStickyTop + 1) { // Threshold adjustment
                    // Static scale: first card = 0.90, second = 0.95, third = 1.0
                    scale = 0.90 + (index * 0.05);
                }

                // Apply directly to DOM to avoid re-renders
                card.style.transform = `scale(${scale})`;
                card.style.transformOrigin = 'top center';
            });

            animationFrameId = requestAnimationFrame(updateScales);
        };

        updateScales();

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <main className="min-h-screen p-8 pt-24">
            <div className="max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        ref={(el) => { cardRefs.current[index] = el; }}
                        className="sticky mb-8 transition-transform duration-150 ease-out"
                        style={{
                            top: `${80 + index * 20}px`,
                        }}
                    >
                        <div
                            className="flex-col md:flex-row h-auto md:h-[600px] rounded-3xl overflow-hidden relative flex"
                            style={{
                                backgroundImage: `url(${project.bgImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="w-full md:w-1/2 flex flex-col z-10 p-8 md:p-12">
                                <h1 className="text-left text-4xl md:text-5xl primary-font text-white">
                                    {project.title}
                                </h1>
                                <p className="text-left text-base md:text-lg text-white mt-4 leading-relaxed md:leading-loose">
                                    {project.description}
                                </p>
                                <div className="mt-8 md:mt-10 flex gap-8 md:gap-12">
                                    {project.metrics.map((metric, idx) => (
                                        <div key={idx}>
                                            <p className="text-left text-base md:text-lg text-white mt-4">
                                                {metric.label}
                                            </p>
                                            <h1 className="text-left text-2xl md:text-3xl text-white font-semibold mt-2">
                                                {metric.value}
                                            </h1>
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href={`/work/${project.slug}`}
                                    className="mt-8 md:mt-auto px-6 py-3 rounded-full bg-white text-black font-medium w-fit flex items-center gap-2 hover:bg-gray-100 transition-colors"
                                >
                                    View Case Study <MoveRight />
                                </Link>

                            </div>
                            <div className="w-full md:w-1/2 relative z-0 h-64 md:h-auto">
                                {project.projectImage && (
                                    <div className="absolute top-0 bottom-0 right-0 left-0 md:top-12 md:left-12">
                                        <Image
                                            src={project.projectImage}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top md:object-left-top md:rounded-tl-xl"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
