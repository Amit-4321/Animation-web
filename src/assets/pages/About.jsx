import { motion } from "framer-motion";
import { FaBolt, FaPalette, FaRocket } from "react-icons/fa";
import TiltCard from "../../components/TiltCard";
import "./About.css";

function About() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 80 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Us 🚀
      </motion.h1>

      {/* Description */}
      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We build modern, high-performance web interfaces with smooth
        animations and clean UI design to create amazing user experiences.
      </motion.p>

      {/* Cards */}
      <motion.div
        className="about-cards"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="about-card" variants={cardAnimation}>
          <FaBolt className="icon" />
          Fast Performance
        </motion.div>

        <motion.div className="about-card" variants={cardAnimation}>
          <FaPalette className="icon" />
          Clean UI Design
        </motion.div>

        <motion.div className="about-card" variants={cardAnimation}>
          <FaRocket className="icon" />
          Smooth Animations
        </motion.div>
      </motion.div>
    

      {/* ✅ Team Section INSIDE return */}
      <motion.div
        className="team-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Our Team 👨‍💻</h2>

        <div className="team-cards">

          <motion.div
            className="team-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src="https://i.pravatar.cc/150?img=1" alt="team" />
            <h3>Amit</h3>
            <p>Frontend Developer</p>
          </motion.div>

          <motion.div
            className="team-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="https://i.pravatar.cc/150?img=2" alt="team" />
            <h3>Rahul</h3>
            <p>UI Designer</p>
          </motion.div>

          <motion.div
            className="team-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img src="https://i.pravatar.cc/150?img=3" alt="team" />
            <h3>Priya</h3>
            <p>Backend Developer</p>
          </motion.div>

        </div>
      </motion.div>

   {/* Tilt Cards Section */}
   <motion.div
  className="tilt-heading-wrapper"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h2 className="tilt-heading">
    Why Choose Us 💡
  </h2>
  <span className="heading-line"></span>
  <div className="tilt-section">
  <TiltCard title="Fast UI" desc="Super smooth performance" />
  <TiltCard title="Modern Design" desc="Clean and minimal UI" />
  <TiltCard title="Animations" desc="Framer motion powered" />
</div>
</motion.div>
    </motion.div>
    
  );
}

export default About;