"use client";

import Marquee from "react-fast-marquee";

type Props = {
  title: string | null;
  artist: string |null;
};

export default function MarqueeTitle({
  title,
  artist,
}: Props) {
  const songTitle =
    title || "Unknown Song";

  const songArtist =
    artist || "Unknown Artist";

  return (
    <div className="w-full overflow-hidden">

      <Marquee
        speed={30}
        gradient={false}
        pauseOnHover
      >
        <h3
          className="
            mr-20
            text-lg
            font-semibold
            text-white
          "
        >
          {songTitle}
        </h3>
      </Marquee>

      <p
        className="
          mt-1
          text-sm
          text-white/70
        "
      >
        {songArtist}
      </p>

    </div>
  );
}