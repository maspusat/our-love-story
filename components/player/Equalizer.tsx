"use client";

import { motion } from "framer-motion";

type Props = {
  playing: boolean;
};

const bars = [24, 40, 18, 34, 28];

export default function Equalizer({
  playing,
}: Props) {
  return (
    <div className="flex h-10 items-end justify-center gap-1">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          animate={
            playing
              ? {
                  height: [
                    height * 0.4,
                    height,
                    height * 0.6,
                    height * 0.9,
                    height * 0.5,
                  ],
                }
              : {
                  height: 8,
                }
          }
          transition={{
            duration: 0.8,
            repeat: playing
              ? Infinity
              : 0,
            repeatType: "mirror",
            delay: index * 0.12,
            ease: "easeInOut",
          }}
          className="
            w-1.5
            rounded-full
            bg-gradient-to-t
            from-rose-500
            via-pink-500
            to-fuchsia-500
          "
        />
      ))}
    </div>
  );
}