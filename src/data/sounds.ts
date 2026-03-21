export type Citation = {
  label: string;
  url: string;
  note: string;
};

export type NoiseGeneratorType = "white" | "pink" | "brown" | "blue" | "violet";

export type SoundColor = {
  id: string;
  name: string;
  short: string;
  tone: string;
  uses: string[];
  accent: string;
  description: string;
  spectralProfile: string;
  everydayExample: string;
  researchSummary: string;
  caveat: string;
  evidenceLevel: "Research-backed" | "Mixed evidence" | "Technical reference" | "Research gap";
  generatorType?: NoiseGeneratorType;
  citations: Citation[];
};

const WHO_NOISE_GUIDELINES: Citation = {
  label: "WHO Environmental Noise Guidelines for the European Region (2018)",
  url: "https://www.who.int/europe/publications/i/item/9789289053563",
  note: "Summarizes how steady background sound can reduce the impact of sudden environmental noise during rest."
};

const PAPALAMBROS_PINK_NOISE: Citation = {
  label: "Papalambros et al., Frontiers in Human Neuroscience (2017)",
  url: "https://www.frontiersin.org/articles/10.3389/fnhum.2017.00141/full",
  note: "Phase-locked pink-noise stimulation during slow-wave sleep improved next-day memory performance in older adults."
};

const NGO_SLOW_WAVE: Citation = {
  label: "Ngo et al., Neuron (2013)",
  url: "https://www.cell.com/neuron/fulltext/S0896-6273(13)00110-3",
  note: "Timed auditory stimulation can enhance slow-wave activity, but the effect depends on precise timing rather than passive playback alone."
};

