const ProjectVerveo = () => {
    return (
        <div className="bg-neutral-950 min-h-screen">
            {/* Hero */}
            <section className="pt-40 pb-32 border-b border-neutral-900">
                <div className="container-custom">
                    <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-8 animate-fade-in">03 / 2025</div>
                    <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight mb-12 leading-none animate-fade-in-up animate-delay-100">
                        VERVEO
                    </h1>
                    <p className="text-2xl text-neutral-400 max-w-3xl animate-fade-in animate-delay-200">
                        E-commerce platform with premium design
                    </p>
                </div>
            </section>

            {/* Problem */}
            <section className="py-32 border-b border-neutral-900">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-8 animate-fade-in">The Problem</div>
                        <p className="text-3xl sm:text-4xl text-white font-light leading-relaxed mb-8 animate-fade-in-up animate-delay-100">
                            E-commerce platforms either look cheap or feel sluggish.
                        </p>
                        <p className="text-xl text-neutral-500 leading-relaxed animate-fade-in animate-delay-200">
                            Premium brands need shopping experiences that match their product quality. Fast load times, smooth interactions, details that matter. No compromises.
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
                            <div className="text-sm uppercase tracking-wider text-neutral-500 mb-4">Polish</div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                Micro-interactions that feel intentional. Transitions that guide attention. Hierarchy that works.
                            </p>
                        </div>
                        <div>
                            <div className="text-sm uppercase tracking-wider text-neutral-500 mb-4">Performance</div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                Instant page transitions. Optimized images. Smart lazy loading. Beauty without the wait.
                            </p>
                        </div>
                        <div>
                            <div className="text-sm uppercase tracking-wider text-neutral-500 mb-4">Experience</div>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                Seamless cart management. Wishlist that syncs. Checkout that removes friction.
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
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Refined Visual Language</h3>
                            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
                                Every component designed with purpose. Consistent spacing, thoughtful palette, intentional motion.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Smart State Management</h3>
                            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
                                Cart and wishlist sync instantly. No lost items, no refresh needed. Clean, maintainable architecture.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Thoughtful Interactions</h3>
                            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
                                Page transitions feel natural. Hover states provide feedback. Every interaction reinforces quality.
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
                            <span className="px-4 py-2 text-sm text-neutral-400 border border-neutral-800 uppercase tracking-wider">Context API</span>
                            <span className="px-4 py-2 text-sm text-neutral-400 border border-neutral-800 uppercase tracking-wider">Tailwind</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectVerveo;
