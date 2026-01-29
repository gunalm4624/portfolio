"use client";

import { Mail, FileText } from "lucide-react";

const Footer = () => {
    return (
        <main className="p-8 pt-24 relative overflow-hidden">


            {/* Bottom Purple Gradient Blur */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-purple-500/20 blur-[80px] rounded-t-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-8">
                {/* Get in touch Card */}
                <div className="bg-white backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[32px] p-12 text-center border-1 border-gray-200 relative overflow-hidden">
                    {/* Bottom Purple Gradient Blur */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-500/20 blur-[60px] rounded-t-full pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-4xl mb-4 primary-font">Get in touch</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
                            I&apos;m always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to email me if you&apos;d like to see my portfolio deck.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {/* Contact Me Button */}
                            <a
                                href="mailto:gunal@example.com"
                                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-black px-8 text-white"
                            >
                                <span className="mr-2">Contact me</span>
                                <Mail className="w-4 h-4" />
                            </a>

                            {/* Download Resume Button */}
                            <a
                                href="/assets/Gunal Product Designer.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-black shadow-sm ring-1 ring-gray-200"
                            >
                                <span className="mr-2">Download resume</span>
                                <FileText className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>© 2026 Gunal — Built with intention.</p>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black dark:hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black dark:hover:text-white transition-colors"
                        >
                            X (Twitter)
                        </a>
                        <a
                            href="mailto:gunalm4624@gmail.com"
                            className="hover:text-black dark:hover:text-white transition-colors"
                        >
                            Mail
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Footer;
