import Link from 'next/link'
import { Logo } from "@/components/logo"
import { Heart } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full text-white py-12 border-t border-white/5 relative overflow-hidden">
            {/* Extremely subtle background gradient accents */}
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-linear-to-t from-indigo-500/5 via-purple-500/2 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-[300px] h-[200px] bg-linear-to-t from-purple-500/5 to-transparent blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                    {/* Left side: Brand and Copyright */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <Logo size="md" />
                        {/* <div className="text-neutral-500 text-sm flex items-center gap-1.5 font-light">
                            A library created with
                            <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-500 mx-0.5" />
                            by <span className="text-purple-400 font-medium">MeetUI</span>
                        </div> */}
                        <div className="text-neutral-600 text-xs">
                            © {new Date().getFullYear()} MeetUI. All rights reserved.
                        </div>
                    </div>

                    {/* Right side: Minimal Links */}
                    <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 pt-2">
                        <Link href="/components/blur-reveal" className="text-sm tracking-wide text-neutral-500 hover:text-white transition-colors duration-300">
                            Components
                        </Link>
                        <Link href="/docs" className="text-sm tracking-wide text-neutral-500 hover:text-white transition-colors duration-300">
                            Docs
                        </Link>
                        <a href="https://github.com/meetdarji006/meet-ui" target="_blank" rel="noopener noreferrer" className="text-sm tracking-wide text-neutral-500 hover:text-white transition-colors duration-300">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
