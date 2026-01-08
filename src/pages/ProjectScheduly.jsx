const ProjectScheduly = () => {
    return (
        <div className="bg-neutral-950 min-h-screen">
            {/* Hero */}
            <section className="pt-40 pb-32 border-b border-neutral-900">
                <div className="container-custom">
                    <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-8 animate-fade-in">02 / 2025</div>
                    <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight mb-12 leading-none animate-fade-in-up animate-delay-100">
                        SCHEDULY
                    </h1>
                    <p className="text-2xl text-neutral-400 max-w-3xl animate-fade-in animate-delay-200">
                        Appointment scheduling made effortless
                    </p>
                </div>
            </section>

            {/* Problem */}
            <section className="py-32 border-b border-neutral-900">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-8 animate-fade-in">The Problem</div>
                        <p className="text-3xl sm:text-4xl text-white font-light leading-relaxed mb-8 animate-fade-in-up animate-delay-100">
                            Booking appointments shouldn't require phone calls or email chains.
                        </p>
                        <p className="text-xl text-neutral-500 leading-relaxed animate-fade-in animate-delay-200">
                            Service providers lose time managing calendars. Clients lose patience with complicated booking flows. The solution needed to work for both sides without adding complexity.
                        </p>
                    </div>
                </div>
            </section>

            {/* What Was Solved */}
            <section className="py-32 border-b border-neutral-900">
                <div className="container-custom">
                    <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-16 animate-fade-in">Focus Areas</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl">
                        <div>
                            <div className="text-sm uppercase tracking-wider text-neutral-500 mb-4">Simplicity</div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                Three clicks to book. No accounts required. Clear availability at a glance.
                            </p>
                        </div>
                        <div>
                            <div className="text-sm uppercase tracking-wider text-neutral-500 mb-4">Reliability</div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                Automated reminders that work. Conflict prevention. No double-bookings, ever.
                            </p>
                        </div>
                        <div>
                            <div className="text-sm uppercase tracking-wider text-neutral-500 mb-4">Adaptability</div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                Works for solo practitioners and teams. Customizable without complicated setup.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-32 border-b border-neutral-900">
                <div className="container-custom">
                    <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-16">Features</div>
                    <div className="max-w-5xl space-y-20">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Smart Availability</h3>
                            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
                                Reads existing calendars. Suggests optimal time slots. Handles buffer times automatically.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Frictionless Experience</h3>
                            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
                                No signup walls. Mobile-optimized. Instant confirmation. Clients book in seconds.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Automated Communication</h3>
                            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
                                Reminders sent at the right time. Reschedule requests handled automatically.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech */}
            <section className="py-32">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-8">Stack</div>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 text-sm text-neutral-400 border border-neutral-800 uppercase tracking-wider">React</span>
                            <span className="px-4 py-2 text-sm text-neutral-400 border border-neutral-800 uppercase tracking-wider">Node.js</span>
                            <span className="px-4 py-2 text-sm text-neutral-400 border border-neutral-800 uppercase tracking-wider">Tailwind</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectScheduly;
