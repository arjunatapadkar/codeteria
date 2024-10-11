// src/components/FairyDustCursor.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FairyDustCursor = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setParticles((prev) => [...prev, newParticle]);

      // Remove particles after animation duration (e.g., 1s)
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 1, scale: 1, x: particle.x, y: particle.y }}
            animate={{
              opacity: 0,
              scale: 2,
              x: particle.x + (Math.random() * 50 - 25),
              y: particle.y + (Math.random() * 50 - 25),
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute w-3 h-3 bg-white rounded-full mix-blend-screen"
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FairyDustCursor;
