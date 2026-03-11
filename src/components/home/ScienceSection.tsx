import React from "react";

const FINDINGS = [
  {
    title: "Noise Masking and Sleep Continuity",
    detail:
      "Steady broadband sounds can mask sudden environmental spikes (traffic, doors, hallway noise), which may reduce awakenings in some people.",
    sourceLabel: "WHO Environmental Noise Guidelines (2018)",
    sourceUrl: "https://www.who.int/europe/publications/i/item/9789289053563"
  },
  {
    title: "Pink Noise and Memory Consolidation",
    detail:
      "Studies on older adults suggest phase-locked pink-noise stimulation during deep sleep can support overnight memory performance.",
    sourceLabel: "Papalambros et al., Frontiers in Human Neuroscience (2017)",
    sourceUrl: "https://www.frontiersin.org/articles/10.3389/fnhum.2017.00141/full"
  },
  {
    title: "Auditory Stimulation and Slow-Wave Sleep",
    detail:
      "Targeted tones timed with sleep rhythms have been shown to enhance slow-wave activity, a key process linked to recovery and learning.",
    sourceLabel: "Ngo et al., Neuron (2013)",
    sourceUrl: "https://www.cell.com/neuron/fulltext/S0896-6273(13)00110-3"
  }
];

export default function ScienceSection() {
  return (
    <section id="science" className="min-h-screen px-4 py-16">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center">
        <div className="w-full text-center">
          <span className="font-display badge badge-outline border-secondary px-4 py-4 text-[0.72rem] uppercase tracking-[0.16em] text-base-content">
            The Science Behind Sound Color
          </span>
          <h2 className="font-display mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary md:text-5xl">
            Different frequency profiles can shape sleep, focus, and perceived calm.
          </h2>
          <p className="font-body mx-auto mt-5 max-w-3xl text-base leading-relaxed text-base-content md:text-lg">
            White, pink, and other noise profiles are actively studied in sleep and cognitive science. The effects vary
            by person and context, but the mechanism is measurable: spectral content changes what the brain hears and
            how it responds over time.
          </p>

          <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
            {FINDINGS.map((finding) => (
              <article
                key={finding.title}
                className="rounded-2xl border border-primary/15 bg-base-100/30 p-5 shadow-xl backdrop-blur-md">
                <h3 className="font-display text-center text-lg text-secondary">{finding.title}</h3>
                <p className="font-body mt-3 text-sm leading-relaxed text-base-content">{finding.detail}</p>
                <a
                  href={finding.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body mt-4 inline-flex text-sm text-base-content/50 underline-offset-4 hover:text-base-content">
                  Source: {finding.sourceLabel}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-base-100/10 bg-base-100/20 p-5 shadow-xl backdrop-blur-md">
            <div className="mt-4 grid grid-cols-12 items-end gap-2">
              {[18, 28, 40, 54, 62, 58, 45, 38, 30, 24, 20, 16].map((h, index) => (
                <div
                  key={`${h}-${index}`}
                  className="rounded-t-md bg-gradient-to-t from-primary/60 via-secondary/70 to-success/70"
                  style={{ height: `${h * 1.4}px` }}
                />
              ))}
            </div>
            <div className="font-body mt-3 flex justify-between text-xs text-base-content/50">
              <span>Low frequencies</span>
              <span>High frequencies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