export const SOUNDS: SoundColor[] = [
  {
    id: "white",
    name: "White Noise",
    short: "Roughly equal power per hertz across the spectrum.",
    tone: "Bright, airy, and hiss-like.",
    uses: ["Masking background noise", "Focus support", "Sleep routines"],
    accent: "#f8fafc",
    description:
      "White noise spreads energy broadly across audible frequencies, so it tends to feel consistent and texture-rich rather than melodic.",
    spectralProfile:
      "Because every frequency band carries similar power, white noise keeps the top end active and can sound brighter than people expect.",
    everydayExample: "Think of radio static, a strong room fan, or the soft hiss behind an untuned television.",
    researchSummary:
      "The strongest practical case for white noise is sound masking. Research is more consistent around reducing the impact of sudden outside noise than around broad claims about cognition.",
    caveat:
      "Some listeners find white noise too sharp for long sessions, especially at higher volume. Pink or brown noise is often easier to tolerate overnight.",
    evidenceLevel: "Research-backed",
    generatorType: "white",
    citations: [WHO_NOISE_GUIDELINES]
  },
  {
    id: "pink",
    name: "Pink Noise",
    short: "Power drops as frequency rises, following an approximate 1/f slope.",
    tone: "Softer and fuller than white noise.",
    uses: ["Sleep routines", "Relaxation", "Audio reference listening"],
    accent: "#f472b6",
    description:
      "Pink noise keeps low frequencies more present than white noise, so it usually feels warmer and less piercing while still covering a wide range.",
    spectralProfile:
      "Each octave carries similar total energy, which is why pink noise often sounds more balanced to human ears than white noise.",
    everydayExample: "Steady rainfall, distant surf, and some HVAC sounds often resemble pink-noise balance more than true white noise.",
    researchSummary:
      "Pink noise is the most researched of the common color-noise labels for sleep studies, but many positive results come from precisely timed stimulation during deep sleep rather than passive all-night streaming.",
    caveat:
      "Marketing around pink noise often overstates certainty. It may help some people settle, but study results depend heavily on timing, setting, and the listener.",
    evidenceLevel: "Research-backed",
    generatorType: "pink",
    citations: [PAPALAMBROS_PINK_NOISE, NGO_SLOW_WAVE]
  },
  {
    id: "brown",
    name: "Brown Noise",
    short: "A steeper low-frequency emphasis than pink noise.",
    tone: "Deep, rumbling, and heavy.",
    uses: ["Deep focus", "Relaxation", "Low-stimulation backgrounds"],
    accent: "#a16207",
    description:
      "Brown noise rolls off the highs even more aggressively, leaving a weighted low-end texture that many listeners describe as steady or cocooning.",
    spectralProfile:
      "Power falls quickly as frequency rises, so the high hiss fades and the bass-forward body becomes the dominant impression.",
    everydayExample: "A strong waterfall at a distance, thunder-like room tone, or a train cabin rumble can feel brown-noise-adjacent.",
    researchSummary:
      "Brown noise is popular in wellness apps, but direct human research on brown noise itself is much thinner than the literature around pink noise or general sound masking.",
    caveat:
      "Because the low end is pronounced, brown noise can become muddy on small speakers and tiring if played louder than necessary.",
    evidenceLevel: "Mixed evidence",
    generatorType: "brown",
    citations: [WHO_NOISE_GUIDELINES]
  },
  {
    id: "blue",
    name: "Blue Noise",
    short: "More energy is pushed into the higher frequencies.",
    tone: "Crisp, airy, and sharp-edged.",
    uses: ["Testing speakers", "Masking narrow bands", "Technical listening"],
    accent: "#0ea5e9",
    description:
      "Blue noise flips the feel of brown noise by emphasizing rapid high-frequency variation, which makes it more useful for technical contexts than for relaxation.",
    spectralProfile:
      "High frequencies dominate, so blue noise sounds thinner and brighter than white noise while still remaining broadband and non-musical.",
    everydayExample: "The brittle hiss of compressed air or electronic shimmer can hint at a blue-noise character.",
    researchSummary:
      "Most discussion of blue noise is technical rather than clinical. It shows up in signal processing, speaker tests, and dithering contexts more than in sleep or focus research.",
    caveat:
      "Blue noise can feel harsh very quickly, especially on headphones. It is usually better as a short reference than a long listening bed.",
    evidenceLevel: "Technical reference",
    generatorType: "blue",
    citations: []
  },
  {
    id: "violet",
    name: "Violet Noise",
    short: "An even steeper high-frequency emphasis than blue noise.",
    tone: "Very bright and intentionally intense.",
    uses: ["Specialized audio testing", "Hearing research setups", "Short technical checks"],
    accent: "#a855f7",
    description:
      "Violet noise pushes energy toward the upper edge of hearing, so it is usually discussed as a lab or engineering tool instead of a comfort sound.",
    spectralProfile:
      "The extreme high-end weighting gives violet noise a piercing character that reveals top-end issues fast but is rarely pleasant for extended listening.",
    everydayExample: "It is less common in nature, but some sharp electronic hiss or spray-like textures can feel violet-noise-heavy.",
    researchSummary:
      "Like blue noise, violet noise is mostly a technical reference concept. It is not strongly supported as a wellness or productivity tool in mainstream human studies.",
    caveat:
      "Keep playback levels low. People with sound sensitivity may find violet noise uncomfortable immediately.",
    evidenceLevel: "Technical reference",
    generatorType: "violet",
    citations: []
  },
  {
    id: "grey",
    name: "Grey Noise",
    short: "Perceptually weighted to feel more even to human hearing.",
    tone: "Balanced and flatter to the ear than raw white noise.",
    uses: ["Calibration listening", "Hearing demos", "Psychoacoustic comparisons"],
    accent: "#64748b",
    description:
      "Grey noise tries to compensate for the way our ears hear different frequencies, so the goal is perceptual balance rather than strict physical balance.",
    spectralProfile:
      "Instead of using equal physical power, grey noise adjusts its spectral shape so the result feels more evenly distributed to a listener.",
    everydayExample: "There is no common everyday source, which is one reason grey noise is usually taught as a psychoacoustic concept rather than a household sound.",
    researchSummary:
      "Grey noise belongs more to hearing science and calibration discussions than to consumer sleep research. It is useful for explaining perception, not for promising a universal mood effect.",
    caveat:
      "Different equal-loudness models produce slightly different versions, so there is no single everyday consumer standard.",
    evidenceLevel: "Technical reference",
    citations: []
  },
  {
    id: "black",
    name: "Black Noise",
    short: "A loose label for near-silence or extremely low-energy sound with rare peaks.",
    tone: "Sparse, quiet, and more conceptual than standardized.",
    uses: ["Low-stimulation environments", "Concept teaching", "Comparing noise labels"],
    accent: "#111827",
    description:
      "Black noise is not a tightly standardized acoustics term. People often use it to mean almost-silent soundscapes, deep sub-bass energy, or noise with long quiet gaps between spikes.",
    spectralProfile:
      "Unlike white, pink, or brown noise, black noise does not point to one agreed spectral curve, which makes it more of a descriptive umbrella than a precise technical format.",
    everydayExample: "A dark room with only distant building hums or occasional low rumbles is closer to the idea than to any single measured profile.",
    researchSummary:
      "There is no strong mainstream research tradition around black noise as a distinct listening protocol. It is better presented as a naming convention with inconsistent usage.",
    caveat:
      "Because apps and articles define black noise differently, always check what a product actually means before treating it like a specific evidence-based tool.",
    evidenceLevel: "Research gap",
    citations: []
  },
  {
    id: "ocean",
    name: "Ocean and Rain",
    short: "Natural broadband textures that often resemble pink-noise balance.",
    tone: "Rhythmic, soft, and familiar.",
    uses: ["Wind-down rituals", "Meditation", "Ambient masking"],
    accent: "#22d3ee",
    description:
      "Ocean surf and steady rainfall are not official noise colors, but they are often loved for the same reason: they provide wide-band coverage without sounding synthetic.",
    spectralProfile:
      "Natural soundscapes usually fluctuate over time, so they feel less uniform than generated noise while still filling space in a predictable way.",
    everydayExample: "Rain on a roof, shoreline wash, or a shower running in another room.",
    researchSummary:
      "The benefit of these sounds is usually explained through masking, familiarity, and personal preference rather than through a single acoustic formula.",
    caveat:
      "Natural loops can become distracting if the recording contains birds, voices, or abrupt wave crashes.",
    evidenceLevel: "Mixed evidence",
    citations: [WHO_NOISE_GUIDELINES]
  },
  {
    id: "fan",
    name: "Mechanical Hum",
    short: "Steady low-mid broadband sound from fans, vents, or air systems.",
    tone: "Consistent, neutral, and machine-like.",
    uses: ["Office masking", "Routine focus", "Bedroom sound cover"],
    accent: "#94a3b8",
    description:
      "Mechanical hum is one of the most common real-world masking sounds. It is imperfect, but its steadiness is exactly why many people associate it with concentration or sleep.",
    spectralProfile:
      "Most fans and vents emphasize low and mid frequencies with a soft broadband tail, producing a practical masking bed rather than a textbook noise color.",
    everydayExample: "Box fans, HVAC vents, air purifiers, and airplane cabin sound.",
    researchSummary:
      "Mechanical masking sounds often work for the same reason as white noise: they make sudden environmental changes less noticeable. Real-world comfort still depends on volume and personal tolerance.",
    caveat:
      "A hum that helps one person focus can feel irritating or claustrophobic to another, especially if there is a strong tonal whine.",
    evidenceLevel: "Mixed evidence",
    citations: [WHO_NOISE_GUIDELINES]
  }
];
