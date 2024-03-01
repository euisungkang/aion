"use client";
import React from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/utils/cn";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
    id?: string;
    className?: string;
    background?: string;
    particleSize?: number;
    minSize?: number;
    maxSize?: number;
    speed?: number;
    // particleColor?: string;
    particleDensity?: number;
};
export const SparklesCore = (props: ParticlesProps) => {
    const {
        id,
        className,
        background,
        minSize,
        maxSize,
        speed,
        // particleColor,
        particleDensity,
    } = props;
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    const controls = useAnimation();

    const particlesLoaded = async (container?: Container) => {
        if (container) {
            console.log(container);
            controls.start({
                opacity: 1,
                transition: {
                    duration: 1,
                },
            });
        }
    };

    const randomColors = ["#cb6bcb", "#6344f5", "#e9eaed"];

    return (
        <motion.div animate={controls} className={cn("opacity-0", className)}>
            {init && (
                <Particles
                    id={id || "tsparticles"}
                    className={cn("h-full w-full")}
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: background || "transparent",
                            },
                        },
                        fullScreen: {
                            enable: false,
                            zIndex: 1,
                        },
                        fpsLimit: 80,
                        particles: {
                            color: {
                                value: randomColors,
                            },
                            effect: {
                                close: true,
                                fill: true,
                                options: {},
                                type: {} as SingleOrMultiple<string> | undefined,
                            },
                            move: {
                                angle: {
                                    offset: 0,
                                    value: 90,
                                },
                                center: {
                                    x: 50,
                                    y: 50,
                                    mode: "percent",
                                    radius: 0,
                                },
                                decay: 0,
                                distance: {},
                                direction: "none",
                                drift: 0,
                                enable: true,
                                path: {
                                    clamp: true,
                                    delay: {
                                        value: 0,
                                    },
                                    enable: false,
                                    options: {},
                                },
                                outModes: {
                                    default: "out",
                                },
                                random: false,
                                size: false,
                                speed: {
                                    min: 0.1,
                                    max: 1,
                                },
                                straight: false,
                                trail: {
                                    enable: false,
                                    length: 10,
                                    fill: {},
                                },
                                vibrate: false,
                                warp: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    width: 400,
                                    height: 400,
                                },
                                limit: {
                                    mode: "delete",
                                    value: 0,
                                },
                                value: particleDensity || 120,
                            },
                            opacity: {
                                value: {
                                    min: 0.3,
                                    max: 0.8,
                                },
                                animation: {
                                    count: 0,
                                    enable: true,
                                    speed: speed || 2,
                                    decay: 0,
                                    delay: 0,
                                    sync: false,
                                    mode: "auto",
                                    startValue: "random",
                                    destroy: "none",
                                },
                            },
                            reduceDuplicates: false,
                            shape: {
                                close: true,
                                fill: true,
                                options: {},
                                type: "star",
                            },
                            size: {
                                value: {
                                    min: minSize || 1,
                                    max: maxSize || 3,
                                },
                            },
                            zIndex: {
                                value: 0,
                                opacityRate: 1,
                                sizeRate: 1,
                                velocityRate: 1,
                            },
                            destroy: {
                                bounds: {},
                                mode: "none",
                                split: {
                                    count: 1,
                                    factor: {
                                        value: 3,
                                    },
                                    rate: {
                                        value: {
                                            min: 4,
                                            max: 9,
                                        },
                                    },
                                    sizeOffset: true,
                                },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </motion.div>
    );
};
