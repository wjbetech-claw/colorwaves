Architecture — Colorwaves

Goal
- Keep the project intentionally small, front-end only, and easy to reason about.

High-level structure
- /src
  - main.tsx — app bootstrap
  - App.tsx — top-level layout and routing (kept minimal)
  - components/ — small, focused presentational components (SoundCard, Header, Footer)
  - lib/ — tiny utilities (types, audio helpers)
  - data/ — seeded sound color definitions
- /public — static assets (icons, small audio samples if needed)
- /docs — project documentation

Why this stays minimal
- Single-page, static-site approach (Vite) reduces runtime complexity and hosting needs
- No backend: audio previews use Web Audio API or generated buffers in the browser
- Small component surface area — composition over abstraction

Routing
- Minimal routing: keep the app single-page. Use in-page expansion or modal for details instead of heavy routing.

Build & deploy
- Vite build produces static assets suitable for GitHub Pages, Netlify, or other static hosts.

Notes
- If future requirements demand deep pages or sharing, add a lightweight router and a single server-side render step. For MVP, avoid it.
