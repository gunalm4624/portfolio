"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const sections = [
    { id: "project-overview", title: "Project Overview" },
    { id: "understanding-the-problem", title: "Understanding the Problem" },
    { id: "design-strategy", title: "Design Strategy" },
    { id: "design-process", title: "Design Process" },
    { id: "visual-design", title: "Visual Design" },
    { id: "key-features", title: "Key Features Delivered" },
    { id: "design-validation", title: "Design Validation" },
    { id: "final-solution", title: "Final Solution" },
    { id: "impact-outcomes", title: "Impact & Outcomes" },
    { id: "reflection-learnings", title: "Reflection & Learnings" },
];

export default function BankBackOfficeDashboard() {
    const [activeSection, setActiveSection] = useState("");
    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "0px 0px -50% 0px", // Highlighting when top of section passes middle of screen
                threshold: 0.1,
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const text = document.getElementById("main-content")?.innerText || "";
        const wpm = 200;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        setReadingTime(time);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -50; // Add some offset for sticky header if needed, or breathing room
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white text-zinc-900 font-sans selection:bg-orange-100 selection:text-orange-900 max-w-7xl mx-auto">

            {/* Left Content - 70% */}
            <main id="main-content" className="w-full md:w-[70%] px-6 py-24 space-y-40"> {/* Increased spacing between sections */}

                {/* Project Overview */}
                <section id="project-overview" className="scroll-mt-24 space-y-10">
                    <div className="relative w-full p-8 rounded-3xl overflow-hidden mb-8 shadow-sm border border-zinc-100">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/assets/images/BG-4.jpg"
                                alt="Background"
                                fill
                                className="object-cover opacity-100"
                            />
                        </div>
                        <div className="relative z-10 w-full rounded-xl overflow-hidden shadow-2xl border border-zinc-900/5">
                            <Image
                                src="/assets/images/Project-1/BOB - Merchant Verification.png"
                                alt="Merchant Verification Portal Overview"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                    </div>

                    <div className="space-y-2 mb-12">
                        <h1 className="text-5xl tracking-tight text-zinc-900 primary-font">
                            Bank of Baroda
                        </h1>
                        <p className="text-lg text-zinc-500 font-medium tracking-wide">
                            MERCHANT QUALITY CONTROL PORTAL
                        </p>
                        <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mt-4">
                            A comprehensive redesign of the internal merchant verification portal to streamline document review, reduce verification time by 60%, and improve agent productivity through a unified split-screen interface.
                        </p>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base text-zinc-600">
                        <div>
                            <p className="mb-2 text-zinc-400 uppercase tracking-widest text-xs font-semibold">Role</p>
                            <p className="text-lg font-medium text-zinc-900">UI/UX Designer</p>
                        </div>
                        <div>
                            <p className="mb-2 text-zinc-400 uppercase tracking-widest text-xs font-semibold">Duration</p>
                            <p className="text-lg font-medium text-zinc-900">15 days (Sprint-based redesign)</p>
                        </div>
                        <div>
                            <p className="mb-2 text-zinc-400 uppercase tracking-widest text-xs font-semibold">Team</p>
                            <p className="text-lg font-medium text-zinc-900">Product Manager, 2 Design Leads, Bank Stakeholders</p>
                        </div>
                        <div>
                            <p className="mb-2 text-zinc-400 uppercase tracking-widest text-xs font-semibold">Platform</p>
                            <p className="text-lg font-medium text-zinc-900">Web Application (Desktop)</p>
                        </div>
                    </div>
                    <div className="space-y-8 text-zinc-700 leading-relaxed max-w-3xl text-lg">
                        <div>
                            <h3 className="text-2xl font-medium text-zinc-900 mb-3">The Challenge</h3>
                            <p>
                                Bank of Baroda&apos;s internal merchant verification team was struggling with an outdated portal that required downloading documents separately, switching between multiple windows, and filling lengthy forms—leading to slow verification times and agent frustration.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium text-zinc-900 mb-3">The Impact</h3>
                            <p>
                                Redesigned the verification workflow to enable side-by-side document review, reducing verification time per merchant and improving data accuracy through contextual validation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Understanding the Problem */}
                <section id="understanding-the-problem" className="scroll-mt-24 space-y-16">
                    <h2 className="text-5xl tracking-tight text-zinc-900 primary-font leading-tight">
                        Understanding the Problem
                    </h2>

                    <div className="space-y-8 max-w-4xl text-zinc-700 leading-relaxed text-lg">
                        <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                            <h3 className="text-2xl font-medium text-zinc-900 mb-6">Research & Discovery</h3>
                            <p className="mb-6">
                                We conducted stakeholder interviews with bank officials and identified that verification agents process 50-100+ merchants daily. Each merchant requires checking 4 KYC documents (Aadhaar front/back, PAN front/back).
                            </p>
                            <div className="mb-8">
                                <h4 className="font-semibold text-zinc-900 mb-4 mt-6 text-sm uppercase tracking-widest">User Research: Agent Feedback Sessions</h4>
                                <p className="text-base text-zinc-600 mb-6">Conducted feedback calls with 13 verification agents across different bank branches.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <blockquote className="italic text-zinc-600 text-base border-l-4 border-orange-200 pl-4 py-3 bg-white rounded-r shadow-sm">
                                        &quot;I have to download each document, open it in a new tab... By the time I&apos;m on the 4th, I&apos;ve forgotten the first.&quot;
                                        <span className="block not-italic text-xs font-semibold text-zinc-400 mt-2 uppercase tracking-wide">- Agent from Mumbai</span>
                                    </blockquote>
                                    <blockquote className="italic text-zinc-600 text-base border-l-4 border-orange-200 pl-4 py-3 bg-white rounded-r shadow-sm">
                                        &quot;The worst part is when I reject a document, I have to write the same reasons again and again.&quot;
                                        <span className="block not-italic text-xs font-semibold text-zinc-400 mt-2 uppercase tracking-wide">- Agent from Chennai</span>
                                    </blockquote>
                                    <blockquote className="italic text-zinc-600 text-base border-l-4 border-orange-200 pl-4 py-3 bg-white rounded-r shadow-sm">
                                        &quot;Sometimes merchants resubmit... but I can&apos;t see what I rejected it for last time.&quot;
                                        <span className="block not-italic text-xs font-semibold text-zinc-400 mt-2 uppercase tracking-wide">- Agent from Delhi</span>
                                    </blockquote>
                                    <blockquote className="italic text-zinc-600 text-base border-l-4 border-orange-200 pl-4 py-3 bg-white rounded-r shadow-sm">
                                        &quot;We&apos;re expected to verify 60-80 merchants a day... the current system makes it impossible.&quot;
                                        <span className="block not-italic text-xs font-semibold text-zinc-400 mt-2 uppercase tracking-wide">- Senior Agent</span>
                                    </blockquote>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 border-t border-zinc-200">
                                <div>
                                    <h4 className="font-semibold text-zinc-900 mb-3 text-sm uppercase tracking-widest">Agent Demographics</h4>
                                    <ul className="text-base text-zinc-600 space-y-2">
                                        <li><strong>Experience:</strong> 6 months - 7 years</li>
                                        <li><strong>Age:</strong> 24 - 42 years</li>
                                        <li><strong>Daily Load:</strong> 50-100 merchants</li>
                                        <li><strong>Environment:</strong> High-volume, accuracy-focused</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-zinc-900 mb-3 text-sm uppercase tracking-widest">Observation Insights</h4>
                                    <ul className="text-base text-zinc-600 space-y-2">
                                        <li>Maintained personal notebooks for rejection reasons</li>
                                        <li>15-20 window switches per merchant</li>
                                        <li>Frequent typing errors (Aadhaar/PAN)</li>
                                        <li>Preferred keyboard over mouse</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-3xl font-medium text-zinc-900 mb-6">Core Problem Statement</h3>
                            <p className="text-xl text-zinc-800 italic border-l-4 border-zinc-900 pl-8 py-4 leading-relaxed">
                                Bank verification agents need to process high volumes of merchants efficiently while maintaining accuracy, but the current system&apos;s fragmented interface creates cognitive overload and slows down their workflow—resulting in longer processing times and potential errors.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Design Strategy */}
                <section id="design-strategy" className="scroll-mt-24 space-y-12">
                    <h2 className="text-5xl tracking-tight text-zinc-900 primary-font leading-tight">
                        Design Strategy
                    </h2>

                    <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-zinc-100 mb-10">
                        <Image
                            src="/assets/images/Project-1/Dashboard Login - Filled.png"
                            alt="Login Page Design"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div className="max-w-4xl space-y-12">
                        <div>
                            <h3 className="text-2xl font-medium text-zinc-900 mb-6">Core Design Principles</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "Split-screen Context",
                                    "Progressive Disclosure",
                                    "Inline Validation",
                                    "Visual Status Indicators",
                                    "Error Prevention"
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-zinc-100">
                                        <span className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0"></span>
                                        <span className="text-lg font-medium text-zinc-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-medium text-zinc-900 mb-6">Information Architecture</h3>
                            <div className="space-y-8 bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                                <div>
                                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Before: Linear Flow</span>
                                    <p className="text-zinc-600 mt-2 text-lg">Login → Merchant List → Download Documents → Fill Form → Submit</p>
                                </div>
                                <div className="pt-6 border-t border-zinc-200">
                                    <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">After: Split-pane Flow</span>
                                    <p className="text-zinc-900 font-medium mt-2 text-lg">Login → Dashboard → Merchant List → Document Verification Panel (side-by-side) → Status Update</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-medium text-zinc-900 mb-4">Design Goal</h3>
                            <p className="text-lg text-zinc-700 leading-relaxed">
                                Create a unified verification interface that keeps all relevant information visible simultaneously, reduces manual data entry, and provides guided workflows to help agents process merchants faster and more accurately.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Design Process */}
                <section id="design-process" className="scroll-mt-24 space-y-12">
                    <h2 className="text-5xl tracking-tight text-zinc-900 primary-font leading-tight">
                        Design Process
                    </h2>

                    <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-zinc-100 mb-10">
                        <Image
                            src="/assets/images/Project-1/Post Login - Dashboard.png"
                            alt="Dashboard View"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div className="max-w-4xl space-y-12 text-zinc-700 text-lg">
                        <div>
                            <h3 className="text-2xl font-medium text-zinc-900 mb-6">Wireframing & Iteration</h3>
                            <ul className="space-y-3 text-zinc-600 list-disc pl-6 leading-relaxed">
                                <li><strong>Initial Concept:</strong> Explored tab-based document viewer (Rejected - still required switching).</li>
                                <li><strong>Considered:</strong> Single-document full-screen view (Rejected - lost context).</li>
                                <li><strong>Selected:</strong> Split-pane with merchant details (left) + document viewer (right).</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-medium text-zinc-900 mb-8">Key Design Decisions</h3>
                            <div className="space-y-10">
                                <div>
                                    <h4 className="font-semibold text-zinc-900 text-xl mb-3">1. Dashboard Redesign</h4>
                                    <p className="text-base text-zinc-600 leading-relaxed">Added key metrics (Pending, Verified, Rejected) and quick filters for &quot;Action Needed&quot; merchants with search functionality.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-zinc-900 text-xl mb-3">2. Merchant Verification Modal</h4>
                                    <p className="text-base text-zinc-600 leading-relaxed">Left Panel: Merchant details (name, contact, business info). Right Panel: Document tabs with large preview. Bottom: Actions.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-zinc-900 text-xl mb-3">3. Smart Document Navigation</h4>
                                    <p className="text-base text-zinc-600 leading-relaxed">Visual tabs showing status (Approved ✓, Pending ⏱, Rejected ✗). Auto-advances to next pending document after approval.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-zinc-900 text-xl mb-3">4. Rejection Workflow Enhancement</h4>
                                    <p className="text-base text-zinc-600 leading-relaxed">Predefined rejection reasons (Blurry, Mismatch, Tampered) + custom input. Shows rejection history on re-submission.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-zinc-900 text-xl mb-3">5. Chip-based Autofill (Innovation)</h4>
                                    <p className="text-base text-zinc-600 leading-relaxed">Extracted data from Aadhaar displayed as chips. Clicking a chip auto-populates the field, reducing manual typing errors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visual Design */}
                <section id="visual-design" className="scroll-mt-24 space-y-12">
                    <h2 className="text-5xl tracking-tight text-zinc-900 primary-font leading-tight">
                        Visual Design
                    </h2>

                    <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-zinc-100 mb-10">
                        <Image
                            src="/assets/images/Project-1/BOB - Merchant Verification - Merchant Detail.png"
                            alt="Merchant Detail View"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div className="max-w-4xl space-y-10 text-zinc-700">
                        <div>
                            <h3 className="text-2xl font-medium text-zinc-900 mb-5">Accessibility Considerations</h3>
                            <ul className="space-y-3 text-base text-zinc-600 list-disc pl-6">
                                <li>High contrast for document images</li>
                                <li>Clear status indicators beyond just color</li>
                                <li>Keyboard navigation support (Tab, Enter, Esc)</li>
                                <li>Focus states on interactive elements</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium text-zinc-900 mb-5">Typography & Components</h3>
                            <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                                <p className="text-lg text-zinc-600 mb-6">
                                    <strong>Typography:</strong> Clear hierarchy (Large Bold Merchant Name &gt; Section Headers &gt; Body). Monospace for IDs and tabular data.
                                </p>
                                <p className="text-lg text-zinc-600 mb-4"><strong>Component Library:</strong></p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 bg-white shadow-sm text-zinc-600 text-sm font-medium rounded-full border border-zinc-200">Status Chips</span>
                                    <span className="px-4 py-2 bg-white shadow-sm text-zinc-600 text-sm font-medium rounded-full border border-zinc-200">Modal Overlays</span>
                                    <span className="px-4 py-2 bg-white shadow-sm text-zinc-600 text-sm font-medium rounded-full border border-zinc-200">Sortable Tables</span>
                                    <span className="px-4 py-2 bg-white shadow-sm text-zinc-600 text-sm font-medium rounded-full border border-zinc-200">Toasts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section id="key-features" className="scroll-mt-24 space-y-12">
                    <h2 className="text-5xl tracking-tight text-zinc-900 primary-font leading-tight">
                        Key Features Delivered
                    </h2>

                    <div className="grid grid-cols-1 gap-12 max-w-4xl">
                        {[
                            {
                                title: "1. Bulk Operations Support",
                                desc: "Dashboard allows filtering and batch status updates.",
                                img: "/assets/images/Project-1/Post Login - Dashboard.png"
                            },
                            {
                                title: "2. Unified Verification Interface",
                                desc: "Split-screen design eliminates context-switching between merchant details and documents.",
                                img: "/assets/images/Project-1/BOB-Merchant Verification-split.png"
                            },
                            {
                                title: "3. Document-by-Document Review",
                                desc: "Tab-based navigation through Aadhaar (Front/Back) and PAN with clear status indicators.",
                                img: "/assets/images/Project-1/BOB - Merchant Verification-Merchant Detail-Aadhar Back.png"
                            },
                            {
                                title: "4. Inline Rejection Handling",
                                desc: "Agents can reject documents with predefined reasons without leaving the verification screen.",
                                img: "/assets/images/Project-1/BOB - Merchant Verification - Merchant Detail - Aadhar Back-2.png"
                            },
                            {
                                title: "5. Validation Toast Messages",
                                desc: "Real-time feedback when actions require additional input (e.g., 'A reason is needed').",
                                img: "/assets/images/Project-1/BOB - Merchant Verification - Merchant Detail - Aadhar Back-1.png"
                            },
                            {
                                title: "6. Resubmission Tracking",
                                desc: "Visual indicator showing previous rejection reasons when merchants re-upload documents.",
                                img: "/assets/images/Project-1/BOB - Action Needed - Checker.png"
                            },
                        ].map((feature, idx) => (
                            <div key={idx} className="group hover:bg-zinc-50 p-8 rounded-2xl -mx-8 transition-colors border-b border-zinc-100 last:border-0 hover:border-transparent space-y-6">
                                <div>
                                    <h3 className="text-2xl font-medium text-zinc-900 group-hover:text-orange-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-zinc-600 mt-2 text-lg leading-relaxed">{feature.desc}</p>
                                </div>
                                <div className="w-full rounded-xl overflow-hidden shadow-sm border border-zinc-200">
                                    <Image
                                        src={feature.img}
                                        alt={feature.title}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Design Validation */}
                <section id="design-validation" className="scroll-mt-24 space-y-12">
                    <h2 className="text-5xl tracking-tight text-zinc-900 primary-font leading-tight">
                        Design Validation
                    </h2>
                    <div className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100 max-w-4xl">
                        <h3 className="text-zinc-900 font-bold text-2xl mb-6">Usability Testing (Internal)</h3>
                        <div className="mb-8 text-lg text-zinc-600 leading-relaxed">
                            <p><strong>Participants:</strong> 5 verification agents</p>
                            <p><strong>Method:</strong> Moderated task-based testing with prototype</p>
                            <p><strong>Tasks:</strong> Verify merchant, Reject Aadhaar Back (blurry), Review resubmission.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center py-8 border-t border-zinc-200">
                            <div className="flex flex-col">
                                <span className="text-5xl font-bold text-zinc-900">100%</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 mt-2">Task Completion</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-5xl font-bold text-zinc-900">4m</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 mt-2">Avg. Time (vs 10m)</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-5xl font-bold text-zinc-900">Top</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 mt-2">Feature: Side-by-side</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-zinc-200 text-lg text-zinc-700">
                            <h4 className="font-bold mb-4 text-zinc-900">Iteration Based on Feedback:</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Added rejection reason preview when reviewing resubmitted documents.</li>
                                <li>Increased document preview size.</li>
                                <li>Made &quot;Next&quot; button more prominent after document approval.</li>
                                <li>Initial confusion about chip autofill → Added tooltip.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Final Solution */}
                <section id="final-solution" className="scroll-mt-24 space-y-12">
                    <h2 className="text-5xl tracking-tight text-zinc-900 primary-font leading-tight">
                        Final Solution
                    </h2>

                    <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-zinc-100 mb-10">
                        <Image
                            src="/assets/images/Project-1/BOB - Action Needed - Checker.png"
                            alt="Checker View"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>

                    <div className="max-w-4xl">
                        <div>
                            <h3 className="text-2xl font-medium text-zinc-900 mb-6">User Flow (Simplified)</h3>
                            <div className="flex flex-wrap items-center gap-6 text-base font-medium text-zinc-600 pb-6">
                                <div className="px-6 py-3 bg-white border border-zinc-200 rounded-lg shadow-sm">Login</div>
                                <span className="text-zinc-300 text-xl">→</span>
                                <div className="px-6 py-3 bg-white border border-zinc-200 rounded-lg shadow-sm">Dashboard</div>
                                <span className="text-zinc-300 text-xl">→</span>
                                <div className="px-6 py-3 bg-orange-50 text-orange-700 border border-orange-200 rounded-lg shadow-sm">Split-View Modal</div>
                                <span className="text-zinc-300 text-xl">→</span>
                                <div className="px-6 py-3 bg-white border border-zinc-200 rounded-lg shadow-sm">Verify Docs</div>
                                <span className="text-zinc-300 text-xl">→</span>
                                <div className="px-6 py-3 bg-white border border-zinc-200 rounded-lg shadow-sm">Submit Decision</div>
                            </div>
                        </div>
                        <div className="mt-10 p-8 bg-zinc-50 border border-zinc-200 rounded-2xl">
                            <h4 className="font-semibold text-zinc-900 text-xl mb-3">Technical Handoff</h4>
                            <p className="text-lg text-zinc-600 leading-relaxed">
                                Deliverables included high-fidelity Figma prototypes with annotations, component specifications (spacing, colors, states), interactions states documentation, document status logic flowchart, and edge case scenarios.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Impact & Outcomes */}
                <section id="impact-outcomes" className="scroll-mt-24 space-y-12">
                    <h2 className="text-5xl tracking-tight text-zinc-900 primary-font leading-tight">
                        Impact & Outcomes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
                        <div className="space-y-8">
                            <h3 className="font-semibold text-zinc-900 border-b border-zinc-100 pb-4 text-2xl">Quantitative Results</h3>
                            <ul className="space-y-3">
                                <li className="block">
                                    <span className="text-4xl font-semibold text-zinc-900 block mb-2">60%</span>
                                    <span className="text-lg text-zinc-600">Reduction in verification time (8-10m → 4m)</span>
                                </li>
                                <li className="block">
                                    <span className="text-4xl font-semibold text-zinc-900 block mb-2">30-40</span>
                                    <span className="text-lg text-zinc-600">More merchants estimated per agent/day</span>
                                </li>
                                <li className="block">
                                    <span className="text-4xl font-semibold text-zinc-900 block mb-2">Reduced</span>
                                    <span className="text-lg text-zinc-600">Error rates (data pending)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <h3 className="font-semibold text-zinc-900 border-b border-zinc-100 pb-4 text-2xl">Qualitative Feedback</h3>
                            <blockquote className="text-lg text-zinc-600 italic leading-relaxed">
                                &quot;The side-by-side view is a game-changer. I don&apos;t lose track of what I&apos;m verifying.&quot;
                                <span className="block not-italic text-zinc-400 text-sm font-semibold mt-3 uppercase tracking-wide">- Verification Agent</span>
                            </blockquote>
                            <blockquote className="text-lg text-zinc-600 italic leading-relaxed">
                                &quot;The chip autofill saves so much time. No more typing Aadhaar numbers.&quot;
                                <span className="block not-italic text-zinc-400 text-sm font-semibold mt-3 uppercase tracking-wide">- Team Lead</span>
                            </blockquote>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-semibold text-zinc-900 mb-6 text-2xl">Business Value</h3>
                        <div className="flex flex-wrap gap-4">
                            {["Faster merchant onboarding", "Reduced operational costs", "Improved agent satisfaction", "Scalable solution"].map((val) => (
                                <span key={val} className="px-6 py-2 bg-green-50 text-green-700 text-base font-medium rounded-full border border-green-100">{val}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Reflection */}
                <section id="reflection-learnings" className="scroll-mt-24 space-y-12 mb-32">
                    <h2 className="text-5xl tracking-tight text-zinc-900 primary-font leading-tight">
                        Reflection & Learnings
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl text-lg leading-relaxed text-zinc-600">
                        <div>
                            <h3 className="font-semibold text-zinc-900 mb-4 text-xl">What Worked Well</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Collaborative approach (regular check-ins).</li>
                                <li>Split-pane pattern solved context-switching.</li>
                                <li>Chip autofill innovation loved by agents.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-zinc-900 mb-4 text-xl">Challenges Overcome</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Tight 15-day timeline (required rapid iteration).</li>
                                <li>Compliance constraints (meeting KYC reqs).</li>
                                <li>Balancing detail vs. simplicity.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-zinc-900 mb-4 text-xl">What I&apos;d Do Differently</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>More extensive testing (2-3 more rounds).</li>
                                <li>Add keyboard shortcuts for power users.</li>
                                <li>Explore mobile/tablet support for field agents.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-zinc-900 mb-4 text-xl">Future Enhancements</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>AI-powered verification suggestions.</li>
                                <li>Automated data extraction.</li>
                                <li>Agent performance analytics dashboard.</li>
                                <li>Resubmission notification system.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Thank You Section */}
                <section className="py-12 border-t border-zinc-100 mb-20">
                    <div className="bg-zinc-50 rounded-3xl p-12 text-center border border-zinc-100">
                        <h3 className="text-3xl font-bold text-zinc-900 mb-4 primary-font">Thank You for Reading</h3>
                        <p className="text-zinc-500 text-lg mb-2">
                            Based on our word-count algorithm, you&apos;ve invested approximately <span className="text-zinc-900 font-bold">{readingTime} minutes</span> exploring this case study.
                        </p>

                    </div>
                </section>

            </main>

            {/* Right Navigation - 30% */}
            <nav className="hidden md:flex w-full md:w-[30%] h-screen sticky top-0 flex-col justify-center border-l border-zinc-100 bg-zinc-50/50 backdrop-blur-sm pl-16">

                <ul className="space-y-3">
                    {sections.map(({ id, title }) => (
                        <li key={id}>
                            <button
                                onClick={() => scrollToSection(id)}
                                className={`text-left text-base transition-all duration-300 ease-out hover:text-orange-600 ${activeSection === id
                                    ? "text-orange-600 font-bold translate-x-3 scale-105"
                                    : "text-zinc-500 hover:translate-x-2"
                                    }`}
                            >
                                {title}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
    );
}