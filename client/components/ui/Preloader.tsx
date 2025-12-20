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

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleComplete();
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (index === words.length - 1) {
            setTimeout(() => {
                handleComplete();
            }, 1000);
            return;
        }

        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1200 : 250);

        return () => clearTimeout(timeout);
    }, [index]);

    const handleComplete = () => {
        if (!visible) return;
        setVisible(false);
        if (setIsLoading) setIsLoading(false);
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
                    <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/50 via-slate-950 to-slate-950"></div>

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
