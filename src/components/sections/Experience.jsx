import { motion } from 'framer-motion';

const EXPERIENCES = [
    {
        period: '2024 — Now',
        role: 'Full-Stack Developer',
        company: 'AIVontra Automations PVT LTD',
        summary:
            'Designing and shipping end-to-end MERN applications for solo founders and small teams. Focus on lean codebases, accessible interfaces, and pragmatic deployment.',
        stack: ['React', 'Node', 'MongoDB', 'Tailwind', 'Vercel'],
    },
    {
        period: '2023 — 2024',
        role: 'Open-Source Contributor',
        company: 'GitHub Community',
        summary:
            'Contributed bug fixes, docs, and small features to JavaScript & React tooling repositories. Learned in public — pull requests as a craft, not a chore.',
        stack: ['JavaScript', 'React', 'Git', 'Testing'],
    },
    {
        period: '2022 — 2023',
        role: 'Frontend Developer (Learner)',
        company: 'Self-Initiated Studio',
        summary:
            'Cut my teeth on HTML, CSS, and vanilla JS. Built marketing pages, landing experiments, and personal tools to internalize the fundamentals of the web.',
        stack: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            data-testid="experience-section"
            className="py-24 sm:py-32 lg:py-40 bg-[var(--surface)] border-y border-[var(--border)]"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-24 items-end">
                    <div className="col-span-12 lg:col-span-8">
                        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-4">
                            <span className="text-brand">[ 05 ]</span>
                            &nbsp; Experience
                        </div>

                        <h2 className="font-display font-black uppercase text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tightest">
                            A Working
                            <br />

                            <span className="font-serif italic font-normal lowercase text-[var(--muted-fg)]">
                                history of
                            </span>{' '}
                            the craft
                            <span className="text-brand">.</span>
                        </h2>
                    </div>
                </div>

                {/* Experience List */}
                <div>
                    {EXPERIENCES.map((e, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                            }}
                            className="group grid grid-cols-12 gap-x-6 gap-y-3 py-10 lg:py-14 border-t border-[var(--border)] last:border-b hover:bg-[var(--bg)] transition-colors -mx-6 px-6 lg:-mx-12 lg:px-12"
                            data-testid={`experience-item-${i}`}
                        >
                            {/* Period */}
                            <div className="col-span-12 lg:col-span-3 font-mono text-xs tracking-[0.2em] uppercase text-brand">
                                {e.period}
                            </div>

                            {/* Main Content */}
                            <div className="col-span-12 lg:col-span-6">
                                <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight leading-tight">
                                    {e.role}
                                </h3>

                                <p className="font-serif italic text-lg sm:text-xl text-[var(--muted-fg)] mt-1">
                                    {e.company}
                                </p>

                                <p className="font-sans text-base text-[var(--muted-fg)] mt-4 leading-relaxed max-w-xl">
                                    {e.summary}
                                </p>
                            </div>

                            {/* Stack */}
                            <div className="col-span-12 lg:col-span-3 flex flex-wrap gap-x-3 gap-y-1 lg:justify-end items-start font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--muted)]">
                                {e.stack.map((s) => (
                                    <span key={s} className="hover:text-brand transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;