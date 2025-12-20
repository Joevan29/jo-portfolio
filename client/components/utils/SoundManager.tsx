"use client";

import { useEffect } from 'react';

export default function SoundManager() {

    const playHover = () => {
        const audio = new Audio('/sounds/hover.mp3');
        audio.volume = 0.2;
        audio.play().catch(() => { }); // Ignore errors if file missing/interaction needed
    };

    const playClick = () => {
        const audio = new Audio('/sounds/click.mp3');
        audio.volume = 0.3;
        audio.play().catch(() => { });
    };

    useEffect(() => {
        // Add logic to attach to all interactive elements globally
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button') || target.closest('.project-card')) {
                playHover();
            }
        };

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button')) {
                playClick();
            }
        };

        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return null; // Headless component
}
