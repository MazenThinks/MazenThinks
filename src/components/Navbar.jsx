import { useState, useEffect, useCallback } from 'react';
import { CV_PATH } from '../constants/site';

const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToHash = useCallback((e, href) => {
        e.preventDefault();
        setOpen(false);
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', href);
    }, []);

    const solidNav = scrolled || open;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
                solidNav
                    ? 'bg-surface-deepest/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/25'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <nav className="container-page flex items-center justify-between gap-3 h-16 sm:h-[4.25rem]">
                <a
                    href="#hero"
                    onClick={(e) => scrollToHash(e, '#hero')}
                    className="font-display font-semibold text-white tracking-tight text-sm sm:text-base shrink-0"
                >
                    Mazen Yassien
                </a>

                <ul className="hidden lg:flex items-center flex-wrap justify-end gap-0.5 xl:gap-1 flex-1 min-w-0">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={(e) => scrollToHash(e, item.href)}
                                className="px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li className="ml-1 xl:ml-2 pl-2 xl:pl-3 border-l border-slate-700 flex items-center gap-1.5 xl:gap-2 shrink-0">
                        <a
                            href={CV_PATH}
                            download="Mazen_Yassien_CV.pdf"
                            className="inline-flex items-center justify-center rounded-lg bg-accent-blue px-3 py-2 text-xs font-semibold text-white shadow-md shadow-accent-blue/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-accent-blue/40"
                        >
                            Download CV
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mazenyassien/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-400 hover:text-accent-cyan transition-colors rounded-lg hover:bg-white/5"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon />
                        </a>
                        <a
                            href="https://github.com/MazenThinks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-400 hover:text-accent-cyan transition-colors rounded-lg hover:bg-white/5"
                            aria-label="GitHub"
                        >
                            <GitHubIcon />
                        </a>
                    </li>
                </ul>

                <div className="flex items-center gap-2 lg:hidden shrink-0">
                    <a
                        href={CV_PATH}
                        download="Mazen_Yassien_CV.pdf"
                        className="hidden sm:inline-flex items-center justify-center rounded-lg bg-accent-blue px-3 py-2 text-xs font-semibold text-white shadow-md shadow-accent-blue/25 transition-all hover:bg-blue-500"
                    >
                        CV
                    </a>
                    <button
                        type="button"
                        className="p-2 rounded-lg text-slate-300 hover:bg-white/10 border border-transparent hover:border-slate-700"
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>

            {open && (
                <div
                    id="mobile-nav"
                    className="lg:hidden border-t border-slate-800 bg-surface-deepest/98 backdrop-blur-md max-h-[min(70vh,calc(100dvh-4rem))] overflow-y-auto"
                >
                    <ul className="container-page py-3 flex flex-col gap-0.5">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={(e) => scrollToHash(e, item.href)}
                                    className="block py-3 px-1 text-slate-200 font-medium rounded-lg hover:bg-white/5"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className="pt-3 mt-1 border-t border-slate-800">
                            <a
                                href={CV_PATH}
                                download="Mazen_Yassien_CV.pdf"
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-center rounded-lg bg-accent-blue py-3 text-sm font-semibold text-white shadow-lg shadow-accent-blue/30"
                            >
                                Download CV
                            </a>
                        </li>
                        <li className="flex justify-center gap-6 pt-4 pb-2">
                            <a
                                href="https://www.linkedin.com/in/mazenyassien/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-cyan font-medium text-sm"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/MazenThinks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-cyan font-medium text-sm"
                            >
                                GitHub
                            </a>
                            <a href="mailto:mazenyassien.dev@gmail.com" className="text-accent-cyan font-medium text-sm">
                                Email
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

function MenuIcon() {
    return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
            />
        </svg>
    );
}
