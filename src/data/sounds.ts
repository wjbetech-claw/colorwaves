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
    short: 'Even stronger low-frequency emphasis.',
    tone: 'Very deep / rumbling.',
    uses: ['Relaxation', 'Deep focus']
  }
]
