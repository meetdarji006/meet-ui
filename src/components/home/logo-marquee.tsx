"use client"

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    'Tailwind', 'Next.js', 'Framer',
    'Three.js', 'React', 'TypeScript', 'Motion', 'Tailwind', 'Next.js', 'Framer'
];

const TechIcon = ({ name }: { name: string }) => {
    switch (name) {
        case 'MeetUI':
            return (
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center overflow-hidden scale-75 shadow-[0_0_15px_rgba(81,47,235,0.3)]">
                    <svg viewBox="0 0 24 24" fill="none" className="w-[70%] h-[70%]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 18V6L8 12L12 6L16 12L20 6V18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <circle cx="12" cy="18" r="1.5" fill="white" />
                    </svg>
                </div>
            );
        case 'React':
            return (
                <svg className="w-6 h-6" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                    <g stroke="#61DAFB" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                </svg>
            );
        case 'Tailwind':
            return (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38BDF8" />
                </svg>
            );
        case 'Next.js':
            return (
                <svg data-testid="geist-icon" height="24" strokeLinejoin="round" style={{ color: 'currentColor' }} viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_nextjs)">
                        <circle cx="8" cy="8" r="7.375" fill="black" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.63 11V5" stroke="url(#paint0_linear_nextjs)" strokeWidth="1.25" strokeMiterlimit="1.41421" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z" fill="url(#paint1_linear_nextjs)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_nextjs" x1="11.13" y1="5" x2="11.13" y2="11" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="0.609375" stopColor="white" stopOpacity="0.57" />
                            <stop offset="0.796875" stopColor="white" stopOpacity="0" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_nextjs" x1="9.9375" y1="9.0625" x2="13.5574" y2="13.3992" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <clipPath id="clip0_nextjs">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            );
        case 'Framer':
        case 'Motion':
            return (
                <svg className="w-10 h-3" viewBox="0 0 34 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 12.838 0 L 6.12 11.989 L 0 11.989 L 5.245 2.628 C 6.059 1.176 8.088 0 9.778 0 Z M 27.846 2.997 C 27.846 1.342 29.216 0 30.906 0 C 32.596 0 33.966 1.342 33.966 2.997 C 33.966 4.653 32.596 5.995 30.906 5.995 C 29.216 5.995 27.846 4.653 27.846 2.997 Z M 13.985 0 L 20.105 0 L 13.387 11.989 L 7.267 11.989 Z M 21.214 0 L 27.334 0 L 22.088 9.362 C 21.275 10.813 19.246 11.989 17.556 11.989 L 14.496 11.989 Z" fill="currentColor" />
                </svg>
            );
        case 'Three.js':
            return (
                <svg fill="none" strokeLinecap="square" strokeMiterlimit="10" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <g transform="translate(8.964 4.2527)" fillRule="evenodd" stroke="currentColor" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="4">
                        <path d="m63.02 200.61-43.213-174.94 173.23 49.874z" />
                        <path d="m106.39 50.612 21.591 87.496-86.567-24.945z" />
                        <path d="m84.91 125.03-10.724-43.465 43.008 12.346z" />
                        <path d="m63.458 38.153 10.724 43.465-43.008-12.346z" />
                        <path d="m149.47 62.93 10.724 43.465-43.008-12.346z" />
                        <path d="m84.915 125.06 10.724 43.465-43.008-12.346z" />
                    </g>
                </svg>
            );
        case 'TypeScript':
            return (
                <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H128V128H0V0Z" fill="#3178C6" />
                    <path d="M117.5 107.4C117.5 111.4 116.3 114.7 113.8 117.3C111.3 119.9 107.8 121.3 103.2 121.3C100.2 121.3 97.4 120.7 94.8 119.6C92.2 118.5 90.1 117 88.6 115L94.5 107.5C95.4 108.6 96.6 109.5 98 110.1C99.4 110.7 101.1 111 103 111C106.9 111 108.8 109.7 108.8 107.2C108.8 106 108.4 105.1 107.5 104.4C106.6 103.7 104.7 102.8 101.9 101.8C98.4 100.5 95.8 98.9 94 97C92.2 95.1 91.3 92.6 91.3 89.6C91.3 86.6 92.3 84.1 94.3 82.1C96.3 80.1 99.3 79.1 103.1 79.1C106 79.1 108.6 79.7 110.8 80.8C113 81.9 114.8 83.5 116.1 85.5L110.3 92.4C109.5 91.3 108.4 90.5 107 89.9C105.6 89.3 104.2 89 102.7 89C101.4 89 100.3 89.2 99.3 89.6C98.3 90 97.8 90.8 97.8 91.9C97.8 92.8 98.2 93.5 98.9 94.1C99.6 94.7 101.2 95.5 103.5 96.3C107.1 97.6 109.9 99.2 111.9 101.3C113.9 103.4 114.9 106 114.9 109.1" fill="white" />
                    <path d="M72.2 120H63V88H49.1V79.2H86.2V88H72.2V120Z" fill="white" />
                </svg>
            );
        default:
            return null;
    }
};

export function LogoMarquee() {
    return (
        <div className="relative w-full py-10 overflow-hidden max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-16 whitespace-nowrap opacity-40 grayscale"
            >
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex items-center gap-16 pr-16"
                >
                    {logos.concat(logos).map((logo, i) => (
                        <div key={i} className="flex items-center gap-3 hover:opacity-100 transition-opacity cursor-pointer shrink-0">
                            <TechIcon name={logo} />
                            <span className="font-bold text-xl tracking-tighter text-white">{logo}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-black via-transparent to-black" />
        </div>
    );
};
