"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
        projectImage: "/assets/images/project-3/Cover.png",
        slug: "tnsetc-bus-booking"
    }
];

export default function WorkPage() {
    return (
        <div className="pt-24">
            <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        className="transition-transform duration-150 ease-out"
                    >
                        <Link href={`/work/${project.slug}`} className="group block">
                            <div className="bg-white rounded-2xl md:rounded-[2.5rem] pt-6 pb-4 px-4 md:pt-6 md:pb-6 md:px-6 shadow-sm border border-gray-100 flex flex-col gap-6 transition-all duration-300 hover:shadow-md hover:border-gray-200">
                                {/* Card Header */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2 md:px-4 gap-4">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                                        <h1 className="text-lg md:text-2xl font-semibold primary-font tracking-tight text-zinc-900">
                                            {project.title}
                                        </h1>
                                        <span className="text-sm text-zinc-400 font-medium whitespace-nowrap hidden md:inline">
                                            {project.metrics.map(m => `${m.value} ${m.label.toLowerCase()}`).join(", ")}
                                        </span>
                                    </div>
                                    <div
                                        className="px-6 py-2.5 rounded-full bg-zinc-50 text-zinc-900 font-medium text-sm hidden md:flex items-center gap-2 group-hover:bg-zinc-100 transition-colors border border-zinc-200/50"
                                    >
                                        View Project <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>

                                {/* Main Image Area */}
                                <div className="relative w-full aspect-[16/10] bg-[#F7F7F7] rounded-xl md:rounded-[2rem] overflow-hidden flex items-center justify-center p-2 md:p-12">
                                    {project.projectImage && (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.projectImage}
                                                alt={project.title}
                                                fill
                                                className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
