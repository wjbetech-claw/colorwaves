import React from 'react'

export default function App(){
  return (
    <div className="min-h-screen bg-base-100 text-base-content p-6">
      <header className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-semibold">Colorwaves</h1>
          <div>
            {/* theme toggler placeholder */}
            <button className="btn btn-ghost">Theme</button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto mt-8">
        <p className="text-lg text-muted-foreground">A minimal explorer for sound colors.</p>
      </main>
    </div>
  )
}
