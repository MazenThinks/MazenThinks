import { useEffect, useRef, useState } from 'react';

/**
 * Tracks page scroll progress (0–1) and the active section id.
 * Uses a single rAF-throttled scroll listener for performance.
 */
export function useScrollJourney(sectionIds) {
    const [progress, setProgress] = useState(0);
    const [activeId, setActiveId] = useState(sectionIds[0] || 'hero');
    const rafRef = useRef(0);
    const idsRef = useRef(sectionIds);
    idsRef.current = sectionIds;

    useEffect(() => {
        const update = () => {
            rafRef.current = 0;
            const doc = document.documentElement;
            const max = Math.max(1, doc.scrollHeight - window.innerHeight);
            const nextProgress = Math.min(1, Math.max(0, window.scrollY / max));
            setProgress(nextProgress);

            const marker = window.innerHeight * 0.28;
            let current = idsRef.current[0] || 'hero';
            for (const id of idsRef.current) {
                const el = document.getElementById(id);
                if (!el) continue;
                const top = el.getBoundingClientRect().top;
                if (top <= marker) current = id;
            }
            setActiveId(current);
        };

        const onScroll = () => {
            if (rafRef.current) return;
            rafRef.current = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return { progress, activeId };
}
