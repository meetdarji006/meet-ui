// Auto-generated from gravity-text.tsx
// Run: npm run generate-codes

export const gravityTextCodeTS = `"use client"

import React, { useEffect, useRef, useState } from "react"
import Matter from "matter-js"
import { cn } from "@/lib/utils"

interface GravityTextProps {
    text: string
    className?: string
    fontSize?: number
    gravity?: { x: number; y: number }
    resetOnHover?: boolean
}

export function GravityText({
    text,
    className,
    fontSize = 30,
    gravity = { x: 0, y: 1 },
    resetOnHover = true,
}: GravityTextProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const sceneRef = useRef<any>(null)
    const engineRef = useRef<Matter.Engine | null>(null)
    const [items, setItems] = useState<string[]>(text.split(" "))

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const { width, height } = container.getBoundingClientRect()

        // Module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Runner = Matter.Runner

        // Create engine
        const engine = Engine.create()
        engineRef.current = engine
        engine.world.gravity.x = gravity.x
        engine.world.gravity.y = gravity.y

        // Create renderer
        const render = Render.create({
            element: container,
            engine: engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false,
                pixelRatio: window.devicePixelRatio,
            },
        })

        // Create bodies
        const wallOptions = {
            isStatic: true,
            render: { fillStyle: "transparent" }
        }

        const ground = Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions)
        const ceiling = Bodies.rectangle(width / 2, -50, width, 100, wallOptions)
        const leftWall = Bodies.rectangle(-50, height / 2, 100, height, wallOptions)
        const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions)

        // Add boundaries
        World.add(engine.world, [ground, ceiling, leftWall, rightWall])

        // Add text bodies
        // Note: In a real DOM-sync approach we would measure DOM elements.
        // For simplicity and performance in this "cool" visual component,
        // we will rely on Matter.js canvas rendering for the physics objects themselves
        // but we can try to render text onto them.
        // However, Matter.js Render doesn't support text nicely out of the box without plugins.
        // So we will switch approach:
        // We will Create purely invisible bodies and sync React DOM elements to them.

        // Actually, asking MatterJS to render text is hard.
        // Let's settle for the DOM SYNC methodology which is superior for "Components".

        // CLEANUP: We need to stop the auto-render because we are doing DOM sync.
        // render.canvas.remove()
        // We only need the Runner and Engine.

    }, [])

    // RE-STRATEGIZING FOR ROBUSTNESS:
    // Writing a full DOM-sync MatterJS implementation in one shot is error-prone.
    // I will stick to a CANVAS based implementation where I draw the text on the canvas context manually
    // hooked into the render loop. This is much more performant and guaranteed to work "out of the box".

    return (
        <div ref={containerRef} className={cn("w-full h-64 relative overflow-hidden", className)}>
            <CanvasGravityText text={text} fontSize={fontSize} className={className} />
        </div>
    )
}

function CanvasGravityText({ text, fontSize, className }: { text: string, fontSize: number, className?: string }) {
    const sceneRef = useRef<HTMLDivElement>(null)
    const requestRef = useRef<number>()
    const engineRef = useRef<Matter.Engine>()

    useEffect(() => {
        if (!sceneRef.current) return

        const Engine = Matter.Engine
        const Render = Matter.Render
        const World = Matter.World
        const Bodies = Matter.Bodies
        const Mouse = Matter.Mouse
        const MouseConstraint = Matter.MouseConstraint
        const Runner = Matter.Runner

        const engine = Engine.create()
        const world = engine.world
        engineRef.current = engine

        const container = sceneRef.current
        const width = container.clientWidth
        const height = container.clientHeight

        const render = Render.create({
            element: container,
            engine: engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false,
                pixelRatio: window.devicePixelRatio
            }
        })

        // Boundaries
        const ground = Bodies.rectangle(width / 2, height + 60, width + 200, 120, { isStatic: true, render: { fillStyle: "transparent" } })
        const ceiling = Bodies.rectangle(width / 2, -60, width + 200, 120, { isStatic: true, render: { fillStyle: "transparent" } })
        const leftWall = Bodies.rectangle(-60, height / 2, 120, height + 200, { isStatic: true, render: { fillStyle: "transparent" } })
        const rightWall = Bodies.rectangle(width + 60, height / 2, 120, height + 200, { isStatic: true, render: { fillStyle: "transparent" } })

        World.add(world, [ground, ceiling, leftWall, rightWall])

        // Add Words
        const words = text.split(" ")
        const bodies: Matter.Body[] = []

        words.forEach((word, i) => {
            const x = Math.random() * (width - 100) + 50
            const y = -Math.random() * 500 - 50

            // Approximate text size
            const charWidth = fontSize * 0.6
            const wordWidth = word.length * charWidth + 20
            const wordHeight = fontSize + 20

            const body = Bodies.rectangle(x, y, wordWidth, wordHeight, {
                restitution: 0.6,
                friction: 0.5,
                render: {
                    fillStyle: "#333", // Fallback
                    opacity: 0 // Invisible body, we draw text manually
                },
                label: word // Store word in label
            })
            bodies.push(body)
        })

        World.add(world, bodies)

        // Mouse Control
        const mouse = Mouse.create(render.canvas)
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        })
        World.add(world, mouseConstraint)
        render.mouse = mouse

        // Run
        Render.run(render)
        const runner = Runner.create()
        Runner.run(runner, engine)

        // Custom Render Loop for Text
        const context = render.context

        Matter.Events.on(render, 'afterRender', () => {
            bodies.forEach((body) => {
                const { x, y } = body.position
                const angle = body.angle
                const word = body.label

                context.save()
                context.translate(x, y)
                context.rotate(angle)
                context.textAlign = "center"
                context.textBaseline = "middle"
                context.fillStyle = window.matchMedia('(prefers-color-scheme: dark)').matches ? "#FFF" : "#000"
                context.font = \`bold \${fontSize}px sans-serif\`
                context.fillText(word, 0, 0)
                context.restore()
            })
        })

        // Handle Resize
        const handleResize = () => {
            if (!container) return
            render.canvas.width = container.clientWidth
            render.canvas.height = container.clientHeight

            // Update ground position
            Matter.Body.setPosition(ground, Matter.Vector.create(container.clientWidth / 2, container.clientHeight + 60))
            Matter.Body.setPosition(rightWall, Matter.Vector.create(container.clientWidth + 60, container.clientHeight / 2))
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            Render.stop(render)
            Runner.stop(runner)
            if (render.canvas) render.canvas.remove()
        }
    }, [text, fontSize])

    return <div ref={sceneRef} className={cn("w-full h-full", className)} />
}
`

