import FlowTaskMockup from '../assets/FlowTask.png';
import SchedulyMockup from '../assets/Scheduly.png';
import VerveoMockup from '../assets/Verveo.png';

const Work = () => {
    return (
        <div className="bg-white dark:bg-neutral-950 transition-colors duration-600 min-h-screen animate-page-enter">
            {/* Hero */}
            <section className="pt-32 pb-20 border-b border-neutral-200 dark:border-neutral-900 transition-colors duration-600">
                <div className="container-custom">
                    <h1 className="font-display text-7xl lg:text-8xl font-black text-neutral-950 dark:text-white tracking-tight leading-none mb-6 animate-fade-in-up">
                        Selected Work
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-2xl animate-fade-in-up animate-delay-100">
                        Three projects that reflect how I think about interfaces.
                    </p>
                </div>
            </section>

            {/* Projects */}
            <section className="py-32">
                <div className="container-custom">
                    <div className="max-w-7xl mx-auto space-y-32">
                        {/* FlowTask */}
                        <a
                            href="https://example.com/flowtask"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="grid lg:grid-cols-5 gap-20 items-center cursor-pointer">
                                <div className="lg:col-span-2 space-y-8">
                                    <div className="text-sm uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600 font-medium">
                                        01
                                    </div>
                                    <h2 className="font-project text-8xl lg:text-9xl font-bold text-neutral-950 dark:text-white tracking-normal leading-none group-hover:translate-x-3 transition-transform duration-500">
                                        FlowTask
                                    </h2>
                                    <p className="text-2xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                                        Task management for teams that ship fast
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">React</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">TypeScript</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Tailwind CSS</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Vite</span>
                                    </div>
                                </div>
                                <div className="lg:col-span-3">
                                    <div className="relative w-full overflow-hidden rounded-xl border-2 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl group-hover:shadow-3xl group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-all duration-500">
                                        <img src={FlowTaskMockup} alt="FlowTask" className="aspect-[16/10] w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Scheduly */}
                        <a
                            href="https://example.com/scheduly"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="grid lg:grid-cols-5 gap-20 items-center cursor-pointer">
                                <div className="lg:col-span-2 lg:order-2 space-y-8">
                                    <div className="text-sm uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600 font-medium">
                                        02
                                    </div>
                                    <h2 className="font-project text-8xl lg:text-9xl font-bold text-neutral-950 dark:text-white tracking-normal leading-none group-hover:translate-x-3 transition-transform duration-500">
                                        Scheduly
                                    </h2>
                                    <p className="text-2xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                                        Appointment booking without the friction
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">React</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Tailwind CSS</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Vite</span>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 lg:order-1">
                                    <div className="relative w-full overflow-hidden rounded-xl border-2 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl group-hover:shadow-3xl group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-all duration-500">
                                        <img src={SchedulyMockup} alt="Scheduly" className="aspect-[16/10] w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Verveo */}
                        <a
                            href="https://example.com/verveo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="grid lg:grid-cols-5 gap-20 items-center cursor-pointer">
                                <div className="lg:col-span-2 space-y-8">
                                    <div className="text-sm uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600 font-medium">
                                        03
                                    </div>
                                    <h2 className="font-project text-8xl lg:text-9xl font-bold text-neutral-950 dark:text-white tracking-normal leading-none group-hover:translate-x-3 transition-transform duration-500">
                                        Verveo
                                    </h2>
                                    <p className="text-2xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                                        E-commerce that feels premium
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">React</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">TypeScript</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Tailwind CSS</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Context API</span>
                                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">Vite</span>
                                    </div>
                                </div>
                                <div className="lg:col-span-3">
                                    <div className="relative w-full overflow-hidden rounded-xl border-2 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl group-hover:shadow-3xl group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-all duration-500">
                                        <img src={VerveoMockup} alt="Verveo" className="aspect-[16/10] w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;
