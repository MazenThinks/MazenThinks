import { Headset, Monitor, Network, Server } from 'lucide-react';

const FOCUS_AREAS = [
    {
        icon: Headset,
        title: 'IT Support',
        text: 'L1/L2 technical support, desktop troubleshooting, and end-user issue resolution.',
    },
    {
        icon: Monitor,
        title: 'Windows & Active Directory',
        text: 'Windows 10/11, AD account administration, OS imaging, and device deployment.',
    },
    {
        icon: Server,
        title: 'Systems Administration',
        text: 'Windows Server, Active Directory Domain Services, Group Policy, and enterprise labs.',
    },
    {
        icon: Network,
        title: 'Networking & Infrastructure',
        text: 'TCP/IP, DNS, DHCP, and hands-on enterprise networking with Cisco Packet Tracer.',
    },
];

export default function AboutSection() {
    return (
        <div className="mt-6 sm:mt-8 space-y-8 sm:space-y-10">
            <div className="max-w-3xl space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                    IT Help Desk Engineer with hands-on experience delivering L1/L2 technical support, Active Directory
                    administration, Windows 10/11 troubleshooting, OS imaging, and device deployment in an enterprise
                    environment.
                </p>
                <p>
                    Computer Science graduate (3.8 GPA) with practical experience designing and deploying Windows Server,
                    Active Directory, and enterprise networking environments using VMware Workstation and Cisco Packet
                    Tracer — focused on systems administration, IT infrastructure, and cybersecurity.
                </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
                {FOCUS_AREAS.map(({ icon: Icon, title, text }) => (
                    <li key={title}>
                        <article className="card-surface h-full p-4 sm:p-5 flex gap-4 border-accent-blue/10 hover:border-accent-blue/25 transition-colors">
                            <div
                                className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-cyan"
                                aria-hidden
                            >
                                <Icon className="w-5 h-5" strokeWidth={1.75} />
                            </div>
                            <div className="min-w-0 pt-0.5">
                                <h3 className="font-display font-semibold text-white text-sm sm:text-base">{title}</h3>
                                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{text}</p>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}
