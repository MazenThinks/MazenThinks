import { useEffect, useRef, useState } from 'react';

/**
 * Observes an element once; returns visible flag for CSS reveal classes.
 */
export function useRevealOnScroll(options = {}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const { rootMargin = '0px 0px -10% 0px', threshold = 0.12 } = options;

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;

        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setVisible(true);
            return undefined;
        }

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { rootMargin, threshold }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [rootMargin, threshold]);

    return { ref, visible };
}
