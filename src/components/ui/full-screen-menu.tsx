import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export interface FullScreenMenuProps {
    className?: string;
    /**
     * Array of navigation links
     */
    links?: { label: string; href: string }[];
    /**
     * Array of social media labels for the footer
     */
    socials?: string[];
    /**
     * Background color of the sliding menu panel
     * @default "#000000"
     */
    backgroundColor?: string;
    /**
     * Text color for the links and socials
     * @default "#ffffff"
     */
    textColor?: string;
    /**
     * Whether to lock body scrolling when the menu is open
     * @default true
     */
    lockBodyScroll?: boolean;
}

const defaultLinks = [
    { label: 'HOME', href: '#' },
    { label: 'WORK', href: '#' },
    { label: 'SERVICES', href: '#' },
    { label: 'ABOUT', href: '#' },
    { label: 'CONTACT', href: '#' },
];

const defaultSocials = ['INSTAGRAM', 'VIMEO', 'LINKEDIN', 'FACEBOOK'];

// Animation Variants

const menuPanelVariants: Variants = {
    initial: { x: '100%' },
    animate: {
        x: 0,
        transition: { type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.8 }
    },
    exit: {
        x: '100%',
        transition: { type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.6 }
    }
};

const navListVariants: Variants = {
    initial: {},
    animate: {
        transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    },
    exit: {
        transition: { staggerChildren: 0.04, staggerDirection: -1 }
    }
};

const navItemVariants: Variants = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.6 } },
    exit: { y: 20, opacity: 0, transition: { duration: 0.3 } }
};

const footerVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

// Character Rolling Animation Variants
const wordContainerVariants: Variants = {
    initial: {},
    hover: { transition: { staggerChildren: 0.02 } }
};

const primaryCharVariants: Variants = {
    initial: { y: 0, rotateX: 0 },
    hover: {
        y: '-100%',
        rotateX: -90,
        transition: { type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.4 }
    }
};

const secondaryCharVariants: Variants = {
    initial: { y: '100%', rotateX: 90 },
    hover: {
        y: 0,
        rotateX: 0,
        transition: { type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.4 }
    }
};

export function AnimatedMenuLink({ label, href, textColor }: { label: string; href: string; textColor: string }) {
    const [isHovered, setIsHovered] = useState(false);

    // Split text keeping spaces intact
    const chars = label.split('');

    return (
        <motion.li variants={navItemVariants} className="overflow-visible">
            <motion.a
                href={href}
                className="relative flex items-center group cursor-pointer text-5xl md:text-7xl font-sans font-medium uppercase tracking-tight leading-tight"
                style={{ color: textColor }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
            >
                {/* Hover Dot Indicator */}
                <motion.div
                    className="absolute -left-6 md:-left-8 w-2 md:w-3 h-2 rounded-full"
                    style={{ backgroundColor: textColor }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />

                {/* Rollover Letters */}
                <motion.div variants={wordContainerVariants} className="flex relative overflow-hidden">
                    {chars.map((char, index) => (
                        <span key={index} className="relative inline-block whitespace-pre" style={{ perspective: '800px' }}>
                            {/* Original Character moving up/away */}
                            <motion.span
                                variants={primaryCharVariants}
                                className="inline-block origin-bottom"
                            >
                                {char}
                            </motion.span>

                            {/* Duplicate Character sliding up from below */}
                            <motion.span
                                variants={secondaryCharVariants}
                                className="absolute left-0 top-0 inline-block origin-top"
                            >
                                {char}
                            </motion.span>
                        </span>
                    ))}
                </motion.div>
            </motion.a>
        </motion.li>
    );
}

export function FullScreenMenu({
    className,
    links = defaultLinks,
    socials = defaultSocials,
    backgroundColor = '#000000',
    textColor = '#ffffff',
    lockBodyScroll = true
}: FullScreenMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (!lockBodyScroll) return;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen, lockBodyScroll]);

    return (
        <div className={cn("relative z-50", className)}>
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 right-6 md:top-8 md:right-10 z-60 flex items-center gap-2 px-4 py-2 bg-neutral-900/40 backdrop-blur-md text-white border border-white/10 rounded-full hover:bg-neutral-800/60 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
                <span className="text-sm font-medium tracking-wide">{isOpen ? 'CLOSE' : 'MENU'}</span>
            </motion.button>

            {/* Sliding Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Optional dark backdrop overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                        />

                        <motion.div
                            variants={menuPanelVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="fixed top-0 right-0 h-dvh w-full md:w-[45vw] lg:w-[35vw] z-50 shadow-2xl flex flex-col justify-center"
                            style={{ backgroundColor }}
                        >
                            {/* Navigation Links */}
                            <motion.ul
                                variants={navListVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="flex flex-col space-y-2 px-12 md:px-24"
                            >
                                {links.map((link, i) => (
                                    <AnimatedMenuLink key={i} label={link.label} href={link.href} textColor={textColor} />
                                ))}
                            </motion.ul>

                            {/* Footer Socials */}
                            <motion.div
                                variants={footerVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute bottom-10 left-12 md:left-24 text-xs tracking-widest flex flex-wrap gap-4 uppercase font-sans"
                                style={{ color: `${textColor}99` }} // Slightly faded text color
                            >
                                <span className="font-semibold" style={{ color: textColor }}>SOCIALS:</span>
                                {socials.map((social, i) => (
                                    <a key={i} href="#" className="hover:text-white transition-colors">
                                        {social}
                                        {i !== socials.length - 1 && <span className="ml-4 opacity-50">,</span>}
                                    </a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
