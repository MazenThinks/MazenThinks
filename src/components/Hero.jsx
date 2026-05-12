import { useCallback } from 'react';
import HeroBackdrop from './HeroBackdrop';
import { useTypewriterCycle } from '../hooks/useTypewriterCycle';
import { CV_PATH } from '../constants/site';

const TYPEWRITER_PHRASES = [
    'IT Help Desk Engineer',
    'CompTIA A+ & Security+ Certified',
    'Active Directory & Network Support',
];

const BIO =
    'IT Help Desk Engineer with hands-on experience managing 100+ Active Directory accounts, resolving L1/L2 tickets, and deploying OS images at scale. CompTIA A+ and Security+ certified. 3.8 GPA in Computer Science.';

export default function Hero({ contact }) {
    const typed = useTypewriterCycle(TYPEWRITER_PHRASES);

    const scrollToContact = useCallback((e) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#contact');
    }, []);

    return (
        <section
            id="hero"
            className="scroll-mt-20 relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center overflow-hidden bg-surface-deepest"
        >
            <HeroBackdrop />
            <div className="container-page relative z-10 py-16 sm:py-24">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight max-w-4xl animate-[heroFadeInUp_0.85s_ease-out_both]">
                    Mazen Yassien
                </h1>

                <div
                    className="mt-5 sm:mt-6 text-lg sm:text-xl md:text-2xl font-display font-semibold min-h-[5.5rem] sm:min-h-[3.25rem] md:min-h-[2.75rem] leading-snug max-w-3xl animate-[heroFadeInUp_0.95s_ease-out_0.06s_both]"
                    aria-live="polite"
                >
                    <span className="text-gradient">{typed}</span>
                    <span className="typewriter-cursor" aria-hidden />
                </div>

                <p className="mt-6 sm:mt-8 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed animate-[heroFadeInUp_1s_ease-out_0.1s_both]">
                    {BIO}
                </p>

                <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 animate-[heroFadeInUp_1.05s_ease-out_0.14s_both]">
                    <a
                        href={CV_PATH}
                        download="Mazen_Yassien_CV.pdf"
                        className="inline-flex items-center justify-center min-w-[10.5rem] px-6 py-3 rounded-lg bg-accent-blue text-white font-semibold text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-accent-blue/25"
                    >
                        Download CV
                    </a>
                    <a
                        href="#contact"
                        onClick={scrollToContact}
                        className="inline-flex items-center justify-center min-w-[10.5rem] px-6 py-3 rounded-lg border border-slate-600 text-slate-100 font-semibold text-sm hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                    >
                        Contact Me
                    </a>
                </div>

                <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm border-t border-slate-800/80 pt-10 animate-[heroFadeInUp_1.1s_ease-out_0.2s_both]">
                    <div>
                        <dt className="text-slate-500 uppercase tracking-wider text-xs">Location</dt>
                        <dd className="mt-1 text-slate-200 font-medium">{contact.location}</dd>
                    </div>
                    <div>
                        <dt className="text-slate-500 uppercase tracking-wider text-xs">Website</dt>
                        <dd className="mt-1">
                            <a href={contact.portfolio} className="text-accent-cyan hover:underline font-medium">
                                mazenyassien.me
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt className="text-slate-500 uppercase tracking-wider text-xs">GitHub</dt>
                        <dd className="mt-1">
                            <a
                                href={contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-cyan hover:underline font-medium"
                            >
                                MazenThinks
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt className="text-slate-500 uppercase tracking-wider text-xs">Status</dt>
                        <dd className="mt-1 flex items-center gap-2 text-emerald-400 font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            Open to opportunities
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}
