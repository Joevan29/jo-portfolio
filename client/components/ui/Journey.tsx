"use client";

import { motion } from 'framer-motion';

const experiences = [
    {
        title: "Back End Developer Intern",
        company: "PT Asuransi BRI Life",
        date: "May - Jul 2025",
        desc: "Developed RESTful APIs with Node.js & optimized PostgreSQL queries.",
        stack: ["Node.js", "PostgreSQL", "REST API", "Express"]
    },
    {
        title: "Big Data Analytics Intern",
        company: "Kimia Farma x Rakamin",
        date: "Apr - May 2025",
        desc: "Analyzed 672k transactions & built Looker Studio dashboards.",
        stack: ["BigQuery", "Looker Studio", "Python", "SQL"]
    },
    {
        title: "Information Systems Student",
        company: "National University",
        date: "2022 - Present",
        desc: "GPA 3.93. Focusing on Cloud Computing & Security.",
        stack: ["Cloud Architecture", "Cybersecurity", "IoT"]
    },
    {
        title: "IoT Intern",
        company: "PT. Jaya Konsultan Indonesia",
        date: "Apr - May 2021",
        desc: "Built automated temperature monitoring systems with Arduino.",
        stack: ["Arduino", "C++", "IoT", "Electronics"]
    }
];

export default function Journey() {
    // ANTI-LAG: No scroll listeners. CSS Sticky + Viewport triggers only.

    return (
        <section className="relative py-32 px-4 md:px-0 z-10 w-full max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-24 text-white tracking-tighter">
                JOURNEY
            </h2>

            <div className="relative">
                {/* Central Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-800 -translate-x-1/2 overflow-hidden">
                    <motion.div
                        initial={{ height: "0%" }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="w-full bg-cyan-500 origin-top shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    />
                </div>

                <div className="flex flex-col gap-12 md:gap-24">
                    {experiences.map((exp, index) => (
                        <Card key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Card({ experience, index }: { experience: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className={`relative flex items-center md:justify-between w-full ${isEven ? "md:flex-row-reverse" : ""}`}
        >
            {/* Spacer */}
            <div className="hidden md:block w-5/12" />

            {/* Node */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 z-10 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
            />

            {/* Card Content */}
            <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300 group">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-cyan-400 bg-cyan-900/20 rounded border border-cyan-500/20">
                        {experience.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {experience.title}
                    </h3>
                    <h4 className="text-sm font-mono text-slate-400 mb-4 uppercase tracking-widest">
                        {experience.company}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {experience.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {experience.stack.map((tech: string, i: number) => (
                            <span key={i} className="text-[10px] font-mono uppercase px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
