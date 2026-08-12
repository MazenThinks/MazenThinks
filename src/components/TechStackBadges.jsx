import {
    Headset,
    MonitorSmartphone,
    Wrench,
    Layers,
    Package,
    Ticket,
    ClipboardList,
    ScreenShare,
    Laptop,
    Server,
    Users,
    SlidersHorizontal,
    UserRound,
    FolderTree,
    KeyRound,
    MonitorPlay,
    Network,
    Binary,
    Globe,
    Router,
    Cable,
    Shield,
    Waypoints,
    Activity,
    Route,
    Boxes,
    Box,
    Settings2,
    Terminal,
} from 'lucide-react';
import { RevealItem } from './RevealSection';

const CATEGORIES = [
    {
        title: 'IT Support',
        skills: [
            { label: 'L1/L2 Technical Support', Icon: Headset },
            { label: 'Desktop Support', Icon: MonitorSmartphone },
            { label: 'Hardware & Software Troubleshooting', Icon: Wrench },
            { label: 'OS Imaging & Deployment', Icon: Layers },
            { label: 'Device Deployment', Icon: Package },
            { label: 'Ticket Management', Icon: Ticket },
            { label: 'IT Asset Management', Icon: ClipboardList },
            { label: 'Remote Support', Icon: ScreenShare },
        ],
    },
    {
        title: 'Windows & Systems Administration',
        skills: [
            { label: 'Windows 10/11', Icon: Laptop },
            { label: 'Windows Server', Icon: Server },
            { label: 'Active Directory Domain Services (AD DS)', Icon: Users },
            { label: 'Group Policy (GPO)', Icon: SlidersHorizontal },
            { label: 'User & Group Management', Icon: UserRound },
            { label: 'Organizational Units (OUs)', Icon: FolderTree },
            { label: 'Password & Access Management', Icon: KeyRound },
            { label: 'Remote Desktop Services (RDP)', Icon: MonitorPlay },
        ],
    },
    {
        title: 'Networking',
        skills: [
            { label: 'TCP/IP', Icon: Network },
            { label: 'IPv4 Addressing & Subnetting', Icon: Binary },
            { label: 'DNS', Icon: Globe },
            { label: 'DHCP', Icon: Router },
            { label: 'DNS & DHCP Troubleshooting', Icon: Wrench },
            { label: 'Network Connectivity Troubleshooting', Icon: Cable },
            { label: 'VPN Support', Icon: Shield },
            { label: 'Switching & Routing Fundamentals', Icon: Waypoints },
            { label: 'Ping & Traceroute', Icon: Activity },
            { label: 'LAN/WAN Fundamentals', Icon: Route },
        ],
    },
    {
        title: 'Virtualization',
        skills: [
            { label: 'VMware Workstation', Icon: Boxes },
            { label: 'Virtual Machine Deployment', Icon: Box },
            { label: 'Virtual Network Configuration', Icon: Settings2 },
        ],
    },
    {
        title: 'Operating Systems',
        skills: [
            { label: 'Windows 10/11', Icon: Laptop },
            { label: 'Windows Server', Icon: Server },
            { label: 'Linux', Icon: Terminal },
        ],
    },
];

function SkillBadge({ label, Icon }) {
    return (
        <div
            className="group flex items-center gap-2.5 rounded-full border border-slate-600/90 bg-surface/80 backdrop-blur-sm px-4 py-2.5 sm:px-4 sm:py-3 text-sm text-slate-200 transition-all duration-300 ease-out hover:border-accent-cyan/55 hover:bg-slate-800/90 hover:shadow-[0_0_28px_-6px_rgba(59,130,246,0.55),0_0_36px_-12px_rgba(6,182,212,0.35)] hover:-translate-y-0.5"
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
            {CATEGORIES.map((category, categoryIndex) => (
                <RevealItem key={category.title} delayMs={Math.min(categoryIndex * 60, 180)}>
                    <h3 className="font-display font-semibold text-white text-base sm:text-lg tracking-tight border-l-2 border-accent-blue pl-3 mb-4 sm:mb-5">
                        {category.title}
                    </h3>
                    <div
                        className="grid gap-3 sm:gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))]"
                        role="list"
                    >
                        {category.skills.map(({ label, Icon }, skillIndex) => (
                            <RevealItem
                                key={`${category.title}-${label}`}
                                delayMs={Math.min(skillIndex * 35, 240)}
                                variant="soft"
                            >
                                <SkillBadge label={label} Icon={Icon} />
                            </RevealItem>
                        ))}
                    </div>
                </RevealItem>
            ))}
        </div>
    );
}
