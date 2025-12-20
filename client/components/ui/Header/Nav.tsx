"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Magnetic from '../Magnetic';

const navItems = [
    { title: "Home", href: "/" },
    { title: "Work", href: "/work" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" }
];

export default function Nav() {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed right-0 top-0 h-screen w-full md:w-[500px] bg-[#101010] z-[50] text-white"
        >
            <Curve />
            <div className="flex flex-col h-full justify-between p-20">
                <div className="flex flex-col gap-8 mt-20">
                    <p className="text-gray-400 border-b border-gray-600 pb-4 text-xs uppercase tracking-widest">Navigation</p>
                    {navItems.map((data, index) => (
                        <Magnetic key={index}>
                            <a
                                href={data.href}
                                className="text-5xl md:text-6xl font-light hover:text-cyan-400 transition-colors block leading-tight"
                                onMouseEnter={() => setSelectedIndicator(data.href)}
                            >
                                {data.title}
                            </a>
                        </Magnetic>
                    ))}
                </div>
                <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
                    <a>Twitter</a>
                    <a>Instagram</a>
                    <a>LinkedIn</a>
                </div>
            </div>
        </motion.div>
    );
}

function Curve() {
    // Exact curve logic from reference style
    const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
    const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

    const curve = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        }
    }

    return (
        <svg className="absolute top-0 -left-[99px] w-[100px] h-full fill-[#101010] stroke-none">
            <motion.path variants={curve} initial="initial" animate="enter" exit="exit" />
        </svg>
    )
}

const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}
