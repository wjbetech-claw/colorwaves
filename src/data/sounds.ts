export type SoundColor = {
  id: string;
  name: string;
  short: string;
  tone: string;
  uses: string[];
  accent?: string;
  description?: string;
};

export const SOUNDS: SoundColor[] = [
  {
    id: "white",
    name: "White Noise",
    short: "Equal energy across frequencies.",
    tone: "Bright, hiss-like. Uniform spectral density.",
    uses: ["Masking background noise", "Focus & concentration"],
    accent: "#f8fafc",
    description: "A neutral, steady hiss that feels like wrapping a room in soft, even energy."
  },
  {
    id: "pink",
    name: "Pink Noise",
    short: "Energy decreases with frequency (1/f).",
    tone: "Smoother and deeper than white noise.",
    uses: ["Sleep aid", "Sound engineering reference"],
    accent: "#f472b6",
    description: "Weighted lows create warmth without harshness, ideal for winding down."
  },
  {
    id: "brown",
    name: "Brown Noise",
    short: "Stronger low-frequency emphasis than pink.",
    tone: "Very deep and rumbling; soothing for some listeners.",
    uses: ["Relaxation", "Deep focus"],
    accent: "#a16207",
    description: "Deep rumble that feels like a grounded heartbeat, perfect for steady-focus or late-night listening."
  },
  {
    id: "blue",
    name: "Blue Noise",
    short: "Energy increases with frequency.",
    tone: "Sharper, brighter high-frequency emphasis.",
    uses: ["Testing audio chains", "Tonal masking in some cases"],
    accent: "#0ea5e9",
    description: "Crisp edges and shimmer, like confetti that sparkles through headphones."
  },
  {
    id: "violet",
    name: "Violet Noise",
    short: "High-frequency heavy noise (like a high hiss).",
    tone: "Very bright; sometimes perceived as harsh.",
    uses: ["Specialized audio tests", "Not typically used for sleep"],
    accent: "#a855f7",
    description: "Super-sparkle energy that feels like crystalline dust in a dark space."
  },
  {
    id: "grey",
    name: "Grey Noise",
    short: "Perceptually equalized noise (psychoacoustic).",
    tone: "Balanced to human hearing — smoother across frequencies.",
    uses: ["Hearing tests", "Critical listening calibration"],
    accent: "#64748b",
    description: "Neutral contour that feels like a delicate fog, useful whenever you need a calm standard."
  },
  {
    id: "ocean",
    name: "Ocean / Rain",
    short: "Gentle broadband sound with natural rhythm.",
    tone: "Wave-like, rhythmic, and calming.",
    uses: ["Sleep", "Meditation", "Ambient masking"],
    accent: "#22d3ee",
    description: "Flowing swells and drops that feel like floating just below the surface."
  },
  {
    id: "fan",
    name: "Mechanical (fan/air)",
    short: "Low, steady-rumble from machines or fans.",
    tone: "Consistent, low-frequency hum.",
    uses: ["Masking", "Focus", "Background hum"],
    accent: "#94a3b8",
    description: "Solid hum reminiscent of being inside a cocooned studio or server room."
  }
];
