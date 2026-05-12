import { User, Monitor, Wrench, Clipboard, FileText } from 'lucide-react';

const HIGHLIGHTS = [
    {
        icon: User,
        text: 'Managed 100+ Active Directory user accounts — onboarding, offboarding, and GPO assignments',
    },
    {
        icon: Monitor,
        text: 'Deployed and configured OS images across company devices ensuring production-ready hardware at scale',
    },
    {
        icon: Wrench,
        text: 'Diagnosed and resolved L1/L2 hardware, software, and network issues with fast ticket resolution and minimal downtime',
    },
    {
        icon: Clipboard,
        text: 'Maintained IT asset records and conducted audits to track device lifecycles',
    },
    {
        icon: FileText,
        text: 'Documented support resolutions and technical procedures for team knowledge sharing',
    },
];

export default function ExperienceTimeline() {
    return (
        <div className="relative mt-8 md:mt-10 flex gap-5 sm:gap-8">
            {/* Left rail: vertical line + glowing entry node */}
            <div className="relative shrink-0 w-8 sm:w-10 flex flex-col items-center" aria-hidden>
                <div className="absolute left-1/2 top-3 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-accent-blue via-accent-blue/45 to-slate-700/30" />
                <div className="relative z-10 mt-2 flex items-center justify-center">
                    <span className="absolute inline-flex h-5 w-5 rounded-full bg-accent-blue opacity-35 animate-ping" />
                    <span className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-accent-blue shadow-[0_0_18px_rgba(59,130,246,0.95),0_0_40px_rgba(59,130,246,0.35)] ring-2 ring-accent-cyan/55" />
                </div>
            </div>

            <div className="min-w-0 flex-1 pb-2">
                <header className="border-b border-slate-700/80 pb-6">
                    <p className="text-accent-cyan text-sm font-semibold tracking-wide">Aramex Egypt</p>
                    <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white">IT Help Desk Engineer</h3>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                        <span className="text-slate-400">Sep 2025 – Dec 2025</span>
                        <span className="hidden sm:inline text-slate-600" aria-hidden>
                            ·
                        </span>
                        <span>Cairo, Egypt</span>
                    </div>
                </header>

                <ul className="mt-8 space-y-4 list-none p-0 m-0">
                    {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                        <li key={text}>
                            <article className="card-surface p-4 sm:p-5 flex gap-4 sm:gap-5 border-accent-blue/10 hover:border-accent-blue/25 transition-colors">
                                <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-cyan" aria-hidden>
                                    <Icon className="w-5 h-5 sm:w-[1.35rem] sm:h-[1.35rem]" strokeWidth={1.75} />
                                </div>
                                <p className="text-sm sm:text-[0.9375rem] text-slate-300 leading-relaxed pt-0.5">{text}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
