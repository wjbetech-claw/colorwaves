import React from 'react'
import Container from './layout/Container'
import SoundCard from './SoundCard'
import { SOUNDS } from '../data/sounds'

export default function Landing(){
  const example = SOUNDS[0]
  return (
    <div className="py-16">
      <Container>
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold">Colorwaves</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">Explore the colors of sound — understand how textures and tones affect focus, sleep, and creativity.</p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-[var(--color-panel)] rounded-lg shadow-md">
            <h3 className="font-semibold">Why it matters</h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">Different sound spectra influence attention, relaxation, and perception. Knowing which 'color' suits your task helps design better environments.</p>
          </div>
          <div className="p-6 bg-[var(--color-panel)] rounded-lg shadow-md">
            <h3 className="font-semibold">Use cases</h3>
            <ul className="mt-2 text-sm text-[var(--color-text-muted)] space-y-1">
              <li>Focus & productivity</li>
              <li>Sleep & relaxation</li>
              <li>Masking & privacy</li>
            </ul>
          </div>
          <div className="p-6 bg-[var(--color-panel)] rounded-lg shadow-md">
            <h3 className="font-semibold">Science</h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">Research links spectral shape and temporal dynamics to cognitive and emotional responses.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="h3 mb-4">Quick data</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 p-6 bg-[var(--color-panel)] rounded-lg shadow-md">Average perceived fatigue by sound color (placeholder)</div>
            <div className="flex-1 p-6 bg-[var(--color-panel)] rounded-lg shadow-md">Recommended use durations (placeholder)</div>
          </div>
        </section>

        <section>
          <h2 className="h3 mb-4">Example</h2>
          <SoundCard sound={example} />
        </section>
      </Container>
    </div>
  )
}
