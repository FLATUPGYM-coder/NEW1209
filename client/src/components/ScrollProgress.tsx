import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress Component - Sakuma Design
 * 
 * A sleek, gradient scroll progress bar that stays fixed at the top of the viewport.
 */
export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF006E] via-[#FF9A9E] to-[#00D9FF] z-50 origin-[0%]"
            style={{ scaleX }}
        />
    );
}
