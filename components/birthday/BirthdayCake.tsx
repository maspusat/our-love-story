"use client";

import { Cake } from "lucide-react";

export default function BirthdayCake() {
  return (
    <div
      className="
        flex
        justify-center
      "
    >
      <div
        className="
          animate-floating
          animate-glow
        "
      >
        <Cake
          size={96}
          className="
            text-yellow-300
          "
        />
      </div>
    </div>
  );
}