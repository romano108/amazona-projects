"use client";
import React from "react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
];

const repeatedLogos = [...logos, ...logos, ...logos]; // tripled for no gaps

const ClientSlider = () => {
  return (
    <div className="flex items-center relative h-[15vh] w-full overflow-hidden bg-transparent">
      {/* Fade edges with soft transparent gradient */}
      <div className="absolute top-0 left-0 w-24 h-full z-10 bg-gradient-to-r from-white/90 to-transparent dark:from-black/80 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full z-10 bg-gradient-to-l from-white/90 to-transparent dark:from-black/80 pointer-events-none" />

      {/* Scrolling track */}
      <div
        className="flex w-max whitespace-nowrap"
        style={{
          animation: "scrollLoop 60s linear infinite",
        }}
      >
        {repeatedLogos.map((src, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[320px] h-full px-8"
          >
            <img
              src={src}
              alt={`Logo ${i}`}
              className="h-10 w-auto opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Inline CSS for animation */}
      <style jsx>{`
        @keyframes scrollLoop {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
      `}</style>
    </div>
  );
};

export default ClientSlider;
