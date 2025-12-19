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
        
        {/* NDA Notice */}
        <div className="bg-gray-50 border-l-4 border-gray-900 px-6 py-4 mb-12">
          <p className="text-sm text-gray-600 italic">
            Since this project is under NDA, only approved screens and limited information are displayed here.
          </p>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            SBI Merchant Verification Platform
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Designing an efficient merchant onboarding and verification dashboard for State Bank of India, streamlining the verification process for agent operations and merchant management.
          </p>
        </div>
        </div>
        <div
          className={`w-full mb-16 px-4  overflow-hidden transform transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}
        >
          <Image src="/Images/SBI-Merchant-Portal.png" alt="SBI Merchant Portal" width={1200} height={700} className="w-full h-auto object-cover rounded-lg block" />
        </div>

        <div className="max-w-4xl mx-auto px-6">

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Overview</h2>
          <p className="text-gray-700 mb-4">
            State Bank of India needed a comprehensive platform to manage merchant onboarding and document verification processes. As the UI/UX designer on this project, I designed the dashboard interface and complete verification flow, enabling agents to efficiently review merchant applications, verify documents, and manage the approval process.
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
              <p className="text-gray-900 font-medium">AUG 2024 - NOV 2024</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Platform</p>
              <p className="text-gray-900 font-medium">Web Dashboard</p>
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
            SBI's merchant onboarding process required agents to manually review hundreds of merchant applications and verify multiple documents including Aadhaar cards, PAN cards, and business registrations. The existing workflow was fragmented, time-consuming, and lacked proper tracking mechanisms, leading to delays and inefficiencies in merchant approvals.
          </p>
          <p className="text-gray-700">
            The challenge was to create a centralized platform that would streamline the entire verification process, provide real-time insights into merchant operations, and enable agents to make quick, informed decisions while maintaining security and compliance standards.
          </p>
        </section>

        {/* Design Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Design Approach</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User Research & Agent Interviews</h3>
              <p className="text-gray-700">
                Conducted interviews with SBI agents to understand their daily workflow, pain points in the existing verification process, and common bottlenecks. Identified the need for quick access to pending verifications, bulk actions, and clear visibility of merchant status at a glance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Architecture</h3>
              <p className="text-gray-700">
                Organized the dashboard to prioritize actionable items while providing comprehensive analytics. Created a clear hierarchy that separates overview metrics, transaction insights, pending actions, and merchant listings. Ensured critical actions were always within two clicks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verification Flow Design</h3>
              <p className="text-gray-700">
                Designed a comprehensive verification interface that displays all merchant details and uploaded documents in a single view. Implemented side-by-side document viewing, inline approval/rejection actions, and a progressive verification system that guides agents through each document systematically.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Design System</h3>
              <p className="text-gray-700">
                Developed a clean, professional design system using SBI's brand colors. Created distinct color-coded status indicators for quick visual scanning, implemented card-based layouts for better content organization, and designed clear CTAs that guide agents through verification workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Features Designed</h2>
          
          <div className="space-y-4">
            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Analytics Dashboard</h4>
              <p className="text-gray-700">Real-time metrics showing merchants onboarded, pending verifications, successfully verified merchants, and rejected documents with trend indicators and percentage changes.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Transaction Insights</h4>
              <p className="text-gray-700">Visual representation of merchant transaction volumes with monthly breakdown, helping agents identify high-value merchants and track business growth patterns.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Merchant Tickets Widget</h4>
              <p className="text-gray-700">Quick access panel showing active support tickets with merchant names, issue descriptions, and direct navigation to resolution, improving response times.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Advanced Filtering System</h4>
              <p className="text-gray-700">Comprehensive filtering by status, date, location, store type, and more, with search functionality enabling agents to quickly locate specific merchants.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Document Verification Interface</h4>
              <p className="text-gray-700">Split-screen layout displaying merchant details alongside uploaded documents (Aadhaar, PAN) with individual approve/reject actions and batch processing capabilities.</p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6 py-2">
              <h4 className="font-semibold text-gray-900 mb-1">Status Tracking System</h4>
              <p className="text-gray-700">Color-coded status indicators (pending, verified, rejected) with uploader details, timestamps, and agent information for complete audit trails.</p>
            </div>
          </div>
        </section>

        {/* Design Screens */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Selected Screens</h2>
          
          {/* Dashboard Screen */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
            <p className="text-gray-700 mb-6">
              The main dashboard provides agents with a comprehensive overview of merchant operations. Key metrics are displayed prominently with visual indicators showing trends and changes. The transaction graph helps identify patterns, while the merchant tickets widget enables quick issue resolution. The merchant table with advanced filtering allows agents to efficiently manage pending verifications and track merchant statuses.
            </p>
            <div className="bg-gray-50 rounded-lg p-8">
              <Image src="/Images/Post Login - Dashboard.png" alt="Dashboard Screen" width={1100} height={700} className="w-full rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Verification Screen */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Merchant Verification Interface</h3>
            <p className="text-gray-700 mb-6">
              The verification screen consolidates all merchant information and documents in a single view. The left panel displays complete merchant details including business information, contact details, and verification status. The right side presents uploaded documents (Aadhaar front/back, PAN front/back) with clear status indicators. Agents can review documents individually with approve/reject actions, or process the entire merchant with bulk actions. The interface includes uploader details and timestamps for complete transparency and accountability.
            </p>
            <div className="bg-gray-50 rounded-lg p-8">
              <Image src="/Images/MerchantQC.png" alt="Verification Screen" width={1100} height={700} className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Design Decisions */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Design Decisions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Visualization</h3>
              <p className="text-gray-700">
                Implemented color-coded metric cards with percentage changes and trend indicators, enabling agents to quickly assess performance at a glance. The bar chart visualization for transactions provides monthly patterns that help identify seasonal trends and high-activity periods.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Status System</h3>
              <p className="text-gray-700">
                Created a clear status hierarchy using color psychology: yellow for pending actions (requires attention), green for completed verifications (success), and subtle indicators for document-specific states. This visual system reduces cognitive load and speeds up decision-making.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Review Layout</h3>
              <p className="text-gray-700">
                Designed a split-screen interface that keeps merchant information accessible while reviewing documents. Implemented tab-based document switching with status badges, allowing agents to verify multiple documents without losing context of the merchant's overall profile.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Action Hierarchy</h3>
              <p className="text-gray-700">
                Prioritized primary actions (Approve Merchant) with bright, confident colors while keeping destructive actions (Reject) visible but secondary. Included "Next" navigation to streamline bulk verification workflows, reducing the number of clicks required for high-volume processing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Density</h3>
              <p className="text-gray-700">
                Balanced comprehensive data display with whitespace to prevent overwhelm. Used card-based layouts, clear typography hierarchy, and strategic grouping to make dense information scannable while keeping the interface clean and professional.
              </p>
            </div>
          </div>
        </section>

        {/* Impact & Results */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Impact & Outcomes</h2>
          
          <p className="text-gray-700 mb-4">
            The merchant verification platform successfully transformed SBI's onboarding workflow into a streamlined, efficient process. The design enables agents to process verifications faster while maintaining accuracy and compliance. The comprehensive dashboard provides leadership with real-time insights into merchant operations and agent performance.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-8 mt-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-xl font-bold text-gray-900 mb-2">Streamlined</p>
                <p className="text-gray-600">Verification workflow with all information in one view</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 mb-2">Efficient</p>
                <p className="text-gray-600">Agent operations with advanced filtering and bulk actions</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 mb-2">Transparent</p>
                <p className="text-gray-600">Audit trails with complete uploader and timestamp data</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Learnings</h2>
          
          <p className="text-gray-700 mb-4">
            This project taught me the importance of designing for operational efficiency in enterprise environments. Understanding agent workflows and pain points was crucial in creating a solution that genuinely improved their daily tasks rather than adding complexity.
          </p>
          
          <p className="text-gray-700 mb-4">
            I learned to balance information density with usability, presenting comprehensive data without overwhelming users. The challenge of designing for both quick scanning and detailed review required careful consideration of layout, typography, and visual hierarchy.
          </p>
          
          <p className="text-gray-700">
            Working on a verification system enhanced my understanding of compliance requirements, audit trails, and the importance of clear status indicators in high-stakes financial operations. The experience reinforced how thoughtful UX design can significantly impact operational metrics and user satisfaction in enterprise B2B applications.
          </p>
        </section>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 my-16">
          <p className="text-sm text-gray-500 text-center">
            This case study represents approved work from an ongoing office project under NDA with State Bank of India.
          </p>
        </div>

      </div>
    </main>
  );
}