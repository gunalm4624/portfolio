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
                        <img src="/Images/Projects/BANK_1/Tab-Cover.png" alt="Payment Gateway UX Revamp" className='w-full' />
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h1 className='text-5xl font-semibold tracking-tighter mb-4'>Payment Gateway UX Revamp</h1>
                <p className='text-xl text-[#171717]/80 leading-relaxed'>
                    This project focuses on improving the end-user experience of a payment gateway used for online transactions.
                    Due to tight timelines, the goal was to improve usability and clarity without changing what already worked well.
                </p>
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
                        <span>Owned UX and UI improvements</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Worked closely with product and engineering teams</span>
                    </li>
                </ul>
            </div>

            {/* Constraints */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>Constraints</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Very tight timelines</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Existing system already handling high transaction volume</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>No major backend changes allowed</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Branding and client details kept confidential</span>
                    </li>
                </ul>
            </div>

            {/* Problem */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>Problem</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Users felt confused during payment processing</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>No clear feedback when payment took time</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Failure messages were unclear and stressful</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Many users contacted support after failed payments</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Mobile users faced tap and spacing issues</span>
                    </li>
                </ul>
            </div>

            {/* Goal */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>Goal</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Make users feel confident and informed during payment</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Clearly communicate payment status</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Improve failure handling and reduce confusion</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Enhance mobile usability without full redesign</span>
                    </li>
                </ul>
            </div>

            {/* Design Approach */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>Design Approach</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Followed existing, proven UI patterns for the payment page</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Avoided redesigning areas that were already working</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Focused UX efforts on high-risk moments in the flow</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Prioritized clarity, trust, and error prevention</span>
                    </li>
                </ul>
            </div>

            {/* Screen-wise Improvements */}
            <div className='pb-16'>
                <div className='max-w-[600px] mx-auto px-4'>
                    <h2 className='text-3xl font-semibold tracking-tighter mb-8'>Screen-wise UX & UI Improvements</h2>
                </div>

                {/* Payment Page */}
                <div className='mb-16'>
                    <div className='max-w-[600px] mx-auto px-4'>
                        <h3 className='text-2xl font-semibold tracking-tighter mb-4'>Payment Page</h3>
                        <ul className='space-y-3 text-[#171717]/80 text-lg mb-8'>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Retained familiar layout to reduce learning curve</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Improved spacing between inputs and buttons</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Made tap areas larger for mobile users</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Cleaned visual hierarchy for better readability</span>
                            </li>
                        </ul>
                    </div>
                    {/* Image Placeholder */}
                    <div className='w-full flex justify-center mb-8'>
                        <div className='w-full lg:w-[70vw] px-4'>
                            <div className='rounded-3xl flex items-center justify-center overflow-hidden'>
                                <img src="/Images/Projects/BANK_1/Payment Page.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* QR Code Screen */}
                <div className='mb-16'>
                    <div className='max-w-[600px] mx-auto px-4'>
                        <h3 className='text-2xl font-semibold tracking-tighter mb-4'>QR Code Screen</h3>
                        <ul className='space-y-3 text-[#171717]/80 text-lg mb-8'>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Displayed QR code clearly for easy scanning</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Added short instructions for guidance</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Handled loading smoothly to avoid confusion</span>
                            </li>
                        </ul>
                    </div>
                    {/* Image Placeholder */}
                    <div className='w-full flex justify-center mb-8'>
                        <div className='w-full lg:w-[70vw] px-4'>
                            <div className='rounded-3xl flex items-center justify-center overflow-hidden'>
                                <img src="/Images/Projects/BANK_1/Payment Page - Net Banking QR Code.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Redirect to Bank */}
                <div className='mb-16'>
                    <div className='max-w-[600px] mx-auto px-4'>
                        <h3 className='text-2xl font-semibold tracking-tighter mb-4'>Redirect to Bank / Card Payment</h3>
                        <ul className='space-y-3 text-[#171717]/80 text-lg mb-8'>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Added clear redirect message</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Reassured users that payment is in progress</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Reduced chances of users refreshing or exiting</span>
                            </li>
                        </ul>
                    </div>
                    {/* Image Placeholder */}
                    <div className='w-full flex justify-center mb-8'>
                        <div className='w-full lg:w-[70vw] px-4'>
                            <div className='rounded-3xl flex items-center justify-center overflow-hidden'>
                                <img src="/Images/Projects/BANK_1/Payment Page - Redirecting to card payment.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Payment Success */}
                <div className='mb-16'>
                    <div className='max-w-[600px] mx-auto px-4'>
                        <h3 className='text-2xl font-semibold tracking-tighter mb-4'>Payment Success Screen</h3>
                        <ul className='space-y-3 text-[#171717]/80 text-lg mb-8'>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Simple and clear success message</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Confirmed payment completion immediately</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Displayed key transaction details for trust</span>
                            </li>
                        </ul>
                    </div>
                    {/* Image Placeholder */}
                    <div className='w-full flex justify-center mb-8'>
                        <div className='w-full lg:w-[70vw] px-4'>
                            <div className='rounded-3xl flex items-center justify-center overflow-hidden'>
                                <img src="/Images/Projects/BANK_1/Payment Page - Payment Success.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Failed */}
                <div className='mb-16'>
                    <div className='max-w-[600px] mx-auto px-4'>
                        <h3 className='text-2xl font-semibold tracking-tighter mb-4'>Payment Failed Screen (High-Risk Area)</h3>
                        <ul className='space-y-3 text-[#171717]/80 text-lg mb-8'>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Redesigned failure message in simple language</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Clearly stated that money was not deducted</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Suggested next steps like retry or choosing another method</span>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-2xl'>•</span>
                                <span>Reduced panic and support dependency</span>
                            </li>
                        </ul>
                    </div>
                    {/* Image Placeholder */}
                    <div className='w-full flex justify-center mb-8'>
                        <div className='w-full lg:w-[70vw] px-4'>
                            <div className='rounded-3xl flex items-center justify-center overflow-hidden'>
                                <img src="/Images/Projects/BANK_1/Payment Page - Payment Failed.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* UI Revamp Summary */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>UI Revamp Summary</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Small but meaningful UI changes</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Focused on usability, spacing, and clarity</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>No unnecessary visual redesign</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Balanced speed of delivery with UX quality</span>
                    </li>
                </ul>
            </div>

            {/* Outcome */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>Outcome</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Reduced user confusion during payment</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Fewer support queries for failed payments</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Better confidence during slow or failed transactions</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Improved mobile payment experience</span>
                    </li>
                </ul>
            </div>

            {/* Key Learnings */}
            <div className='max-w-[600px] mx-auto px-4 pb-16'>
                <h2 className='text-3xl font-semibold tracking-tighter mb-6'>Key Learnings</h2>
                <ul className='space-y-3 text-[#171717]/80 text-lg'>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Clear communication is more important than speed in payments</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Failure experience matters as much as success</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Small UX changes can have big impact</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <span className='text-2xl'>•</span>
                        <span>Working within constraints is a core product design skill</span>
                    </li>
                </ul>
            </div>

            {/* Note */}
            <div className='max-w-[600px] mx-auto px-4 pb-32'>
                <div className='bg-[#171717]/5 rounded-xl p-6'>
                    <p className='text-[#171717]/60 text-sm leading-relaxed'>
                        <strong>Note:</strong> Screens and branding are anonymized due to confidentiality
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
