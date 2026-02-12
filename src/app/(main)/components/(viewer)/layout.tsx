import { ComponentsSidebar } from "../components-sidebar"

export default function ComponentsViewerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="pt-28 pb-24 min-h-screen relative">
            {/* Background gradient accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-indigo-500/8 via-purple-500/4 to-transparent blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="flex gap-10">
                    <ComponentsSidebar />
                    <main className="flex-1 min-w-0">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}
