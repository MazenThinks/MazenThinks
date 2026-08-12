import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export default function RevealSection({ children, className = '' }) {
    const { ref, visible } = useRevealOnScroll();

    return (
        <div
            ref={ref}
            className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
}

/** Lightweight per-item reveal for staggered lists/cards. */
export function RevealItem({ children, className = '', delayMs = 0, variant = 'item' }) {
    const { ref, visible } = useRevealOnScroll({
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.08,
    });
    const base = variant === 'soft' ? 'reveal-soft' : 'reveal-item';

    return (
        <div
            ref={ref}
            className={`${base} ${visible ? 'reveal-visible' : ''} ${className}`}
            style={{ '--reveal-delay': `${delayMs}ms` }}
        >
            {children}
        </div>
    );
}
