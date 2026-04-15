import { motion, useMotionValue, useTransform } from "framer-motion";
import "./TiltCard.css";

function TiltCard({ title, desc }) {

  // mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // rotation mapping
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  // mouse move handler
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const midX = rect.left + rect.width / 2;
    const midY = rect.top + rect.height / 2;

    x.set(e.clientX - midX);
    y.set(e.clientY - midY);
  };

  // reset on leave
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="inner">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
}

export default TiltCard;