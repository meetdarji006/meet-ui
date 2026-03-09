import { PropConfig, ComponentEntry } from './index'
import React from 'react'

export const fullScreenMenuMeta = {
    name: "Full Screen Menu",
    slug: "full-screen-menu",
    category: "components" as const,
    description: "A dynamic full-height fixed sliding menu inspired by 1820 Productions. Features a rolling 3D staggered character entrance on hover.",
    tags: ["menu", "navigation", "sidebar", "nav", "full-screen", "overlay", "stagger", "rolling text", "framer-motion"],
}
export const fullScreenMenuPreview = (props: any) => (
    <div className="h-screen w-full relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800">
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center opacity-30 select-none">
            <div className="absolute top-10 left-10 text-4xl font-black tracking-tighter mix-blend-overlay">1 8 2 0</div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-neutral-300 dark:text-neutral-700">
                Portfolio
            </h1>
            <p className="mt-4 text-neutral-500 font-medium">Click the top-right menu to interact.</p>
        </div>
        <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
            <div className="pointer-events-auto w-full h-full relative">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .preview-menu-scope > div > button {
                        position: absolute !important;
                        top: 24px !important;
                        right: 24px !important;
                    }
                    .preview-menu-scope > div > div.fixed {
                        position: absolute !important;
                    }
                 `}} />
                <div className="preview-menu-scope w-full h-full relative overflow-hidden">
                    <React.Suspense fallback={<div className="text-neutral-500">Loading...</div>}>
                        {React.createElement(
                            React.lazy(() => import('@/components/ui/full-screen-menu').then(mod => ({ default: mod.FullScreenMenu }))),
                            {
                                ...props,
                                lockBodyScroll: false,
                                links: props.links || [
                                    { label: 'HOME', href: '#' },
                                    { label: 'WORK', href: '#' },
                                    { label: 'SERVICES', href: '#' },
                                    { label: 'ABOUT', href: '#' },
                                    { label: 'CONTACT', href: '#' },
                                ]
                            }
                        )}
                    </React.Suspense>
                </div>
            </div>
        </div>
    </div>
)

// 3. Table Props
// 4. Editable Props (for MeetUI Controls)
// 5. Dependencies
export const fullScreenMenuDependencies = ["framer-motion", "lucide-react", "clsx", "tailwind-merge"];

// 6. Usage Code Example
export const fullScreenMenuUsageCode = `<>
  <FullScreenMenu
    links={customLinks}
    backgroundColor="#050505"
    textColor="#fafafa"
  />

  {/* Rest of your page content */}
  <main className="min-h-screen pt-32 px-10">
    <h1 className="text-4xl font-bold">Hello World</h1>
  </main>
  </>`
export const fullScreenMenuProps: PropConfig[] = [
        {
            name: 'links',
            type: '{ label: string; href: string }[]',
            default: 'six default pages',
            description: 'Array of primary navigation links for the menu body'
        },
        {
            name: 'socials',
            type: 'string[]',
            default: 'four dummy socials',
            description: 'Array of social media labels for the footer'
        },
        { isEditable: true, 
            name: 'backgroundColor',
            type: 'string' ,
            default: '#000000',
            description: 'Background Color'
        },
        { isEditable: true, 
            name: 'textColor',
            type: 'string' ,
            default: '#ffffff',
            description: 'Text Color'
        },
        {
            name: 'lockBodyScroll',
            type: 'boolean',
            default: 'true',
            description: 'Whether to lock the main page body from scrolling while the menu is open'
        }
    ];
export const fullScreenMenuRegistry: ComponentEntry = {
        ...fullScreenMenuMeta,
        preview: fullScreenMenuPreview,
        props: fullScreenMenuProps,
        dependencies: fullScreenMenuDependencies,
        usageCode: fullScreenMenuUsageCode,
    };
