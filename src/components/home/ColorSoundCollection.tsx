import React from "react";
import { Link } from "react-router-dom";
import { SOUNDS } from "../../data/sounds";

export default function ColorSoundCollection() {
  return (
    <section id="colors" className="px-4 py-16">
      <div className="mx-auto max-w-6xl space-y-4 text-center">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-secondary/60">Color-sound library</p>
        <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">Choose a color, feel its tone</h2>
        <p className="font-body mx-auto max-w-3xl text-base leading-relaxed text-base-content/80">
          Each profile explains the spectrum, how it tends to feel, where the evidence is strongest, and when the
          label is more of a technical or marketing term than a proven listening tool.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
        {SOUNDS.map((sound) => (
          <Link
            id={sound.id}
            key={sound.id}
            to={`/colors/${sound.id}`}
            className="group rounded-3xl border border-base-200/70 bg-base-100/60 p-6 shadow-2xl transition hover:-translate-y-1 hover:border-primary/60 hover:bg-base-100/80"
            style={{ borderColor: sound.accent }}>
            <div className="flex items-center justify-between gap-3">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-base-content/60">
                {sound.tone}
              </span>
              <span className="rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-base-content/65">
                {sound.evidenceLevel}
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl text-primary">{sound.name}</h3>
            <p className="mt-3 font-body text-sm text-base-content/70">{sound.short}</p>
            <p className="mt-4 font-body text-sm leading-relaxed text-base-content/75">{sound.spectralProfile}</p>

            <div className="mt-5 flex flex-wrap gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-base-content/70">
              {sound.uses.map((use) => (
                <span key={use} className="rounded-full border border-current/40 px-3 py-1">
                  {use}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 text-sm text-base-content/60">
              <span>{sound.generatorType ? "Generated preview available" : "Reading-focused explainer"}</span>
              <span className="font-semibold text-primary transition group-hover:translate-x-1">Open guide</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
