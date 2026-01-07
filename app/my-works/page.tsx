'use client'

import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Link from 'next/link'

const MyWorks = () => {
    // Initialize Lenis smooth scroll
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.2,
            easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing out
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
        <div className='bg-white p-4 pt-0 mt-32 max-w-[550px] mx-auto'>
            <div>
                <h1 className='text-4xl font-semibold text-center tracking-tighter'>My Works</h1>
                <p className='text-center text-[#171717]/80 mt-3'>Here are some of my recent projects..</p>
            </div>

            <div>
                {/* Project 1 */}
                <Link href='/my-works/private-banking-pg'>
                    <div className='mt-16 rounded-[40px] overflow-hidden relative cursor-pointer transition-transform hover:scale-[1.02]'>
                        <img src="/Images/Projects/BANK_1/COVER.png" alt="Private Banking PG" loading="eager" decoding="async" style={{ willChange: 'transform' }} />
                        <div className='absolute bottom-1.5 left-1.5 right-1.5 bg-white ps-6 py-5.5 rounded-full'>
                            <h2 className='text-lg font-semibold tracking-tighter mb-6 leading-0'>Private Banking PG</h2>
                            <p className='text-[#171717]/80 text-sm m-0 leading-0'>Secure payments, built for banking.</p>
                        </div>
                    </div>
                </Link>


                {/* Project 2 */}
                <Link href='/my-works/merchant-qc-portal'>
                    <div className='mt-8 rounded-[40px] overflow-hidden relative cursor-pointer transition-transform hover:scale-[1.02]'>
                        <img src="/Images/Projects/BANK_2/COVER.png" alt="Merchant QC Portal" loading="eager" decoding="async" style={{ willChange: 'transform' }} />
                        <div className='absolute bottom-1.5 left-1.5 right-1.5 bg-white ps-6 py-5.5 rounded-full'>
                            <h2 className='text-lg font-semibold tracking-tighter mb-6 leading-0'>Merchant QC Portal</h2>
                            <p className='text-[#171717]/80 text-sm m-0 leading-0'>Internal Merchant KYC QC</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MyWorks