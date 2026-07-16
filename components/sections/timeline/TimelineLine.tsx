"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TimelineLine() {
  const ref =
    useRef<HTMLDivElement>(null);

  const { scrollYProgress } =
    useScroll({
      target: ref,
      offset: [
        "start center",
        "end center",
      ],
    });

  const scaleY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  return (
    <div
      ref={ref}
      className="
        pointer-events-none
        absolute
        left-8
        top-0
        bottom-0
        z-0
        w-[3px]
        -translate-x-1/2
        md:left-1/2
      "
    >
      {/* Background Line */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-rose-100
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-rose-400/20
          blur-md
        "
      />

      {/* Animated Line */}
      <motion.div
        style={{
          scaleY,
        }}
        className="
          absolute
          inset-0
          origin-top
          rounded-full
          bg-gradient-to-b
          from-rose-300
          via-rose-500
          to-pink-500
          shadow-[0_0_18px_rgba(244,63,94,0.45)]
        "
      />
    </div>
  );
}