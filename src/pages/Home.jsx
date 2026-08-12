import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ExperienceTimeline from '../components/ExperienceTimeline';
import TechStackBadges from '../components/TechStackBadges';
import ProjectsSection from '../components/ProjectsSection';
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

            <section id="about" className="scroll-mt-20 section-y bg-surface border-y border-slate-800/80">
                <div className="container-page">
                    <RevealSection>
                        <SectionHeading eyebrow="Profile" title="About" />
                        <p className="section-subtitle">
                            IT Help Desk and technical support professional focused on Windows, Active Directory, and
                            enterprise infrastructure.
                        </p>
                        <AboutSection />
                    </RevealSection>
                </div>
            </section>

            <section id="experience" className="scroll-mt-20 section-y bg-surface-deepest border-y border-slate-800/80">
                <div className="container-page">
                    <RevealSection>
                        <SectionHeading eyebrow="Work history" title="Experience" />
                        <p className="section-subtitle">
                            Enterprise environment experience spanning IT support operations, Active Directory
                            administration, and IT asset management.
                        </p>
                        <ExperienceTimeline />
                    </RevealSection>
                </div>
            </section>

            <section id="skills" className="scroll-mt-20 section-y bg-surface border-y border-slate-800/80">
                <div className="container-page">
                    <RevealSection>
                        <SectionHeading eyebrow="Capabilities" title="Skills" />
                        <p className="section-subtitle">
                            Core skills for IT Help Desk, desktop support, systems administration, and networking roles.
                        </p>
                        <TechStackBadges />
                    </RevealSection>
                </div>
            </section>

            <section id="projects" className="scroll-mt-20 section-y bg-surface-deepest border-y border-slate-800/80">
                <div className="container-page">
                    <RevealSection>
                        <SectionHeading eyebrow="Hands-on labs" title="Projects" />
                        <p className="section-subtitle">
                            Enterprise IT labs demonstrating real-world Windows Server, Active Directory, and networking
                            skills.
                        </p>
                        <ProjectsSection />
                    </RevealSection>
                </div>
            </section>

            <section id="education" className="scroll-mt-20 section-y bg-surface border-y border-slate-800/80">
                <div className="container-page">
                    <RevealSection>
                        <SectionHeading eyebrow="Academic" title="Education" />
                        <p className="section-subtitle">
                            Computer Science &amp; Information Technology graduate with a strong academic record.
                        </p>
                        <EducationSection />
                    </RevealSection>
                </div>
            </section>

            <section id="certifications" className="scroll-mt-20 section-y bg-surface-deepest border-y border-slate-800/80">
                <div className="container-page">
                    <RevealSection>
                        <SectionHeading eyebrow="Credentials" title="Certifications & Training" />
                        <p className="section-subtitle">
                            Industry certifications and structured training in IT support, networking, and cybersecurity.
                        </p>
                        <CertificationsTraining />
                    </RevealSection>
                </div>
            </section>

            <section id="contact" className="scroll-mt-20 section-y bg-surface border-y border-slate-800/80">
                <div className="container-page">
                    <RevealSection>
                        <SectionHeading eyebrow="Contact" title="Get In Touch" />
                        <p className="section-subtitle">
                            Open to IT Help Desk, IT Support, Technical Support, Systems Administration, and IT
                            Infrastructure opportunities.
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
