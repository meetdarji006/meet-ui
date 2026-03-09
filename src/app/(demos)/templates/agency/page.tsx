"use client"

import React, { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Environment, ContactShadows } from "@react-three/drei"
import * as THREE from "three"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, Menu, ArrowRight, Crosshair, Globe, Zap, Circle } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

// -----------------------------------------------------------------------------
// 3D Components
// -----------------------------------------------------------------------------

const DistortedSphere = () => {
    const mesh = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (!mesh.current) return
        const t = state.clock.getElapsedTime()

        // Gentle rotation
        mesh.current.rotation.x = t * 0.2
        mesh.current.rotation.y = t * 0.3

        // Mouse follow effect (subtle)
        const mouseX = state.mouse.x * 0.5
        const mouseY = state.mouse.y * 0.5
        mesh.current.rotation.x += (mouseY - mesh.current.rotation.x) * 0.05
        mesh.current.rotation.y += (mouseX - mesh.current.rotation.y) * 0.05
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh
                ref={mesh}
                scale={2.2}
            >
                <icosahedronGeometry args={[1, 12]} />
                <MeshDistortMaterial
                    color="#1a1a1a" // Dark metallic charcoal
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={0.8}
                    roughness={0.2}
                    distort={0.4}
                    speed={2}
                />
            </mesh>
        </Float>
    )
}

const HeroScene = () => {
    return (
        <div className="absolute inset-0 z-0 h-screen w-full mix-blend-screen pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 35 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <DistortedSphere />

                <Environment preset="night" />
                {/* <ContactShadows resolution={512} scale={20} blur={2} opacity={0.5} far={10} color="#000000" /> */}
            </Canvas>
        </div>
    )
}

// -----------------------------------------------------------------------------
// UI Components
// -----------------------------------------------------------------------------

const GrainOverlay = () => (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay">
        <svg className="h-full w-full">
            <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
    </div>
)

const Navigation = () => (
    <nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-40 text-black mix-blend-difference">
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-current animate-pulse"></div>
            <div className="text-sm font-bold tracking-widest font-mono">AGENCY_OS v2.0</div>
        </div>
        <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] font-mono">
            {['Index', 'Studio', 'Projects', 'Contact'].map((item) => (
                <a key={item} href="#" className="relative hover:opacity-50 transition-opacity group">
                    [{item}]
                </a>
            ))}
        </div>
        <button className="md:hidden">
            <Menu className="w-6 h-6 text-white" />
        </button>
    </nav>
)

