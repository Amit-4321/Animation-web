import { motion, useScroll, useTransform } from "framer-motion";
import Features from "../../components/Features";
import "./Home.css";
import MagneticButton from "../../components/MagneticButton";
function Home() {

  // 👉 scroll value
  const { scrollY } = useScroll();

  // 👉 parallax values (different speeds)
  const yText = useTransform(scrollY, [0, 300], [0, -100]);
  const yCircle = useTransform(scrollY, [0, 300], [0, 150]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero">

        {/* Heading Animation + Parallax */}
        <motion.h1
          style={{ y: yText }}   // ✅ parallax add
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build Stunning UI 🚀
        </motion.h1>

        {/* Text Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Smooth animations + clean design = Pro Developer
        </motion.p>

        {/* Button Animation */}
       

        {/* Circle Animation + Parallax */}
        <motion.div
          className="circle"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
        />
 <MagneticButton>
      Explore More
      </MagneticButton>
      </section>

      <Features />
     
    </motion.div>
  );
}

export default Home;