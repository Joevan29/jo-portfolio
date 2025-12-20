"use client";

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from './Nav';
import Magnetic from '../Magnetic';

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="fixed right-0 top-0 z-[60] p-8">
                <Magnetic>
                    <div
                        onClick={() => setIsActive(!isActive)}
                        className="w-16 h-16 rounded-full bg-black cursor-pointer flex items-center justify-center border border-white/20 group hover:bg-cyan-500/20 transition-colors"
                    >
                        <div className={`w-full relative flex flex-col items-center justify-center gap-1 transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}>
                            <span className={`block w-6 h-[2px] bg-white transition-transform ${isActive ? "rotate-90 translate-y-1" : ""}`}></span>
                            <span className={`block w-6 h-[2px] bg-white transition-opacity ${isActive ? "opacity-0" : ""}`}></span>
                            <span className={`block w-6 h-[2px] bg-white transition-transform ${isActive ? "-rotate-90 -translate-y-[5px]" : ""}`}></span>
                        </div>
                    </div>
                </Magnetic>
            </div>

            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    );
}
