import React from 'react'
import { SOUNDS } from './data/sounds'
import SoundCard from './components/SoundCard'

export default function App(){
  return (
    <div className="min-h-screen bg-base-100 text-base-content p-6">
      <header className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-semibold">Colorwaves</h1>
          <div>
            <button className="btn btn-ghost">Theme</button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-8">
        <section className="prose max-w-none mb-6">
          <h2 className="text-3xl font-semibold">Explore sound colors</h2>
          <p className="text-muted-foreground">Short, accurate definitions and simple previews for common sound colors.</p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SOUNDS.map(s => (
            <SoundCard key={s.id} sound={s} />
          ))}
        </section>
      </main>
    </div>
  )
}
