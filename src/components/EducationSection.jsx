import { GraduationCap } from 'lucide-react';

const ACHIEVEMENTS = [
    '🏆 Graduation project selected as Best Project of the Year',
    '🌍 Represented the university at the International Undergraduate Research Conference (IUGRC)',
];

export default function EducationSection() {
    return (
        <article className="mt-6 sm:mt-8 max-w-4xl rounded-2xl border border-slate-700/80 bg-surface/60 backdrop-blur-sm p-6 sm:p-8 shadow-lg shadow-black/20">
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center self-start rounded-2xl border border-slate-600/80 bg-slate-800/60 text-accent-cyan sm:h-20 sm:w-20"
                    aria-hidden
                >
                    <GraduationCap className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.5} />
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl md:text-2xl">
                        Bachelor&apos;s Degree in Computer Science &amp; Information Technology
                    </h3>
                    <p className="mt-2 text-base font-medium text-slate-300">Akhbar El Youm Academy</p>

                    <dl className="mt-5 grid gap-2 text-sm text-slate-400 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2">
                        <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                            <dt className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Graduation
                            </dt>
                            <dd className="text-slate-300">June 2025</dd>
                        </div>
                        <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                            <dt className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Location
                            </dt>
                            <dd className="text-slate-300">Cairo, Egypt</dd>
                        </div>
                        <div className="sm:col-span-2 flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                            <dt className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">GPA</dt>
                            <dd className="text-slate-200">
                                3.8 <span className="text-slate-500">—</span> Dean&apos;s List (3rd and 4th year)
                            </dd>
                        </div>
                    </dl>

                    <div className="mt-7 border-t border-slate-700/80 pt-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Achievements</p>
                        <ul className="mt-3 flex flex-col flex-wrap gap-2.5 sm:flex-row list-none p-0 m-0">
                            {ACHIEVEMENTS.map((text) => (
                                <li key={text}>
                                    <span className="inline-flex w-full rounded-xl border border-amber-400/35 bg-gradient-to-br from-amber-500/12 to-amber-600/5 px-3.5 py-2.5 text-left text-sm font-medium leading-snug text-amber-100 shadow-[0_0_20px_-8px_rgba(245,158,11,0.25)] sm:w-auto sm:max-w-xl">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    );
}
