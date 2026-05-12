import {
    Laptop,
    Server,
    Terminal,
    Users,
    SlidersHorizontal,
    Network,
    ScreenShare,
    Headset,
    Ticket,
    UserRoundPlus,
    Layers,
    Package,
} from 'lucide-react';

const CATEGORIES = [
    {
        title: 'Systems & Infrastructure',
        skills: [
            { label: 'Windows 10/11', Icon: Laptop },
            { label: 'Windows Server', Icon: Server },
            { label: 'Linux', Icon: Terminal },
        ],
    },
    {
        title: 'Networking & Security',
        skills: [
            { label: 'Active Directory', Icon: Users },
            { label: 'Group Policy (GPO)', Icon: SlidersHorizontal },
            { label: 'Network Troubleshooting', Icon: Network },
            { label: 'Remote Desktop Support', Icon: ScreenShare },
        ],
    },
    {
        title: 'Support & Operations',
        skills: [
            { label: 'L1/L2 Helpdesk', Icon: Headset },
            { label: 'Ticket Management', Icon: Ticket },
            { label: 'User Onboarding & Offboarding', Icon: UserRoundPlus },
            { label: 'OS Imaging & Deployment', Icon: Layers },
            { label: 'IT Asset Management', Icon: Package },
        ],
    },
];

function SkillBadge({ label, Icon }) {
    return (
        <div
            className="group flex items-center gap-2.5 rounded-full border border-slate-600/90 bg-surface/80 backdrop-blur-sm px-4 py-2.5 sm:px-4 sm:py-3 text-sm text-slate-200 transition-all duration-300 ease-out hover:border-accent-cyan/55 hover:bg-slate-800/90 hover:shadow-[0_0_28px_-6px_rgba(59,130,246,0.55),0_0_36px_-12px_rgba(6,182,212,0.35)]"
            role="listitem"
        >
            <Icon
                className="h-4 w-4 shrink-0 text-accent-cyan/90 group-hover:text-accent-blue transition-colors duration-300"
                strokeWidth={1.75}
                aria-hidden
            />
            <span className="font-medium leading-snug">{label}</span>
        </div>
    );
}

export default function TechStackBadges() {
    return (
        <div className="mt-6 sm:mt-8 space-y-10 sm:space-y-12">
            {CATEGORIES.map((category) => (
                <div key={category.title}>
                    <h3 className="font-display font-semibold text-white text-base sm:text-lg tracking-tight border-l-2 border-accent-blue pl-3 mb-4 sm:mb-5">
                        {category.title}
                    </h3>
                    <div
                        className="grid gap-3 sm:gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))]"
                        role="list"
                    >
                        {category.skills.map(({ label, Icon }) => (
                            <SkillBadge key={label} label={label} Icon={Icon} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
