import { motion } from 'framer-motion';

const Marquee = ({ items, reverse = false }) => {
    const repeatedItems = [...items, ...items];

    return (
        <div
            data-testid="marquee-strip"
            className="relative overflow-hidden border-y border-[var(--border)] py-6 sm:py-8 bg-[var(--bg)]"
            aria-hidden="true"
        >
            <motion.div
                className="flex w-max whitespace-nowrap will-change-transform"
                animate={{
                    x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
                }}
                transition={{
                    duration: 100,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {repeatedItems.map((word, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-16 mx-16 shrink-0"
                    >
                        <span className="font-display font-black uppercase text-[12vw] sm:text-[10vw] lg:text-[8vw] tracking-tight leading-none text-[var(--fg)]">
                            {word}
                        </span>

                        <span className="text-brand text-[8vw] leading-none">
                            ✦
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;