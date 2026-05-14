import { motion } from 'framer-motion';

const Marquee = ({ items, reverse = false }) => {
    return (
        <div
            data-testid="marquee-strip"
            className="relative overflow-hidden border-y border-[var(--border)] py-6 sm:py-8 bg-[var(--bg)]"
            aria-hidden="true"
        >
            <motion.div
                className="flex whitespace-nowrap will-change-transform"
                animate={{
                    x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {[...items, ...items, ...items, ...items].map((word, i) => (
                    <span
                        key={i}
                        className="font-display font-black uppercase text-[12vw] sm:text-[10vw] lg:text-[8vw] tracking-tightest leading-none mx-8 flex items-center gap-8"
                    >
                        <span
                            className={
                                i % 2 === 0
                                    ? 'text-stroke'
                                    : 'text-[var(--fg)]'
                            }
                        >
                            {word}
                        </span>

                        <span className="text-brand text-[8vw]">
                            ✦
                        </span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;