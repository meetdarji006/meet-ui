"use client"

import Link from "next/link"
import { useState, use } from "react"
import { ChevronRight, Eye, Code, Sparkles, Layers, Sliders, RotateCcw, RotateCw, MousePointer, Box, ArrowUpRight } from "lucide-react"
import { sidebarComponents, sidebarCategories, componentsList, componentCodes, componentProps, editableProps, dynamicPreviews } from "@/lib/components-data"
import { CodeBlock } from "@/components/ui/code-block"
import { PropsEditor } from "@/components/ui/props-editor"

export default function ComponentViewerPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
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
                <p className="text-neutral-400">Component not found</p>
            </div>
        )
    }

    return (
        <div className="pt-28 pb-24 min-h-screen relative">
            {/* Background gradient accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="flex gap-10">

                    {/* Sidebar */}
                    <aside className="hidden lg:block w-60 shrink-0">
                        <nav className="sticky top-32 space-y-6">
                            {/* Header */}
                            <div className="flex items-center justify-between px-1">
                                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    Components
                                </p>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/10">
                                    {sidebarComponents.length}
                                </span>
                            </div>

                            {/* Categories */}
                            {sidebarCategories.map((category) => (
                                <div key={category.id} className="space-y-2">
                                    {/* Category Header */}
                                    <p className="text-[10px] font-medium text-neutral-600 uppercase tracking-wider px-1">
                                        {category.label}
                                    </p>

                                    {/* Category Components */}
                                    {category.components.length > 0 ? (
                                        <div className="space-y-0.5">
                                            {category.components.map((item) => (
                                                <Link
                                                    key={item.slug}
                                                    href={`/components/${item.slug}`}
                                                    className={`group flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${item.slug === slug
                                                        ? 'bg-white/10 text-white font-medium'
                                                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                                                        }`}
                                                >
                                                    {/* Active indicator bar */}
                                                    <span className={`w-0.5 h-4 rounded-full transition-all ${item.slug === slug
                                                        ? 'bg-indigo-500'
                                                        : 'bg-transparent group-hover:bg-white/20'
                                                        }`} />
                                                    <span className="flex-1">{item.name}</span>
                                                    <ChevronRight className={`w-4 h-4 transition-all ${item.slug === slug
                                                        ? 'opacity-50'
                                                        : 'opacity-0 group-hover:opacity-50'
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
                        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
                            <Link href="/components" className="hover:text-white transition-colors">Components</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-white">{component.name}</span>
                        </div>

                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-3">
                                <h1 className="text-3xl md:text-5xl font-medium text-white">{component.name}</h1>
                                <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-xs font-medium text-indigo-300 flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3" />
                                    Premium
                                </span>
                            </div>
                            <p className="text-neutral-400 text-lg font-light max-w-2xl">
                                {component.description}
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="flex items-end justify-between gap-6 mb-8 border-b border-white/10">
                            <div className="flex items-center gap-8 translate-y-[1px]">
                                <button
                                    onClick={() => setActiveTab('preview')}
                                    className={`flex items-center gap-2 pb-3 text-sm font-medium transition-all relative border-b-2 ${activeTab === 'preview'
                                        ? 'text-white border-white'
                                        : 'text-neutral-500 border-transparent hover:text-neutral-300'
                                        }`}
                                >
                                    <Eye className="w-4 h-4" />
                                    Preview
                                </button>
                                <button
                                    onClick={() => setActiveTab('code')}
                                    className={`flex items-center gap-2 pb-3 text-sm font-medium transition-all relative border-b-2 ${activeTab === 'code'
                                        ? 'text-white border-white'
                                        : 'text-neutral-500 border-transparent hover:text-neutral-300'
                                        }`}
                                >
                                    <Code className="w-4 h-4" />
                                    Code
                                </button>
                            </div>

                            {activeTab === 'code' && (
                                <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10 mb-2">
                                    <button
                                        onClick={() => setLanguage('ts')}
                                        className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${language === 'ts'
                                            ? 'bg-indigo-500/20 text-indigo-300 shadow-sm'
                                            : 'text-neutral-400 hover:text-neutral-200'
                                            }`}
                                    >
                                        TypeScript
                                    </button>
                                    <button
                                        onClick={() => setLanguage('js')}
                                        className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${language === 'js'
                                            ? 'bg-indigo-500/20 text-indigo-300 shadow-sm'
                                            : 'text-neutral-400 hover:text-neutral-200'
                                            }`}
                                    >
                                        JavaScript
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        {activeTab === 'preview' ? (
                            <div className="space-y-6">
                                {/* Preview Area */}
                                <div className="relative group">
                                    <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50 rounded-2xl blur-sm opacity-20" />
                                    <div className="relative aspect-video w-full rounded-2xl bg-[#060010] border border-white/10 flex items-center justify-center overflow-hidden">

                                        {/* Radial gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-purple-500/5" />

                                        {/* Rerun Button */}
                                        <button
                                            onClick={rerunAnimation}
                                            title="Rerun Animation"
                                            className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95"
                                        >
                                            <RotateCw className="w-4 h-4" />
                                        </button>

                                        <div className="relative z-10" key={previewKey}>
                                            {DynamicPreview ? DynamicPreview(propValues) : <component.preview />}
                                        </div>
                                    </div>
                                </div>

                                {/* Props Editor */}
                                {editable.length > 0 && (
                                    <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-sm font-medium text-white flex items-center gap-2">
                                                <Sliders className="w-4 h-4 text-indigo-400" />
                                                Playground
                                            </h3>
                                            <button
                                                onClick={resetProps}
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white text-xs transition-all"
                                            >
                                                <RotateCcw className="w-3 h-3" />
                                                Reset
                                            </button>
                                        </div>
                                        <PropsEditor
                                            props={editable}
                                            values={propValues}
                                            onChange={handlePropChange}
                                        />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="relative">
                                <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-xl opacity-50" />
                                <CodeBlock
                                    code={codeData ? codeData[language] : '// Code not available'}
                                    language={language === 'ts' ? 'tsx' : 'jsx'}
                                />
                            </div>
                        )}

                        {/* Props Section */}
                        {props && props.length > 0 && (
                            <div className="mt-12">
                                <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/30">
                                        <Layers className="w-4 h-4 text-indigo-400" />
                                    </div>
                                    Props
                                </h2>
                                <div className="overflow-hidden rounded-xl border border-white/10">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-b border-white/10">
                                                <th className="text-left p-4 font-medium text-neutral-300">Name</th>
                                                <th className="text-left p-4 font-medium text-neutral-300">Type</th>
                                                <th className="text-left p-4 font-medium text-neutral-300">Default</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.map((prop, i) => (
                                                <tr key={prop.name} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i % 2 === 0 ? 'bg-white/2' : ''}`}>
                                                    <td className="p-4 font-mono text-indigo-300">{prop.name}</td>
                                                    <td className="p-4 font-mono text-purple-300">{prop.type}</td>
                                                    <td className="p-4 font-mono text-neutral-400">{prop.default}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Usage Section */}
                        <div className="mt-12">
                            <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/30">
                                    <Code className="w-4 h-4 text-indigo-400" />
                                </div>
                                Usage
                            </h2>
                            <CodeBlock code={`import { ${component.name.replace(/\s+/g, '')} } from "@/components/ui/${slug}"\n\nexport default function Example() {\n    return <${component.name.replace(/\s+/g, '')} text="Hello World" />\n}`} language={language === 'ts' ? 'tsx' : 'jsx'} />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
