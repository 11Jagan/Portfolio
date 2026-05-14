import { useState, useContext, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

const NAV_ITEMS = [
  { id: 'home', label: 'Index', no: '01' },
  { id: 'about', label: 'About', no: '02' },
  { id: 'skills', label: 'Skills', no: '03' },
  { id: 'projects', label: 'Work', no: '04' },
  { id: 'experience', label: 'Experience', no: '05' },
  // { id: 'testimonials', label: 'Words', no: '06' },
  { id: 'contact', label: 'Contact', no: '06' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }

    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.id)
      ).filter(Boolean);

      const y = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= y) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--border)]'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          data-testid="logo-button"
          onClick={() => scrollTo('home')}
          className="flex items-baseline gap-2 group"
        >
          <span className="font-display text-2xl font-black tracking-tightest leading-none">
            JMR
            <span className="text-brand">.</span>
          </span>

          <span className="hidden sm:inline font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] group-hover:text-brand transition-colors">
            / Portfolio · 2026
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              data-testid={`nav-link-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className="group flex items-baseline gap-1.5 font-mono text-[11px] tracking-[0.18em] uppercase"
            >
              <span
                className={`transition-colors ${active === item.id
                  ? 'text-brand'
                  : 'text-[var(--muted)]'
                  }`}
              >
                {item.no}
              </span>

              <span
                className={`relative transition-colors ${active === item.id
                  ? 'text-[var(--fg)]'
                  : 'text-[var(--muted-fg)] group-hover:text-[var(--fg)]'
                  }`}
              >
                {item.label}

                {active === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-brand" />
                )}
              </span>
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            data-testid="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 border border-[var(--border)] hover:border-brand hover:text-brand flex items-center justify-center transition-colors"
          >
            {theme === 'dark' ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden w-10 h-10 border border-[var(--border)] hover:border-brand hover:text-brand flex items-center justify-center transition-colors"
          >
            {isOpen ? (
              <X size={16} />
            ) : (
              <Menu size={16} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ${isOpen ? 'max-h-[600px]' : 'max-h-0'
          } bg-[var(--bg)] border-b border-[var(--border)]`}
      >
        <nav className="px-6 py-6 flex flex-col">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              data-testid={`mobile-nav-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className="flex items-baseline gap-4 py-4 border-t border-[var(--border)] first:border-t-0 text-left"
            >
              <span className="font-mono text-xs text-brand">
                {item.no}
              </span>

              <span className="font-display text-3xl font-bold uppercase tracking-tight">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;