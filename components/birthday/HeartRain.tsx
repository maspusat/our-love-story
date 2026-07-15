"use client";

import { motion } from "framer-motion";

export default function HeartRain() {
  return (
    <>
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: -200,
            opacity: 0,
          }}
          animate={{
            y: 900,
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 5,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
          className="
            absolute
            top-0
            text-xl
          "
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}