# Colorwaves

Minimal, elegant explorer for "sound colors" — white, pink, brown noise and friends.

This repository is intentionally small and front-end only. See /docs for project plans and guidelines.

Getting started

1. Install
   npm ci

2. Dev
   npm run dev

3. Build
   npm run build

Goals
- Minimal UI for exploring and previewing sound colors
- Vite + TypeScript + Tailwind CSS + daisyUI
- Accessibility and careful design

Contributing
- Follow the docs in /docs
- Create focused branches and open small PRs

License
- MIT (add a LICENSE file in a follow-up change)


Design tokens (quick reference)

- File: src/styles/tokens.css

Example tokens:
```
:root{
  --color-bg: #ffffff;
  --color-panel: #ffffff;
  --color-text: #0f172a;
  --color-primary-500: #6366f1;
  --color-border: #e6e9ef;
}

html[data-theme='dark']{
  --color-bg: #0b1220;
  --color-text: #e6eef8;
}
```

Usage
- Use CSS variables directly in small custom styles, or reference them in utility classes.
- Example: class="bg-[var(--color-panel)] text-[var(--color-text)]"