const HudElements = () => {
    const timeRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeRef.current) {
                const d = new Date()
                timeRef.current.innerText = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}:GMT`
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="pointer-events-none fixed inset-0 z-20 px-6 md:px-12 py-8 text-[#888] font-mono text-[10px] uppercase tracking-widest flex flex-col justify-between select-none">
            {/* Top Corners handled by Nav */}
            <div className="h-full w-full border-x border-white/5 relative">
                {/* Crosshairs */}
                <div className="absolute top-1/4 left-0 w-4 h-px bg-white/20"></div>
                <div className="absolute top-1/4 right-0 w-4 h-px bg-white/20"></div>
                <div className="absolute bottom-1/4 left-0 w-4 h-px bg-white/20"></div>
                <div className="absolute bottom-1/4 right-0 w-4 h-px bg-white/20"></div>

                {/* Center Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-white/5"></div>
            </div>

            <div className="flex justify-between items-end w-full">
                <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-2"><Zap className="w-3 h-3 text-[#CCFF00]" /> SYSTEM_READY</span>
                    <span>COORDS: 34.0522° N, 118.2437° W</span>
                </div>
                <div className="flex flex-col items-end gap-1 text-right">
                    <span ref={timeRef}>00:00:00:GMT</span>
                    <span className="text-[#CCFF00]">SCROLL_VELOCITY: 0.0</span>
                </div>
            </div>
        </div>
    )
}

const Hero = () => {
    const container = useRef(null)
    const titleLines = useRef<(HTMLHeadingElement | null)[]>([])

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from(titleLines.current, {
            yPercent: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.5
        })

    }, { scope: container })

    const addToRefs = (el: HTMLHeadingElement | null) => {
        if (el && !titleLines.current.includes(el)) {
            titleLines.current.push(el)
        }
    }

    return (
        <section ref={container} className="relative h-screen flex flex-col justify-center items-center bg-[#0a0a0a] text-white overflow-hidden selection:bg-[#CCFF00] selection:text-black font-heading">
            <HeroScene />
            <HudElements />

            <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center pointer-events-none">
                <div className="overflow-hidden">
                    <h1 ref={addToRefs} className="text-[14vw] font-bold tracking-tighter leading-[0.8] mix-blend-exclusion">
                        DIGITAL
                    </h1>
                </div>

                <div className="w-full flex justify-between items-center px-[5vw] py-4 md:py-8 mix-blend-overlay opacity-50">
                    <span className="h-px w-full bg-white block"></span>
                    <div className="shrink-0 px-8 flex items-center gap-4">
                        <Globe className="w-4 h-4 animate-spin-slow" />
                        <span className="font-mono text-sm tracking-widest">WORLDWIDE</span>
                    </div>
                    <span className="h-px w-full bg-white block"></span>
                </div>

                <div className="overflow-hidden">
                    <h1 ref={addToRefs} className="text-[14vw] font-bold tracking-tighter leading-[0.8] text-transparent stroke-text hover:text-[#CCFF00] transition-colors duration-300 cursor-none">
                        EXPERIENCE
                    </h1>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 z-20">
                <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#CCFF00]"></div>
                {/* <span className="font-mono text-[10px] text-[#CCFF00]">INITIATING</span> */}
            </div>
        </section>
    )
}

const Marquee = () => {
    const marqueeRef = useRef(null)

    useGSAP(() => {
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            duration: 15,
            ease: "linear",
        })
    })

    return (
        <div className="bg-[#CCFF00] py-3 overflow-hidden whitespace-nowrap z-20 relative border-y border-black">
            <div ref={marqueeRef} className="inline-flex gap-8 text-sm font-bold font-mono uppercase tracking-tight text-black">
                {Array(20).fill("Strategy // Design // Development // Motion // ").map((text, i) => (
                    <span key={i} className="flex items-center gap-2">
                        {text} <div className="w-2 h-2 bg-black rounded-full"></div>
                    </span>
                ))}
            </div>
        </div>
    )
}

const HorizontalScrollWork = () => {
    const sectionRef = useRef(null)
    const triggerRef = useRef(null)

    useGSAP(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: "-200vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "3000 top",
                scrub: 0.6,
                pin: true,
            }
        })
        return () => {
            pin.kill()
        }
    }, { scope: triggerRef })

    return (
        <section ref={triggerRef} className="overflow-hidden bg-[#0a0a0a] text-white">
            <div ref={sectionRef} className="h-screen w-[300vw] flex flex-row relative">

                {/* Panel 1: Intro */}
                <div className="w-screen h-full flex flex-col justify-center px-12 md:px-32 border-r border-white/10 relative">
                    <div className="absolute top-12 left-12"><Circle className="w-4 h-4 text-[#CCFF00]" fill="currentColor" /></div>

                    <span className="font-mono text-[#CCFF00] text-sm mb-6 tracking-widest">[ SELECTED_WORKS ]</span>
                    <h2 className="text-7xl md:text-9xl font-bold tracking-tighter mb-12 font-heading">
                        RECENT <br /> OUTPUT
                    </h2>
                    <p className="max-w-md text-neutral-400 font-mono text-sm leading-relaxed border-l border-[#CCFF00] pl-6">
                        // A COLLECTION OF DIGITAL ARTIFACTS
                        <br />
                        // EXPLORING THE BOUNDARIES OF INTERACTION
                    </p>
                </div>

                {/* Panel 2: Project A */}
                <div className="w-screen h-full flex items-center justify-center relative group overflow-hidden border-r border-white/10">
                    <div className="absolute inset-x-12 inset-y-24">
                        <img
                            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                            alt="Project 1"
                            className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="relative z-10 text-center mix-blend-normal">
                        <h3 className="text-8xl md:text-[10rem] font-bold text-transparent stroke-text group-hover:text-white transition-colors duration-500 font-heading">
                            NEON
                        </h3>
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <span className="px-3 py-1 bg-[#CCFF00] text-black text-xs font-mono font-bold">WEBGL</span>
                            <span className="px-3 py-1 border border-white/20 text-xs font-mono">2024</span>
                        </div>
                    </div>
                </div>

                {/* Panel 3: Project B */}
                <div className="w-screen h-full flex items-center justify-center relative group overflow-hidden">
                    <div className="absolute inset-x-12 inset-y-24">
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
                            alt="Project 2"
                            className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="relative z-10 text-center">
                        <h3 className="text-8xl md:text-[10rem] font-bold text-transparent stroke-text group-hover:text-white transition-colors duration-500 font-heading">
                            FLUX
                        </h3>
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <span className="px-3 py-1 bg-[#CCFF00] text-black text-xs font-mono font-bold">MOTION</span>
                            <span className="px-3 py-1 border border-white/20 text-xs font-mono">2023</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

const Footer = () => {
    return (
        <section className="h-[80vh] flex flex-col justify-between bg-[#0a0a0a] text-white relative px-6 md:px-12 py-12 border-t border-white/10">
            <div className="flex justify-between items-start">
                <div className="text-sm font-mono text-[#888]">
                    [ INITIATE_CONTACT ]
                </div>
                <ArrowUpRight className="w-12 h-12 text-[#CCFF00] opacity-50" />
            </div>

            <div className="text-center z-10 hover:text-[#CCFF00] transition-colors duration-500 cursor-pointer">
                <h2 className="text-[10vw] font-bold tracking-tighter leading-none font-heading">
                    GET IN TOUCH
                </h2>
                <p className="text-xl md:text-2xl font-mono mt-4 text-[#888]">HELLO@AGENCY.OS</p>
            </div>

            <div className="w-full flex justify-between text-xs font-mono text-[#444] uppercase tracking-widest border-t border-white/5 pt-8">
                <div className="flex gap-8">
                    <span>INSTAGRAM</span>
                    <span>LINKEDIN</span>
                    <span>TWITTER</span>
                </div>
                <span>© 2025</span>
            </div>
        </section>
    )
}

export default function AgencyTemplate() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="bg-[#0a0a0a] min-h-screen cursor-crosshair font-sans">
            <style jsx global>{`
                .stroke-text {
                    -webkit-text-stroke: 2px rgba(255,255,255,0.2);
                }
                .text-stroke:hover {
                    -webkit-text-stroke: 2px #fff;
                    color: transparent;
                }
                .font-heading {
                    font-family: var(--font-heading), sans-serif;
                }
                @keyframes spin-slow {
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
            <GrainOverlay />
            <Navigation />
            <Hero />
            <Marquee />
            <HorizontalScrollWork />
            <Footer />
        </main>
    )
}
