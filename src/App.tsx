import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Landing from './components/Landing'

export default function App(){
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />
      <main className="py-12">
        <Container>
          <Landing />
          <section className="mb-8">
            <h2 className="h2">Explore sound colors</h2>
            <p className="body-large text-[var(--color-text-muted)]">Short, accurate definitions and simple previews for common sound colors.</p>
          </section>

          <section className="flex flex-col gap-8">
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
