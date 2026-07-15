"use client";

import {
  ChevronDown,
  Pause,
  Play,
  Volume2,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion, AnimatePresence } from "framer-motion";

import AlbumCover from "./AlbumCover";
import Equalizer from "./Equalizer";
import FavoriteButton from "./FavoriteButton";
import MarqueeTitle from "./MarqueeTitle";
import ProgressBar from "./ProgressBar";

type Props = {
  url: string | null;
  title: string | null;
  artist: string | null;
  cover: string | null;
};

// Hanya tersisa 2 mode: full dan hidden
type PlayerMode = "full" | "hidden";

export default function MusicPlayer({
  url,
  title,
  artist,
  cover,
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [mode, setMode] = useState<PlayerMode>("full"); // Default langsung full
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);

  // 1. Sinkronisasi Volume & Event Listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const loaded = () => {
      setDuration(audio.duration || 0);
    };

    const update = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    audio.addEventListener("loadedmetadata", loaded);
    audio.addEventListener("timeupdate", update);

    return () => {
      audio.removeEventListener("loadedmetadata", loaded);
      audio.removeEventListener("timeupdate", update);
    };
  }, [volume]);

  // 2. Auto-play & LocalStorage
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (localStorage.getItem("music-started") === "true") {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }

    const startMusic = async () => {
      try {
        await audio.play();
        setPlaying(true);
        localStorage.setItem("music-started", "true");
      } catch {}
    };

    const interactionEvents = ["pointerdown", "touchstart", "scroll", "keydown"];
    
    interactionEvents.forEach((event) =>
      window.addEventListener(event, startMusic, { once: true })
    );

    return () => {
      interactionEvents.forEach((event) =>
        window.removeEventListener(event, startMusic)
      );
    };
  }, []);

  // 3. Play & Pause Handler
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [playing]);

  // Toggle langsung: Full <-> Hidden
  const handleToggleMode = () => {
    setMode(mode === "full" ? "hidden" : "full");
  };

  if (!url) return null;

  return (
    <>
      <audio ref={audioRef} src={url} loop />

      <AnimatePresence mode="wait">
        {mode === "hidden" ? (
          /* ================= MODE HIDDEN (Hanya Piringan Bulat Berputar) ================= */
          <motion.button
            key="hidden-disc"
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMode("full")} // Klik disk putar untuk langsung membuka Full Mode
            className="
              fixed
              bottom-6
              right-6
              z-50
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border-2
              border-white/20
              bg-[#141414]/90
              shadow-[0_10px_30px_rgba(244,63,94,0.3)]
              backdrop-blur-xl
              cursor-pointer
              overflow-hidden
            "
          >
            <div className="scale-[0.45] transform origin-center">
              <AlbumCover cover={cover} playing={playing} />
            </div>
            
            {/* Animasi ping halus di sekitar piringan penanda interaktif */}
            <div className="absolute inset-0 rounded-full border border-rose-500/30 animate-ping pointer-events-none" />
          </motion.button>
        ) : (
          /* ================= MODE FULL (Tampilan Utama Card) ================= */
          <motion.div
            key="active-player"
            layout
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="
              fixed
              bottom-4
              right-4
              z-50
              w-[260px]
              overflow-hidden
              rounded-[20px]
              border
              border-white/10
              bg-[#141414]/90
              p-3
              shadow-[0_15px_40px_rgba(0,0,0,0.5)]
              backdrop-blur-2xl
              text-white
            "
          >
            {/* HEADER PLAYER */}
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="scale-50 origin-bottom">
                  <Equalizer playing={playing} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-white/40">
                  Playing
                </span>
              </div>

              {/* Tombol Minimize langsung menyembunyikan ke Piringan */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleToggleMode}
                className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <ChevronDown size={12} className="text-white/70" />
              </motion.button>
            </div>

            {/* KONTEN UTAMA */}
            <div className="space-y-2.5">
              {/* Cover Bulat */}
              <div className="flex justify-center scale-[0.6] origin-center -my-6">
                <AlbumCover cover={cover} playing={playing} />
              </div>

              {/* Title & Artist */}
              <div className="text-center px-1 scale-[0.85] origin-top">
                <MarqueeTitle title={title} artist={artist} />
              </div>

              {/* Progress Bar */}
              <div className="px-0.5 scale-90 origin-center">
                <ProgressBar
                  currentTime={currentTime}
                  duration={duration}
                  onSeek={(value) => {
                    setCurrentTime(value);
                    if (audioRef.current) {
                      audioRef.current.currentTime = value;
                    }
                  }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between px-2 pt-1">
                <div className="scale-75 origin-left">
                  <FavoriteButton songId={url} />
                </div>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setPlaying(!playing)}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-r
                    from-rose-500
                    to-pink-500
                    shadow-[0_0_15px_rgba(244,63,94,0.3)]
                  "
                >
                  {playing ? (
                    <Pause color="white" size={16} />
                  ) : (
                    <Play color="white" size={16} className="ml-0.5" />
                  )}
                </motion.button>

                <div className="w-7 h-7" />
              </div>

              {/* Volume Slider */}
              <div className="flex items-center gap-1.5 bg-white/5 rounded-lg py-1.5 px-2 scale-90 origin-center">
                <Volume2 className="text-white/30 flex-shrink-0" size={12} />
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="
                    h-0.5
                    w-full
                    cursor-pointer
                    appearance-none
                    rounded-full
                    bg-white/10
                    accent-rose-500
                    [&::-webkit-slider-runnable-track]:bg-transparent
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:h-2
                    [&::-webkit-slider-thumb]:w-2
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-white
                  "
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}