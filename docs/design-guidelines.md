Design guidelines — Colorwaves

Visual principles
- Minimal and calm: generous whitespace, limited palette, restrained typography
- Modern and polished: use system fonts for speed, subtle elevation for cards
- Mobile-first responsive layout

Spacing & typography
- Use a clear vertical rhythm (e.g., 8px baseline scale)
- Strong hierarchy: large heading on the landing, smaller section headings, concise body copy

Color
- Use neutral background (off-white) with a single accent color for controls and highlights
- Avoid high-contrast saturated palettes; the app is about sound, so visuals should be supportive not loud

Components
- Cards: concise title, one-line definition, short description, small play button
- Buttons: medium size, clear labels/icon and accessible hit target (>=44px)
- Controls: visible focus rings, ARIA labels, respects prefers-reduced-motion

daisyUI usage
- Use daisyUI components sparingly — base utility via Tailwind + a few daisyUI classes for consistent buttons/cards
- Do not rely on theme overrides; pick a neutral theme and apply small token overrides as needed

Accessibility
- Keyboard-first: all actionable controls reachable by keyboard
- Semantic HTML for content (headings, lists, buttons)
- Ensure color contrast meets WCAG AA for text

Micro-interactions
- Subtle transitions only (fade/scale 120ms–200ms)
- Respect reduced-motion preference
