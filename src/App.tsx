import { lazy, Suspense } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load non-critical sections
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Services = lazy(() => import('./components/sections/Services'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Skills />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Services />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Projects />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            </ErrorBoundary>
          </main>
          <ErrorBoundary>
            <Suspense fallback={<div className="h-20 bg-gray-100 dark:bg-gray-800" />}>
              <Footer />
            </Suspense>
          </ErrorBoundary>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;