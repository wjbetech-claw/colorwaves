import React, {useEffect, useState, useRef} from 'react'

const THEMES = [
  'light','dark','cupcake','bumblebee','emerald','corporate','synthwave','retro','cyberpunk','valentine','halloween','garden','forest','aqua','lofi','pastel','fantasy','wireframe','black','luxury','dracula'
] as const

type Theme = (typeof THEMES)[number]

function isTheme(value: string | null): value is Theme {
  return value !== null && THEMES.includes(value as Theme)
}

function getStoredTheme(): Theme | null {
  try { const t = localStorage.getItem('cw:theme'); return isTheme(t) ? t : null } catch { return null }
}

function getPreferredTheme(): Theme {
  try {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch { return 'light' }
}

export default function ThemeToggler(){
  const [theme, setTheme] = useState<Theme>(() => (typeof window === 'undefined' ? 'light' : getStoredTheme() ?? getPreferredTheme()))
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement|null>(null)

  useEffect(()=>{
    try{ document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('cw:theme', theme) }catch{}
  },[theme])

  useEffect(()=>{
    function onDoc(e: MouseEvent){ if(!root.current) return; if(!root.current.contains(e.target as Node)) setOpen(false) }
    function onEsc(e: KeyboardEvent){ if(e.key==='Escape') setOpen(false) }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onEsc)
    return ()=>{ document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onEsc) }
  },[])

  return (
    <div ref={root} className="relative">
      <button aria-haspopup="menu" aria-expanded={open} className="btn btn-ghost" onClick={()=>setOpen(v=>!v)}>
        Theme
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 max-h-72 z-50">
          <div className="bg-base-100 shadow rounded p-2 overflow-y-auto max-h-72 overflow-x-hidden">
            <div className="flex flex-col gap-1">
              {THEMES.map(t=> (
                <button key={t} type="button" className={`text-left px-3 py-1 rounded ${t===theme? 'bg-base-200 font-semibold':''}`} onMouseDown={(e)=>{e.preventDefault(); setTheme(t); setOpen(false)}}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
