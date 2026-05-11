"use client";

import React from 'react';
import MaskText from './MaskText';
import { motion } from 'framer-motion';

export default function Hero() {
    const marqueeText = " • BACKEND ENGINEER • FULLSTACK DEVELOPER • MOBILE DEVELOPMENT • CLOUD ARCHITECTURE • SYSTEM DESIGN • API ENGINEERING";

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
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                className="relative group cursor-default flex flex-col items-center leading-[0.8] my-8"
            >
                {/* 1. Micro-Typography: Identitas Rahasia */}
                <div className="absolute -top-12 left-4 md:-top-16 md:left-0 text-[10px] md:text-sm font-mono text-cyan-400 tracking-widest opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-purple-400">const</span> <span className="text-white">identity</span> = <span className="text-green-400">"Backend Engineer disguised as a Frontend Developer"</span>;
                </div>

                {/* 2. Baris Pertama: Nama (Warna Putih) */}
                <div className="relative w-full text-left md:text-center z-10">
                    <h1 className="text-[14vw] md:text-[13vw] font-black tracking-tighter text-transparent select-none transition-all duration-700 group-hover:tracking-wide"
                        style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)" }}>
                        JOEVAN
                    </h1>
                    <h1 className="absolute inset-0 text-[14vw] md:text-[13vw] font-black tracking-tighter text-white opacity-0 group-hover:opacity-100 transition-all duration-700 select-none pointer-events-none blur-sm group-hover:blur-0 group-hover:tracking-wide"
                        style={{ textShadow: "0 0 40px rgba(255,255,255,0.6)" }}>
                        JOEVAN
                    </h1>
                </div>

                {/* 3. Baris Kedua: Title (Warna Cyan) */}
                <div className="relative -mt-4 md:-mt-6 ml-12 md:ml-40 w-full text-left md:text-center z-20">
                    <h1 className="text-[14vw] md:text-[13vw] font-black tracking-tighter text-transparent select-none transition-all duration-700 group-hover:tracking-widest"
                        style={{ WebkitTextStroke: "2px rgba(34,211,238,0.5)" }}>
                        ENGINEER
                    </h1>
                    <h1 className="absolute inset-0 text-[14vw] md:text-[13vw] font-black tracking-tighter text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-700 select-none pointer-events-none blur-sm group-hover:blur-0 group-hover:tracking-widest"
                        style={{ textShadow: "0 0 40px rgba(34,211,238,0.6)" }}>
                        ENGINEER
                    </h1>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-12 max-w-3xl px-6 relative z-20"
            >
                <h2 className="text-xl md:text-4xl font-light text-white leading-tight mb-6">
                    Architecting <span className="text-cyan-400 font-medium font-serif italic">robust</span> backend systems & <br className="hidden md:block" /> crafting <span className="text-purple-400 font-medium font-serif italic">seamless</span> mobile and web experiences.
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
