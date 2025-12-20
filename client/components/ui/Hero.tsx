"use client";

import React from 'react';
import MaskText from './MaskText';
import { motion } from 'framer-motion';

export default function Hero() {
    const marqueeText = " • SOFTWARE ENGINEER • DATA SCIENTIST • CLOUD ARCHITECT • SYSTEM DESIGN • BACKEND ENGINEERING • BIG DATA ANALYTICS";

    return (
        <section className="h-screen flex flex-col items-center justify-center relative px-4 text-center z-10 w-full overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-8 flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-cyan-400/80 border border-cyan-900/30 px-4 py-2 rounded-full bg-cyan-950/10 backdrop-blur-sm"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                Available for New Projects
            </motion.div>

            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                className="relative group cursor-default leading-none"
            >
                <h1 className="text-[15vw] md:text-[16vw] font-black tracking-tighter text-transparent select-none transition-all duration-700 hover:tracking-wide"
                    style={{ WebkitTextStroke: "2px rgba(255,255,255,0.7)" }}>
                    JOEVAN
                </h1>

                <h1 className="absolute inset-0 text-[15vw] md:text-[16vw] font-black tracking-tighter text-white opacity-0 group-hover:opacity-100 transition-all duration-500 select-none pointer-events-none blur-sm group-hover:blur-0"
                    style={{ textShadow: "0 0 30px rgba(255,255,255,0.5)" }}>
                    JOEVAN
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-12 max-w-3xl px-6 relative z-20"
            >
                <h2 className="text-xl md:text-4xl font-light text-white leading-tight mb-6">
                    Building <span className="text-cyan-400 font-medium font-serif italic">robust</span> digital infrastructure & <br className="hidden md:block" /> transforming raw data into <span className="text-purple-400 font-medium font-serif italic">intelligence</span>.
                </h2>

                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto my-8"></div>

                <p className="text-sm md:text-base text-slate-400 font-mono tracking-wide">
                    ENGINEERING SCALABLE SYSTEMS FOR THE FUTURE.
                </p>
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 bg-slate-950/80 backdrop-blur-md py-4 z-30">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity
                    }}
                >
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-sm md:text-lg font-mono font-bold text-slate-500 uppercase tracking-[0.2em] px-8">
                            {marqueeText}
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-20 hidden md:block"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-20 hidden md:block"></div>

        </section>
    );
}