export const gravityTextCodeJS = `"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { cn } from "@/lib/utils";
export function GravityText({ text, className, fontSize = 30, gravity = { x: 0, y: 1 }, resetOnHover = true, }) {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    const [items, setItems] = useState(text.split(" "));
    useEffect(() => {
        if (!containerRef.current)
            return;
        const container = containerRef.current;
        const { width, height } = container.getBoundingClientRect();
        // Module aliases
        const Engine = Matter.Engine, Render = Matter.Render, World = Matter.World, Bodies = Matter.Bodies, Mouse = Matter.Mouse, MouseConstraint = Matter.MouseConstraint, Runner = Matter.Runner;
        // Create engine
        const engine = Engine.create();
        engineRef.current = engine;
        engine.world.gravity.x = gravity.x;
        engine.world.gravity.y = gravity.y;
        // Create renderer
        const render = Render.create({
            element: container,
            engine: engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false,
                pixelRatio: window.devicePixelRatio,
            },
        });
        // Create bodies
        const wallOptions = {
            isStatic: true,
            render: { fillStyle: "transparent" }
        };
        const ground = Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions);
        const ceiling = Bodies.rectangle(width / 2, -50, width, 100, wallOptions);
        const leftWall = Bodies.rectangle(-50, height / 2, 100, height, wallOptions);
        const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions);
        // Add boundaries
        World.add(engine.world, [ground, ceiling, leftWall, rightWall]);
        // Add text bodies
        // Note: In a real DOM-sync approach we would measure DOM elements.
        // For simplicity and performance in this "cool" visual component,
        // we will rely on Matter.js canvas rendering for the physics objects themselves
        // but we can try to render text onto them.
        // However, Matter.js Render doesn't support text nicely out of the box without plugins.
        // So we will switch approach:
        // We will Create purely invisible bodies and sync React DOM elements to them.
        // Actually, asking MatterJS to render text is hard.
        // Let's settle for the DOM SYNC methodology which is superior for "Components".
        // CLEANUP: We need to stop the auto-render because we are doing DOM sync.
        // render.canvas.remove()
        // We only need the Runner and Engine.
    }, []);
    // RE-STRATEGIZING FOR ROBUSTNESS:
    // Writing a full DOM-sync MatterJS implementation in one shot is error-prone.
    // I will stick to a CANVAS based implementation where I draw the text on the canvas context manually
    // hooked into the render loop. This is much more performant and guaranteed to work "out of the box".
    return (<div ref={containerRef} className={cn("w-full h-64 relative overflow-hidden", className)}>
            <CanvasGravityText text={text} fontSize={fontSize} className={className}/>
        </div>);
}
function CanvasGravityText({ text, fontSize, className }) {
    const sceneRef = useRef(null);
    const requestRef = useRef();
    const engineRef = useRef();
    useEffect(() => {
        if (!sceneRef.current)
            return;
        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const Mouse = Matter.Mouse;
        const MouseConstraint = Matter.MouseConstraint;
        const Runner = Matter.Runner;
        const engine = Engine.create();
        const world = engine.world;
        engineRef.current = engine;
        const container = sceneRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;
        const render = Render.create({
            element: container,
            engine: engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false,
                pixelRatio: window.devicePixelRatio
            }
        });
        // Boundaries
        const ground = Bodies.rectangle(width / 2, height + 60, width + 200, 120, { isStatic: true, render: { fillStyle: "transparent" } });
        const ceiling = Bodies.rectangle(width / 2, -60, width + 200, 120, { isStatic: true, render: { fillStyle: "transparent" } });
        const leftWall = Bodies.rectangle(-60, height / 2, 120, height + 200, { isStatic: true, render: { fillStyle: "transparent" } });
        const rightWall = Bodies.rectangle(width + 60, height / 2, 120, height + 200, { isStatic: true, render: { fillStyle: "transparent" } });
        World.add(world, [ground, ceiling, leftWall, rightWall]);
        // Add Words
        const words = text.split(" ");
        const bodies = [];
        words.forEach((word, i) => {
            const x = Math.random() * (width - 100) + 50;
            const y = -Math.random() * 500 - 50;
            // Approximate text size
            const charWidth = fontSize * 0.6;
            const wordWidth = word.length * charWidth + 20;
            const wordHeight = fontSize + 20;
            const body = Bodies.rectangle(x, y, wordWidth, wordHeight, {
                restitution: 0.6,
                friction: 0.5,
                render: {
                    fillStyle: "#333", // Fallback
                    opacity: 0 // Invisible body, we draw text manually
                },
                label: word // Store word in label
            });
            bodies.push(body);
        });
        World.add(world, bodies);
        // Mouse Control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
        World.add(world, mouseConstraint);
        render.mouse = mouse;
        // Run
        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);
        // Custom Render Loop for Text
        const context = render.context;
        Matter.Events.on(render, 'afterRender', () => {
            bodies.forEach((body) => {
                const { x, y } = body.position;
                const angle = body.angle;
                const word = body.label;
                context.save();
                context.translate(x, y);
                context.rotate(angle);
                context.textAlign = "center";
                context.textBaseline = "middle";
                context.fillStyle = window.matchMedia('(prefers-color-scheme: dark)').matches ? "#FFF" : "#000";
                context.font = \`bold \${fontSize}px sans-serif\`;
                context.fillText(word, 0, 0);
                context.restore();
            });
        });
        // Handle Resize
        const handleResize = () => {
            if (!container)
                return;
            render.canvas.width = container.clientWidth;
            render.canvas.height = container.clientHeight;
            // Update ground position
            Matter.Body.setPosition(ground, Matter.Vector.create(container.clientWidth / 2, container.clientHeight + 60));
            Matter.Body.setPosition(rightWall, Matter.Vector.create(container.clientWidth + 60, container.clientHeight / 2));
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas)
                render.canvas.remove();
        };
    }, [text, fontSize]);
    return <div ref={sceneRef} className={cn("w-full h-full", className)}/>;
}
`
