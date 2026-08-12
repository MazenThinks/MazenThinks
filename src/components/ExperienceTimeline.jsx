import { Wrench, Clipboard, BarChart3, FileText } from 'lucide-react';
import { RevealItem } from './RevealSection';
import { useElementScrollProgress } from '../hooks/useElementScrollProgress';

const HIGHLIGHTS = [
    {
        icon: Wrench,
        text: 'Delivered L1/L2 technical support by troubleshooting Windows 10/11 workstations, resolving end-user issues, and administering Active Directory user accounts, including account provisioning and password resets.',
        emphasize: true,
    },
    {
        icon: Clipboard,
        text: 'Managed IT asset inventory using Microsoft Excel to track device lifecycles, identify discrepancies, and support IT infrastructure audits.',
        emphasize: false,
    },
    {
        icon: BarChart3,
        text: 'Developed dashboards and reports providing visibility into IT asset inventory, utilization, and operational performance.',
        emphasize: false,
    },
    {
        icon: FileText,
        text: 'Generated data-driven reports supporting IT asset management, infrastructure planning, and operational decision-making.',
        emphasize: false,
    },
];

export default function ExperienceTimeline() {
    const { ref, progress } = useElementScrollProgress({ start: 0.9, end: 0.2 });

    return (
        <div ref={ref} className="relative mt-8 md:mt-10 flex gap-5 sm:gap-8">
            <div className="relative shrink-0 w-8 sm:w-10 flex flex-col items-center" aria-hidden>
                <div className="absolute left-1/2 top-3 bottom-0 w-px -translate-x-1/2 bg-slate-700/40" />
                <div
                    className="timeline-fill absolute left-1/2 top-3 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-accent-blue via-accent-cyan/70 to-accent-blue/30"
                    style={{ '--timeline-progress': progress }}
                />
                <div className="relative z-10 mt-2 flex items-center justify-center">
                    <span className="absolute inline-flex h-5 w-5 rounded-full bg-accent-blue opacity-35 animate-ping" />
                    <span className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-accent-blue shadow-[0_0_18px_rgba(59,130,246,0.95),0_0_40px_rgba(59,130,246,0.35)] ring-2 ring-accent-cyan/55" />
                </div>
            </div>

            <div className="min-w-0 flex-1 pb-2">
                <RevealItem>
                    <header className="border-b border-slate-700/80 pb-6">
                        <p className="text-accent-cyan text-sm font-semibold tracking-wide">Aramex Egypt</p>
                        <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white">Data Analyst</h3>
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                            <span className="text-slate-400">09/2025 – 12/2025</span>
                            <span className="hidden sm:inline text-slate-600" aria-hidden>
                                ·
                            </span>
                            <span>Cairo, Egypt</span>
                        </div>
                        <p className="mt-4 max-w-2xl text-sm text-slate-400 leading-relaxed">
                            Official role: Data Analyst — with hands-on L1/L2 IT support, Windows 10/11 troubleshooting,
                            and Active Directory administration in an enterprise environment.
                        </p>
                    </header>
                </RevealItem>

                <ul className="mt-8 space-y-4 list-none p-0 m-0">
                    {HIGHLIGHTS.map(({ icon: Icon, text, emphasize }, index) => (
                        <li key={text}>
                            <RevealItem delayMs={Math.min(index * 70, 220)} variant="soft">
                                <article
                                    className={`card-surface p-4 sm:p-5 flex gap-4 sm:gap-5 transition-colors ${
                                        emphasize
                                            ? 'border-accent-blue/25 hover:border-accent-blue/40'
                                            : 'border-accent-blue/10 hover:border-accent-blue/25'
                                    }`}
                                >
                                    <div
                                        className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-cyan"
                                        aria-hidden
                                    >
                                        <Icon className="w-5 h-5 sm:w-[1.35rem] sm:h-[1.35rem]" strokeWidth={1.75} />
                                    </div>
                                    <div className="min-w-0 pt-0.5">
                                        {emphasize && (
                                            <p className="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent-cyan">
                                                IT Support
                                            </p>
                                        )}
                                        <p className="text-sm sm:text-[0.9375rem] text-slate-300 leading-relaxed">
                                            {text}
                                        </p>
                                    </div>
                                </article>
                            </RevealItem>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
