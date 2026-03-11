import React, { useMemo, useState } from "react";

const VISUALIZER_BASE = [12, 10, 14, 11, 13, 12, 9, 11, 10, 8, 7, 10];

export default function ExampleSoundCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const levels = useMemo(() => {
    if (!isPlaying) {
      return VISUALIZER_BASE;
    }

    return VISUALIZER_BASE.map((value) => value + Math.floor(Math.random() * 12));
  }, [isPlaying]);

  return (
    <article className="card border border-base-100/15 bg-base-200/40 shadow-2xl backdrop-blur-md">
      <div className="card-body gap-5">
        <div className="h-2 w-full rounded-full bg-[linear-gradient(90deg,#fb7185_0%,#fcd34d_30%,#6ee7b7_58%,#22d3ee_80%,#a78bfa_100%)]" />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display card-title text-2xl text-accent">Aurora Drift</h3>
          <span className="font-display badge badge-outline border-cyan-300/60 px-3 py-3 text-[0.72rem] uppercase tracking-[0.08em] text-secondary">
            432 Hz • Ambient
          </span>
        </div>

        <p className="font-body text-base-content">
          Soft evolving pads with low shimmer and wide stereo motion for deep focus sessions.
        </p>

        <div className="rounded-xl border border-base-300 bg-base-100/20 p-3">
          <p className="font-display text-xs uppercase tracking-[0.14em] text-base-content">Reactive visualizer</p>
          <div className="mt-3 flex h-12 items-end gap-1.5">
            {levels.map((h, i) => (
              <span
                key={`${h}-${i}`}
                className={`w-2.5 rounded-t bg-gradient-to-t from-cyan-500 via-sky-400 to-emerald-300 transition-all duration-200 ${
                  isPlaying ? "opacity-100" : "opacity-40"
                }`}
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>

        <div className="card-actions justify-end">
          <div className="text-right">
            <p className="font-body text-sm text-base-content">8s preview</p>
            <button
              className="btn btn-primary mt-2 flex items-center gap-2"
              onClick={() => setIsPlaying((prev) => !prev)}>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                {isPlaying ? (
                  <>
                    <rect x="6" y="6" width="4" height="12" />
                    <rect x="14" y="6" width="4" height="12" />
                  </>
                ) : (
                  <path d="M7 5v14l11-7z" />
                )}
              </svg>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
