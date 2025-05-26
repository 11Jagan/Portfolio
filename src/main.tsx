import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Lazy load the main App component
const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div className="loading" />}>
      <App />
    </Suspense>
  </StrictMode>
);