import { motion } from "framer-motion";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-wrapper">
      
      {/* Animated Text */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Loading...
      </motion.h1>

      {/* Animated Bar */}
      <motion.div
        className="loader-bar"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2 }}
      />

    </div>
  );
}

export default Loader;