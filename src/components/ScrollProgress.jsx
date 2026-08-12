import { useCallback } from 'react';
import { useScrollJourney } from '../hooks/useScrollJourney';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const SECTIONS = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
];

export default function ScrollProgress() {
    const ids = SECTIONS.map((s) => s.id);
    const { progress, activeId } = useScrollJourney(ids);
    const reduced = usePrefersReducedMotion();

    const jumpTo = useCallback((id) => (e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({
            behavior: reduced ? 'auto' : 'smooth',
            block: 'start',
        });
        history.replaceState(null, '', `#${id}`);
    }, [reduced]);

    return (
        <>
            <div className="scroll-progress-track" aria-hidden>
                <div
                    className="scroll-progress-bar"
                    style={{ '--scroll-progress': progress }}
                />
            </div>

            <nav className="scroll-rail" aria-label="Section progress">
                {SECTIONS.map(({ id, label }) => {
                    const active = activeId === id;
                    return (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={jumpTo(id)}
                            className={`scroll-rail-item ${active ? 'is-active' : ''}`}
                            aria-current={active ? 'true' : undefined}
                        >
                            <span className="scroll-rail-label">{label}</span>
                            <span className="scroll-rail-dot" />
                        </a>
                    );
                })}
            </nav>
        </>
    );
}
