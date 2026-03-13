import React from "react";
import { Link, useParams } from "react-router-dom";
import { SOUNDS } from "../../data/sounds";

export default function ColorPage() {
  const { id } = useParams();
  const sound = SOUNDS.find((entry) => entry.id === id);

  if (!sound) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-4xl p-8 text-center">
          <p className="font-display text-sm uppercase tracking-[0.35em] text-base-content/60">Color not found</p>
          <p className="mt-4 font-body text-lg text-base-content">
            We could not find that profile. Try choosing a color from the sub-nav.
          </p>
          <Link className="btn btn-outline btn-sm mt-8" to="/">
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  const headerColor = sound.id === "white" ? "#b9bcc4" : sound.accent ?? "#38bdf8";

  const detailedUses: Record<string, string> = {
    Focus: "Layered ambient content creates a steady foundation to hold attention in longer sessions.",
    Concentration: "Steady-state noise eliminates distracting spikes when you're deep into complex work.",
    "Sleep aid":
      "Smooth spectral slopes draw the nervous system toward its internal night rhythm, supporting the transition to sleep.",
    Meditation: "Rhythmic swells mirror breathing pacing to invite gentle centering.",
    "Ambient masking": "Broadband energy fills the room so environmental sounds disappear into a sculpted texture.",
    Relaxation: "Warmer tonalities coupled with soft transients calm the autonomic system.",
    "Deep focus": "Subterranean low-end anchors behaviorally relevant loops without tiring the ears.",
    "Sound engineering reference":
      "Balanced energy serves as a neutral calibration point for measuring playback chains.",
    "Testing audio chains": "Sharp, high-frequency content reveals distortion or anomalies in signal paths.",
    "Tonal masking in some cases": "Strategic spectral emphasis covers specific bands while letting other cues through."
  };

  return (
    <section className="min-h-screen px-12 py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 text-left">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link className="btn btn-primary btn-sm flex items-center gap-2" to="/">
            <svg
              className="h-3 w-3"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M10 4l-4 4 4 4" />
            </svg>
            Home
          </Link>
        </div>

        <div className="space-y-4">
          <h1 className="font-display text-4xl md:text-5xl" style={{ color: headerColor }}>
            {sound.name}
          </h1>
          <span className="uppercase tracking-[0.35em]" style={{ color: headerColor }}>
            {sound.tone}
          </span>
          <p className="font-body text-lg text-base-content/80">{sound.short}</p>
        </div>

        <div className="space-y-6 rounded-3xl bg-base-100/40 p-8 text-base-content/90">
          <h2 className="font-display text-2xl" style={{ color: headerColor }}>
            In-depth overview
          </h2>
          <p>
            {sound.description} Every tonal palette in the Colorwaves system was curated by balancing spectral density
            with perceived brightness. We cross-reference pink, grey, and brown-noise profiles against published
            literature on focus, sleep laboratory studies, and neurophysiological guidelines to keep the energy inviting
            yet measurable.
          </p>
          <p>
            The visual color you selected mirrors its acoustic identity: {sound.name} uses a well-defined band of
            frequencies to skew the power spectrum toward {sound.tone.split(" ")[0].toLowerCase()}-range behavior,
            inviting either calm or clarity depending on your intent.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 bg-base-100/40 p-6 text-left">
            <h3 className="font-display text-lg" style={{ color: headerColor }}>
              Scientific context
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-base-content/80">
              <li>
                Frequency-based entrainment favors neural rhythms that match the steady spectral energy of {sound.name},
                supporting improved temporal predictability.
              </li>
              <li>
                Prepared with pink-gray hybrid curves, this sound reduces amplitude variance while retaining enough
                shimmer to feel alive.
              </li>
              <li>
                Color-coded gradients act as visual cues for quick recall—warmth for{" "}
                {sound.id === "white" ? "neutral" : sound.name.toLowerCase()} energy, cooling for more analytical
                states.
              </li>
            </ul>
          </div>

          <div className="space-y-4 bg-base-100/40 p-6 text-left">
            <h3 className="font-display text-lg" style={{ color: headerColor }}>
              Primary uses
            </h3>
            <div className="space-y-3 text-sm leading-relaxed text-base-content/80">
              {sound.uses.map((use) => (
                <div key={use}>
                  <p className="font-semibold uppercase tracking-[0.25em] text-xs text-primary/70">{use}</p>
                  <p>{useInsights(use, detailedUses)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function useInsights(use: string, lookup: Record<string, string>) {
  return (
    lookup[use] ??
    "A flexible layer that keeps the energy purposeful even when you’re monitoring other activity in the room."
  );
}
