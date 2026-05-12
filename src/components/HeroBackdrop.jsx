import HeroFloatingIcons from './HeroFloatingIcons';

export default function HeroBackdrop() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div className="absolute inset-0 opacity-[0.35] bg-grid-faint bg-grid animate-grid-drift" />
            <div className="absolute inset-0 bg-gradient-to-b from-surface-deepest via-transparent to-surface-deepest" />
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.12]"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="trace" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path
                    d="M0 40h180v80M180 40v-40h220M400 120h200M600 0v200M200 280h400M0 200h120v120"
                    fill="none"
                    stroke="url(#trace)"
                    strokeWidth="1"
                    className="animate-pulse-slow"
                />
                <path
                    d="M40 0v320M320 0v160M520 80v240M80 360h480"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="0.5"
                    opacity="0.4"
                />
            </svg>
            <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent-cyan/20 to-transparent -translate-x-1/2" />
            <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-accent-blue/15 to-transparent animate-pulse-slow" />
            <HeroFloatingIcons />
        </div>
    );
}
