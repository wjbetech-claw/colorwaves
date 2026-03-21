import React, { useState } from "react";
import { Link } from "react-router-dom";
import NoisePreview from "../audio/NoisePreview";
import { SOUNDS } from "../../data/sounds";

const FEATURED_SOUNDS = SOUNDS.filter((sound) => sound.generatorType);

export default function ExampleSoundCard() {
  const [selectedId, setSelectedId] = useState(FEATURED_SOUNDS[1]?.id ?? FEATURED_SOUNDS[0]?.id ?? "white");
  const selectedSound = FEATURED_SOUNDS.find((sound) => sound.id === selectedId) ?? FEATURED_SOUNDS[0];

  if (!selectedSound || !selectedSound.generatorType) {
    return null;
  }

  return (
    <article className="rounded-[2rem] border border-base-100/15 bg-base-200/30 p-6 shadow-2xl backdrop-blur-md">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.22em] text-base-content/55">Featured noise lab</p>
          <h3 className="font-display mt-3 text-3xl text-primary">{selectedSound.name}</h3>
          <p className="font-body mt-3 text-base leading-relaxed text-base-content/80">{selectedSound.description}</p>
        </div>
        <span
          className="rounded-full border px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-base-content/70"
          style={{ borderColor: selectedSound.accent }}>
          {selectedSound.evidenceLevel}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {FEATURED_SOUNDS.map((sound) => (
          <button
            key={sound.id}
            type="button"
            className={`rounded-full border px-4 py-2 text-sm transition ${
              sound.id === selectedSound.id
                ? "border-transparent bg-base-100 text-base-content shadow-lg"
                : "border-base-100/20 bg-base-100/5 text-base-content/70 hover:border-base-100/40 hover:text-base-content"
            }`}
            onClick={() => setSelectedId(sound.id)}>
            {sound.name}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <NoisePreview
          generator={selectedSound.generatorType}
          label={selectedSound.name}
          accent={selectedSound.accent}
          detail={selectedSound.spectralProfile}
        />

        <div className="space-y-5 rounded-3xl border border-base-100/10 bg-base-100/10 p-5">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.18em] text-base-content/55">How it feels</p>
            <p className="font-body mt-2 text-sm leading-relaxed text-base-content/80">{selectedSound.tone}</p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.18em] text-base-content/55">Everyday example</p>
            <p className="font-body mt-2 text-sm leading-relaxed text-base-content/80">
              {selectedSound.everydayExample}
            </p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.18em] text-base-content/55">What research says</p>
            <p className="font-body mt-2 text-sm leading-relaxed text-base-content/80">
              {selectedSound.researchSummary}
            </p>
          </div>

          <Link className="btn btn-outline btn-sm w-full" to={`/colors/${selectedSound.id}`}>
            Open full explainer
          </Link>
        </div>
      </div>
    </article>
  );
}
