const ProjectFlowTask = () => {
    return (
        <div className="bg-neutral-950 min-h-screen">
            {/* Hero */}
            <section className="pt-40 pb-32 border-b border-neutral-900">
                <div className="container-custom">
                    <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-8 animate-fade-in">01 / 2025</div>
                    <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight mb-12 leading-none animate-fade-in-up animate-delay-100">
                        FIRST<br />PROJECT
                    </h1>
                    <p className="text-2xl text-neutral-400 max-w-3xl animate-fade-in animate-delay-200">
                        Task management reimagined for modern teams
                    </p>
                </div>
            </section>

            {/* Problem */}
            <section className="py-32 border-b border-neutral-900">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-8 animate-fade-in">The Problem</div>
                        <p className="text-3xl sm:text-4xl text-white font-light leading-relaxed mb-8 animate-fade-in-up animate-delay-100">
                            Teams waste time switching between tools and fighting interfaces.
                        </p>
                        <p className="text-xl text-neutral-500 leading-relaxed animate-fade-in animate-delay-200">
                            Most task managers are either too simple to be useful or too complex to adopt. The challenge wasn't building features—it was designing a system that gets out of your way.
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
                            <div className="text-sm uppercase tracking-wider text-neutral-500 mb-4">Clarity</div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                Every action obvious. No hidden features. Interface guides without instructing.
                            </p>
                        </div>
                        <div>
                            <div className="text-sm uppercase tracking-wider text-neutral-500 mb-4">Performance</div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                Optimized rendering. Smart caching. Actions feel instant. No loading spinners.
                            </p>
                        </div>
                        <div>
                            <div className="text-sm uppercase tracking-wider text-neutral-500 mb-4">Flexibility</div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                Adapts to workflows. No configuration overhead. Works how you think.
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
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Smart Prioritization</h3>
                            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
                                System learns what matters. Deadlines, dependencies, capacity—all factored in automatically.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Distraction-Free Interface</h3>
                            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
                                Only shows what's needed. Context-aware UI. Clean views that let you think.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Real-Time Collaboration</h3>
                            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
                                Updates instantly. No refresh needed. Conflicts resolved intelligently.
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
                            <span className="px-4 py-2 text-sm text-neutral-400 border border-neutral-800 uppercase tracking-wider">Tailwind</span>
                            <span className="px-4 py-2 text-sm text-neutral-400 border border-neutral-800 uppercase tracking-wider">Vite</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectFlowTask;
