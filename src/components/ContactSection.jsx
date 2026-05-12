import ContactForm from './ContactForm';

const LINKEDIN_DISPLAY = 'linkedin.com/in/mazenyassien';
const GITHUB_DISPLAY = 'github.com/MazenThinks';

function InfoCard({ emoji, children, href, external }) {
    const className =
        'flex gap-3.5 rounded-xl border border-slate-700/80 bg-surface/50 p-4 sm:p-4 transition-colors hover:border-slate-600 hover:bg-slate-800/40';

    const inner = <div className="min-w-0 flex-1 text-sm sm:text-[0.9375rem] leading-snug">{children}</div>;

    if (href) {
        return (
            <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`${className} block text-left`}
            >
                <span className="text-lg shrink-0 leading-none pt-0.5" aria-hidden>
                    {emoji}
                </span>
                {inner}
            </a>
        );
    }

    return (
        <div className={className}>
            <span className="text-lg shrink-0 leading-none pt-0.5" aria-hidden>
                {emoji}
            </span>
            {inner}
        </div>
    );
}

export default function ContactSection({ contact }) {
    return (
        <div className="mt-6 sm:mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12 items-start">
            <div className="space-y-3 sm:space-y-3.5">
                <InfoCard emoji="📧" href={`mailto:${contact.email}`}>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Email</span>
                    <span className="mt-1 block font-medium text-white break-all">{contact.email}</span>
                </InfoCard>
                <InfoCard emoji="📞" href={`tel:${contact.phoneTel}`}>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Phone</span>
                    <span className="mt-1 block font-medium text-white">{contact.phone}</span>
                </InfoCard>
                <InfoCard emoji="📍">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Location</span>
                    <span className="mt-1 block font-medium text-white">{contact.location}</span>
                </InfoCard>
                <InfoCard emoji="🔗" href={contact.linkedin} external>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">LinkedIn</span>
                    <span className="mt-1 block font-medium text-accent-cyan hover:text-accent-blue transition-colors">
                        {LINKEDIN_DISPLAY}
                    </span>
                </InfoCard>
                <InfoCard emoji="🐱" href={contact.github} external>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">GitHub</span>
                    <span className="mt-1 block font-medium text-accent-cyan hover:text-accent-blue transition-colors">
                        {GITHUB_DISPLAY}
                    </span>
                </InfoCard>
            </div>

            <ContactForm />
        </div>
    );
}
