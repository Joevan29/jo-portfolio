"use client";

import { useState, useEffect } from 'react';
import Preloader from '../components/ui/Preloader';
import Hero from '../components/ui/Hero';
import About from '../components/ui/About';
import SlidingImages from '../components/3d/SlidingImages';
import Journey from '../components/ui/Journey';
import Footer from '../components/ui/Footer';
import FloatingShapes from '../components/FloatingShapes';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <main className="relative min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black">

            <Preloader setIsLoading={setIsLoading} />

            <div className="fixed inset-0 z-0">
                <FloatingShapes />
            </div>

            <div
                className={`relative z-10 transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
                    }`}
            >
                <Hero />
                <About />
                <SlidingImages />
                <Journey />
                <Footer />
            </div>

        </main>
    );
}
