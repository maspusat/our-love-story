"use client";

import { motion } from "framer-motion";

export default function Sparkles() {
  return (
    <>
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="
            absolute
            h-2
            w-2
            rounded-full
            bg-white
          "
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </>
  );
}