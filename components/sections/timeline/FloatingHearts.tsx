"use client";

import { motion } from "framer-motion";

export default function FloatingHearts() {
  const hearts = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose-200 text-xl select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}