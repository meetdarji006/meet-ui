import createMDX from '@next/mdx'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",   // 👈 IMPORTANT for Cloudflare Pages

    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

    transpilePackages: ['three'],

    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'media.istockphoto.com' },
        ],
        unoptimized: true   // 👈 required for static export
    },
};

const withMDX = createMDX({})

export default withMDX(nextConfig)