"use client"

import Link from "next/link"
import { useState, use, useEffect } from "react"
import { ChevronRight, Eye, Code, Sparkles, Layers, Sliders, RotateCcw, RotateCw, Box, ArrowUpRight, Package, FileCode2, Bug, AlertCircle } from "lucide-react"
import { componentsList, loadComponentEntry, loadComponentCode, type ComponentEntry, type ComponentCode, type PropConfig } from "@/lib/components-data"
import { CodeBlock } from "@/components/code-block"
import { PropsEditor } from "@/components/props-editor"
import { motion, AnimatePresence } from "framer-motion"

export default function ComponentViewerPageClient({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
    const [installTab, setInstallTab] = useState<'npm' | 'yarn' | 'pnpm' | 'bun'>('npm')
    const [language, setLanguage] = useState<'ts' | 'js'>('ts')
    const [previewKey, setPreviewKey] = useState(0)
    const [loading, setLoading] = useState(true)

    // Dynamically loaded data
    const [entry, setEntry] = useState<ComponentEntry | null>(null)

    // Check if component exists in the lightweight metadata
    const componentMeta = componentsList.find(c => c.slug === slug)

    // Load the full component entry (preview, props, etc.) on slug change
    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        setEntry(null)

        loadComponentEntry(slug).then(loaded => {
            setEntry(loaded)
            setLoading(false)
        })
    }, [slug])

    // Fetch static, bundled component code synchronously
    const codeData = activeTab === 'code' ? loadComponentCode(slug) : null

    // Dynamic props state — derived from entry
    const editable = entry?.props?.filter(p => p.isEditable) || []
    const defaultValues = editable.reduce((acc, prop) => {
        acc[prop.name] = prop.default
        return acc
    }, {} as Record<string, any>)

    const [propValues, setPropValues] = useState<Record<string, any>>({})

    // Reset prop values when entry changes
    useEffect(() => {
        if (entry) {
            const editableProps = entry.props?.filter(p => p.isEditable) || []
            const defaults = editableProps.reduce((acc, prop) => {
                acc[prop.name] = prop.default
                return acc
            }, {} as Record<string, any>)
            setPropValues(defaults)
        }
    }, [entry])

    const component = componentMeta!
    const DynamicPreview = entry?.preview
    const props = entry?.props
    const dependencies = entry?.dependencies
    const usageCode = entry?.usageCode

    const handlePropChange = (name: string, value: any) => {
        setPropValues(prev => ({ ...prev, [name]: value }))
    }

    const resetProps = () => {
        setPropValues(defaultValues)
    }

    const rerunAnimation = () => {
        setPreviewKey(prev => prev + 1)
    }

    if (!componentMeta) {
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

    // Skeleton loading state
    if (loading) {
        return (
            <div className="animate-pulse">
                {/* Breadcrumb skeleton */}
                <div className="flex items-center gap-2 mb-8">
                    <div className="h-4 w-24 rounded-md bg-white/6" />
                    <div className="h-3 w-3 rounded bg-white/4" />
                    <div className="h-4 w-32 rounded-md bg-white/8" />
                </div>

                {/* Title skeleton */}
                <div className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-10 w-64 rounded-xl bg-white/6" />
                        <div className="h-7 w-24 rounded-full bg-indigo-500/10" />
                    </div>
                    <div className="h-5 w-96 rounded-md bg-white/4" />
                </div>

                {/* Tab bar skeleton */}
                <div className="flex items-center gap-4 mb-8 border-b border-white/6 pb-3">
                    <div className="h-5 w-20 rounded-md bg-white/6" />
                    <div className="h-5 w-16 rounded-md bg-white/4" />
                </div>

                {/* Preview area skeleton */}
                <div className="rounded-2xl border border-white/8 bg-[#060010] overflow-hidden">
                    <div className="min-h-[460px] flex items-center justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-white/4 border border-white/6" />
                            <div className="h-4 w-40 rounded-md bg-white/4" />
                        </div>
                    </div>
                </div>

                {/* Playground skeleton */}
                <div className="mt-8 rounded-2xl border border-white/8 bg-white/2 overflow-hidden">
                    <div className="px-6 py-4 border-b border-white/6 bg-white/2 flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-indigo-500/10" />
                        <div className="h-4 w-24 rounded-md bg-white/6" />
                    </div>
                    <div className="p-6 grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <div className="h-3 w-16 rounded bg-white/6" />
                            <div className="h-10 w-full rounded-lg bg-white/4" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-3 w-20 rounded bg-white/6" />
                            <div className="h-10 w-full rounded-lg bg-white/4" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-3 w-14 rounded bg-white/6" />
                            <div className="h-10 w-full rounded-lg bg-white/4" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-3 w-18 rounded bg-white/6" />
                            <div className="h-10 w-full rounded-lg bg-white/4" />
                        </div>
                    </div>
                </div>

                {/* Props table skeleton */}
                <div className="mt-14">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-9 h-9 rounded-xl bg-indigo-500/10" />
                        <div className="h-5 w-16 rounded-md bg-white/6" />
                    </div>
                    <div className="space-y-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="grid grid-cols-3 gap-4 px-5 py-3.5 rounded-xl bg-white/2 border border-white/6">
                                <div className="h-4 w-20 rounded bg-white/6" />
                                <div className="h-4 w-16 rounded bg-white/4" />
                                <div className="h-4 w-24 rounded bg-white/4" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {/* Breadcrumb */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 text-sm text-neutral-500 mb-8"
            >
                <Link href="/components/blur-reveal" className="hover:text-white transition-colors font-heading">Components</Link>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                <span className="text-indigo-300 font-medium font-heading">{component.name}</span>
            </motion.div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mb-10"
            >
                <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white font-heading tracking-tight">{component.name}</h1>
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-semibold text-indigo-300 flex items-center gap-1.5 font-heading uppercase tracking-wider shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                        <Sparkles className="w-3 h-3 text-indigo-400" />
                        Premium
                    </span>
                </div>
                <p className="text-neutral-400 text-lg font-light max-w-2xl leading-relaxed">
                    {component.description}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 p-4 sm:p-5 rounded-2xl bg-white/2 border border-white/6 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
                    <div className="absolute inset-0 bg-linear-to-r from-indigo-500/5 via-purple-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative flex items-start sm:items-center gap-4">
                        <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)] group-hover:scale-110 transition-transform duration-500">
                            <Bug className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div>
                            <p className="text-sm text-neutral-200 font-medium tracking-wide">Spot a bug or have a request?</p>
                            <p className="text-xs text-neutral-400 mt-1 leading-relaxed max-w-md">Help us improve MeetUI by reporting issues to our GitHub repository.</p>
                        </div>
                    </div>
                    <a
                        href={`https://github.com/meetdarji006/meet-ui/issues/new?title=[Bug]:%20${encodeURIComponent(component.name)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="relative z-10 w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-indigo-500/10 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-indigo-500/30 whitespace-nowrap group/btn"
                        title="Report an issue with this component"
                    >
                        Report Issue
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </motion.div>

            {/* Tabs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-between mb-8 border-b border-white/6"
            >
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setActiveTab('preview')}
                        className={`relative flex items-center gap-2 px-3 sm:px-5 py-3 text-sm font-heading font-semibold tracking-wide transition-all duration-200 ${activeTab === 'preview'
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
                        className={`relative flex items-center gap-2 px-3 sm:px-5 py-3 text-sm font-heading font-semibold tracking-wide transition-all duration-200 ${activeTab === 'code'
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
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                {activeTab === 'preview' ? (
                    <div className="space-y-8">
                        {/* Preview Area */}
                        <div className="relative group">
                            {/* Gradient border glow - always slightly visible, stronger on hover */}
                            <div className="absolute -inset-px bg-linear-to-r from-indigo-500/20 via-purple-500/30 to-indigo-500/20 rounded-2xl blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

                            <div className="relative w-full rounded-2xl overflow-hidden border border-white/8 bg-[#060010]">

                                {/* Preview content area */}
                                <div className="relative min-h-[460px] flex flex-col items-center justify-center">

                                    {/* Layered background */}
                                    {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0a0018_0%,#040008_70%)]" /> */}

                                    {/* dot grid pattern */}
                                    <div className="absolute inset-0 dot-grid opacity-40" />

                                    {/* Center glow */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.06),transparent_60%)]" />

                                    {/* Rerun Button */}
                                    <button
                                        onClick={rerunAnimation}
                                        title="Rerun Animation"
                                        className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-105 active:scale-95 backdrop-blur-sm"
                                    >
                                        <RotateCw className="w-4 h-4" />
                                    </button>

                                    <div className="relative z-10 w-full flex items-center justify-center" key={previewKey}>
                                        {DynamicPreview ? DynamicPreview(propValues) : <div className="text-neutral-500">Preview not available</div>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Props Editor */}
                        {editable.length > 0 && (
                            <div className="relative group/playground">
                                <div className="absolute -inset-px bg-linear-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-sm opacity-0 group-hover/playground:opacity-100 transition-opacity duration-700" />
                                <div className="relative rounded-2xl bg-white/2 border border-white/8 overflow-hidden hover:border-white/12 transition-colors">
                                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/6 bg-white/2">
                                        <h3 className="text-sm font-semibold text-white flex items-center gap-2.5 font-heading">
                                            <div className="w-7 h-7 rounded-lg bg-indigo-500/15 flex items-center justify-center border border-indigo-500/25">
                                                <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                                            </div>
                                            Playground
                                        </h3>
                                        <button
                                            onClick={resetProps}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white text-xs font-medium transition-all border border-white/6 hover:border-white/10"
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
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="relative">
                        <div className="absolute -inset-px bg-linear-to-r from-indigo-500/20 to-purple-500/20 rounded-xl opacity-30" />
                        <CodeBlock
                            code={codeData ? (codeData as any)[language] : '// Code not available'}
                            language={language === 'ts' ? 'tsx' : 'jsx'}
                        />
                    </div>
                )}
            </motion.div>

            {/* Props Section */}
            {props && props.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-14"
                >
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3 font-heading">
                        <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500/15 to-purple-500/15 flex items-center justify-center border border-indigo-500/25">
                            <Layers className="w-4 h-4 text-indigo-400" />
                        </div>
                        Props
                    </h2>
                    <div className="w-full overflow-x-auto pb-4 -mb-4">
                        <div className="min-w-[600px] space-y-2">
                            {/* Header row */}
                            <div className="grid grid-cols-6 gap-4 px-5 py-2.5 text-[11px] font-semibold text-neutral-500 uppercase tracking-wider font-heading">
                                <span className="col-span-1">Name</span>
                                <span className="col-span-1">Type</span>
                                <span className="col-span-1">Default</span>
                                <span className="col-span-1">Min</span>
                                <span className="col-span-1">Max</span>
                                <span className="col-span-1">Description</span>
                            </div>
                            {/* Prop rows */}
                            {props.map((prop: any, i: number) => (
                                <div
                                    key={prop.name}
                                    className="group/row grid grid-cols-6 gap-4 px-5 py-3.5 rounded-xl bg-white/2 border border-white/6 hover:border-indigo-500/20 hover:bg-indigo-500/5 transition-all duration-300"
                                >
                                    <span className="font-mono text-sm text-indigo-300 font-medium col-span-1 group-hover/row:text-indigo-200 transition-colors">{prop.name}</span>
                                    <span className="font-mono text-sm text-purple-300/80 col-span-1">{prop.type}</span>
                                    <span className="font-mono text-sm text-neutral-500 col-span-1 group-hover/row:text-neutral-400 transition-colors">{prop.default !== undefined ? String(prop.default) : "-"}</span>
                                    <span className="font-mono text-sm text-neutral-500 col-span-1">{prop.min !== undefined ? String(prop.min) : "-"}</span>
                                    <span className="font-mono text-sm text-neutral-500 col-span-1">{prop.max !== undefined ? String(prop.max) : "-"}</span>
                                    <span className="font-sans text-sm text-neutral-400 col-span-1 leading-relaxed">{prop.description || "-"}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Installation Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-14"
            >
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3 font-heading">
                    <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500/15 to-purple-500/15 flex items-center justify-center border border-indigo-500/25">
                        <Package className="w-4 h-4 text-indigo-400" />
                    </div>
                    Installation
                </h2>

                {/* Tailwind Prerequisite Caution */}
                <div className="mb-10 p-5 rounded-2xl bg-amber-500/5 border border-amber-500/15 flex flex-col sm:flex-row gap-4 items-start sm:items-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-linear-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="shrink-0 w-11 h-11 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:scale-110 transition-transform duration-500">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                    </div>
                    <div className="relative">
                        <h4 className="text-amber-200/90 font-semibold mb-0.5 tracking-wide">Tailwind CSS Required</h4>
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                            All components are built with Tailwind CSS. Please ensure it is installed and configured in your project.
                            <a
                                href="https://tailwindcss.com/docs/installation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1.5 text-amber-500/80 hover:text-amber-400 font-medium underline underline-offset-4 decoration-amber-500/30 transition-colors"
                            >
                                View Installation Guide
                                <ArrowUpRight className="inline-block w-3 h-3 ml-0.5 opacity-70" />
                            </a>
                        </p>
                    </div>
                </div>

                <div className="space-y-12">
                    {/* CLI Option */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3 font-heading">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-neutral-300 text-xs text-center border border-white/20">1</span>
                            Option 1: CLI (Recommended)
                        </h3>
                        <p className="text-neutral-400 text-sm mb-4 ml-9">
                            Run this command to automatically install the component and its dependencies into your project.
                        </p>
                        <div className="ml-9">
                            <CodeBlock
                                code={`npx @meetdarji006/meetui add ${slug}`}
                                language="bash"
                            />
                        </div>
                    </div>

                    {/* Manual Option */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3 font-heading">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-neutral-300 text-xs text-center border border-white/20">2</span>
                            Option 2: Manual
                        </h3>

                        <div className="space-y-8 ml-9">
                            {/* Step 1: Install dependencies */}
                            {dependencies && dependencies.length > 0 && (
                                <div>
                                    <h4 className="text-white font-medium mb-3 text-sm">Step 1: Install dependencies</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-1.5 p-1 bg-white/3 border border-white/6 rounded-lg w-fit">
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

                            {/* Step 2: Add utility function */}
                            <div>
                                <h4 className="text-white font-medium mb-2 text-sm">Step {dependencies && dependencies.length > 0 ? '2' : '1'}: Add utility function</h4>
                                <p className="text-neutral-500 text-sm mb-4">
                                    Add this helper to <code className="text-indigo-300/80 bg-white/4 px-1.5 py-0.5 rounded text-xs">@/lib/utils.ts</code> if you haven&apos;t already.
                                </p>
                                <CodeBlock
                                    code={`import { ClassValue, clsx } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}`}
                                    language="typescript"
                                />
                            </div>

                            {/* Step 3: Copy component code */}
                            <div>
                                <h4 className="text-white font-medium mb-2 text-sm">Step {dependencies && dependencies.length > 0 ? '3' : '2'}: Copy the source code</h4>
                                <p className="text-neutral-500 text-sm">
                                    Switch to the <strong>Code</strong> tab at the top of the page, create a new file <code className="text-indigo-300/80 bg-white/4 px-1.5 py-0.5 rounded text-xs">{slug}.tsx</code> in your components folder, and paste the code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Usage Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-14"
            >
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
            </motion.div>
        </>
    )
}
