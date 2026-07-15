"use client";

import Image from "next/image";
import { Music2 } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  cover: string | null;
  playing: boolean;
};

export default function AlbumCover({
  cover,
  playing,
}: Props) {
  return (
    <motion.div
      animate={
        playing
          ? {
              rotate: 360,
            }
          : {
              rotate: 0,
            }
      }
      transition={{
        duration: 12,
        ease: "linear",
        repeat: playing
          ? Infinity
          : 0,
      }}
      className="
        relative
        h-36
        w-36
        overflow-hidden
        rounded-full
        border-4
        border-white/20
        shadow-[0_0_40px_rgba(244,63,94,.35)]
      "
    >
      {cover ? (
        <Image
          src={cover}
          alt="Album Cover"
          fill
          priority
          className="object-cover"
        />
      ) : (
        <div
          className="
            flex
            h-full
            w-full
            items-center
            justify-center
            bg-gradient-to-br
            from-rose-500
            via-pink-500
            to-fuchsia-500
            text-white
          "
        >
          <Music2 size={54} />
        </div>
      )}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-5
          w-5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          shadow-lg
        "
      />
    </motion.div>
  );
}