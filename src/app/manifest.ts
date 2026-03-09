import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'MeetUI',
        short_name: 'MeetUI',
        description: 'Modern open-source animated component library.',
        start_url: '/',
        display: 'standalone',
        background_color: '#060010',
        theme_color: '#6366F1',
        icons: [
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    }
}
