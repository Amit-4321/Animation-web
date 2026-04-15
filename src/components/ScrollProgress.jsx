import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-bar"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgress;