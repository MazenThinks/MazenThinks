import { Shield, Terminal, Server, Network } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const iconClass =
    'w-11 h-11 sm:w-14 sm:h-14 md:w-[4.5rem] md:h-[4.5rem] stroke-[1.15] text-accent-cyan/20 sm:text-accent-cyan/25';

const floatStyle = (delaySec, durationSec, reduced) =>
    reduced
        ? undefined
        : {
              animation: `heroFloat ${durationSec}s ease-in-out infinite`,
              animationDelay: `${delaySec}s`,
          };

export default function HeroFloatingIcons() {
    const reduced = usePrefersReducedMotion();

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div
                className="absolute top-[8%] left-[3%] sm:left-[6%] md:top-[12%] md:left-[8%]"
                style={floatStyle(0, 9, reduced)}
            >
                <Shield className={iconClass} />
            </div>
            <div
                className="absolute top-[14%] right-[2%] sm:right-[5%] md:top-[18%] md:right-[10%]"
                style={floatStyle(1.4, 8, reduced)}
            >
                <Terminal className={iconClass} />
            </div>
            <div
                className="absolute bottom-[22%] left-[4%] sm:left-[7%] md:bottom-[26%]"
                style={floatStyle(0.7, 10, reduced)}
            >
                <Server className={iconClass} />
            </div>
            <div
                className="absolute bottom-[14%] right-[3%] sm:right-[6%] md:bottom-[18%] md:right-[12%]"
                style={floatStyle(2.1, 8.5, reduced)}
            >
                <Network className={iconClass} />
            </div>
        </div>
    );
}
