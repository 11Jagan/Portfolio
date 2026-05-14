import { lazy, Suspense } from 'react';

import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Marquee from './components/ui/Marquee';
import BackToTop from './components/ui/BackToTop';

import { ThemeProvider } from './context/ThemeContext';

import ErrorBoundary from './components/ErrorBoundary';

const About = lazy(() =>
  import('./components/sections/About')
);

const Skills = lazy(() =>
  import('./components/sections/Skills')
);

const Projects = lazy(() =>
  import('./components/sections/Projects')
);

const Experience = lazy(() =>
  import('./components/sections/Experience')
);

// const Testimonials = lazy(() =>
//   import('./components/sections/Testimonials')
// );

const Contact = lazy(() =>
  import('./components/sections/Contact')
);

const Footer = lazy(() =>
  import('./components/layout/Footer')
);

const Loader = () => (
  <div className="py-32 flex items-center justify-center">
    <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] animate-pulse">
      Loading…
    </div>
  </div>
);

const MARQUEE_TERMS = [
  'Full-Stack',
  'Creative Coder',
  'React',
  'Node',
  'MERN',
  'Open Source',
  'Editorial Web',
  'Available 2026',
];

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] selection:bg-brand selection:text-white">
          {/* Header */}
          <Header />

          <main>
            {/* Hero */}
            <Hero />

            {/* Marquee */}
            <Marquee items={MARQUEE_TERMS} />

            {/* About */}
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            </ErrorBoundary>

            {/* Skills */}
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <Skills />
              </Suspense>
            </ErrorBoundary>

            {/* Projects */}
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <Projects />
              </Suspense>
            </ErrorBoundary>

            {/* Second Marquee */}
            <Marquee
              items={[
                'Selected Work',
                'Case Studies',
                '03 / 12',
                '2024 · 2025 · 2026',
              ]}
              reverse
            />

            {/* Experience */}
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <Experience />
              </Suspense>
            </ErrorBoundary>

            {/* Testimonials */}
            {/* <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <Testimonials />
              </Suspense>
            </ErrorBoundary> */}

            {/* Contact */}
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            </ErrorBoundary>
          </main>

          {/* Footer */}
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="h-32 bg-[var(--surface)]" />
              }
            >
              <Footer />
            </Suspense>
          </ErrorBoundary>

          {/* Back To Top */}
          <BackToTop />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;