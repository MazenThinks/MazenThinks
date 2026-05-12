import { Shield, Award, BookOpen } from 'lucide-react';

const CERTIFICATIONS = [
    { title: 'CompTIA A+', issuer: 'CompTIA', Icon: Shield },
    { title: 'CompTIA Security+', issuer: 'CompTIA', Icon: Award },
];

const COURSES = [
    { title: 'Microsoft Security Essentials Professional', issuer: 'Microsoft' },
    { title: 'CCNA', issuer: 'Udemy' },
    { title: 'MCSA', issuer: 'Udemy' },
    { title: 'Technical Support Fundamentals', issuer: 'Google' },
    { title: 'Cybersecurity 101', issuer: 'TryHackMe' },
    { title: 'SOC Tier 1', issuer: 'AMIT Learning' },
];

function CertificationCard({ title, issuer, Icon }) {
    return (
        <article
            className="group relative overflow-hidden rounded-2xl border border-amber-500/35 bg-gradient-to-br from-amber-500/[0.07] via-slate-900/40 to-slate-950/80 p-5 sm:p-6 shadow-[0_0_0_1px_rgba(245,158,11,0.08),0_0_40px_-12px_rgba(245,158,11,0.2),0_0_48px_-16px_rgba(6,182,212,0.12)] transition-all duration-300 hover:border-amber-400/55 hover:shadow-[0_0_0_1px_rgba(245,158,11,0.15),0_0_48px_-8px_rgba(245,158,11,0.28),0_0_56px_-12px_rgba(59,130,246,0.18)]"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            <div className="relative flex gap-4 sm:gap-5">
                <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-amber-500/40 bg-amber-500/10 shadow-[0_0_20px_-4px_rgba(245,158,11,0.35)]"
                    aria-hidden
                >
                    <Icon className="h-7 w-7 text-amber-400" strokeWidth={1.6} />
                </div>
                <div className="min-w-0 pt-0.5">
                    <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">{title}</h4>
                    <p className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-500">{issuer}</p>
                </div>
            </div>
        </article>
    );
}

function CourseRow({ title, issuer }) {
    return (
        <article className="rounded-xl border border-slate-700/70 bg-surface/40 px-4 py-3.5 sm:px-4 sm:py-4 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/30 hover:shadow-[0_0_24px_-10px_rgba(59,130,246,0.15),0_0_20px_-12px_rgba(6,182,212,0.08)]">
            <div className="flex gap-3">
                <div
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-600/80 bg-slate-800/50 text-slate-500"
                    aria-hidden
                >
                    <BookOpen className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                    <h4 className="text-sm font-semibold leading-snug text-slate-200">{title}</h4>
                    <p className="mt-1 text-xs text-slate-500">{issuer}</p>
                </div>
            </div>
        </article>
    );
}

export default function CertificationsTraining() {
    return (
        <div className="mt-6 sm:mt-8 grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Certifications — primary column */}
            <div>
                <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">Certifications</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-amber-400 shadow-[0_0_16px_-4px_rgba(245,158,11,0.35)]">
                        <Award className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                        Credential
                    </span>
                </div>
                <div className="mt-6 flex flex-col gap-4 sm:gap-5">
                    {CERTIFICATIONS.map((c) => (
                        <CertificationCard key={c.title} {...c} />
                    ))}
                </div>
            </div>

            {/* Training & courses — secondary column */}
            <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">Training & Courses</h3>
                <ul className="mt-6 flex flex-col gap-2.5 sm:gap-3 list-none p-0 m-0">
                    {COURSES.map((row) => (
                        <li key={row.title}>
                            <CourseRow {...row} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
