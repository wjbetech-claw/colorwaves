import React, { useEffect, useRef, useState } from "react";

const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula"
] as const;

const THEME_SWATCHES: Record<Theme, string> = {
  light: "#f8fafc",
  dark: "#111827",
  cupcake: "#f9a8d4",
  bumblebee: "#facc15",
  emerald: "#10b981",
  corporate: "#2563eb",
  synthwave: "#e879f9",
  retro: "#fb923c",
  cyberpunk: "#f43f5e",
  valentine: "#fb7185",
  halloween: "#f97316",
  garden: "#22c55e",
  forest: "#065f46",
  aqua: "#22d3ee",
  lofi: "#94a3b8",
  pastel: "#f9a8d4",
  fantasy: "#a78bfa",
  wireframe: "#64748b",
  black: "#020617",
  luxury: "#ca8a04",
  dracula: "#7c3aed"
};

type Theme = (typeof THEMES)[number];

function isTheme(value: string | null): value is Theme {
  return value !== null && THEMES.includes(value as Theme);
}

function getStoredTheme(): Theme | null {
  try {
    const t = localStorage.getItem("cw:theme");
    return isTheme(t) ? t : null;
  } catch {
    return null;
  }
}

function getPreferredTheme(): Theme {
  try {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return "light";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

function toDisplayName(theme: Theme): string {
  return theme.charAt(0).toUpperCase() + theme.slice(1);
}

export default function ThemeToggler() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof window === "undefined" ? "light" : (getStoredTheme() ?? getPreferredTheme())
  );
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("cw:theme", theme);
    } catch {
      // Ignore storage errors in restricted environments.
    }
  }, [theme]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!root.current) {
        return;
      }
      if (!root.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex h-11 items-center gap-3 rounded-xl border border-secondary bg-base-100 px-3.5 text-primary-content shadow-lg backdrop-blur-md transition-colors hover:border-primary/50 hover:bg-base-100/35"
        onClick={() => setOpen((v) => !v)}>
        <span
          aria-hidden
          className="h-3 w-3 rounded-full ring-2 ring-base-content/30"
          style={{ backgroundColor: THEME_SWATCHES[theme] }}
        />
        <span className="flex flex-1 items-center justify-center text-base-content">
          <span className="font-body text-sm normal-case leading-none">{toDisplayName(theme)}</span>
        </span>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-3 w-72">
          <div className="rounded-2xl border border-base-300/20 bg-base-100/95 p-2 shadow-2xl backdrop-blur-xl">
            <div className="mb-2 px-3 pb-2 pt-1">
              <p className="font-display text-xs uppercase tracking-[0.16em] text-secondary">Appearance</p>
            </div>

            <div className="grid max-h-80 grid-cols-1 gap-1 overflow-y-auto p-2">
              {THEMES.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={[
                    "group flex items-center justify-between rounded-xl px-3 py-2 text-left transition-colors",
                    t === theme
                      ? "bg-gradient-to-r from-primary/15 to-info/15 ring-1 ring-primary-400/35"
                      : "hover:bg-base-200/80"
                  ].join(" ")}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setTheme(t);
                    setOpen(false);
                  }}>
                  <span className="flex items-center gap-2.5">
                    <span
                      aria-hidden
                      className="h-3 w-3 rounded-full ring-1 ring-base-100/30"
                      style={{ backgroundColor: THEME_SWATCHES[t] }}
                    />
                    <span className="font-body text-sm text-base-content">{toDisplayName(t)}</span>
                  </span>

                  <span
                    className={[
                      "text-xs transition-opacity inset-4",
                      t === theme
                        ? "opacity-100 text-cyan-300"
                        : "opacity-0 group-hover:opacity-60 text-primary-content"
                    ].join(" ")}
                    aria-hidden>
                    {t === theme ? "Selected" : "Apply"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
