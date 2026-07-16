"use client";

import { Infinity, Heart } from "lucide-react";

export default function TimelineFooter() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center">

      <Heart
        className="
          mb-5
          h-6
          w-6
          fill-rose-400
          text-rose-400
          animate-pulse
        "
      />

      <h3
        className="
          font-serif
          text-3xl
          font-semibold
          text-gray-800
        "
      >
        To Be Continued...
      </h3>

      <p
        className="
          mt-3
          max-w-md
          text-center
          text-gray-500
        "
      >
        Every ending is simply the beginning
        of another beautiful chapter together.
      </p>

      <Infinity
        className="
          mt-8
          h-8
          w-8
          text-rose-400
        "
      />

    </div>
  );
}