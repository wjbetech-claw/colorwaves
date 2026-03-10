import React from 'react'
import Card from './ui/Card'
import { SoundColor } from '../data/sounds'

export default function SoundCard({sound}:{sound:SoundColor}){
  const ACCENTS: Record<string,string> = {
    white: 'bg-white',
    pink: 'bg-pink-400',
  // simple color mapping for accents
  const ACCENTS: Record<string,string> = {
    white: 'bg-white',
    pink: 'bg-pink-300',
    brown: 'bg-amber-700',
    blue: 'bg-blue-400',
    violet: 'bg-purple-400',
    grey: 'bg-gray-400',
    ocean: 'bg-sky-400',
    fan: 'bg-stone-400'
  }

  const accent = ACCENTS[sound.id] || 'bg-[var(--color-primary-500)]'

  return (
    <Card>
      <div className="w-full h-36 bg-gradient-to-br from-black/10 to-black/5 flex items-end">
        {/* image placeholder — replace with real images later */}
        <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.2))'}} aria-hidden></div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className={`w-3 h-12 rounded ${accent} shrink-0`} aria-hidden></div>
          <div className="flex-1">
            <h3 className="h3">{sound.name}</h3>
            <p className="small text-[var(--color-text-muted)]">{sound.short}</p>
          </div>
          <div className="w-16 h-12 bg-[var(--color-panel)] rounded flex items-center justify-center text-xs text-[var(--color-text-muted)]">Img</div>
        </div>

        <div className="mt-4">
          <p className="body">{sound.tone}</p>
          <ul className="mt-3 text-xs text-[var(--color-text-muted)] list-none space-y-1">
            {sound.uses.map(u=> <li key={u} className="text-xs">• {u}</li>)}
          </ul>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-full bg-[var(--color-primary-500)] text-white shadow-md">Play</button>
            <button className="px-4 py-2 rounded-full border border-transparent bg-white/5 text-white">Preview</button>
          </div>
          <div className="text-xs text-[var(--color-text-muted)]">8s preview</div>
      <div className="flex items-start gap-4">
        <div className={`w-2 h-12 rounded ${accent} shrink-0`} aria-hidden></div>
        <div className="flex-1">
          <h3 className="h3">{sound.name}</h3>
          <p className="small text-[var(--color-text-muted)]">{sound.short}</p>
        </div>
        <div className="w-16 h-12 bg-[var(--color-panel)] rounded flex items-center justify-center text-xs text-[var(--color-text-muted)]">Img</div>
      </div>

      <div className="mt-3">
        <p className="body">{sound.tone}</p>
        <ul className="mt-3 text-xs text-[var(--color-text-muted)] list-none space-y-1">
          {sound.uses.map(u=> <li key={u} className="text-xs">• {u}</li>)}
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <button className="px-3 py-1 rounded bg-[var(--color-primary-500)] text-white mr-2" aria-pressed="false">Play</button>
          <button className="px-3 py-1 rounded border border-[var(--color-border)]">Preview</button>
        </div>
        <div className="text-xs text-[var(--color-text-muted)]">Preview · 8s</div>
      </div>

    </Card>
  )
}
