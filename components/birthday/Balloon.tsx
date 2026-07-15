"use client";

import { motion } from "framer-motion";

type Props = {
  left: number;
  delay: number;
  duration: number;
  color: string;
};

export default function Balloon({
  left,
  delay,
  duration,
  color,
}: Props) {
  return (
    <motion.div
      initial={{
        y: 900,
        opacity: 0,
      }}
      animate={{
        y: -900,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        repeat: Infinity,
        duration,
        delay,
        ease: "linear",
      }}
      style={{
        left: `${left}%`,
      }}
      className="absolute bottom-0"
    >
      <div
        className="h-16 w-12 rounded-full"
        style={{
          background: color,
        }}
      />

      <div className="mx-auto h-20 w-[2px] bg-white/60" />
    </motion.div>
  );
}