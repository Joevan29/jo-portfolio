"use client";

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../../data/projects';

interface Project {
    ID: number;
    title: string;
    description: string;
    link: string;
    image: string;
    tech_stack?: string;
    role?: string;
    year?: string;
    challenge?: string;
    solution?: string;
    gallery?: string[];
}

export default function SlidingImages() {
    // Direct Access - No Fetch Needed
    const slider1 = projects.slice(0, Math.ceil(projects.length / 2));
    const slider2 = projects.slice(Math.ceil(projects.length / 2));

    const displaySlider1 = slider1.length > 0 ? [...slider1, ...slider1, ...slider1] : [];
    const displaySlider2 = slider2.length > 0 ? [...slider2, ...slider2, ...slider2] : [];

    // Use Scroll
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <div ref={container} className="flex flex-col gap-[3vw] py-20 relative z-10 overflow-hidden w-full">
            <motion.div style={{ x: x1 }} className="flex gap-[3vw] w-[120vw] -ml-[10vw]">
                {displaySlider1.map((project, index) => (
                    <ProjectCard key={index} project={project} color="from-cyan-500 to-blue-500" />
                ))}
            </motion.div>

            <motion.div style={{ x: x2 }} className="flex gap-[3vw] w-[120vw] -ml-[10vw]">
                {displaySlider2.map((project, index) => (
                    <ProjectCard key={index} project={project} color="from-purple-500 to-pink-500" />
                ))}
            </motion.div>
        </div>
    );
}

function ProjectCard({ project, color }: { project: Project, color: string }) {
    return (
        <Link href={`/work/${project.ID}`} className="block">
            <div className="w-[45vw] md:w-[25vw] h-[30vw] md:h-[16vw] flex-shrink-0 relative flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden group hover:bg-white/10 transition-colors cursor-pointer">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                )}

                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>

                <div className="relative z-10 text-center px-4">
                    <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                        {project.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-white/80 font-mono mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {project.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}
