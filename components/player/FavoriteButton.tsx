"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import {
  useEffect,
  useState,
} from "react";

type Props = {
  songId: string;
};

export default function FavoriteButton({
  songId,
}: Props) {
  const [favorite, setFavorite] =
    useState(false);

  useEffect(() => {
    const favorites =
      JSON.parse(
        localStorage.getItem(
          "favorite-songs"
        ) || "[]"
      );

    setFavorite(
      favorites.includes(songId)
    );
  }, [songId]);

  function toggleFavorite() {
    const favorites: string[] =
      JSON.parse(
        localStorage.getItem(
          "favorite-songs"
        ) || "[]"
      );

    let updated: string[];

    if (
      favorites.includes(songId)
    ) {
      updated =
        favorites.filter(
          (id) => id !== songId
        );
    } else {
      updated = [
        ...favorites,
        songId,
      ];
    }

    localStorage.setItem(
      "favorite-songs",
      JSON.stringify(updated)
    );

    setFavorite(
      updated.includes(songId)
    );
  }

  return (
    <motion.button
      whileTap={{
        scale: 0.75,
      }}
      whileHover={{
        scale: 1.15,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      onClick={toggleFavorite}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        transition-all
      "
    >
      <Heart
        size={24}
        fill={
          favorite
            ? "#f43f5e"
            : "transparent"
        }
        className={
          favorite
            ? "text-rose-500 drop-shadow-[0_0_8px_rgb(244,63,94)]"
            : "text-white/70"
        }
      />
    </motion.button>
  );
}