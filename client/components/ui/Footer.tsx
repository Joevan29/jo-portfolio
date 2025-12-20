"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Footer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const jakartaTime = date.toLocaleTimeString("en-US", {
                timeZone: "Asia/Jakarta",
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            setTime(`${jakartaTime} WIB`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div
            className='relative h-[800px]'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed bottom-0 h-[800px] w-full z-50 overflow-hidden bg-slate-950 text-white'>

                <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950/90"></div>
                <div
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                        maskImage: 'linear-gradient(to bottom, transparent 10%, black 100%)'
                    }}
                ></div>

                <div className="relative z-10 flex flex-col justify-between h-full pt-20 pb-12 px-8 md:px-20">

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/10 pb-12">
                        <div>
                            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4">What's Next?</h3>
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight">
                                Let's build something <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">legendary.</span>
                            </h2>
                        </div>

                        <div onClick={scrollToTop}>
                            <Magnetic>
                                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300 group">
                                    <div className="relative overflow-hidden w-6 h-6 flex flex-col items-center justify-center">
                                        <svg className="w-6 h-6 transform group-hover:-translate-y-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                        <svg className="w-6 h-6 absolute top-6 transform group-hover:-translate-y-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </div>
                                </div>
                            </Magnetic>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-auto mb-12">

                        <div className="w-full">
                            <Magnetic>
                                <a href="mailto:joevanpan@outlook.com" className="block w-full border-b border-white/20 pb-4 group">
                                    <span className="text-[6vw] md:text-[5vw] font-black tracking-tighter leading-none group-hover:text-cyan-400 transition-colors">
                                        joevanpan@outlook.com
                                    </span>
                                </a>
                            </Magnetic>
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-sm font-mono text-gray-500 uppercase tracking-wider">

                        <div className='flex gap-8 text-white'>
                            <a href="https://linkedin.com/in/jvnprmnachmd" target="_blank" className="hover:text-cyan-400 transition-colors pointer-events-auto">LinkedIn</a>
                            <a href="https://github.com/Joevan29" target="_blank" className="hover:text-purple-400 transition-colors pointer-events-auto">GitHub</a>
                            <a href="/cv.pdf" target="_blank" className="hover:text-white transition-colors pointer-events-auto">Resume</a>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-end md:items-center">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span>Jakarta, ID — {time}</span>
                            </div>
                            <span>© 2024 Joevan Pramana</span>
                        </div>
                    </div>

                    <h1 className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 text-[25vw] font-black text-white/[0.03] select-none pointer-events-none whitespace-nowrap">
                        JOEVAN
                    </h1>

                </div>
            </div>
        </div>
    )
}
