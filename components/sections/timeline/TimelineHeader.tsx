"use client";

import { motion } from "framer-motion";

export default function TimelineHeader() {
  return (
    <div className="text-center mb-16 relative z-10">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-[0.2em] text-rose-500 font-semibold block mb-3 font-body"
      >
        Our Journey
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-heading text-neutral-800"
      >
        Moments That Matter
      </motion.h2>
    </div>
  );
}