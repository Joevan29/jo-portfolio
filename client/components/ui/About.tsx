"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MaskText from './MaskText';

export default function About() {
    return (
        <section className="relative py-24 px-8 md:px-20 max-w-7xl mx-auto z-10 text-white">

            <div className="mb-20 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className='flex flex-col'>
                    <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4">
                        Profile
                    </h2>
                    <MaskText className="text-4xl md:text-7xl font-bold tracking-tighter">
                        ABOUT ME
                    </MaskText>
                </div>
                <div className="text-right">
                    <p className="text-xl md:text-2xl font-light text-slate-300">
                        Information Systems Student<br />
                        <span className="text-cyan-400 font-mono text-base">GPA 3.93 • National University</span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                <div className='flex flex-col gap-12'>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            Summary
                        </h3>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            A young technology professional combining expertise in software development, data analysis, and cloud computing to deliver business value.
                            Experienced in Back-End Development (Node.js, SQL), Big Data Analytics (BigQuery, Looker Studio), and Cloud Security.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Certifications
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Google Cloud Data Analytics",
                                "IT Specialist - Cybersecurity",
                                "Google Cloud Foundations",
                                "Vertex AI Prompt Design",
                                "GenAI Apps with Gemini"
                            ].map((cert, i) => (
                                <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10 hover:border-cyan-500/50 transition-colors cursor-default">
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-8'>
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                        Technical Arsenal
                    </h3>

                    <div className="space-y-6">
                        <SkillGroup title="Languages" skills={["Python", "Go", "TypeScript", "SQL", "R", "JavaScript"]} />
                        <SkillGroup title="Web Tech" skills={["Next.js", "React.js", "Node.js", "Tailwind CSS", "Fiber"]} />
                        <SkillGroup title="Data & ML" skills={["Pandas", "Scikit-learn", "BigQuery", "Looker Studio", "Power BI"]} />
                        <SkillGroup title="Infra & Tools" skills={["Docker", "Kubernetes", "Google Cloud", "PostgreSQL", "Kafka"]} />
                    </div>

                    <motion.a
                        href="/cv.pdf"
                        target="_blank"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-white/10 flex items-center justify-between group cursor-pointer"
                    >
                        <div>
                            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">Full Resume</p>
                            <p className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Download CV</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </div>
                    </motion.a>
                </div>

            </div>
        </section>
    );
}

function SkillGroup({ title, skills }: { title: string, skills: string[] }) {
    return (
        <div>
            <h4 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-3">{title}</h4>
            <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                    <span key={i} className="text-sm text-slate-300 bg-slate-800/50 px-3 py-1 rounded border border-slate-700/50">
                        {s}
                    </span>
                ))}
            </div>
        </div>
    )
}
