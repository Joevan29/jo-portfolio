"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten Tag", "Hallo"];

interface PreloaderProps {
    setIsLoading?: (loading: boolean) => void;
}

export default function Preloader({ setIsLoading }: PreloaderProps) {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    // Initial Scroll Lock
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    // FAILSAFE: Force finish after 5s (adjusted for slower words)
    useEffect(() => {
        const timer = setTimeout(() => {
            handleComplete();
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    // Word Cycle
    useEffect(() => {
        if (index === words.length - 1) {
            // End of list, trigger complete with a gentle delay
            setTimeout(() => {
                handleComplete();
            }, 1000);
            return;
        }

        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1200 : 250); // Slower initial and subsequent words

        return () => clearTimeout(timeout);
    }, [index]);

    const handleComplete = () => {
        if (!visible) return; // Already completed
        setVisible(false);
        if (setIsLoading) setIsLoading(false); // Notify Parent SAFELY
        document.body.style.overflow = '';
    };

    return (
        <AnimatePresence mode='wait'>
            {visible && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 text-white cursor-wait"
                >
                    {/* Texture */}
                    <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/50 via-slate-950 to-slate-950"></div>

                    {/* Word Animation */}
                    <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        key={index}
                        className="text-4xl md:text-6xl font-black tracking-tighter z-10 font-mono"
                    >
                        {words[index]}
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
