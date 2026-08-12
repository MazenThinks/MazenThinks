import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Returns 0–1 progress of how far an element has been scrolled through the viewport.
 * Lightweight: single rAF-throttled listener, only active while near viewport.
 */
export function useElementScrollProgress(options = {}) {
    const ref = useRef(null);
    const [progress, setProgress] = useState(0);
    const reduced = usePrefersReducedMotion();
    const { start = 0.85, end = 0.15 } = options;

    useEffect(() => {
        if (reduced) {
            setProgress(1);
            return undefined;
        }

        let raf = 0;
        const update = () => {
            raf = 0;
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight || 1;
            const startY = vh * start;
            const endY = vh * end;
            const raw = (startY - rect.top) / Math.max(1, startY - endY);
            setProgress(Math.min(1, Math.max(0, raw)));
        };

        const onScroll = () => {
            if (raf) return;
            raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [reduced, start, end]);

    return { ref, progress };
}
