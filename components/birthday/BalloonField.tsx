"use client";

import Balloon from "./Balloon";

const colors = [
  "#FF4D6D",
  "#FF8FAB",
  "#FEC89A",
  "#FFD60A",
  "#A0C4FF",
  "#BDB2FF",
];

export default function BalloonField() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <Balloon
          key={i}
          left={Math.random() * 100}
          delay={Math.random() * 8}
          duration={10 + Math.random() * 8}
          color={
            colors[
              Math.floor(
                Math.random() * colors.length
              )
            ]
          }
        />
      ))}
    </>
  );
}