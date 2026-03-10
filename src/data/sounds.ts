export type SoundColor = {
  id: string
  name: string
  short: string
  tone: string
  uses: string[]
}

export const SOUNDS: SoundColor[] = [
  {
    id: 'white',
    name: 'White Noise',
    short: 'Equal energy across frequencies.',
    tone: 'Bright, hiss-like. Uniform spectral density.',
    uses: ['Masking background noise', 'Focus & concentration']
  },
  {
    id: 'pink',
    name: 'Pink Noise',
    short: 'Energy decreases with frequency (1/f).',
    tone: 'Smoother and deeper than white noise.',
    uses: ['Sleep aid', 'Sound engineering reference']
  },
  {
    id: 'brown',
    name: 'Brown Noise',
    short: 'Stronger low-frequency emphasis than pink.',
    tone: 'Very deep and rumbling; soothing for some listeners.',
    uses: ['Relaxation', 'Deep focus']
  },
  {
    id: 'blue',
    name: 'Blue Noise',
    short: 'Energy increases with frequency.',
    tone: 'Sharper, brighter high-frequency emphasis.',
    uses: ['Testing audio chains', 'Tonal masking in some cases']
  },
  {
    id: 'violet',
    name: 'Violet Noise',
    short: 'High-frequency heavy noise (like a high hiss).',
    tone: 'Very bright; sometimes perceived as harsh.',
    uses: ['Specialized audio tests', 'Not typically used for sleep']
  },
  {
    id: 'grey',
    name: 'Grey Noise',
    short: 'Perceptually equalized noise (psychoacoustic).',
    tone: 'Balanced to human hearing — smoother across frequencies.',
    uses: ['Hearing tests', 'Critical listening calibration']
  },
  {
    id: 'ocean',
    name: 'Ocean / Rain',
    short: 'Gentle broadband sound with natural rhythm.',
    tone: 'Wave-like, rhythmic, and calming.',
    uses: ['Sleep', 'Meditation', 'Ambient masking']
  },
  {
    id: 'fan',
    name: 'Mechanical (fan/air)',
    short: 'Low, steady-rumble from machines or fans.',
    tone: 'Consistent, low-frequency hum.',
    uses: ['Masking, focus, background hum']
  }
]
