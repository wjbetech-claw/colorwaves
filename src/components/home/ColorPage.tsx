import React from "react";
import { Link, useParams } from "react-router-dom";
import NoisePreview from "../audio/NoisePreview";
import { SOUNDS } from "../../data/sounds";

const EVIDENCE_TONE: Record<string, string> = {
  "Research-backed": "Supported by published human or environmental-noise research, with limits.",
  "Mixed evidence": "Reasonable practical use exists, but direct evidence is thinner or less consistent.",
  "Technical reference": "Mainly useful as an acoustics or signal-processing concept rather than a lifestyle claim.",
  "Research gap": "Useful to discuss carefully, but not well established as a standardized evidence-based category."
};

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

  const headerColor = sound.id === "white" ? "#d8e1e8" : sound.accent;

  return (
    <section className="min-h-screen px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-base-100/10 bg-base-100/10 shadow-2xl backdrop-blur-md">
          <header className="border-b border-base-100/10 px-6 py-6 md:px-10 md:py-8">
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

              <div className="flex flex-wrap items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-base-content/60">
                <span>Color profile</span>
                <span className="text-base-content/30">/</span>
                <span>{sound.name}</span>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="space-y-4">
                <p className="font-display text-xs uppercase tracking-[0.24em] text-base-content/55">
                  Acoustic profile
                </p>
                <h1 className="font-display text-4xl md:text-6xl" style={{ color: headerColor }}>
                  {sound.name}
                </h1>
                <p className="font-display text-sm uppercase tracking-[0.35em]" style={{ color: headerColor }}>
                  {sound.tone}
                </p>
                <p className="font-body max-w-3xl text-lg leading-relaxed text-base-content/80">{sound.short}</p>
              </div>

              <aside className="grid gap-3 self-start rounded-[1.5rem] border border-base-100/10 bg-base-100/5 p-5">
                <InfoRow
                  label="Evidence level"
                  value={sound.evidenceLevel}
                  accent={sound.accent}
                  body={EVIDENCE_TONE[sound.evidenceLevel]}
                />
                <InfoRow label="Typical use cases" value={String(sound.uses.length)} body={sound.uses.join(", ")} />
                <InfoRow
                  label="Preview type"
                  value={sound.generatorType ? "Generated" : "Conceptual"}
                  body={
                    sound.generatorType
                      ? "Includes a browser-generated signal preview that matches the noise label."
                      : "Best explained through context and comparison rather than one canonical playback sample."
                  }
                />
              </aside>
            </div>
          </header>

          <div className="px-6 py-8 md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <section className="space-y-8">
                <ContentSection title="1. What this label means" kicker="Definition">
                  <p className="font-body text-base leading-relaxed text-base-content/85">{sound.description}</p>
                </ContentSection>

                <ContentSection title="2. How the spectrum is shaped" kicker="Signal profile">
                  <p className="font-body text-base leading-relaxed text-base-content/85">{sound.spectralProfile}</p>
                  <div className="mt-5 rounded-[1.5rem] border border-base-100/10 bg-base-100/5 p-4">
                    <p className="font-display text-xs uppercase tracking-[0.18em] text-base-content/55">
                      Everyday analogy
                    </p>
                    <p className="font-body mt-3 text-sm leading-relaxed text-base-content/80">
                      {sound.everydayExample}
                    </p>
                  </div>
                </ContentSection>

                <ContentSection title="3. Where people use it" kicker="Practical context">
                  <ul className="grid gap-3 md:grid-cols-2">
                    {sound.uses.map((use) => (
                      <li
                        key={use}
                        className="rounded-[1.25rem] border border-base-100/10 bg-base-100/5 px-4 py-4 text-sm leading-relaxed text-base-content/80">
                        {use}
                      </li>
                    ))}
                  </ul>
                </ContentSection>
              </section>

              <section className="space-y-8">
                <ContentSection title="4. Listen or inspect" kicker="Preview">
                  {sound.generatorType ? (
                    <NoisePreview
                      generator={sound.generatorType}
                      label={sound.name}
                      accent={sound.accent}
                      detail="This preview is synthesized in the browser and paired with a live analyser so the visual bars reflect the actual generated signal."
                    />
                  ) : (
                    <article className="rounded-[1.5rem] border border-base-100/10 bg-base-100/5 p-5">
                      <h2 className="font-display text-2xl text-base-content">No single canonical playback file</h2>
                      <p className="font-body mt-4 text-base leading-relaxed text-base-content/80">
                        This label is better taught as a concept, listening comparison, or real-world analogy than as a
                        single exact downloadable sample. That is especially true for grey and black noise, where
                        definitions vary between sources.
                      </p>
                    </article>
                  )}
                </ContentSection>

                <ContentSection title="5. What the research supports" kicker="Evidence">
                  <p className="font-body text-base leading-relaxed text-base-content/85">{sound.researchSummary}</p>
                  <div className="mt-5 rounded-[1.5rem] border border-warning/25 bg-warning/10 p-4">
                    <p className="font-display text-xs uppercase tracking-[0.18em] text-base-content/55">Caution</p>
                    <p className="font-body mt-3 text-sm leading-relaxed text-base-content/80">{sound.caveat}</p>
                  </div>
                </ContentSection>
              </section>
            </div>

            <section className="mt-10 border-t border-base-100/10 pt-8">
              <div className="max-w-3xl">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-base-content/55">Sources</p>
                <h2 className="font-display mt-3 text-3xl text-base-content">References and traceability</h2>
                <p className="font-body mt-3 text-base leading-relaxed text-base-content/75">
                  These sources support the strongest claims on this page. When no reliable source is listed, the page
                  stays descriptive rather than pretending certainty.
                </p>
              </div>

              {sound.citations.length ? (
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {sound.citations.map((citation) => (
                    <a
                      key={citation.label}
                      href={citation.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-[1.5rem] border border-base-100/10 bg-base-100/5 p-5 transition hover:border-primary/40 hover:bg-base-100/10">
                      <p className="font-display text-sm text-primary">{citation.label}</p>
                      <p className="font-body mt-3 text-sm leading-relaxed text-base-content/75">{citation.note}</p>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-[1.5rem] border border-base-100/10 bg-base-100/5 p-5">
                  <p className="font-body text-sm leading-relaxed text-base-content/75">
                    No direct source list is shown here because this profile is being presented carefully as a concept
                    or research gap rather than as a settled evidence-backed intervention.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentSection({
  title,
  kicker,
  children
}: {
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.75rem] border border-base-100/10 bg-base-100/5 p-6">
      <p className="font-display text-xs uppercase tracking-[0.22em] text-base-content/55">{kicker}</p>
      <h2 className="font-display mt-3 text-2xl text-base-content">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function InfoRow({
  label,
  value,
  body,
  accent
}: {
  label: string;
  value: string;
  body: string;
  accent?: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-base-100/10 bg-base-100/5 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-[0.68rem] uppercase tracking-[0.2em] text-base-content/55">{label}</p>
        <span
          className="rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-base-content/75"
          style={accent ? { borderColor: accent } : undefined}>
          {value}
        </span>
      </div>
      <p className="font-body mt-3 text-sm leading-relaxed text-base-content/75">{body}</p>
    </div>
  );
}
