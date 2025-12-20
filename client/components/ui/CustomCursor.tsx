"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorSize = isHovered ? 60 : 15;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = { damping: 40, stiffness: 400, mass: 0.2 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }

    const manageMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('.project-card')) {
            setIsHovered(true);
        } else {
            setIsHovered(false);
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        window.addEventListener("mouseover", manageMouseOver);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.removeEventListener("mouseover", manageMouseOver);
        }
    }, [isHovered, cursorSize])

    return (
        <motion.div
            style={{
                translateX: smoothMouse.x,
                translateY: smoothMouse.y,
                width: cursorSize,
                height: cursorSize,
                top: 0,
                left: 0,
                x: "-50%",
                y: "-50%"
            }}
            className="fixed z-[9999] rounded-full bg-cyan-400 mix-blend-difference pointer-events-none hidden md:block will-change-transform"
        />
    )
}
