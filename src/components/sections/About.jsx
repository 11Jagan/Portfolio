import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const STATS = [
  {
    value: '20+',
    label: 'Shipped Projects',
  },
  {
    value: '3 yr',
    label: 'Building on the Web',
  },
  {
    value: '∞',
    label: 'Infinite Dreams',
  },
];

const SectionLabel = ({ no, label }) => (
  <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)]">
    <span className="text-brand">
      [ {no} ]
    </span>

    <span>{label}</span>
  </div>
);

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 sm:py-32 lg:py-40 relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{ duration: 0.5 }}
            className="col-span-12 lg:col-span-3"
          >
            <SectionLabel
              no="02"
              label="About"
            />

            <h2 className="mt-4 font-display font-black uppercase text-5xl sm:text-6xl leading-[0.9] tracking-tightest">
              The
              <br />
              Person
              <br />
              Behind
              <br />
              The
              <span className="text-brand">
                .
              </span>
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="col-span-12 lg:col-span-8 lg:col-start-5"
          >
            {/* Quote */}
            <p className="font-serif italic text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-[var(--fg)]">
              <span className="text-brand">
                &ldquo;
              </span>

              I treat the web like an editor treats a
              page — every line of code earns its
              space, every interaction holds a point of
              view.

              <span className="text-brand">
                &rdquo;
              </span>
            </p>

            {/* Paragraphs */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-[var(--muted-fg)] text-base sm:text-lg leading-relaxed">
              <p>
                I&rsquo;m{' '}
                <span className="text-[var(--fg)] font-medium">
                  Jagan
                </span>
                , a full-stack developer based in India.
                My happy place is the seam between{' '}
                <em className="font-serif">
                  logic
                </em>{' '}
                and{' '}
                <em className="font-serif">
                  engineering
                </em>{' '}
                — building applications that feel responsive,
                scalable, and purposeful from the first click
                to the final interaction.
              </p>

              <p>
                I work primarily with React, Node, and
                MongoDB. Most days I&rsquo;m wiring up
                REST endpoints in the morning,
                polishing micro-interactions in the
                afternoon, and exploring machine learning,
                AI tools, and modern technologies to keep
                growing as a developer.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 border-t border-[var(--border)] pt-8">
              {STATS.map((s, i) => (
                <div key={i}>
                  <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tightest leading-none">
                    {s.value}
                  </div>

                  <div className="mt-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[var(--muted)]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              data-testid="about-cta"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();

                document
                  .getElementById('contact')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  });
              }}
              className="mt-12 inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase border-b border-[var(--fg)] pb-1 hover:text-brand hover:border-brand transition-colors"
            >
              Let&rsquo;s Make Something

              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;