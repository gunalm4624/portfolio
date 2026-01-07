'use client'

import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
    // Initialize Lenis smooth scroll
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.5,
            touchMultiplier: 2,
            infinite: false,
            autoResize: true,
        })

        let rafId: number

        function raf(time: number) {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(rafId)
            lenis.destroy()
        }
    }, [])

    return (
        <div className='min-h-screen bg-white'>
            {/* Back Button */}
            <div className='max-w-[600px] mx-auto px-4 pt-32 pb-8'>
                <Link href='/' className='inline-flex items-center gap-2 text-[#171717]/60 hover:text-[#171717] transition-colors'>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </Link>
            </div>

            {/* Cover Image */}
            <div className='w-full flex justify-center mb-12'>
                <div className='w-full lg:w-[70vw] px-4'>
                    <div className='rounded-3xl overflow-hidden'>
                        <img src="/Images/Projects/BANK_2/BANK_COVER.png" alt="Merchant QC Portal" className='w-full' />
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h1 className='text-5xl font-semibold tracking-tighter mb-4'>Merchant QC (KYC Verification) Portal</h1>
                <p className='text-xl text-[#171717]/80 leading-relaxed'>
                    This is an internal portal used by bank and operations teams to review merchant details and verify KYC documents during onboarding.
                </p>
            </div>

            {/* Goal */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>Goal</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Help QC teams verify merchants faster</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Reduce errors during document review</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Make approval and rejection decisions clear and easy</span>
                    </li>
                </ul>
            </div>

            {/* My Role */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>My Role</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Product Designer</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Designed end-to-end QC experience</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Improved usability for internal users</span>
                    </li>
                </ul>
            </div>

            {/* Constraints */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>Constraints</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Internal banking tool</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Compliance-driven flow</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Needed to work with existing processes</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Branding anonymized</span>
                    </li>
                </ul>
            </div>

            {/* Screen-wise Explanation */}
            <div className='pb-16'>
                <div className='max-w-[600px] mx-auto px-4'>
                    <h2 className='text-3xl font-semibold tracking-tighter mb-8'>Screen-wise Explanation</h2>
                </div>

                {/* Dashboard */}
                <div className='mb-16'>
                    <div className='max-w-[600px] mx-auto px-4'>
                        <h3 className='text-2xl font-semibold tracking-tighter mb-4'>1. Dashboard (Post Login)</h3>
                        <ul className='space-y-3 text-[#171717]/80 text-lg mb-4'>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Shows key numbers like pending, approved, and rejected merchants</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Helps users understand daily workload at a glance</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Quick overview of merchant activity and verification status</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Easy navigation to merchant verification list</span>
                            </li>
                        </ul>
                        <p className='text-[#171717]/80 text-lg mb-8'>
                            <strong>Why:</strong> Helps QC users quickly decide where to focus their time.
                        </p>
                    </div>
                    {/* Image */}
                    <div className='w-full flex justify-center mb-8'>
                        <div className='w-full lg:w-[70vw] px-4'>
                            <div className='rounded-3xl flex items-center justify-center overflow-hidden bg-[#F5F5F5] p-8'>
                                <img src="/Images/Projects/BANK_2/Post Login - Dashboard.png" alt="Dashboard" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Merchant List */}
                <div className='mb-16'>
                    <div className='max-w-[600px] mx-auto px-4'>
                        <h3 className='text-2xl font-semibold tracking-tighter mb-4'>2. Merchant List / Verification Queue</h3>
                        <ul className='space-y-3 text-[#171717]/80 text-lg mb-4'>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Displays all merchants waiting for verification</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Shows status like pending, approved, or rejected</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Important details visible without opening each merchant</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>"Review" action clearly highlighted</span>
                            </li>
                        </ul>
                        <p className='text-[#171717]/80 text-lg mb-8'>
                            <strong>Why:</strong> Reduces time spent searching and prioritizing merchants.
                        </p>
                    </div>
                    {/* Image */}
                    <div className='w-full flex justify-center mb-8'>
                        <div className='w-full lg:w-[70vw] px-4'>
                            <div className='rounded-3xl flex items-center justify-center overflow-hidden bg-[#F5F5F5] p-8'>
                                <img src="/Images/Projects/BANK_2/Ippopay - Merchant Verification.png" alt="Merchant List" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Merchant Detail */}
                <div className='mb-16'>
                    <div className='max-w-[600px] mx-auto px-4'>
                        <h3 className='text-2xl font-semibold tracking-tighter mb-4'>3. Merchant Detail – Verify Merchant Screen</h3>
                        <ul className='space-y-3 text-[#171717]/80 text-lg mb-4'>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Shows merchant business details on the left</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Displays uploaded documents on the right</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Keeps information and documents visible on one screen</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Verification status clearly shown</span>
                            </li>
                        </ul>
                        <p className='text-[#171717]/80 text-lg mb-8'>
                            <strong>Why:</strong> QC users can compare details and documents without switching screens.
                        </p>
                    </div>
                    {/* Image */}
                    <div className='w-full flex justify-center mb-8'>
                        <div className='w-full lg:w-[70vw] px-4'>
                            <div className='rounded-3xl flex items-center justify-center overflow-hidden bg-[#F5F5F5] p-8'>
                                <img src="/Images/Projects/BANK_2/Ippopay - Merchant Verification - Merchant Detail.png" alt="Merchant Detail" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Remaining Screens Summary */}
                <div className='mb-16'>
                    <div className='max-w-[600px] mx-auto px-4'>
                        <h3 className='text-2xl font-semibold tracking-tighter mb-4'>4. Document Tabs (Aadhaar, PAN, etc.)</h3>
                        <ul className='space-y-3 text-[#171717]/80 text-lg mb-4'>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Each document shown as a separate tab</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Current verification status visible for each document</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Easy switching between front and back images</span>
                            </li>
                        </ul>
                        <p className='text-[#171717]/80 text-lg mb-12'>
                            <strong>Why:</strong> Makes document review structured and less error-prone.
                        </p>

                        <h3 className='text-2xl font-semibold tracking-tighter mb-4'>5. Document Preview Area</h3>
                        <ul className='space-y-3 text-[#171717]/80 text-lg mb-4'>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Large preview for better readability</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Focused view for checking clarity and accuracy</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Reduces mistakes caused by small or unclear images</span>
                            </li>
                        </ul>
                        <p className='text-[#171717]/80 text-lg mb-12'>
                            <strong>Why:</strong> Improves confidence while approving or rejecting documents.
                        </p>

                        <h3 className='text-2xl font-semibold tracking-tighter mb-4'>6. Approve / Reject Document Actions</h3>
                        <ul className='space-y-3 text-[#171717]/80 text-lg mb-4'>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Clear buttons for approve and reject</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Action applies only to the selected document</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Prevents accidental full merchant rejection</span>
                            </li>
                        </ul>
                        <p className='text-[#171717]/80 text-lg mb-12'>
                            <strong>Why:</strong> Gives more control and avoids wrong decisions.
                        </p>

                        <h3 className='text-2xl font-semibold tracking-tighter mb-4'>7. Final Merchant Approval / Rejection</h3>
                        <ul className='space-y-3 text-[#171717]/80 text-lg mb-4'>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Separate action for approving or rejecting the merchant</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Ensures all documents are reviewed before final decision</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Clear confirmation of merchant status</span>
                            </li>
                        </ul>
                        <p className='text-[#171717]/80 text-lg'>
                            <strong>Why:</strong> Adds an extra layer of safety in the verification process.
                        </p>
                    </div>
                </div>
            </div>

            {/* UX & UI Improvements */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>UX & UI Improvements</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Clean and simple layout for internal users</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Clear visual hierarchy for faster scanning</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Status labels reduce confusion</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Reduced cognitive load during long verification tasks</span>
                    </li>
                </ul>
            </div>

            {/* Outcome */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>Outcome</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Faster merchant verification</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Fewer manual errors</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Better experience for QC and compliance teams</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>More structured and reliable KYC review process</span>
                    </li>
                </ul>
            </div>

            {/* Key Learnings */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>Key Learnings</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Internal tools need clarity more than visual heavy design</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Reducing clicks saves time at scale</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Clear status visibility improves decision-making</span>
                    </li>
                </ul>
            </div>

            {/* Note */}
            <div className='max-w-[600px] mx-auto px-4 pb-32'>
                <div className='bg-[#171717]/5 rounded-xl p-6'>
                    <p className='text-[#171717]/60 text-sm leading-relaxed'>
                        <strong>Note:</strong> Branding and sensitive data hidden due to confidentiality
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
