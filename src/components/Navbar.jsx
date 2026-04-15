import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
    className={scrolled ? "navbar active" : "navbar"}
    initial={{ y: -80 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
      Home
    </NavLink>
  
    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
      About
    </NavLink>
  </motion.nav>
  );
}

export default Navbar;