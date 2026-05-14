import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUp,
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="site-footer"
      className="relative pt-24 sm:pt-32 pb-10 bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Massive Name */}
        <div className="grid grid-cols-12 gap-6 mb-16 sm:mb-24">
          <div className="col-span-12">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-6">
              <span className="text-brand">●</span>
              &nbsp; Thanks for reading — let&rsquo;s connect
            </p>

            <h2 className="font-display font-black uppercase text-[18vw] sm:text-[16vw] lg:text-[12vw] leading-[0.85] tracking-tightest">
              <span className="block">
                Jagan
                <span className="text-brand">.</span>
              </span>

              <span className="block text-stroke">
                Mohan
              </span>
            </h2>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-12 gap-6 pt-10 border-t border-[var(--border)]">
          {/* About */}
          <div className="col-span-12 sm:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] mb-2">
              Built &amp; Maintained
            </div>

            <p className="font-sans text-sm text-[var(--muted-fg)] leading-relaxed">
              Hand-coded with React, Tailwind &amp; Framer Motion.
              Typography by Fontshare. Photography by self.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-12 sm:col-span-4 sm:col-start-5">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] mb-3">
              Navigate
            </div>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-sans text-sm">
              {[
                'Home',
                'About',
                'Skills',
                'Projects',
                'Experience',
                'Contact',
              ].map((l, i) => (
                <li key={i}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();

                      document
                        .getElementById(l.toLowerCase())
                        ?.scrollIntoView({
                          behavior: 'smooth',
                        });
                    }}
                    data-testid={`footer-link-${l.toLowerCase()}`}
                    className="link-underline hover:text-brand transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="col-span-12 sm:col-span-3 sm:col-start-10">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] mb-3">
              Find me
            </div>

            <div className="flex gap-2">
              {[
                {
                  I: Github,
                  l: 'GitHub',
                  u: 'https://github.com/11Jagan',
                },
                {
                  I: Linkedin,
                  l: 'LinkedIn',
                  u: 'https://www.linkedin.com/in/jagan-mohan-reddy-kontham-445250293',
                },
                {
                  I: Instagram,
                  l: 'Instagram',
                  u: 'https://www.instagram.com/11_jagan_/',
                },
                {
                  I: Mail,
                  l: 'Email',
                  u: 'mailto:konthamjaganmohanreddy@gmail.com',
                },
              ].map(({ I, l, u }, i) => (
                <a
                  key={i}
                  href={u}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l}
                  data-testid={`footer-social-${l.toLowerCase()}`}
                  className="w-10 h-10 border border-[var(--border)] flex items-center justify-center hover:border-brand hover:text-brand transition-colors"
                >
                  <I size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">
          <div>
            © {year} · Kontham Jagan Mohan Reddy · All rights reserved
          </div>

          <div className="flex items-center gap-6">
            <span>v 4.0 · Editorial</span>

            <button
              data-testid="footer-back-to-top"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              className="group inline-flex items-center gap-2 hover:text-brand transition-colors"
            >
              Back to Top

              <ArrowUp
                size={12}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;