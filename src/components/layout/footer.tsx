import Link from 'next/link'
import { Logo } from "@/components/logo"

export function Footer() {
    return (
        <footer className="w-full text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Background gradient accents */}
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-gradient-to-t from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-[300px] h-[200px] bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-6">
                            <Logo size="lg" />
                        </div>
                        <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                            A modern component library built for the next generation of web applications.
                        </p>
                        <div className="flex gap-3">
                            {/* Social Icons */}
                            <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 hover:from-indigo-500/30 hover:to-purple-500/30 cursor-pointer flex items-center justify-center transition-all group">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 hover:from-indigo-500/30 hover:to-purple-500/30 cursor-pointer flex items-center justify-center transition-all group">
                                <span className="sr-only">GitHub</span>
                                <svg className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 hover:from-indigo-500/30 hover:to-purple-500/30 cursor-pointer flex items-center justify-center transition-all group">
                                <span className="sr-only">Discord</span>
                                <svg className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium text-white mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                            Product
                        </h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><Link href="/components" className="hover:text-indigo-300 transition-colors">Components</Link></li>
                            <li><Link href="/templates" className="hover:text-indigo-300 transition-colors">Templates</Link></li>
                            <li><Link href="/docs" className="hover:text-indigo-300 transition-colors">Documentation</Link></li>
                            <li><a href="#" className="hover:text-indigo-300 transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-white mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                            Resources
                        </h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><a href="#" className="hover:text-indigo-300 transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-indigo-300 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-indigo-300 transition-colors">Partners</a></li>
                            <li><a href="#" className="hover:text-indigo-300 transition-colors">Status</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-white mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                            Company
                        </h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><a href="#" className="hover:text-indigo-300 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-indigo-300 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-300 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-300 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
                    <p>© {new Date().getFullYear()} MeetUI Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-indigo-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-indigo-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
