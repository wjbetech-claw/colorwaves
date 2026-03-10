import { useEffect, useState } from "react";

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

type Theme = (typeof THEMES)[number];

function isTheme(value: string | null): value is Theme {
  return value !== null && THEMES.includes(value as Theme);
}

function getStoredTheme(): Theme | null {
  try {
    const storedTheme = localStorage.getItem("cw:theme");
    return isTheme(storedTheme) ? storedTheme : null;
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

export default function ThemeToggler() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return getStoredTheme() ?? getPreferredTheme();
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("cw:theme", theme);
    } catch {
      // Ignore storage access failures in restricted environments.
    }
  }, [theme]);

  return (
    <div className="dropdown dropdown-end">
      <button type="button" tabIndex={0} className="btn btn-ghost" aria-label="Theme chooser">
        Theme
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box bg-base-100 p-2 shadow max-h-72 overflow-auto flex flex-col gap-1 w-52 whitespace-normal">
        {THEMES.map((item) => (
          <li key={item} className="w-full">
            <button
              type="button"
              className={`block w-full rounded px-2 py-1 text-left ${item === theme ? "bg-base-200 font-semibold" : ""}`}
              onMouseDown={(event) => {
                event.preventDefault();
                setTheme(item);
              }}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
