import { motion } from 'framer-motion';

const QUOTES = [
    {
        quote:
            'Jagan delivered our MVP two weeks ahead of schedule. He&rsquo;s the rare engineer who genuinely cares about how the interface feels, not just whether it works.',
        name: 'Aarav Mehta',
        role: 'Founder, FoldSpace Studio',
    },
    {
        quote:
            'Clean code, calm communication, and an instinct for taste. We&rsquo;ve hired him three times — that should say enough.',
        name: 'Priya Raman',
        role: 'Product Lead, Northbound',
    },
    {
        quote:
            'He took a vague Notion doc and turned it into a real product. Every commit message was clearer than my Mondays.',
        name: 'Daniel Costa',
        role: 'Indie Maker',
    },
    {
        quote:
            'Working with Jagan felt less like outsourcing and more like co-founding for a sprint. Highly recommend.',
        name: 'Sneha Iyer',
        role: 'CTO, Lumenflow',
    },
];

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="py-24 sm:py-32 lg:py-40"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-20">
                    <div className="col-span-12 lg:col-span-8">
                        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-4">
                            <span className="text-brand">[ 06 ]</span>
                            &nbsp; Words from clients
                        </div>

                        <h2 className="font-display font-black uppercase text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tightest">
                            Read what
                            <br />

                            <span className="text-brand">others</span> have
                            <br />

                            <span className="font-serif italic font-normal lowercase text-[var(--muted-fg)]">
                                said about
                            </span>{' '}
                            working with me.
                        </h2>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
                    {QUOTES.map((q, i) => (
                        <motion.figure
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: (i % 2) * 0.1,
                            }}
                            className="bg-[var(--bg)] p-8 sm:p-10 lg:p-12 relative group hover:bg-[var(--surface)] transition-colors"
                            data-testid={`testimonial-${i}`}
                        >
                            {/* Quote Mark */}
                            <span className="font-serif text-7xl sm:text-8xl text-brand leading-none absolute top-4 left-6 select-none">
                                &ldquo;
                            </span>

                            {/* Quote */}
                            <blockquote
                                className="font-serif text-xl sm:text-2xl lg:text-3xl leading-[1.3] italic relative z-10 mt-6"
                                dangerouslySetInnerHTML={{ __html: q.quote }}
                            />

                            {/* Footer */}
                            <figcaption className="mt-8 pt-6 border-t border-[var(--border)] flex items-baseline justify-between gap-4">
                                <div>
                                    <div className="font-display font-bold uppercase text-sm tracking-tight">
                                        {q.name}
                                    </div>

                                    <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--muted)] mt-1">
                                        {q.role}
                                    </div>
                                </div>

                                <span className="font-mono text-xs text-brand">
                                    / 0{i + 1}
                                </span>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;