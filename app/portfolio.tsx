"use client";

import { useState } from 'react';
import { motion, cubicBezier } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ToastProvider, useToast } from './components/Toast';

function ProjectCard({ src, alt, title, date, href }: { src: string; alt: string; title: string; date: string; href?: string }) {
  const router = useRouter();
  const [/* no cursor pill */ , setUnused] = useState(false);

  async function handleNavigate(e?: React.MouseEvent | React.KeyboardEvent) {
    e?.preventDefault();
    if (!href) return;
    if (typeof window !== 'undefined') {
      // perform a full navigation (load page fresh) so it starts from the top
      window.location.href = href;
    } else {
      router.push(href);
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-2xl w-full overflow-hidden border border-gray-100 p-1.5 ${href ? 'cursor-pointer' : ''}`}
      onClick={href ? (e) => handleNavigate(e) : undefined}
      onKeyDown={href ? (e) => { if ((e as React.KeyboardEvent).key === 'Enter' || (e as React.KeyboardEvent).key === ' ') handleNavigate(e); } : undefined}
      role={href ? 'link' : undefined}
      tabIndex={href ? 0 : undefined}
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <Image src={src} alt={alt} width={1200} height={700} className="h-auto w-full rounded-t-2xl block object-cover" />

        {href && (
          <button
            onClick={handleNavigate}
            aria-label={`Open ${title}`}
            className="absolute inset-0 z-20 cursor-pointer"
          />
        )}
      </div>

      <div className="px-4 py-3">
        <h4 className="text-lg lg:text-xl font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </motion.div>
  );
}

const customEase = cubicBezier(0.22, 1, 0.36, 1);

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: customEase }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: customEase }
};

export default function Portfolio() {
  // local toast for the page (wrapped in ToastProvider)
  function CopyEmailButton() {
    const { toast } = useToast();

    const handleCopy = async () => {
      const email = 'gunalm4624@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        toast({ title: 'Email copied to your clipboard' });
      } catch (e) {
        // fallback: select + execCommand
        const el = document.createElement('textarea');
        el.value = email;
        document.body.appendChild(el);
        el.select();
        try {
          document.execCommand('copy');
          toast({ title: 'Email copied to your clipboard' });
        } catch (err) {
          toast({ title: 'Could not copy email' });
        }
        document.body.removeChild(el);
      }
    };

    return (
      <button onClick={handleCopy} className="bg-white text-gray-900 px-8 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition cursor-pointer w-full sm:w-auto justify-center">
        Copy Email
      </button>
    );
  }

  return (
    <ToastProvider>
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/3 lg:fixed lg:h-screen p-6 lg:p-12 flex flex-col justify-between overflow-y-auto lg:overflow-hidden">
        <div>
          <motion.div
            className="flex items-center gap-4 mb-8"
            {...fadeInUp}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0">
              <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                <Image src="/Images/DP.jpg" alt="Gunal profile photo" width={64} height={64} className="object-cover w-full h-full" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tighter">gunal.design</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Available for hire</span>
              </div>
            </div>
          </motion.div>

          <motion.h2
            className="text-2xl lg:text-2xl font-medium text-gray-900 mb-2 leading-8 tracking-tighter"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
          >
            Designing Simple Solutions for Complex Products
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg mb-9 max-w-md text-[16px] leading-7"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: customEase }}
          >
            Product Designer with 2+ years of experience simplifying complex workflows across banking, UPI, admin dashboards, and merchant applications through user-centered design.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: customEase }}
          >
            <a href="/Gunal%20-%20Product%20Designer.pdf" download="Gunal - Product Designer.pdf" className="bg-black text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition cursor-pointer w-full sm:w-auto inline-flex"> 
                Download Resume
              </a>
            <CopyEmailButton />
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: customEase }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4 tracking-tighter">What I'm best at...</h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 gap-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {['Product Design', 'UI/UX Design', 'Visual Design', 'Vibe Coding', 'Framer', 'Branding / Identity'].map((skill) => (
                <motion.div
                  key={skill}
                  variants={staggerItem}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 hover:border-gray-300 transition"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer - Desktop Only */}
        <motion.div
          className="flex gap-8 text-sm text-gray-600 justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="mailto:gunalm4624@gmail.com" className="hover:text-gray-900 transition">
            gunalm4624@gmail.com
          </a>
          <a href="https://www.youtube.com/@GunalDesigns" target='_blank' className="hover:text-gray-900 transition">
            Watch on YouTube
          </a>
        </motion.div>
      </div>

      <div className="w-full lg:w-2/3 lg:ml-auto p-6 lg:py-4 lg:pl-0 lg:pr-4">
        <div className="space-y-8">
          <ProjectCard src="/Images/PNB-Project.png" alt="PNB Project" title="PNB National Bank - UPI" date="SEP 2025 - Present" href="/projects/pnb" />
          <ProjectCard src="/Images/SBI-Merchant-Portal.png" alt="SBI Merchant Portal" title="SBI Merchant Portal" date="AUG 2024 - NOV 2024" href="/projects/sbi-merchant-portal" />
          <ProjectCard src="/Images/Money-Manager-Project.png" alt="Money Manager" title="Money Manager" date="Currently In Progress" href="/projects/money-manager" />
        </div>

        {/* Design Explorations (heading outside the box). Placeholder gray box below for multiple designs */}
        <h3 id="design-explorations" className="mt-20 mb-8 text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 tracking-tighter">Recent Design Explorations</h3>
        <div className="bg-gray-50 rounded-2xl p-10">
          <Image src="/Images/Feature-Exploration.png" className="rounded-2xl" alt="Feature exploration" width={1200} height={700} />
        </div>
        <div className="bg-gray-50 rounded-2xl p-10 mt-10">
          <Image src="/Images/Landing-Page-Exploration.png" className="rounded-2xl" alt="Landing page exploration" width={1200} height={700} />
        </div>
        <div className="bg-gray-50 rounded-2xl p-10 mt-10">
          <Image src="/Images/404-Exploration.png" className="rounded-2xl" alt="404 exploration" width={1200} height={700} />
        </div>

        <h1 className='text-center text-4xl font-medium tracking-tighter mt-24'>Thanks for scrolling this far!</h1>
        <p className='text-center text-gray-700 mb-24 mt-6'>If this portfolio made sense, imagine what I can do with your product.</p>
        
      </div>
    </div>
    </ToastProvider>
  );
}