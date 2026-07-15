"use client";

type Props = {
  currentTime: number;
  duration: number;
  onSeek: (value: number) => void;
};

function formatTime(seconds: number) {
  if (!isFinite(seconds)) {
    return "00:00";
  }

  const minute = Math.floor(seconds / 60);
  const second = Math.floor(seconds % 60);

  return `${minute}:${second
    .toString()
    .padStart(2, "0")}`;
}

export default function ProgressBar({
  currentTime,
  duration,
  onSeek,
}: Props) {
  const progress =
    duration > 0
      ? (currentTime / duration) * 100
      : 0;

  return (
    <div className="w-full">

      <div className="relative h-2 overflow-hidden rounded-full bg-white/10">

        <div
          className="
            absolute
            left-0
            top-0
            h-full
            rounded-full
            bg-gradient-to-r
            from-rose-400
            via-pink-500
            to-fuchsia-500
            transition-all
            duration-300
          "
          style={{
            width: `${progress}%`,
          }}
        />

        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={(e) =>
            onSeek(
              Number(
                e.target.value
              )
            )
          }
          className="
            absolute
            inset-0
            h-full
            w-full
            cursor-pointer
            opacity-0
          "
        />

      </div>

      <div className="mt-2 flex justify-between text-xs text-white/60">

        <span>
          {formatTime(
            currentTime
          )}
        </span>

        <span>
          {formatTime(
            duration
          )}
        </span>

      </div>

    </div>
  );
}