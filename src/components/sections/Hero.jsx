import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

import { motion } from 'framer-motion';

const SOCIALS = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jagan-mohan-reddy-kontham-445250293',
  },
  {
    icon: Github,
    label: 'GitHub',
    url: 'https://github.com/11Jagan',
  },
  {
    icon: Mail,
    label: 'Email',
    url: 'mailto:konthamjaganmohanreddy@gmail.com',
  },
];

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen pt-32 sm:pt-36 pb-16 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.12]">
        <div className="max-w-[1400px] mx-auto h-full px-6 sm:px-8 lg:px-12 grid grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-l border-[var(--fg)] h-full"
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-12 gap-6 mb-10 sm:mb-16"
        >
          <div className="col-span-12 sm:col-span-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)]">
            <span className="text-brand">●</span>
            &nbsp; Available · Q2 2026
          </div>

          <div className="hidden sm:block sm:col-span-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)]">
            Hyderabad · India · IST
          </div>

          <div className="hidden sm:block sm:col-span-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] text-right">
            Portfolio / 2026 — Vol.04
          </div>
        </motion.div>

        {/* Main Hero */}
        <div className="grid grid-cols-12 gap-6 items-end">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="col-span-12 lg:col-span-8"
          >
            <h1 className="font-display font-black uppercase leading-[0.85] tracking-normal text-[14vw] sm:text-[12vw] lg:text-[9vw]">
              <span className="block">
                Jagan
              </span>

              <span className="block">
                Mohan
                <span className="text-brand">.</span>
              </span>
            </h1>

            <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl mt-6 text-[var(--muted-fg)] max-w-3xl">
              I build dense, deliberate web experiences —
              engineered front to back, drawn with restraint.
            </p>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="col-span-12 lg:col-span-4 lg:justify-self-end"
          >
            <div className="group relative aspect-[3/4] max-w-[280px] mx-auto lg:mx-0 lg:ml-auto border border-[var(--border)] p-2 bg-[var(--surface)]">
              <div className="absolute -top-3 -left-3 bg-[var(--bg)] px-2 font-mono text-[10px] tracking-[0.2em] uppercase text-brand z-10">
                / Self · Portrait
              </div>

              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="https://i.postimg.cc/7PNt6pKn/me.jpg"
                  alt="Jagan Mohan Reddy"
                  className="w-full h-full object-cover img-mono"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 bg-brand px-2 py-0.5 font-mono text-[10px] tracking-[0.2em] uppercase text-white">
                IND · 26
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lower Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="grid grid-cols-12 gap-6 mt-16 sm:mt-24 pt-10 border-t border-[var(--border)]"
        >
          <div className="col-span-12 sm:col-span-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)]">
            (00) — Currently
          </div>

          <div className="col-span-12 sm:col-span-5">
            <p className="font-sans text-base sm:text-lg leading-relaxed text-[var(--muted-fg)]">
              Full-stack developer focused on the{' '}
              <span className="text-[var(--fg)] font-medium">
                MERN
              </span>{' '}
              stack. I ship pragmatic interfaces,
              accessible by default, with a soft spot for
              typography, motion and the in-between details
              that make products feel{' '}
              <em className="font-serif">
                human
              </em>.
            </p>
          </div>

          <div className="col-span-12 sm:col-span-4 flex flex-col gap-3 sm:items-end">
            {/* Resume Button */}
            <a
              data-testid="hero-cta-primary"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[var(--fg)] text-[var(--bg)] px-6 py-4 font-mono text-xs tracking-[0.2em] uppercase hover:bg-brand hover:text-white transition-colors w-full sm:w-auto justify-between sm:justify-center"
            >
              Download Résumé

              <ArrowUpRight
                size={16}
                className="group-hover:rotate-45 transition-transform duration-300"
              />
            </a>

            {/* Contact Button */}
            <button
              data-testid="hero-cta-secondary"
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center gap-3 border border-[var(--fg)] text-[var(--fg)] px-6 py-4 font-mono text-xs tracking-[0.2em] uppercase hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors w-full sm:w-auto justify-between sm:justify-center"
            >
              Start a Project

              <ArrowUpRight
                size={16}
                className="group-hover:rotate-45 transition-transform duration-300"
              />
            </button>
          </div>
        </motion.div>

        {/* Socials */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-1">
            {SOCIALS.map(
              ({ icon: Icon, label, url }, i) => (
                <a
                  key={i}
                  data-testid={`hero-social-${label.toLowerCase()}`}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 border border-[var(--border)] hover:border-brand hover:text-brand flex items-center justify-center transition-colors -ml-px first:ml-0"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>

          {/* Scroll Cue */}
          <button
            data-testid="hero-scroll-cue"
            onClick={() => scrollTo('about')}
            className="group flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] hover:text-brand transition-colors"
          >
            Scroll · Read More

            <ArrowDown
              size={14}
              className="group-hover:translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;