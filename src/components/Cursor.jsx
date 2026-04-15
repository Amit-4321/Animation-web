import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Mouse move
    const moveCursor = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // 🔥 Better hover detection (dynamic elements support)
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .interactive")) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className={`cursor ${hovered ? "cursor-hover" : ""}`}
        animate={{
          x: pos.x - 10,
          y: pos.y - 10,
          scale: hovered ? 1.8 : 1, // 🔥 hover pe size change
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      />

      {/* Cursor Dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: pos.x - 2,
          y: pos.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      />
    </>
  );
}

export default Cursor;