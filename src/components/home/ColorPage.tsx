import React from "react";
import { Link, useParams } from "react-router-dom";
import { SOUNDS } from "../../data/sounds";

export default function ColorPage() {
  const { id } = useParams();
  const sound = SOUNDS.find((entry) => entry.id === id);

  if (!sound) {
    return (
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-base-200/60 p-8 text-center shadow-xl">
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

  return (
    <section className="min-h-screen px-4 py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl border border-base-100/30 bg-base-200/70 p-8 shadow-2xl backdrop-blur-2xl">
        <header className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.35em] text-primary/70">{sound.tone}</p>
          <h1 className="font-display mt-4 text-4xl text-primary md:text-5xl">{sound.name}</h1>
          <p className="font-body mt-2 text-base-content/70">{sound.short}</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-base-100/30 bg-base-100/70 p-5">
            <p className="font-body text-sm text-base-content/70">Description</p>
            <p className="mt-2 font-body text-lg text-base-content">{sound.description ?? sound.tone}</p>
          </article>
          <article className="rounded-2xl border border-base-100/30 bg-base-100/70 p-5">
            <p className="font-body text-sm text-base-content/70">Primary uses</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {sound.uses.map((use) => (
                <span
                  key={use}
                  className="rounded-full border border-base-content/30 px-3 py-1 text-xs uppercase tracking-[0.3em] text-base-content/70">
                  {use}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-base-content/70">
          <span>Accent</span>
          <span
            className="h-3 w-16 rounded-full"
            style={{ background: sound.accent || "linear-gradient(90deg,#4ade80,#22d3ee)" }}
          />
          <Link className="btn btn-ghost btn-sm" to="/">
            Back to landing
          </Link>
        </div>
      </div>
    </section>
  );
}
