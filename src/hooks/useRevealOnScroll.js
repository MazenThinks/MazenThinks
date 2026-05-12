import { useEffect, useRef, useState } from 'react';

export function useRevealOnScroll(options = {}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const { rootMargin = '0px 0px -12% 0px', threshold = 0.08 } = options;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

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
