import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.pageYOffset > 600);
    };

    window.addEventListener('scroll', toggle, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', toggle);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          data-testid="back-to-top-button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 group bg-[var(--fg)] text-[var(--bg)] hover:bg-brand hover:text-white w-12 h-12 flex items-center justify-center transition-colors"
        >
          <ArrowUp
            size={16}
            className="group-hover:-translate-y-1 transition-transform"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;