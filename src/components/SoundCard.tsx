import React from 'react'
import { SoundColor } from '../data/sounds'

export default function SoundCard({sound}:{sound:SoundColor}){
  return (
    <article className="card bg-base-200 shadow-sm p-4">
      <div className="card-body p-0">
        <h3 className="text-lg font-medium">{sound.name}</h3>
        <p className="text-sm text-muted-foreground">{sound.short}</p>
        <p className="mt-2 text-sm">{sound.tone}</p>
        <ul className="mt-3 text-xs text-muted-foreground">
          {sound.uses.map(u=> <li key={u}>• {u}</li>)}
        </ul>
        <div className="mt-4">
          <button className="btn btn-sm">Preview</button>
        </div>
      </div>
    </article>
  )
}
