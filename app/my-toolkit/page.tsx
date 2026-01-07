'use client'

import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Image from 'next/image'

const MyToolkit = () => {
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

    const tools = [
        {
            name: 'Figma',
            description: 'Leading design tool',
            percentage: 90,
            icon: <Image src="/Images/Figma-logo.svg" alt="Figma" width={32} height={32} />,
            color: 'bg-blue-600'
        },
        {
            name: 'Framer',
            description: 'No-code website builder',
            percentage: 70,
            icon: <Image src="/Images/Framer-logo.svg" alt="Framer" width={62} height={62} />,
            color: 'bg-blue-600'
        },
        {
            name: 'Adobe Photoshop',
            description: 'Raster graphics editor',
            percentage: 80,
            icon: <Image src="/Images/photoshop-logo.svg" alt="Photoshop" width={48} height={48} />,
            color: 'bg-blue-600'
        },
        {
            name: 'Adobe Illustrator',
            description: 'Vector graphics editor',
            percentage: 45,
            icon: <Image src="/Images/Illustrator-Icon.svg" alt="Photoshop" width={48} height={48} />,
            color: 'bg-blue-600'
        },
        {
            name: 'Lovable',
            description: 'Vibe Coding Tool',
            percentage: 90,
            icon: <Image src="/Images/lovable-logo-icon.svg" alt="Photoshop" width={40} height={40} />,
            color: 'bg-blue-600'
        }
    ]

    return (
        <div className='min-h-screen bg-white py-32 px-4'>
            <div className='max-w-[550px] mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl font-semibold text-center tracking-tighter'>
                        My toolkit,<br />your advantage
                    </h2>
                    <p className='text-center text-[#171717]/80 mt-3'>
                        See how my expertise with these tools drives better results.
                    </p>
                </div>

                {/* Tool Cards */}
                <div className='space-y-6'>
                    {tools.map((tool, index) => (
                        <div key={index} className='relative'>
                            <div className='flex items-center gap-4 bg-white rounded-xl overflow-hidden border border-[#171717]/20'>
                                {/* Blue Progress Bar */}
                                <div
                                    className={`absolute left-0 top-0 bottom-0 ${tool.color} rounded-l-xl transition-all duration-1000`}
                                    style={{ width: `${tool.percentage}%` }}
                                />

                                {/* Content */}
                                <div className='relative z-10 flex items-center justify-between w-full p-4'>
                                    <div className='flex items-center gap-4'>
                                        {/* Icon */}
                                        <div className='w-15 h-15 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm'>
                                            {tool.icon}
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h3 className='text-xl font-semibold tracking-tight text-white'>{tool.name}</h3>
                                            <p className='text-sm text-white/80'>{tool.description}</p>
                                        </div>
                                    </div>

                                    {/* Percentage Badge */}
                                    <div className='bg-[#171717]/80 text-white px-4 py-2 rounded-full text-sm font-semibold'>
                                        {tool.percentage}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyToolkit
