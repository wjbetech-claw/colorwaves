Project Plan — Colorwaves

Purpose
- Build a minimal, elegant web app (Vite + TypeScript + Tailwind + daisyUI) that explains and lets users preview "sound colors" (white, pink, brown noise, etc.).

Scope (MVP)
- Landing/header area introducing the app
- A concise grid/list of sound colors
- Each item: name, short definition, tone/character, common uses, small preview control
- Lightweight detail/expanded view for more info
- Responsive, accessible UI

Phases

Phase 1 — Foundation (this branch)
- Verify repo and create disciplined workspace
- Add docs/ with core documentation (overview, plan, architecture, design guidelines, development rules, git workflow, CI)
- Add minimal CI: install deps, typecheck, build, lint
- Configure Tailwind + daisyUI (post-setup tasks in Phase 2 if adding full app requires it)

Phase 2 — Product scaffold
- Create Vite + TypeScript app structure (src, main.tsx, App component)
- Add Tailwind and daisyUI config, base styles
- Add SoundColor model and seed data (small curated set)
- Build SoundCard component and landing layout

Phase 3 — Interaction
- Add expandable detail or modal for each sound
- Implement simple playback using browser Web Audio API or AudioBufferSource for generated noise
- Accessibility: keyboard focus states, ARIA labels, reduced-motion respect

Phase 4 — Polish
- Refine spacing, typography, color palette
- Audit for dead code and simplify
- Finalize CI, ensure typecheck/build/lint pass
- Prepare release notes and merge to main

Branching & PRs
- Work in focused branches (e.g., chore/project-setup, feat/sound-cards-ui)
- Small commits, conventional messages
- PRs describe what/why/how to validate

Validation & Acceptance Criteria (for MVP)
- App builds without errors (vite build)
- TypeScript typecheck passes
- Lint passes (if configured)
- UI presents at least 4 seeded sound colors with definitions and a playable preview
- Mobile and keyboard accessible basics verified

Next smallest step (after this doc)
- Configure Tailwind + daisyUI in the repo and commit (Phase 1 continuation)

Notes
- Keep code minimal and typed
- Avoid adding third-party state libraries or backend services
- Prefer composability and clarity over cleverness

