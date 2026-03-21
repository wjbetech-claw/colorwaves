import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SOUNDS } from "../../data/sounds";

export default function SubNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs uppercase tracking-[0.35em] text-base-content/50 md:flex-row md:items-center md:justify-center">
        <div className="hidden md:flex w-full flex-wrap items-center justify-center gap-3">
          {SOUNDS.map((sound) => (
            <Link
              key={sound.id}
              to={`/colors/${sound.id}`}
              className="rounded-md border border-base-content/20 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.3em] text-base-content/80 transition hover:border-primary hover:text-primary">
              {sound.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex justify-center">
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-base-300 bg-base-100 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-base-content shadow-sm transition hover:border-primary hover:text-primary"
              onClick={() => setOpen((o) => !o)}
              aria-haspopup="menu"
              aria-expanded={open}>
              Colors
              <svg
                className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>

            {open && (
              <div className="absolute left-1/2 top-full z-40 w-56 -translate-x-1/2 rounded-2xl border border-base-300 bg-base-100 py-2 shadow-2xl">
                <div className="flex flex-col">
                  {SOUNDS.map((sound) => (
                    <Link
                      key={sound.id}
                      to={`/colors/${sound.id}`}
                      onClick={() => setOpen(false)}
                      className="px-4 py-2 text-sm text-base-content/80 transition hover:bg-base-200/60">
                      {sound.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
