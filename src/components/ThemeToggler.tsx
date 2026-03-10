import React, {useEffect, useState} from 'react'

const THEMES = ['light','dark','cupcake','synthwave','retro','cyberpunk','valentine'] as const
type Theme = (typeof THEMES)[number]

function getStored(): Theme | null {
  try { const t = localStorage.getItem('cw:theme'); return t as Theme | null } catch { return null }
}

export default function ThemeToggler(){
  const [theme, setTheme] = useState<Theme>(() => (typeof window !== 'undefined' && getStored()) || 'light')

  useEffect(()=>{
    try{ document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('cw:theme', theme) }catch{}
  },[theme])

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost" aria-label="Theme chooser">Theme</label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {THEMES.map(t => (
          <li key={t}><button className={`w-full text-left ${t===theme? 'font-semibold':''}`} onClick={()=>setTheme(t)}>{t}</button></li>
        ))}
      </ul>
    </div>
  )
}

