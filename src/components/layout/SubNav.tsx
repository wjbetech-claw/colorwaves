import React, {useState} from 'react'
export default function SubNav(){
  const [open,setOpen]=useState(false)
  const SOUNDS = [{id:'white',name:'White'},{id:'pink',name:'Pink'},{id:'brown',name:'Brown'}]
  return (
    <nav className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto px-8 sm:px-12 max-w-[1100px]">
        {/* Desktop: horizontal list */}
        <div className="hidden md:flex items-center gap-6 overflow-x-auto py-3">
          {SOUNDS.map(s=> (<a key={s.id} href={`#${s.id}`} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition">{s.name}</a>))}
        </div>

        {/* Mobile: centered dropdown */}
        <div className="md:hidden flex justify-center py-3">
          <div className="relative">
            <button type="button" className="px-4 py-2 rounded bg-[var(--color-panel)] border border-[var(--color-border)]" onClick={()=>setOpen(o=>!o)} aria-haspopup="menu" aria-expanded={open}>
              Colors
            </button>
            {open && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-[var(--color-panel)] border border-[var(--color-border)] rounded shadow-lg z-40">
                <div className="flex flex-col max-h-56 overflow-auto">
                  {SOUNDS.map(s=> (<a key={s.id} onMouseDown={(e)=>{e.preventDefault(); setOpen(false)}} href={`#${s.id}`} className="px-4 py-3 text-sm hover:bg-[var(--color-bg)]">{s.name}</a>))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
