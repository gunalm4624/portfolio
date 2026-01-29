"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const sections = [
    { id: "project-overview", title: "Project Overview" },
    { id: "the-context", title: "The Context" },
    { id: "problem-statement", title: "Problem Statement" },
    { id: "onboarding-ux", title: "Part 1: Onboarding UX" },
    { id: "transaction-ux", title: "Part 2: Transaction UX" },
    { id: "impact-results", title: "Impact & Results" },
];

export default function UPIPaymentAppCaseStudy() {
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
                rootMargin: "0px 0px -50% 0px",
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
            const yOffset = -50;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white text-zinc-900 font-sans selection:bg-pink-100 selection:text-pink-900 max-w-7xl mx-auto">

            {/* Left Content - 70% */}
            <main id="main-content" className="w-full md:w-[70%] px-6 py-24 space-y-32">

                {/* Project Overview */}
                <section id="project-overview" className="scroll-mt-24 space-y-10">
                    <div className="w-full mb-12">
                        <Image
                            src="/assets/images/Project-2/Cover.png"
                            alt="Axis Bank UPI Onboarding Cover"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="rounded-3xl shadow-sm border border-zinc-100"
                        />
                    </div>

                    <div className="space-y-4 mb-12">
                        <h1 className="text-5xl tracking-tight text-zinc-900 primary-font">
                            White-Label UPI Payment App
                        </h1>
                        <p className="text-lg text-pink-600 font-medium tracking-wide uppercase">
                            Send Money Flow Design
                        </p>
                        <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl mt-4">
                            Designing a scalable UPI payment solution for multiple banks. Streamlined the send money experience, introduced voice search, and built India&apos;s first UPI Circle feature—reducing transaction time by 49% and increasing daily active users to 62%.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base text-zinc-600 border-t border-zinc-100 pt-8">
                        <div>
                            <p className="mb-2 text-zinc-400 uppercase tracking-widest text-xs font-semibold">Product Type</p>
                            <p className="text-lg font-medium text-zinc-900">White-Label Solution</p>
                        </div>
                        <div>
                            <p className="mb-2 text-zinc-400 uppercase tracking-widest text-xs font-semibold">My Role</p>
                            <p className="text-lg font-medium text-zinc-900">UI/UX Designer (Send Money Flow)</p>
                        </div>
                        <div>
                            <p className="mb-2 text-zinc-400 uppercase tracking-widest text-xs font-semibold">Status</p>
                            <p className="text-lg font-medium text-zinc-900">Live • UPI Circle In Dev</p>
                        </div>
                        <div>
                            <p className="mb-2 text-zinc-400 uppercase tracking-widest text-xs font-semibold">Key Metric</p>
                            <p className="text-lg font-medium text-zinc-900">23s Avg Transaction</p>
                        </div>
                    </div>
                </section>

                {/* The Context */}
                <section id="the-context" className="scroll-mt-24 space-y-12">
                    <h2 className="text-4xl tracking-tight text-zinc-900 primary-font leading-tight">
                        The Context
                    </h2>
                    <div className="prose prose-lg text-zinc-600">
                        <p>
                            India&apos;s UPI ecosystem processes billions of transactions monthly, yet users consistently complained about <strong>repetitive contact searches</strong>, <strong>unclear account selection</strong>, and <strong>manual typing errors</strong>. Banks needed a white-label solution that could be deployed quickly while maintaining high design quality.
                        </p>
                        <p>
                            The challenge: Create a payment app that works for both <strong>Axis Bank</strong> (launched) and other banking partners, serving users from metro cities to Tier-2/3 towns with varying tech literacy.
                        </p>
                        <p>
                            Additionally, we were tasked with implementing <strong>UPI Circle</strong>—NPCI&apos;s new delegated payment feature allowing family members to make payments without sharing PINs.
                        </p>
                    </div>
                </section>

                {/* Problem Statement */}
                <section id="problem-statement" className="scroll-mt-24 space-y-12">
                    <h2 className="text-4xl tracking-tight text-zinc-900 primary-font leading-tight">
                        Problem Statement
                    </h2>
                    <div className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100 text-lg leading-relaxed text-zinc-700">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-6">User Pain Points</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold">1</span>
                                <div>
                                    <strong className="text-zinc-900 block mb-1">Repetitive Contact Search</strong>
                                    &quot;I send money to the same 5 people every day. Why do I have to search for them each time?&quot; — Small business owner
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold">2</span>
                                <div>
                                    <strong className="text-zinc-900 block mb-1">Account Ambiguity</strong>
                                    &quot;I realize only at the end which bank account I&apos;m paying from. That&apos;s scary when balances differ.&quot; — Working professional
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold">3</span>
                                <div>
                                    <strong className="text-zinc-900 block mb-1">Manual Input Errors</strong>
                                    &quot;Typing UPI IDs is annoying. One wrong letter and payment fails.&quot; — Homemaker
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold">4</span>
                                <div>
                                    <strong className="text-zinc-900 block mb-1">Family Payment Needs</strong>
                                    &quot;My parents don&apos;t have smartphones but they&apos;re on my account. I wish they could pay without calling me.&quot; — Software engineer
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Part 1: Onboarding UX */}
                <section id="onboarding-ux" className="scroll-mt-24 space-y-24">
                    <h2 className="text-4xl tracking-tight text-zinc-900 primary-font leading-tight mb-8">
                        Part 1: Onboarding Experience
                    </h2>

                    {/* Decision 1: Dual SIM Detection */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Decision 01</span>
                            <h3 className="text-3xl font-bold text-zinc-900">Intelligent Dual-SIM Support</h3>
                        </div>
                        <p className="text-zinc-600 text-lg leading-relaxed max-w-3xl">
                            Instead of manual number entry, we auto-detect available SIM cards on the device. Users see their numbers with carrier logos (Jio/Airtel) and can select with one tap. This eliminated 98% of phone number input errors and reduced onboarding anxiety.
                        </p>
                        <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 p-8 md:p-12 rounded-3xl border border-zinc-200/50">
                            <div className="relative w-full max-w-xs md:max-w-sm mx-auto shadow-2xl rounded-[2.5rem] overflow-hidden border-4 border-white">
                                <Image
                                    src="/assets/images/Project-2/2.png"
                                    alt="Dual SIM Selection Screen"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Decision 2: Permission Transparency */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Decision 02</span>
                            <h3 className="text-3xl font-bold text-zinc-900">Transparent Permission Requests</h3>
                        </div>
                        <p className="text-zinc-600 text-lg leading-relaxed max-w-3xl">
                            Users fear SMS permissions due to privacy concerns. We implemented <strong>permission priming</strong>: explain <em>why</em> before asking. &quot;To verify your OTP automatically and securely fetch your bank accounts&quot; increased grant rates from 45% to 73%.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 p-6 rounded-3xl border border-zinc-200/50">
                                <div className="relative w-full max-w-[200px] mx-auto shadow-xl rounded-[2rem] overflow-hidden border-2 border-white">
                                    <Image
                                        src="/assets/images/Project-2/1.png"
                                        alt="Notification Permission"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 p-6 rounded-3xl border border-zinc-200/50">
                                <div className="relative w-full max-w-[200px] mx-auto shadow-xl rounded-[2rem] overflow-hidden border-2 border-white">
                                    <Image
                                        src="/assets/images/Project-2/3.png"
                                        alt="SMS Permission"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decision 3: Auto OTP Verification */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Decision 03</span>
                            <h3 className="text-3xl font-bold text-zinc-900">Seamless OTP Auto-Read</h3>
                        </div>
                        <p className="text-zinc-600 text-lg leading-relaxed max-w-3xl">
                            When SMS permission is granted, we auto-read and verify OTP in the background. The &quot;Verifying OTP...&quot; loading state with hourglass animation reassures users the app is working <em>for them</em>, not against them.
                        </p>
                        <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 p-8 md:p-12 rounded-3xl border border-zinc-200/50">
                            <div className="relative w-full max-w-xs md:max-w-sm mx-auto shadow-2xl rounded-[2.5rem] overflow-hidden border-4 border-white">
                                <Image
                                    src="/assets/images/Project-2/4.png"
                                    alt="OTP Verification Loading State"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Decision 4: Zero-Search Bank Linking */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Decision 04</span>
                            <h3 className="text-3xl font-bold text-zinc-900">Auto-Fetched Bank Accounts</h3>
                        </div>
                        <p className="text-zinc-600 text-lg leading-relaxed max-w-3xl">
                            We query UPI&apos;s central mapper to instantly display linked bank accounts. Users see their bank logo, account type, and masked number. &quot;Link Account&quot; is primary; &quot;Add New Account&quot; is secondary—guiding 90% to complete in one tap.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 p-6 rounded-3xl border border-zinc-200/50">
                                <div className="relative w-full max-w-[200px] mx-auto shadow-xl rounded-[2rem] overflow-hidden border-2 border-white">
                                    <Image
                                        src="/assets/images/Project-2/5.png"
                                        alt="Bank Account Selection"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 p-6 rounded-3xl border border-zinc-200/50">
                                <div className="relative w-full max-w-[200px] mx-auto shadow-xl rounded-[2rem] overflow-hidden border-2 border-white">
                                    <Image
                                        src="/assets/images/Project-2/6.png"
                                        alt="UPI PIN Setup"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Part 2: Transaction UX */}
                <section id="transaction-ux" className="scroll-mt-24 space-y-24">
                    <h2 className="text-4xl tracking-tight text-zinc-900 primary-font leading-tight mb-8">
                        Part 2: Send Money Flow
                    </h2>

                    {/* Decision 5: Quick Send Widget */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Decision 05</span>
                            <h3 className="text-3xl font-bold text-zinc-900">The &quot;Quick Send&quot; Widget</h3>
                        </div>
                        <p className="text-zinc-600 text-lg leading-relaxed max-w-3xl">
                            Users send money to the same people daily. We created a &quot;Quick Send&quot; section on the home screen showing the 5 most frequent contacts with profile photos. This feature alone reduced time-to-transaction by 8 seconds and now handles 40% of all transactions.
                        </p>
                        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 md:p-12 rounded-3xl border border-pink-100/50">
                            <div className="relative w-full max-w-xs md:max-w-sm mx-auto shadow-2xl rounded-[2.5rem] overflow-hidden border-4 border-white">
                                <Image
                                    src="/assets/images/Project-2/7.png"
                                    alt="Home Screen with Quick Send"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Decision 6: Voice Search */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Decision 06</span>
                            <h3 className="text-3xl font-bold text-zinc-900">Voice-Powered Search</h3>
                        </div>
                        <p className="text-zinc-600 text-lg leading-relaxed max-w-3xl">
                            Typing UPI IDs causes errors. For accessibility and convenience (especially popular with 40+ users), we added prominent voice search. Users can say &quot;gunalm@okaxis&quot; instead of typing—eliminating spelling mistakes and enabling hands-free operation.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 p-6 rounded-3xl border border-zinc-200/50">
                                <div className="relative w-full max-w-[200px] mx-auto shadow-xl rounded-[2rem] overflow-hidden border-2 border-white">
                                    <Image
                                        src="/assets/images/Project-2/8.png"
                                        alt="Send Money Search Screen"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 p-6 rounded-3xl border border-zinc-200/50">
                                <div className="relative w-full max-w-[200px] mx-auto shadow-xl rounded-[2rem] overflow-hidden border-2 border-white">
                                    <Image
                                        src="/assets/images/Project-2/9.png"
                                        alt="Search Results with Voice Input"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decision 7: Contextual Account Display */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Decision 07</span>
                            <h3 className="text-3xl font-bold text-zinc-900">Always-Visible Source Account</h3>
                        </div>
                        <p className="text-zinc-600 text-lg leading-relaxed max-w-3xl">
                            The #1 complaint: &quot;I didn&apos;t know which account I was paying from!&quot; We placed &quot;Paying From&quot; card directly below the amount input, showing bank logo, name, and last 4 digits. &quot;Check Balance&quot; button is right there. This transparency reduced &quot;wrong account&quot; support calls by 40%.
                        </p>
                        <div className="bg-gradient-to-br from-zinc-50 to-zinc-100/50 p-8 md:p-12 rounded-3xl border border-zinc-200/50">
                            <div className="relative w-full max-w-xs md:max-w-sm mx-auto shadow-2xl rounded-[2.5rem] overflow-hidden border-4 border-white">
                                <Image
                                    src="/assets/images/Project-2/10.png"
                                    alt="Amount Entry with Account Display"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Decision 8: Gamified Success */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Decision 08</span>
                            <h3 className="text-3xl font-bold text-zinc-900">Celebrate Every Transaction</h3>
                        </div>
                        <p className="text-zinc-600 text-lg leading-relaxed max-w-3xl">
                            Instead of a boring checkmark, we added &quot;You earned 50 SuperCoins!&quot; with scratch card gamification. Users get transaction details, download/share receipt options, and a clear &quot;Take To Home&quot; button. 85% return to home within 3 seconds—quick and satisfying.
                        </p>
                        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 md:p-12 rounded-3xl border border-pink-100/50">
                            <div className="relative w-full max-w-xs md:max-w-sm mx-auto shadow-2xl rounded-[2.5rem] overflow-hidden border-4 border-white">
                                <Image
                                    src="/assets/images/Project-2/11.png"
                                    alt="Payment Success Screen"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Impact & Results */}
                <section id="impact-results" className="scroll-mt-24 space-y-12">
                    <h2 className="text-4xl tracking-tight text-zinc-900 primary-font leading-tight">
                        Impact & Results
                    </h2>
                    <div className="space-y-10 text-lg text-zinc-600 leading-relaxed">
                        <p>
                            The white-label UPI app launched with Axis Bank and demonstrated measurable improvements across onboarding, engagement, and transaction efficiency. The design system enables rapid deployment for additional banking partners.
                        </p>

                        <div className="bg-pink-50 border border-pink-100 rounded-3xl p-8 my-8">
                            <h3 className="text-2xl font-bold text-zinc-900 mb-4">User Testimonials</h3>
                            <div className="space-y-4 text-base">
                                <p className="italic text-zinc-700">&quot;This is the easiest UPI app I&apos;ve used. Everything is just... there. No searching through menus.&quot;</p>
                                <p className="text-sm text-zinc-500">— 34-year-old entrepreneur</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                                <div className="text-4xl font-bold text-pink-600 mb-2">49%</div>
                                <div className="text-zinc-500 text-sm uppercase tracking-wide font-bold">Faster Transactions</div>
                                <p className="text-zinc-600 text-xs mt-2">From 45 seconds to 23 seconds average</p>
                            </div>
                            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                                <div className="text-4xl font-bold text-pink-600 mb-2">62%</div>
                                <div className="text-zinc-500 text-sm uppercase tracking-wide font-bold">Daily Active Users</div>
                                <p className="text-zinc-600 text-xs mt-2">Above 50% category average</p>
                            </div>
                            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                                <div className="text-4xl font-bold text-pink-600 mb-2">73%</div>
                                <div className="text-zinc-500 text-sm uppercase tracking-wide font-bold">Permission Grant Rate</div>
                                <p className="text-zinc-600 text-xs mt-2">Up from 45% industry average</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                                <div className="text-4xl font-bold text-pink-600 mb-2">40%</div>
                                <div className="text-zinc-500 text-sm uppercase tracking-wide font-bold">Quick Send Adoption</div>
                                <p className="text-zinc-600 text-xs mt-2">Transactions initiated from home widget</p>
                            </div>
                            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                                <div className="text-4xl font-bold text-pink-600 mb-2">82/100</div>
                                <div className="text-zinc-500 text-sm uppercase tracking-wide font-bold">SUS Score (Excellent)</div>
                                <p className="text-zinc-600 text-xs mt-2">User satisfaction rating</p>
                            </div>
                        </div>

                        <div className="bg-zinc-50 rounded-3xl p-10 border border-zinc-100 mt-12">
                            <h3 className="text-2xl font-bold text-zinc-900 mb-6">Business Impact</h3>
                            <ul className="space-y-4 text-zinc-700">
                                <li className="flex gap-3">
                                    <span className="text-pink-600">→</span>
                                    <span><strong>43% increase</strong> in UPI transaction volume within 3 months (Axis Bank deployment)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-pink-600">→</span>
                                    <span><strong>32% reduction</strong> in support calls due to clearer UI</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-pink-600">→</span>
                                    <span><strong>2-week deployment</strong> time per new bank partner</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-pink-600">→</span>
                                    <span><strong>80% code reuse</strong> across white-label implementations</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Thank You Section */}
                <section className="py-12 border-t border-zinc-100 mb-20">
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-12 text-center border border-pink-100">
                        <h3 className="text-3xl font-bold text-zinc-900 mb-4 primary-font">Thank You for Reading</h3>
                        <p className="text-zinc-600 text-lg mb-2">
                            Based on our word-count algorithm, you&apos;ve invested approximately <span className="text-pink-600 font-bold">{readingTime} minutes</span> exploring this case study.
                        </p>
                        <p className="text-zinc-500 text-sm mt-4">
                            Want to discuss this project? Let&apos;s connect!
                        </p>
                    </div>
                </section>

            </main>

            {/* Right Navigation - 30% */}
            <nav className="hidden md:flex w-full md:w-[30%] h-screen sticky top-0 flex-col justify-center border-l border-zinc-100 bg-zinc-50/50 backdrop-blur-sm pl-16">
                <ul className="space-y-4">
                    {sections.map(({ id, title }) => (
                        <li key={id}>
                            <button
                                onClick={() => scrollToSection(id)}
                                className={`text-left text-base transition-all duration-300 ease-out hover:text-pink-600 ${activeSection === id
                                    ? "text-pink-600 font-bold translate-x-3 scale-105"
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