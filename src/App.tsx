import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'
import { SOUNDS } from './data/sounds'
import SoundCard from './components/SoundCard'

export default function App(){
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />
      <main className="py-8">
        <Container>
          <section className="mb-6">
            <h2 className="h2">Explore sound colors</h2>
            <p className="body-large text-[var(--color-text-muted)]">Short, accurate definitions and simple previews for common sound colors.</p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOUNDS.map(s => (
              <SoundCard key={s.id} sound={s} />
            ))}
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
