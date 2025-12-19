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
      // robust scroll-to-top sequence
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

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <div className="fixed left-4 top-4 lg:left-8 lg:top-8 z-50">
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black text-white border border-transparent text-sm hover:bg-gray-900 shadow-sm cursor-pointer"
          >
            ← Back
          </button>
        </div>

        {/* NDA Notice */}
        <div className="bg-gray-50 border-l-4 border-gray-900 px-6 py-4 mb-12">
          <p className="text-sm text-gray-600 italic">
            Since this project is under NDA, only approved screens and limited information are displayed here.
          </p>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            PNB mPay – UPI Integration
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Designing a seamless, secure UPI experience within Punjab National Bank's mPay application, covering onboarding flows and core transaction experiences.
          </p>
        </div>
        </div>


        <div
          className={`w-full mb-16 px-4  overflow-hidden transform transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}
        >
          <Image src="/Images/PNB-Project.png" alt="PNB Project" width={1200} height={700} className="w-full h-auto object-cover rounded-lg block" />
        </div>

        <div className="max-w-4xl mx-auto px-6">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Overview</h2>
          <p className="text-gray-700 mb-4">
            Punjab National Bank requested the integration of UPI functionality within their existing mPay mobile application. As the lead designer on this project, I was responsible for designing the complete user experience from initial onboarding through transaction flows, ensuring security, simplicity, and compliance with banking standards.
          </p>
        </section>

        {/* Project Info Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Role</p>
              <p className="text-gray-900 font-medium">Product Designer</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Duration</p>
              <p className="text-gray-900 font-medium">SEP 2025 - Present</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Platform</p>
              <p className="text-gray-900 font-medium">Mobile (iOS/Android)</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Industry</p>
              <p className="text-gray-900 font-medium">Banking & Finance</p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">The Challenge</h2>
          <p className="text-gray-700 mb-4">
            PNB's existing mPay application lacked integrated UPI functionality, forcing users to switch between multiple apps for different payment needs. The bank needed a solution that would keep users within their ecosystem while providing the convenience and speed that modern UPI transactions demand.
          </p>
          <p className="text-gray-700">
            The challenge was to design an experience that balanced security requirements with user-friendly interactions, considering that many PNB customers might be first-time UPI users.
          </p>
        </section>

        {/* Design Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Design Approach</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research & Analysis</h3>
              <p className="text-gray-700">
                I analyzed existing UPI applications and PNB's current user base to understand pain points and expectations. This included studying NPCI guidelines, competitor apps, and banking security protocols to ensure compliance and best practices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User Flow Mapping</h3>
              <p className="text-gray-700">
                Created comprehensive user flows covering UPI registration, PIN setup, contact linking, and various transaction scenarios including peer-to-peer transfers, QR payments, and bill payments. Special attention was given to error states and security verification steps.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design System Integration</h3>
              <p className="text-gray-700">
                Integrated the new UPI features seamlessly with PNB's existing design language while introducing modern UI patterns for improved usability. Maintained brand consistency through color schemes, typography, and iconography aligned with PNB's identity.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Features Designed</h2>
          
          <div className="space-y-4">
            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Simplified Onboarding</h4>
              <p className="text-gray-700">Step-by-step UPI registration with clear instructions and progressive disclosure to avoid overwhelming new users.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Unified Dashboard</h4>
              <p className="text-gray-700">Central hub for all payment actions including UPI transfers, mobile recharges, bill payments, and quick send to frequent contacts.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Quick Transaction Flow</h4>
              <p className="text-gray-700">Streamlined payment process with minimal steps from intent to confirmation, while maintaining necessary security checks.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Smart Account Selection</h4>
              <p className="text-gray-700">Intelligent bank account selection with balance visibility and quick switching between linked accounts.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Transaction Confirmation</h4>
              <p className="text-gray-700">Clear confirmation screens with transaction details, status updates, and easy access to payment history.</p>
            </div>
          </div>
        </section>

        {/* Design Screens */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Selected Screens</h2>
          
          {/* Dashboard Screen */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dashboard Experience</h3>
            <p className="text-gray-700 mb-6">
              The home screen provides quick access to all payment functions with a personalized savings goal tracker, frequent contacts for instant transfers, and utility payment shortcuts. The design prioritizes commonly used actions while maintaining easy discoverability of additional features.
            </p>
            <div className="bg-gray-50 rounded-lg p-8 flex justify-center">
              <Image src="/Images/PNB-Dashboard.png" alt="Dashboard Screen" width={520} height={360} className="max-w-xs rounded-xl" />
            </div>
          </div>

          {/* Payment Screen */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Payment Flow</h3>
            <p className="text-gray-700 mb-6">
              The payment screen simplifies UPI transactions with clear recipient verification, prominent amount display, and intuitive account selection. The numeric keypad is optimized for quick entry, while the "Confirm & Pay" button provides a final checkpoint before transaction execution.
            </p>
            <div className="bg-gray-50 rounded-lg p-8 flex justify-center">
              <Image src="/Images/PNB-Pay.png" alt="Payment Screen" width={520} height={360} className="max-w-xs rounded-xl" />
            </div>
          </div>
        </section>

        {/* Design Decisions */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Design Decisions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Color Psychology</h3>
              <p className="text-gray-700">
                Maintained PNB's signature maroon with strategic use of pink gradients to create a modern, approachable feel while preserving brand recognition. The color palette balances professionalism with user-friendliness, making banking transactions feel less intimidating.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Hierarchy</h3>
              <p className="text-gray-700">
                Implemented clear visual hierarchy using card-based layouts, strategic spacing, and typography scales. Primary actions are emphasized through size and color, while secondary actions remain accessible but unobtrusive.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Trust</h3>
              <p className="text-gray-700">
                Incorporated trust indicators including verification badges, secure transaction confirmations, and transparent balance displays. Every security step is communicated clearly to build user confidence without creating friction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-700">
                Designed with accessibility in mind, ensuring sufficient color contrast, readable font sizes, and touch targets that meet minimum size requirements for comfortable interaction across all age groups.
              </p>
            </div>
          </div>
        </section>

        {/* Impact & Results */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Impact & Outcomes</h2>
          
          <p className="text-gray-700 mb-4">
            The UPI integration project successfully created a cohesive digital payment experience within PNB's ecosystem. The design facilitates both first-time UPI users and experienced digital banking customers through intuitive flows and clear visual communication.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-8 mt-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-xl font-bold text-gray-900 mb-2">Seamless</p>
                <p className="text-gray-600">Onboarding experience for new UPI users</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 mb-2">Unified</p>
                <p className="text-gray-600">Payment hub for all transaction types</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 mb-2">Secure</p>
                <p className="text-gray-600">Compliance with banking standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Learnings</h2>
          
          <p className="text-gray-700 mb-4">
            This project reinforced the importance of balancing security requirements with user experience in financial applications. Working within banking regulations while creating an intuitive interface required constant collaboration with stakeholders and iterative refinement of design solutions.
          </p>
          
          <p className="text-gray-700">
            I learned to design for diverse user groups with varying levels of digital literacy, ensuring that the interface remains approachable for first-time users while providing efficiency for experienced ones. The experience deepened my understanding of designing within regulatory frameworks and the unique challenges of fintech UX.
          </p>
        </section>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 my-16">
          <p className="text-sm text-gray-500 text-center">
            This case study represents approved work from an ongoing office project under NDA with Punjab National Bank.
          </p>
        </div>

      </div>
    </main>
  );
}