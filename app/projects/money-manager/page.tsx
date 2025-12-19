"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;
    const prev = 'scrollRestoration' in window.history ? window.history.scrollRestoration : undefined;
    try {
      if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    } catch (e) {}
    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));
    const t = setTimeout(() => window.scrollTo(0, 0), 120);
    return () => {
      clearTimeout(t);
      try {
        if (typeof prev !== 'undefined' && 'scrollRestoration' in window.history) window.history.scrollRestoration = prev;
      } catch (e) {}
    };
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        <div className="fixed left-4 top-4 lg:left-8 lg:top-8 z-50">
          <button
            onClick={handleBack}
            aria-label="Go back"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black text-white border border-transparent text-sm hover:bg-gray-900 shadow-sm cursor-pointer"
          >
            ← Back
          </button>
        </div>
        
        {/* Project Badge */}
        <div className="bg-[#F1FCFF] border-l-4 border-[#B7EDFE] px-6 py-4 mb-12">
          <p className="text-sm text-[#00BFFF] font-medium">
            Personal Project • In Development • Launch Q1 2026
          </p>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            Finspace - Money Tracker
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A hybrid mobile application designed to help users track expenses, manage subscriptions, and gain clarity over their financial habits through intuitive design and smart categorization.
          </p>
        </div>
        </div>
        
        <div
          className={`w-full mb-16 px-4 overflow-hidden transform transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}
        >
          <Image src="/Images/Money-Manager-Project.png" alt="Finspace App Overview" width={1200} height={700} className="w-full h-auto object-cover rounded-lg block" />
        </div>

        <div className="max-w-4xl mx-auto px-6">

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Overview</h2>
          <p className="text-gray-700 mb-4">
            Finspace is a personal finance management app built from the ground up to address the common struggles people face with money tracking. As both designer and developer, I'm creating this hybrid application using Flutter, combining my design expertise with hands-on development skills through vibe coding techniques.
          </p>
          <p className="text-gray-700">
            The app transforms expense tracking from a tedious chore into an intuitive, delightful experience, helping users understand their spending patterns and take control of their financial health.
          </p>
        </section>

        {/* Project Info Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Role</p>
              <p className="text-gray-900 font-medium">Designer & Developer</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Timeline</p>
              <p className="text-gray-900 font-medium">In Progress</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Platform</p>
              <p className="text-gray-900 font-medium">Android • iOS</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Technology</p>
              <p className="text-gray-900 font-medium">Flutter, Dart</p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">The Challenge</h2>
          <p className="text-gray-700 mb-4">
            Most expense tracking apps fall into two extremes: they're either too complex with overwhelming features that users never touch, or too simplistic to provide meaningful insights. People struggle to maintain consistent tracking habits, lose sight of where their money actually goes, and find it difficult to manage multiple subscriptions across different platforms.
          </p>
          <p className="text-gray-700">
            The challenge was to create an app that makes expense tracking feel effortless, provides clear visibility into spending patterns, and offers personalized insights without overwhelming users with unnecessary complexity. The goal is to help people develop healthy financial habits through thoughtful design rather than rigid rules.
          </p>
        </section>

        {/* Design Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Design Approach</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User Research & Problem Validation</h3>
              <p className="text-gray-700">
                Started with personal pain points and validated them through conversations with friends, family, and online communities. Identified key struggles: inconsistent tracking, unclear spending visibility, subscription management chaos, and lack of actionable insights tailored to individual needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Architecture</h3>
              <p className="text-gray-700">
                Structured the app around speed and clarity. Designed the flow to minimize friction: adding an expense should take 3 seconds, not 30. Created a hierarchy that prioritizes quick entry at the top level, with deeper analytics and insights accessible but never intrusive.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalization Framework</h3>
              <p className="text-gray-700">
                Implemented an onboarding experience that identifies user struggles (overspending, tracking difficulty, subscription overload) to tailor the app experience. This allows the app to surface relevant features and insights specific to each user's financial challenges.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Design System</h3>
              <p className="text-gray-700">
                Developed a calm, trustworthy design language using soft blues and clean typography. Created a system that feels friendly and approachable rather than corporate, making financial management less intimidating. Implemented subtle animations and transitions to make interactions feel polished and responsive.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Features Designed</h2>
          
          <div className="space-y-4">
            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Lightning-Fast Entry</h4>
              <p className="text-gray-700">Custom numpad interface with smart defaults and one-tap categorization. Add expenses in seconds without navigating through multiple screens or complex forms.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Dual Transaction Types</h4>
              <p className="text-gray-700">Seamlessly switch between expense and income tracking with context-aware categories (Food, Personal, Cash for expenses; Salary, Cash for income) that adapt to the transaction type.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Date Navigation</h4>
              <p className="text-gray-700">Intuitive date picker that lets users review past transactions or pre-log future expenses. Navigate through days effortlessly to maintain accurate financial records.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Financial Dashboard</h4>
              <p className="text-gray-700">Clean overview showing total available balance, income, and expenses at a glance. Daily transaction list with smart categorization icons for quick scanning of spending patterns.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Multiple Input Methods</h4>
              <p className="text-gray-700">Choose how to add transactions: manual entry, receipt scanning, bank statement upload, or automatic Gmail sync for maximum flexibility and minimal manual work.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Personalized Insights</h4>
              <p className="text-gray-700">Onboarding questionnaire identifies user struggles (overspending, tracking difficulty, subscriptions) to tailor insights and recommendations specific to individual financial challenges.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Optional Context Notes</h4>
              <p className="text-gray-700">Add short notes to transactions when needed for context, without making it mandatory. Keeps the entry process quick while allowing detailed tracking when it matters.</p>
            </div>
          </div>
        </section>

        {/* Design Screens */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Selected Screens</h2>
          
          {/* Expense Entry Screen */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expense Entry Interface</h3>
            <p className="text-gray-700 mb-6">
              The expense entry screen is designed for speed and simplicity. The large currency display provides immediate feedback as users type. Date navigation sits prominently at the top for easy access. Smart category buttons (Cash, For Food, Personal) enable one-tap categorization. The custom numpad eliminates the need to switch keyboards, and the optional note field keeps the interface clean while allowing detailed tracking when needed. Every element is positioned for thumb-friendly mobile interaction.
            </p>
            <div className="bg-gray-50 rounded-lg p-8 mt-12">
              <Image src="/Images/Finspace-1.png" alt="Expense Entry Screen" width={400} height={720} className="max-w-xs rounded-xl mx-auto" />
            </div>
          </div>

          {/* Onboarding Screen */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Multiple Entry Options</h3>
            <p className="text-gray-700 mb-6">
              Users can choose their preferred method for adding financial data. Manual entry offers complete control, receipt scanning uses OCR technology, statement upload handles bulk imports, and Gmail sync automates the entire process. This flexibility ensures Finspace adapts to different user preferences and tracking styles, from hands-on manual entry to fully automated tracking.
            </p>
            <div className="bg-gray-50 rounded-lg p-8">
              <Image src="/Images/Finspace-5.png" alt="Entry Options Screen" width={400} height={720} className="max-w-xs rounded-xl mx-auto" />
            </div>
          </div>

          {/* Dashboard Screen */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Financial Overview Dashboard</h3>
            <p className="text-gray-700 mb-6">
              The dashboard provides immediate clarity on financial health. The prominent balance card shows available funds with total income and expenses in a scannable format. Today's expenses appear as individual cards with category icons, amounts, and descriptions, making it easy to review daily spending. The bottom navigation keeps core functions accessible: home, analytics, settings, and quick add button for instant entry from anywhere in the app.
            </p>
            <div className="bg-gray-50 rounded-lg p-8">
              <Image src="/Images/Finspace-3.png" alt="Entry Options Screen" width={400} height={720} className="max-w-xs rounded-xl mx-auto" />
            </div>
          </div>

          {/* Personalization Screen */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personalized Onboarding</h3>
            <p className="text-gray-700 mb-6">
              During onboarding, users select their financial struggles (overspending, tracking difficulty, subscription management, credit card usage, budget challenges, savings discipline, expense control). This information tailors the app experience to surface relevant features and insights. The approach makes users feel understood and ensures they see value immediately rather than discovering features through trial and error.
            </p>
            <div className="bg-gray-50 rounded-lg p-8">
              <Image src="/Images/Finspace-4.png" alt="Entry Options Screen" width={400} height={720} className="max-w-xs rounded-xl mx-auto" />
            </div>
          </div>
        </section>

        {/* Design Decisions */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Design Decisions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Numpad Interface</h3>
              <p className="text-gray-700">
                Implemented a dedicated numpad directly in the entry screen rather than relying on system keyboards. This eliminates context switching, keeps users focused on the task, and ensures consistent experience across devices. The plus and decimal buttons are positioned for natural thumb reach on mobile devices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optional vs Required Fields</h3>
              <p className="text-gray-700">
                Made the note field optional with placeholder text "Optional Short Note" to signal it's not mandatory. This design choice prioritizes speed for quick entries while allowing detailed tracking when context matters. The category buttons provide sufficient organization for most transactions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Hierarchy</h3>
              <p className="text-gray-700">
                Used size, weight, and position to guide attention: the currency amount is largest and central, date navigation is prominent but secondary, categories are accessible but don't dominate, and the save button stands out as the primary action. This hierarchy makes the interface scannable in under a second.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Context-Aware Categories</h3>
              <p className="text-gray-700">
                Category buttons adapt based on transaction type: expense mode shows Food, Personal, Cash while income mode displays Salary, Cash. This reduces clutter and cognitive load by showing only relevant options, making the interface feel smarter and more responsive to user intent.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Color Psychology</h3>
              <p className="text-gray-700">
                Chose soft blues and whites to create a calm, trustworthy environment. Finance apps can feel stressful, so the color palette deliberately avoids aggressive reds or anxiety-inducing tones. The design feels approachable and friendly, reducing psychological barriers to regular use.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Progressive Disclosure</h3>
              <p className="text-gray-700">
                The app reveals complexity gradually. New users see essential features first, with advanced options like budget goals and spending predictions planned for post-launch updates. This approach prevents overwhelming users while maintaining growth potential for power users.
              </p>
            </div>
          </div>
        </section>

        {/* Development Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Development Journey</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">From Design to Code</h3>
              <p className="text-gray-700">
                As both designer and developer, I'm using vibe coding techniques in Flutter to rapidly prototype and iterate. This approach allows me to validate design decisions quickly by building functional prototypes rather than static mockups, catching usability issues earlier in the process.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design System Implementation</h3>
              <p className="text-gray-700">
                Built a comprehensive design system with reusable Flutter components, ensuring consistency across screens. Defined color tokens, typography scales, spacing systems, and component patterns that maintain visual coherence while speeding up development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Platform Considerations</h3>
              <p className="text-gray-700">
                Flutter enables building for both Android and iOS simultaneously, but requires attention to platform-specific patterns. Implementing adaptive design elements that respect iOS and Android conventions while maintaining Finspace's unique identity and interaction patterns.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing & Refinement</h3>
              <p className="text-gray-700">
                Currently in testing phase with close friends and family, gathering feedback on usability, performance, and feature priorities. Iterating on the core expense tracking flow to ensure it feels effortless before adding more complex features like budget goals and analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Launch Plan */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Launch Timeline</h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                    <Image src="/Images/Android_icon.svg" className='w-[28px]' alt="Android icon" width={28} height={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Android Launch</h3>
                    <p className="text-[#00BFFF] font-semibold">January 1, 2026</p>
                  </div>
                </div>
                <p className="text-gray-600">Initial release on Google Play Store with core expense tracking, income management, and basic analytics features.</p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                    <Image src="/Images/ios_icon.svg" className='w-[28px]' alt="iOS icon" width={28} height={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">iOS Launch</h3>
                    <p className="text-[#00BFFF] font-semibold">March 2026</p>
                  </div>
                </div>
                <p className="text-gray-600">App Store release following Android feedback integration and iOS-specific optimizations and testing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Goals */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Goals & Expected Impact</h2>
          
          <p className="text-gray-700 mb-4">
            Finspace aims to make expense tracking a habit rather than a chore. By removing friction from data entry and providing clear visibility into spending patterns, the app helps users develop financial awareness naturally. The personalization framework ensures each user sees insights relevant to their specific challenges.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-8 mt-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-xl font-bold text-gray-900 mb-2">3-Second Entry</p>
                <p className="text-gray-600">Lightning-fast expense logging that fits into daily life</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 mb-2">Clear Visibility</p>
                <p className="text-gray-600">Instant understanding of spending patterns and habits</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 mb-2">Personalized Insights</p>
                <p className="text-gray-600">Tailored recommendations based on individual struggles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Learnings</h2>
          
          <p className="text-gray-700 mb-4">
            Building Finspace as both designer and developer has been transformative. The ability to rapidly prototype in code rather than static mockups allows for much faster iteration and earlier detection of usability issues. When you can actually interact with a feature, design flaws become immediately apparent.
          </p>
          
          <p className="text-gray-700 mb-4">
            I've learned that speed is a feature, not just a nice-to-have. Every second of friction in the entry process compounds over time, ultimately determining whether users maintain the habit or abandon the app. This insight drove decisions like the custom numpad, one-tap categories, and optional notes field.
          </p>
          
          <p className="text-gray-700 mb-4">
            The personalization approach taught me that understanding user struggles upfront allows for much more relevant feature development. Rather than building everything for everyone, focusing on specific pain points creates a more valuable experience for each user segment.
          </p>
          
          <p className="text-gray-700">
            Most importantly, this project reinforced that the best products solve real problems you've personally experienced. Building from genuine need rather than market research creates authentic solutions that resonate with users facing similar challenges.
          </p>
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">What's Next?</h2>
          
          <p className="text-gray-700 mb-4">
            Leading up to the January 2026 Android launch, I'm focused on polishing the core expense tracking experience, optimizing performance, and ensuring the app feels stable and reliable. Post-launch priorities include:
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-[#00BFFF] font-bold mt-1">→</span>
              <p className="text-gray-700">Gathering user feedback to prioritize feature development based on real needs</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#00BFFF] font-bold mt-1">→</span>
              <p className="text-gray-700">Adding subscription tracking and management features</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#00BFFF] font-bold mt-1">→</span>
              <p className="text-gray-700">Implementing budget goals and spending predictions</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#00BFFF] font-bold mt-1">→</span>
              <p className="text-gray-700">Building advanced analytics and insights engine</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#00BFFF] font-bold mt-1">→</span>
              <p className="text-gray-700">Exploring collaborative finance management for couples and families</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 my-16">
          <p className="text-sm text-gray-500 text-center">
            Finspace is a personal project currently in development. Follow the journey and get notified when it launches.
          </p>
        </div>

      </div>
    </main>
  );
}