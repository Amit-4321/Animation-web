import { motion } from "framer-motion";
import "./Features.css";

function Features() {

  // Parent animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5, // delay between cards
        delayChildren: 0.3,
      },
    },
  };

  // Child animation
  const cardAnimation = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  return (
    <section className="features">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Features 🚀
      </motion.h2>

      {/* Parent container */}
      <motion.div
        className="cards"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* Cards */}
        <motion.div className="card" variants={cardAnimation}>
          Smooth Animations
        </motion.div>

        <motion.div className="card" variants={cardAnimation}>
          Clean UI
        </motion.div>

        <motion.div className="card" variants={cardAnimation}>
          Fast Performance
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Features;