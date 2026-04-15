import { motion, useMotionValue } from "framer-motion";
import "./MagneticButton.css";

function MagneticButton({ children }) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const midX = rect.left + rect.width / 2;
    const midY = rect.top + rect.height / 2;

    const offsetX = e.clientX - midX;
    const offsetY = e.clientY - midY;

    // 👉 control intensity
    x.set(offsetX * 0.3);
    y.set(offsetY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.button
      className="magnetic-btn"
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      <motion.span
        style={{
          x: x,   // ✅ direct use
          y: y,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}

export default MagneticButton;