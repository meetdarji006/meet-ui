"use client"

import { useState, useEffect } from "react"

// Global in-flight cache to prevent duplicate API calls
// when multiple components call useGitHubStars with the same repo
const inflight = new Map<string, Promise<number | null>>()

function fetchStars(repo: string): Promise<number | null> {
    if (inflight.has(repo)) {
        return inflight.get(repo)!
    }

    const promise = fetch(`https://api.github.com/repos/${repo}`)
        .then((res) => res.json())
        .then((data) => {
            const count = data.stargazers_count ?? null
            if (count !== null) {
                sessionStorage.setItem(
                    `github-stars-${repo}`,
                    JSON.stringify({ count, timestamp: Date.now() })
                )
            }
            return count as number | null
        })
        .catch(() => null)
        .finally(() => {
            inflight.delete(repo)
        })

    inflight.set(repo, promise)
    return promise
}

export function useGitHubStars(repo: string) {
    const [stars, setStars] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!repo) return

        const cacheKey = `github-stars-${repo}`
        const cached = sessionStorage.getItem(cacheKey)

        if (cached) {
            const { count, timestamp } = JSON.parse(cached)
            // Cache for 10 minutes
            if (Date.now() - timestamp < 10 * 60 * 1000) {
                setStars(count)
                setLoading(false)
                return
            }
        }

        fetchStars(repo).then((count) => {
            setStars(count)
            setLoading(false)
        })
    }, [repo])

    const formatted = stars !== null
        ? stars >= 1000
            ? `${(stars / 1000).toFixed(1)}k`
            : stars.toString()
        : null

    return { stars, formatted, loading }
}
