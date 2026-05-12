import Hero from '../components/Hero';
import ExperienceTimeline from '../components/ExperienceTimeline';
import TechStackBadges from '../components/TechStackBadges';
import CertificationsTraining from '../components/CertificationsTraining';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import RevealSection from '../components/RevealSection';

const CONTACT = {
    email: 'mazenyassien.dev@gmail.com',
    phone: '+2 01131748005',
    phoneTel: '+201131748005',
    location: 'Cairo, Egypt',
    linkedin: 'https://www.linkedin.com/in/mazenyassien/',
    github: 'https://github.com/MazenThinks',
    portfolio: 'https://mazenyassien.me/',
};

export default function Home() {
    return (
        <>
            <Hero contact={CONTACT} />

            <section id="experience" className="scroll-mt-20 section-y bg-surface border-y border-slate-800/80">
                <div className="container-page">
                    <RevealSection>
                        <SectionHeading eyebrow="Work history" title="Experience" />
                        <p className="section-subtitle">
                            Service desk delivery in a global logistics environment — identity, endpoints, and operational
                            rigor.
                        </p>
                        <ExperienceTimeline />
                    </RevealSection>
                </div>
            </section>

            <section id="skills" className="scroll-mt-20 section-y bg-surface-deepest border-y border-slate-800/80">
                <div className="container-page">
                    <RevealSection>
                        <SectionHeading eyebrow="Toolbox" title="Tech Stack & Skills" />
                        <p className="section-subtitle">
                            Core platforms and day-to-day tooling — identity, endpoints, and disciplined operations.
                        </p>
                        <TechStackBadges />
                    </RevealSection>
                </div>
            </section>

            <section id="certifications" className="scroll-mt-20 section-y bg-surface border-y border-slate-800/80">
                <div className="container-page">
                    <RevealSection>
                        <SectionHeading eyebrow="Credentials" title="Certifications & Training" />
                        <p className="section-subtitle">
                            Industry certifications plus structured coursework aligned to security and infrastructure
                            practice.
                        </p>
                        <CertificationsTraining />
                    </RevealSection>
                </div>
            </section>

            <section id="education" className="scroll-mt-20 section-y bg-surface-deepest border-y border-slate-800/80">
                <div className="container-page">
                    <RevealSection>
                        <SectionHeading eyebrow="Academic" title="Education" />
                        <p className="section-subtitle">
                            Bachelor&apos;s in Computer Science &amp; Information Technology — strong academic record and
                            applied project work.
                        </p>
                        <EducationSection />
                    </RevealSection>
                </div>
            </section>

            <section id="contact" className="scroll-mt-20 section-y bg-surface border-y border-slate-800/80">
                <div className="container-page">
                    <RevealSection>
                        <SectionHeading eyebrow="Contact" title="Get In Touch" />
                        <p className="section-subtitle">
                            Open to IT Support, Helpdesk, and Cybersecurity opportunities.
                        </p>
                        <ContactSection contact={CONTACT} />
                    </RevealSection>
                </div>
            </section>
        </>
    );
}

function SectionHeading({ eyebrow, title }) {
    return (
        <header>
            <p className="text-accent-cyan text-xs font-semibold tracking-[0.2em] uppercase">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
        </header>
    );
}
