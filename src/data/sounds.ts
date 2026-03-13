export type SoundColor = {
  id: string;
  name: string;
  short: string;
  tone: string;
  uses: string[];
  accent?: string;
  description?: string;
  sampleUrl?: string;
};

export const SOUNDS: SoundColor[] = [
  {
    id: "white",
    name: "White Noise",
    short: "Equal energy across frequencies.",
    tone: "Bright, hiss-like. Uniform spectral density.",
    uses: ["Masking background noise", "Focus & concentration"],
    accent: "#f8fafc",
    description: "A neutral, steady hiss that feels like wrapping a room in soft, even energy.",
    sampleUrl:
      "https://cdn.pixabay.com/download/audio/2022/03/25/audio_27f354e32c.mp3?filename=calm-atmosphere-111784.mp3"
  },
  {
    id: "pink",
    name: "Pink Noise",
    short: "Energy decreases with frequency (1/f).",
    tone: "Smoother and deeper than white noise.",
    uses: ["Sleep aid", "Sound engineering reference"],
    accent: "#f472b6",
    description: "Weighted lows create warmth without harshness, ideal for winding down.",
    sampleUrl:
      "https://cdn.pixabay.com/download/audio/2021/11/03/audio_7b9d1c2f2f.mp3?filename=ambient-meditation-111412.mp3"
  },
  {
    id: "brown",
    name: "Brown Noise",
    short: "Stronger low-frequency emphasis than pink.",
    tone: "Very deep and rumbling; soothing for some listeners.",
    uses: ["Relaxation", "Deep focus"],
    accent: "#a16207",
    description: "Deep rumble that feels like a grounded heartbeat, perfect for steady-focus or late-night listening.",
    sampleUrl:
      "https://cdn.pixabay.com/download/audio/2021/12/27/audio_9e9307b5b1.mp3?filename=pulse-ambient-114208.mp3"
  },
  {
    id: "blue",
    name: "Blue Noise",
    short: "Energy increases with frequency.",
    tone: "Sharper, brighter high-frequency emphasis.",
    uses: ["Testing audio chains", "Tonal masking in some cases"],
    accent: "#0ea5e9",
    description: "Crisp edges and shimmer, like confetti that sparkles through headphones.",
    sampleUrl:
      "https://cdn.pixabay.com/download/audio/2022/04/12/audio_f0e0c1054e.mp3?filename=bright-harmony-115672.mp3"
  },
  {
    id: "violet",
    name: "Violet Noise",
    short: "High-frequency heavy noise (like a high hiss).",
    tone: "Very bright; sometimes perceived as harsh.",
    uses: ["Specialized audio tests", "Not typically used for sleep"],
    accent: "#a855f7",
    description: "Super-sparkle energy that feels like crystalline dust in a dark space.",
    sampleUrl: "https://cdn.pixabay.com/download/audio/2021/08/09/audio_ecad0c2355.mp3?filename=neon-night-109233.mp3"
  },
  {
    id: "grey",
    name: "Grey Noise",
    short: "Perceptually equalized noise (psychoacoustic).",
    tone: "Balanced to human hearing — smoother across frequencies.",
    uses: ["Hearing tests", "Critical listening calibration"],
    accent: "#64748b",
    description: "Neutral contour that feels like a delicate fog, useful whenever you need a calm standard.",
    sampleUrl:
      "https://cdn.pixabay.com/download/audio/2021/10/23/audio_2076a1cc60.mp3?filename=ambient-tension-110671.mp3"
  },
  {
    id: "ocean",
    name: "Ocean / Rain",
    short: "Gentle broadband sound with natural rhythm.",
    tone: "Wave-like, rhythmic, and calming.",
    uses: ["Sleep", "Meditation", "Ambient masking"],
    accent: "#22d3ee",
    description: "Flowing swells and drops that feel like floating just below the surface.",
    sampleUrl: "https://cdn.pixabay.com/download/audio/2021/09/08/audio_3c8b7d6964.mp3?filename=blue-ocean-110103.mp3"
  },
  {
    id: "fan",
    name: "Mechanical (fan/air)",
    short: "Low, steady-rumble from machines or fans.",
    tone: "Consistent, low-frequency hum.",
    uses: ["Masking", "Focus", "Background hum"],
    accent: "#94a3b8",
    description: "Solid hum reminiscent of being inside a cocooned studio or server room.",
    sampleUrl: "https://cdn.pixabay.com/download/audio/2022/04/28/audio_bc00880cde.mp3?filename=steady-hum-117943.mp3"
  }
];
