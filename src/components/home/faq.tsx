"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const faqs = [
    {
        question: "Is this component library free?",
        answer: "Yes, MeetUI is completely free and open source. You can use it in both personal and commercial projects without any restrictions."
    },
    {
        question: "Does it work with React Server Components?",
        answer: "Absolutely. Our components are designed with Next.js App Router in mind. Interactive components include the 'use client' directive."
    },
    {
        question: "Can I customize the colors and styling?",
        answer: "Yes! MeetUI is built on top of Tailwind CSS. We use CSS variables for our core color palette, making it extremely easy to theme."
    },
    {
        question: "Do I need to install Framer Motion?",
        answer: "Most of our advanced animated components and interactions use Framer Motion. While not strictly required for the static layouts, we highly recommend it for the best experience."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 relative">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-b from-indigo-500/5 to-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="section-badge mb-12"
                    >
                        Common Questions
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[28px] md:text-[50px] font-medium tracking-tight text-white"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                    ? 'bg-white/5 border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.05)]'
                                    : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/5'
                                    }`}
                            >
                                <button
                                    className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                >
                                    <span className="text-base md:text-lg font-medium text-white">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-indigo-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <div className="px-4 md:px-6 pb-4 md:pb-6 pt-2 text-white/60 font-light leading-relaxed text-sm md:text-base">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
