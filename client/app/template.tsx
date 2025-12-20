"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: 0 }}
        >
            {children}
            <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[100]"></div>
        </motion.div>
    );
}
