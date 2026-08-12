import { Server, Network } from 'lucide-react';
import { RevealItem } from './RevealSection';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const PROJECTS = [
    {
        icon: Server,
        title: 'Enterprise Windows Server & Active Directory Lab',
        eyebrow: 'Enterprise Infrastructure',
        summary:
            'Hands-on enterprise IT lab demonstrating Windows Server, Active Directory, DNS/DHCP, Group Policy, and domain-joined client administration.',
        bullets: [
            'Designed and deployed a multi-machine enterprise lab using VMware Workstation with Windows Server and Windows 10 clients.',
            'Installed and configured Active Directory Domain Services (AD DS) and promoted a Domain Controller.',
            'Configured DNS, DHCP, and Remote Desktop Services (RDP).',
            'Created and managed Organizational Units, users, security groups, password policies, and administrative permissions.',
            'Implemented and validated Group Policy Objects (GPOs) for security settings, desktop restrictions, and system configurations.',
            'Joined Windows 10 client machines to the domain, verified authentication, applied Group Policies, and performed administrative troubleshooting.',
        ],
        journey: ['VMware', 'Windows Server', 'Active Directory', 'DNS / DHCP', 'GPO', 'Windows Client'],
        tags: [
            'Windows Server',
            'Active Directory',
            'GPO',
            'DNS',
            'DHCP',
            'RDP',
            'VMware Workstation',
            'Windows 10',
        ],
    },
    {
        icon: Network,
        title: 'Enterprise Networking & Infrastructure Lab',
        eyebrow: 'Networking & Troubleshooting',
        summary:
            'Enterprise networking lab focused on IPv4 design, VLANs, routing/switching, DHCP/DNS services, and structured connectivity troubleshooting.',
        bullets: [
            'Designed and implemented enterprise network topologies using Cisco Packet Tracer.',
            'Configured IPv4 addressing, subnetting, VLANs, switching, static routing, and inter-VLAN communication.',
            'Implemented and validated DHCP and DNS services.',
            'Verified and troubleshot network connectivity using Ping, Traceroute, and Cisco IOS diagnostic commands.',
            'Applied structured troubleshooting methodologies to identify and resolve routing, switching, and connectivity issues.',
        ],
        journey: [
            'Cisco Packet Tracer',
            'IPv4',
            'Subnetting',
            'VLAN',
            'Switching',
            'Routing',
            'DNS / DHCP',
            'Troubleshooting',
        ],
        tags: [
            'Cisco Packet Tracer',
            'IPv4',
            'Subnetting',
            'VLANs',
            'Switching',
            'Routing',
            'DHCP',
            'DNS',
            'TCP/IP',
        ],
    },
];

function ProjectJourney({ steps, visible }) {
    return (
        <div className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-2" aria-label="Technical progression">
            {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-1.5">
                    <span
                        className={`journey-step inline-flex rounded-md border border-slate-600/80 bg-slate-900/40 px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-slate-300 ${
                            visible ? 'reveal-visible' : ''
                        }`}
                        style={{ '--reveal-delay': `${index * 55}ms` }}
                    >
                        {step}
                    </span>
                    {index < steps.length - 1 && (
                        <span
                            className={`journey-step text-slate-600 text-xs ${visible ? 'reveal-visible' : ''}`}
                            style={{ '--reveal-delay': `${index * 55 + 25}ms` }}
                            aria-hidden
                        >
                            →
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}

function ProjectCard({ project }) {
    const { ref, visible } = useRevealOnScroll({
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.1,
    });
    const { icon: Icon, title, eyebrow, summary, bullets, journey, tags } = project;

    return (
        <article
            ref={ref}
            className={`card-surface overflow-hidden border-accent-blue/10 transition-[border-color,transform,box-shadow] duration-500 ${
                visible
                    ? 'border-accent-blue/25 shadow-[0_0_40px_-18px_rgba(59,130,246,0.35)] translate-y-0'
                    : 'translate-y-2'
            } hover:border-accent-blue/35`}
        >
            <div className="border-b border-slate-700/80 p-5 sm:p-6 md:p-7">
                <div className="flex gap-4 sm:gap-5">
                    <div
                        className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-cyan"
                        aria-hidden
                    >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent-cyan">
                            {eyebrow}
                        </p>
                        <h3 className="mt-2 font-display text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                            {title}
                        </h3>
                        <p className="mt-3 text-sm sm:text-[0.9375rem] text-slate-400 leading-relaxed max-w-3xl">
                            {summary}
                        </p>
                        <ProjectJourney steps={journey} visible={visible} />
                    </div>
                </div>
            </div>

            <ul className="space-y-3 p-5 sm:p-6 md:px-7 md:pb-6 list-none m-0">
                {bullets.map((bullet, index) => (
                    <li key={bullet}>
                        <RevealItem delayMs={Math.min(index * 45, 200)}>
                            <div className="flex gap-3 text-sm sm:text-[0.9375rem] text-slate-300 leading-relaxed">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" aria-hidden />
                                <span>{bullet}</span>
                            </div>
                        </RevealItem>
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2 px-5 pb-5 sm:px-6 sm:pb-6 md:px-7 md:pb-7">
                {tags.map((tag, index) => (
                    <RevealItem key={tag} delayMs={Math.min(index * 30, 180)} variant="soft">
                        <span className="inline-flex rounded-full border border-slate-600/90 bg-surface/80 px-3 py-1 text-xs font-medium text-slate-300">
                            {tag}
                        </span>
                    </RevealItem>
                ))}
            </div>
        </article>
    );
}

export default function ProjectsSection() {
    return (
        <div className="mt-6 sm:mt-8 space-y-8 sm:space-y-10">
            {PROJECTS.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </div>
    );
}
