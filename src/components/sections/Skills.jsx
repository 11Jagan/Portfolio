import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    no: '/ 01',
    title: 'Frontend',
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'JavaScript / TS', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Framer Motion', level: 'Advanced' },
      { name: 'HTML / CSS', level: 'Expert' },
      { name: 'Bootstrap', level: 'Advanced' },
    ],
  },
  {
    no: '/ 02',
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'Flask', level: 'Advanced' },
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'SQL / MySQL', level: 'Intermediate' },
    ],
  },
  {
    no: '/ 03',
    title: 'Tools & Craft',
    skills: [
      { name: 'Git / GitHub', level: 'Expert' },
      { name: 'VS Code', level: 'Expert' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'Figma', level: 'Intermediate' },
      { name: 'Vercel / Netlify', level: 'Advanced' },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="py-24 sm:py-32 lg:py-40 bg-[var(--surface)] border-y border-[var(--border)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-24 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-4">
              <span className="text-brand">[ 03 ]</span>
              &nbsp; Stack
            </div>

            <h2 className="font-display font-black uppercase text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              The Tools
              <br />

              <span className="font-serif italic font-normal lowercase text-[var(--muted-fg)]">
                that earn
              </span>{' '}
              their keep
              <span className="text-brand">.</span>
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="font-sans text-base sm:text-lg text-[var(--muted-fg)] leading-relaxed">
              A working inventory — refined, not exhaustive. Every entry has
              shipped in production at least once.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
              }}
              data-testid={`skill-category-${cat.title.toLowerCase()}`}
            >
              {/* Category Header */}
              <div className="flex items-baseline justify-between border-b-2 border-[var(--fg)] pb-3 mb-2">
                <h3 className="font-display font-bold uppercase text-2xl tracking-tight">
                  {cat.title}
                </h3>

                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-brand">
                  {cat.no}
                </span>
              </div>

              {/* Skill List */}
              <ul>
                {cat.skills.map((s, i) => (
                  <li
                    key={s.name}
                    className="group flex items-baseline justify-between py-4 border-b border-[var(--border)] hover:border-brand transition-colors cursor-default"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] text-[var(--muted)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <span className="font-sans text-lg sm:text-xl text-[var(--fg)] group-hover:text-brand transition-colors">
                        {s.name}
                      </span>
                    </span>

                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--muted)]">
                      {s.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;