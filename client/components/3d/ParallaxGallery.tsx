"use client";

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Magnetic from '../ui/Magnetic';

interface Project {
    ID: number;
    title: string;
    description: string;
    link: string;
}

export default function ParallaxGallery({ projects }: { projects: Project[] }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    // Split projects into two columns
    const halfway = Math.ceil(projects.length / 2);
    const col1 = projects.slice(0, halfway);
    const col2 = projects.slice(halfway);

    return (
        <div ref={container} className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 z-10">
            {/* Column 1 - Parallax Up */}
            <motion.div style={{ y: y1 }} className="flex flex-col gap-12 w-full md:w-1/2">
                {col1.map((project) => (
                    <ProjectCard key={project.ID} project={project} />
                ))}
            </motion.div>

            {/* Column 2 - Parallax Down */}
            <motion.div style={{ y: y2 }} className="flex flex-col gap-12 w-full md:w-1/2 md:mt-24">
                {col2.map((project) => (
                    <ProjectCard key={project.ID} project={project} />
                ))}
            </motion.div>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-500 overflow-hidden">
            <h3 className="text-4xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight">
                {project.title}
            </h3>
            <p className="text-slate-400 mb-8 font-mono text-sm leading-relaxed">
                {project.description}
            </p>

            <Magnetic>
                <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors"
                >
                    View Case
                </a>
            </Magnetic>
        </div>
    );
}
