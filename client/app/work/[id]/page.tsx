import MaskText from "../../../components/ui/MaskText";
import Magnetic from "../../../components/ui/Magnetic";
import Link from 'next/link';

interface Project {
    ID: number;
    title: string;
    description: string;
    link: string;
    image: string;
    role: string;
    year: string;
    stack: string;
    challenge: string;
    solution: string;
    gallery: string[];
}

import { projects } from "../../../data/projects";

interface Project {
    ID: number;
    title: string;
    description: string;
    link: string;
    image: string;
    role: string;
    year: string;
    tech_stack?: string;
    challenge: string;
    solution: string;
    gallery: string[];
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find(p => p.ID === parseInt(params.id));

    if (!project) {
        return <div className="h-screen flex items-center justify-center text-white">Project not found</div>;
    }

    return (
        <main className="bg-slate-950 min-h-screen text-white pt-32 pb-20">

            <div className="fixed top-8 left-4 md:left-12 z-50 mix-blend-difference">
                <Magnetic>
                    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </div>
                        <span className="text-sm font-mono uppercase tracking-widest text-white/50 group-hover:text-white transition-colors hidden md:block">Back</span>
                    </Link>
                </Magnetic>
            </div>

            <section className="px-4 md:px-12 mb-20">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-12">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <h1 className="text-[10vw] leading-[0.8] font-black uppercase tracking-tighter mb-8">
                    {project.title}
                </h1>

                <div className="border-y border-white/20 py-8 flex flex-col md:flex-row justify-between gap-8 font-mono text-sm uppercase tracking-widest text-slate-400">
                    <div>
                        <span className="text-white block mb-1">Role</span>
                        {project.role}
                    </div>
                    <div>
                        <span className="text-white block mb-1">Year</span>
                        {project.year}
                    </div>
                    <div>
                        <span className="text-white block mb-1">Stack</span>
                        {project.tech_stack}
                    </div>
                    <div>
                        <span className="text-white block mb-1">Live</span>
                        <a href={project.link} target="_blank" className="hover:text-cyan-400 underline decoration-cyan-400/50 underline-offset-4">View Site</a>
                    </div>
                </div>
            </section>

            <section className="px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-mono">/ THE CHALLENGE</h2>
                        <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed">
                            {project.challenge}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-purple-400 font-mono">/ THE SOLUTION</h2>
                        <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed">
                            {project.solution}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {project.gallery && project.gallery.map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                            <img src={img} alt="Gallery" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-4 md:px-12 flex justify-center py-20 border-t border-white/10">
                <Link href={`/work/${parseInt(params.id) + 1}`} className="group text-center">
                    <p className="text-sm font-mono text-slate-500 mb-4 uppercase tracking-widest">Next Case Study</p>
                    <MaskText className="text-[8vw] leading-[0.8] font-black uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">
                        NEXT WORK
                    </MaskText>
                </Link>
            </section>

        </main>
    )
}
