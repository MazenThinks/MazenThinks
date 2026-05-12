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
