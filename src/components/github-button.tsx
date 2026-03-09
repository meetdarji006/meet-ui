"use client"


import { Github, Star } from "lucide-react"
import Link from "next/link"
import { useGitHubStars } from "@/hooks/use-github-stars"
import { cn } from "@/lib/utils"

interface GitHubButtonProps {
    repo?: string
    className?: string
}

export function GitHubButton({ repo = "meetdarji006/meet-ui", className }: GitHubButtonProps) {
    const { formatted, loading } = useGitHubStars(repo)

    return (
        <div>
            <Link
                href={`https://github.com/${repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "group relative flex items-center gap-1.5 sm:gap-2 h-9 px-2 sm:pl-3.5 sm:pr-4 rounded-[8px] bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all overflow-hidden",
                    className
                )}
            >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Github className="w-4 h-4 relative z-10" />
                <span className="hidden sm:inline text-xs font-medium font-heading tracking-wide relative z-10">Star on GitHub</span>

                {!loading && formatted !== null && (
                    <div className="flex items-center gap-1 sm:gap-1.5 pl-1.5 sm:pl-2 border-l border-white/10 relative z-10 h-1/2">
                        <Star className="w-3 h-3 text-yellow-500/80 fill-yellow-500/80 group-hover:scale-110 transition-transform" />
                        <span className="text-[11px] sm:text-xs font-medium font-mono">
                            {formatted}
                        </span>
                    </div>
                )}

                {/* Shimmer effect */}
                <div className="absolute top-0 -left-full w-[50%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] group-hover:animate-[shimmer_2s_infinite]" />
            </Link>
        </div>
    )
}
