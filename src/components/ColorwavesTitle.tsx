import React from "react";

type ColorwavesTitleProps = {
  compact?: boolean;
  className?: string;
};

export default function ColorwavesTitle({ compact = false, className = "" }: ColorwavesTitleProps) {
  return (
    <h1
      aria-label="Colorwaves"
      className={[
        "font-display select-none font-extrabold tracking-[-0.02em] leading-[0.95]",
        compact ? "text-2xl sm:text-3xl" : "text-5xl sm:text-7xl lg:text-8xl",
        className
      ].join(" ")}>
      <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(56,189,248,0.45)]">
        Color
      </span>
      <span className="mx-1 text-slate-300/80">/</span>
      <span className="bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(45,212,191,0.45)]">
        Waves
      </span>
    </h1>
  );
}
