import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    year: '2025',
    title: 'Resume Builder',
    type: 'Full-Stack · SaaS Tool',
    description:
      'A modern, ATS-friendly résumé builder with live preview, auth, and PDF export. Built to remove every excuse for shipping a great application.',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&dpr=2',
    tags: ['React', 'Node.js', 'Express', 'JWT', 'Tailwind'],
    github: 'https://github.com/11Jagan/ResumeBuilder',
    live: 'https://resume-builder-sigma-rust.vercel.app/',
  },
  {
    id: '02',
    year: '2024',
    title: 'Cointraker',
    type: 'Personal Finance · MERN',
    description:
      "Add incomes, plan budgets, watch where the money actually goes. Charts that don't lie, an interface that doesn't shout.",
    image:
      'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?auto=format&fit=crop&w=1600&q=80',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/11Jagan/Expense-Tracker',
    live: 'https://cointraker.netlify.app/',
  },
  {
    id: '03',
    year: '2024',
    title: 'Wanderstay',
    type: 'Airbnb Clone · Booking Platform',
    description:
      'Search, browse, and book stays around the world. Listings, image galleries, descriptions, bookings — the full hospitality loop.',
    image:
      'https://images.unsplash.com/photo-1721395522061-46cf65bfe827?auto=format&fit=crop&w=1600&q=80',
    tags: ['React', 'MongoDB', 'Node.js', 'Express'],
    github: 'https://github.com/11Jagan/Airbnb-Clone',
    live: 'https://wanderstay-ks67.onrender.com/',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="py-24 sm:py-32 lg:py-40"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-24 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-4">
              <span className="text-brand">[ 04 ]</span>
              &nbsp; Selected Work
            </div>

            <h2 className="font-display font-black uppercase text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tightest">
              Things I&rsquo;ve
              <br />

              <span className="text-brand">Built</span>, shipped,
              <br />

              <span className="font-serif italic font-normal lowercase text-[var(--muted-fg)]">
                stood behind.
              </span>
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:text-right">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-2">
              03 of 12 cases
            </p>

            <a
              data-testid="projects-github-cta"
              href="https://github.com/11Jagan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase border-b border-[var(--fg)] pb-1 hover:text-brand hover:border-brand transition-colors"
            >
              See All on GitHub

              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-24 lg:space-y-32">
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid grid-cols-12 gap-6 items-start"
              data-testid={`project-card-${p.id}`}
            >
              {/* Image */}
              <div
                className={`col-span-12 lg:col-span-8 ${idx % 2 === 1 ? 'lg:col-start-5' : ''
                  } order-1`}
              >
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden border border-[var(--border)] bg-[var(--surface)]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover img-mono"
                    />
                  </div>

                  <div className="absolute top-4 left-4 bg-[var(--bg)] px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase border border-[var(--border)]">
                    {p.year}
                  </div>

                  <div className="absolute top-4 right-4 w-11 h-11 bg-brand text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight size={18} />
                  </div>
                </a>
              </div>

              {/* Content */}
              <div
                className={`col-span-12 lg:col-span-4 order-2 ${idx % 2 === 1
                    ? 'lg:col-start-1 lg:row-start-1 lg:text-left'
                    : ''
                  }`}
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-display font-black text-5xl text-brand leading-none">
                    {p.id}
                  </span>

                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">
                    {p.type}
                  </span>
                </div>

                <h3 className="font-display font-bold uppercase text-3xl sm:text-4xl tracking-tight leading-[0.95] mb-4">
                  {p.title}
                </h3>

                <p className="font-sans text-base text-[var(--muted-fg)] leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--muted)] mb-6">
                  {p.tags.join(' · ')}
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* Live Button */}
                  <a
                    data-testid={`project-live-${p.id}`}
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 bg-[var(--fg)] text-[var(--bg)] px-5 py-3 font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-brand transition-colors"
                  >
                    Live

                    <ArrowUpRight
                      size={14}
                      className="group-hover/btn:rotate-45 transition-transform"
                    />
                  </a>

                  {/* Source Button */}
                  <a
                    data-testid={`project-github-${p.id}`}
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[var(--fg)] px-5 py-3 font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;