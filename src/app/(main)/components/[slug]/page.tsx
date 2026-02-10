"use client"

import Link from "next/link"
import { useState, use } from "react"
import { ChevronRight, Eye, Code, Sparkles, Layers, Sliders, RotateCcw, RotateCw, Box, ArrowUpRight, Package, FileCode2 } from "lucide-react"
import { sidebarComponents, sidebarCategories, componentsList, componentCodes, componentProps, editableProps, dynamicPreviews, componentDependencies, componentUsageCodes } from "@/lib/components-data"
import { CodeBlock } from "@/components/code-block"
import { PropsEditor } from "@/components/props-editor"

export default function ComponentViewerPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
    const [installTab, setInstallTab] = useState<'npm' | 'yarn' | 'pnpm' | 'bun'>('npm')
    const [language, setLanguage] = useState<'ts' | 'js'>('ts')
    const [previewKey, setPreviewKey] = useState(0)

    // Dynamic props state
    const editable = editableProps[slug] || []
    const defaultValues = editable.reduce((acc, prop) => {
        acc[prop.name] = prop.default
        return acc
    }, {} as Record<string, any>)

    const [propValues, setPropValues] = useState<Record<string, any>>(defaultValues)

    // Find component data
    const component = componentsList.find(c => c.slug === slug)
    const codeData = componentCodes[slug]
    const props = componentProps[slug]
    const DynamicPreview = dynamicPreviews[slug]
    const dependencies = componentDependencies[slug]
    const usageCode = componentUsageCodes[slug]

    const handlePropChange = (name: string, value: any) => {
        setPropValues(prev => ({ ...prev, [name]: value }))
    }

    const resetProps = () => {
        setPropValues(defaultValues)
    }

    const rerunAnimation = () => {
        setPreviewKey(prev => prev + 1)
    }

    if (!component) {
        return (
            <div className="pt-28 pb-24 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Sparkles className="w-7 h-7 text-neutral-500" />
                    </div>
                    <p className="text-neutral-400 font-heading text-lg">Component not found</p>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-28 pb-24 min-h-screen relative">
            {/* Background gradient accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-indigo-500/8 via-purple-500/4 to-transparent blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="flex gap-10">

                    {/* Sidebar */}
                    <aside className="hidden lg:block w-60 shrink-0">
                        <nav className="sticky top-32 space-y-6 max-h-[calc(100vh-10rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20">
                            {/* Header */}
                            <div className="flex items-center justify-between px-1">
                                <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest font-heading flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                                    Components
                                </p>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono font-medium">
                                    {sidebarComponents.length}
                                </span>
                            </div>

                            {/* Categories */}
                            {sidebarCategories.map((category) => (
                                <div key={category.id} className="space-y-1.5">
                                    {/* Category Header */}
                                    <p className="text-[10px] font-semibold text-neutral-600 uppercase tracking-widest px-1 font-heading">
                                        {category.label}
                                    </p>

                                    {/* Category Components */}
                                    {category.components.length > 0 ? (
                                        <div className="space-y-0.5">
                                            {category.components.map((item) => (
                                                <Link
                                                    key={item.slug}
                                                    href={`/components/${item.slug}`}
                                                    className={`group flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] transition-all duration-200 ${item.slug === slug
                                                        ? 'bg-indigo-500/10 text-white font-medium border border-indigo-500/20'
                                                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                                                        }`}
                                                >
                                                    {/* Active indicator bar */}
                                                    <span className={`w-0.5 h-4 rounded-full transition-all ${item.slug === slug
                                                        ? 'bg-indigo-400'
                                                        : 'bg-transparent group-hover:bg-white/20'
                                                        }`} />
                                                    <span className="flex-1 font-heading">{item.name}</span>
                                                    <ChevronRight className={`w-3.5 h-3.5 transition-all ${item.slug === slug
                                                        ? 'opacity-40 text-indigo-400'
                                                        : 'opacity-0 group-hover:opacity-40'
                                                        }`} />
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="px-3 py-2 rounded-lg border border-dashed border-white/10 text-xs text-neutral-500 flex items-center gap-2">
                                            <Sparkles className="w-3 h-3" />
                                            Coming Soon
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
                            <Link href="/components" className="hover:text-white transition-colors font-heading">Components</Link>
                            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                            <span className="text-indigo-300 font-medium font-heading">{component.name}</span>
                        </div>

                        {/* Header */}
                        <div className="mb-10">
                            <div className="flex items-center gap-4 mb-4">
                                <h1 className="text-3xl md:text-5xl font-bold text-white font-heading tracking-tight">{component.name}</h1>
                                <span className="px-3 py-1 rounded-full bg-linear-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/25 text-[11px] font-semibold text-indigo-300 flex items-center gap-1.5 font-heading uppercase tracking-wider">
                                    <Sparkles className="w-3 h-3" />
                                    Premium
                                </span>
                            </div>
                            <p className="text-neutral-400 text-lg font-light max-w-2xl leading-relaxed">
                                {component.description}
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="flex items-center justify-between mb-8 border-b border-white/[0.06]">
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setActiveTab('preview')}
                                    className={`relative flex items-center gap-2 px-5 py-3 text-sm font-heading font-semibold tracking-wide transition-all duration-200 ${activeTab === 'preview'
                                        ? 'text-white'
                                        : 'text-neutral-500 hover:text-neutral-300'
                                        }`}
                                >
                                    <Eye className="w-4 h-4" />
                                    Preview
                                    {activeTab === 'preview' && (
                                        <span className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full" />
                                    )}
                                </button>
                                <button
                                    onClick={() => setActiveTab('code')}
                                    className={`relative flex items-center gap-2 px-5 py-3 text-sm font-heading font-semibold tracking-wide transition-all duration-200 ${activeTab === 'code'
                                        ? 'text-white'
                                        : 'text-neutral-500 hover:text-neutral-300'
                                        }`}
                                >
                                    <Code className="w-4 h-4" />
                                    Code
                                    {activeTab === 'code' && (
                                        <span className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full" />
                                    )}
                                </button>
                            </div>

                            {activeTab === 'code' && (
                                <div className="flex items-center gap-0.5 mb-2">
                                    <button
                                        onClick={() => setLanguage('ts')}
                                        className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${language === 'ts'
                                            ? 'bg-indigo-500/15 text-indigo-300'
                                            : 'text-neutral-500 hover:text-neutral-300'
                                            }`}
                                    >
                                        TS
                                    </button>
                                    <button
                                        onClick={() => setLanguage('js')}
                                        className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-all ${language === 'js'
                                            ? 'bg-indigo-500/15 text-indigo-300'
                                            : 'text-neutral-500 hover:text-neutral-300'
                                            }`}
                                    >
                                        JS
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        {activeTab === 'preview' ? (
                            <div className="space-y-8">
                                {/* Preview Area */}
                                <div className="relative group">
                                    {/* Gradient border glow - always slightly visible, stronger on hover */}
                                    <div className="absolute -inset-px bg-linear-to-r from-indigo-500/20 via-purple-500/30 to-indigo-500/20 rounded-2xl blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

                                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#040008]">

                                        {/* Preview content area */}
                                        <div className="relative min-h-[460px] flex flex-col items-center justify-center">

                                            {/* Layered background */}
                                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0a0018_0%,#040008_70%)]" />

                                            {/* Dot grid pattern */}
                                            <div className="absolute inset-0 dot-grid opacity-40" />

                                            {/* Center glow */}
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.04),transparent_60%)]" />

                                            {/* Edge vignette */}
                                            <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />

                                            {/* Rerun Button */}
                                            <button
                                                onClick={rerunAnimation}
                                                title="Rerun Animation"
                                                className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 backdrop-blur-sm"
                                            >
                                                <RotateCw className="w-4 h-4" />
                                            </button>

                                            <div className="relative z-10 w-full flex items-center justify-center py-16" key={previewKey}>
                                                {DynamicPreview ? DynamicPreview(propValues) : <component.preview />}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Props Editor */}
                                {editable.length > 0 && (
                                    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] overflow-hidden">
                                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-white/[0.02]">
                                            <h3 className="text-sm font-semibold text-white flex items-center gap-2.5 font-heading">
                                                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 flex items-center justify-center border border-indigo-500/25">
                                                    <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                                                </div>
                                                Playground
                                            </h3>
                                            <button
                                                onClick={resetProps}
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white text-xs font-medium transition-all border border-white/[0.06] hover:border-white/10"
                                            >
                                                <RotateCcw className="w-3 h-3" />
                                                Reset
                                            </button>
                                        </div>
                                        <div className="p-6">
                                            <PropsEditor
                                                props={editable}
                                                values={propValues}
                                                onChange={handlePropChange}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="relative">
                                <div className="absolute -inset-px bg-linear-to-r from-indigo-500/20 to-purple-500/20 rounded-xl opacity-30" />
                                <CodeBlock
                                    code={codeData ? codeData[language] : '// Code not available'}
                                    language={language === 'ts' ? 'tsx' : 'jsx'}
                                />
                            </div>
                        )}

                        {/* Props Section */}
                        {props && props.length > 0 && (
                            <div className="mt-14">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3 font-heading">
                                    <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500/15 to-purple-500/15 flex items-center justify-center border border-indigo-500/25">
                                        <Layers className="w-4 h-4 text-indigo-400" />
                                    </div>
                                    Props
                                </h2>
                                <div className="space-y-2">
                                    {/* Header row */}
                                    <div className="grid grid-cols-3 gap-4 px-5 py-2.5 text-[11px] font-semibold text-neutral-500 uppercase tracking-wider font-heading">
                                        <span>Name</span>
                                        <span>Type</span>
                                        <span>Default</span>
                                    </div>
                                    {/* Prop rows */}
                                    {props.map((prop, i) => (
                                        <div
                                            key={prop.name}
                                            className="group grid grid-cols-3 gap-4 px-5 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all duration-200"
                                        >
                                            <span className="font-mono text-sm text-indigo-300 font-medium">{prop.name}</span>
                                            <span className="font-mono text-sm text-purple-300/80">{prop.type}</span>
                                            <span className="font-mono text-sm text-neutral-500">{prop.default}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Installation Section */}
                        {dependencies && dependencies.length > 0 && (
                            <div className="mt-14">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3 font-heading">
                                    <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500/15 to-purple-500/15 flex items-center justify-center border border-indigo-500/25">
                                        <Package className="w-4 h-4 text-indigo-400" />
                                    </div>
                                    Installation
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.06] rounded-lg w-fit">
                                        {(['npm', 'yarn', 'pnpm', 'bun'] as const).map((pm) => (
                                            <button
                                                key={pm}
                                                onClick={() => setInstallTab(pm)}
                                                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all font-heading ${installTab === pm
                                                    ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/25'
                                                    : 'text-neutral-500 hover:text-white'
                                                    }`}
                                            >
                                                {pm}
                                            </button>
                                        ))}
                                    </div>
                                    <CodeBlock
                                        code={`${installTab === 'npm' ? 'npm install' : installTab === 'yarn' ? 'yarn add' : installTab === 'pnpm' ? 'pnpm add' : 'bun add'} ${dependencies.join(' ')}`}
                                        language="bash"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Usage Section */}
                        <div className="mt-14">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3 font-heading">
                                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500/15 to-purple-500/15 flex items-center justify-center border border-indigo-500/25">
                                    <FileCode2 className="w-4 h-4 text-indigo-400" />
                                </div>
                                Usage
                            </h2>
                            <CodeBlock
                                code={usageCode ? `import { ${component.name.replace(/\s+/g, '')} } from "@/components/ui/${slug}"\n\nexport default function Example() {\n    return (\n${usageCode.split('\n').map(line => '        ' + line).join('\n')}\n    )\n}` : `import { ${component.name.replace(/\s+/g, '')} } from "@/components/ui/${slug}"\n\nexport default function Example() {\n    return <${component.name.replace(/\s+/g, '')} text="Hello World" />\n}`}
                                language={language === 'ts' ? 'tsx' : 'jsx'}
                            />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
