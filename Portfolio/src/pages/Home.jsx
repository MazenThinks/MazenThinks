import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FlowTaskMockup from '../assets/FlowTask.png';
import SchedulyMockup from '../assets/Scheduly.png';
import VerveoMockup from '../assets/Verveo.png';

const Home = () => {
    const [showScrollCue, setShowScrollCue] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollCue(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-white dark:bg-neutral-950 transition-colors duration-600 animate-page-enter">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="container-custom text-center relative z-10">
                    <div className="space-y-16 animate-hero-entrance">
                        {/* Name */}
                        <div className="space-y-4 relative">
                            {/* Fixed Grid Around Name */}
                            <div className="absolute -inset-x-2 -inset-y-16 opacity-0 animate-grid-reveal pointer-events-none" style={{
                                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px)',
                                backgroundSize: '100px 100px',
                                backgroundPosition: '50% 50%',
                                maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                                maskComposite: 'intersect',
                                WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                                WebkitMaskComposite: 'source-in'
                            }}></div>
                            <div className="absolute -inset-x-2 -inset-y-20 opacity-0 animate-grid-reveal pointer-events-none dark:block hidden" style={{
                                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
                                backgroundSize: '100px 100px',
                                backgroundPosition: '50% 50%',
                                maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                                maskComposite: 'intersect',
                                WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
                                WebkitMaskComposite: 'source-in'
                            }}></div>

                            <h1 className="font-display font-black text-[clamp(3.5rem,12vw,10rem)] text-neutral-950 dark:text-white tracking-[-0.02em] leading-[0.9] select-none transition-colors duration-600 relative" style={{
                                textAlign: 'center',
                                position: 'relative',
                                top: '0.5px'
                            }}>
                                MAZEN MAGDY
                            </h1>
                            <p className="text-base text-neutral-500 dark:text-neutral-500 tracking-wide font-light transition-colors duration-600">
                                Defining tomorrow's interactions, one component at a time.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col items-center justify-center gap-3 animate-fade-in-up">
                            {/* First Row - Active Links */}
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <a
                                    href="https://github.com/MazenThinks"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                    </svg>
                                    <span className="text-xs uppercase tracking-[0.2em] font-medium">GitHub</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mazenmagdyy/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span className="text-xs uppercase tracking-[0.2em] font-medium">LinkedIn</span>
                                </a>
                                <a
                                    href="mailto:mazenmagdy190.mm@gmail.com"
                                    className="group flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
                                    aria-label="Email"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-xs uppercase tracking-[0.2em] font-medium">Email</span>
                                </a>
                                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                    </svg>
                                    <span className="text-xs uppercase tracking-[0.2em] font-medium">mazenmagdy101</span>
                                </div>
                            </div>
                            {/* Second Row - Inactive/Coming Soon Links */}
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                {/* Fiverr - Link Ready */}
                                <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-600 opacity-50 cursor-not-allowed" data-href="">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="3.5" cy="3.5" r="1.5" />
                                        <circle cx="8.5" cy="3.5" r="1.5" />
                                        <path d="M11.5,0v3h3V0H11.5z M0,6v2.5h7.5V6H0z M0,10v2.5h5V10H0z M0,14v2.5h7.5V14H0z M0,18v2.5h5V18H0z M10,6v16h3V6H10z M15,6v8.5h3V6H15z M15,16v6h3v-6H15z M20,6v8.5h3V6H20z" />
                                    </svg>
                                    <span className="text-xs uppercase tracking-[0.2em] font-medium">Fiverr</span>
                                </div>
                                {/* Upwork - Link Ready */}
                                <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-600 opacity-50 cursor-not-allowed" data-href="">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                                    </svg>
                                    <span className="text-xs uppercase tracking-[0.2em] font-medium">Upwork</span>
                                </div>
                                {/* Freelancer - Link Ready */}
                                <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-600 opacity-50 cursor-not-allowed" data-href="">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.096 3.076l1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072l3.497-6.522L0 5.13m7.064 7.485l3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228" />
                                    </svg>
                                    <span className="text-xs uppercase tracking-[0.2em] font-medium">Freelancer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Cue */}
                <div
                    className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${showScrollCue ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="flex flex-col items-center gap-3 animate-scroll-cue">
                        <div className="w-px h-16 bg-gradient-to-b from-transparent via-neutral-400 dark:via-neutral-600 to-transparent"></div>
                        <svg
                            className="w-4 h-4 text-neutral-400 dark:text-neutral-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div >
            </section >

            {/* Selected Work Section */}
            < section className="py-24 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-600" >
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto space-y-24">
                        {/* FlowTask */}
                        <a
                            href="https://myflowtask.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="grid lg:grid-cols-2 gap-16 items-center cursor-pointer">
                                <div className="space-y-4 lg:order-1">
                                    <h3 className="font-project text-6xl lg:text-7xl font-bold text-neutral-950 dark:text-white tracking-normal leading-none group-hover:translate-x-2 transition-transform duration-500">
                                        FlowTask
                                    </h3>
                                    <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                                        Task management for teams that ship fast
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">React</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">TypeScript</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Tailwind</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Vite</span>
                                    </div>
                                </div>
                                <div className="lg:order-2">
                                    <div className="relative w-full overflow-hidden rounded-lg border-2 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl group-hover:shadow-3xl group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-all duration-500">
                                        <img src={FlowTaskMockup} alt="FlowTask" className="aspect-[16/10] w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Scheduly */}
                        <a
                            href="https://myscheduly.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="space-y-4 lg:order-2">
                                    <h3 className="font-project text-6xl lg:text-7xl font-bold text-neutral-950 dark:text-white tracking-normal leading-none group-hover:translate-x-2 transition-transform duration-500">
                                        Scheduly
                                    </h3>
                                    <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                                        Appointment booking without the friction
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">React</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Tailwind</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Vite</span>
                                    </div>
                                </div>
                                <div className="lg:order-1">
                                    <div className="relative w-full overflow-hidden rounded-lg border-2 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl group-hover:shadow-3xl group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-all duration-500">
                                        <img src={SchedulyMockup} alt="Scheduly" className="aspect-[16/10] w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Verveo */}
                        <a
                            href="https://verveo.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="grid lg:grid-cols-2 gap-16 items-center cursor-pointer">
                                <div className="space-y-4 lg:order-1">
                                    <h3 className="font-project text-6xl lg:text-7xl font-bold text-neutral-950 dark:text-white tracking-normal leading-none group-hover:translate-x-2 transition-transform duration-500">
                                        Verveo
                                    </h3>
                                    <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                                        E-commerce that feels premium
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">React</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">TypeScript</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Tailwind</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Context API</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Vite</span>
                                    </div>
                                </div>
                                <div className="lg:order-2">
                                    <div className="relative w-full overflow-hidden rounded-lg border-2 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl group-hover:shadow-3xl group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-all duration-500">
                                        <img src={VerveoMockup} alt="Verveo" className="aspect-[16/10] w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Home;
