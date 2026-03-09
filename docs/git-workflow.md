Git workflow — Colorwaves

Branching
- Never push to main directly
- Create short-lived feature branches with clear names:
  - chore/project-setup
  - docs/initial-guidelines
  - feat/sound-cards-ui
  - feat/audio-preview

Commits
- Use conventional commit prefixes: feat/, fix/, chore/, docs/
- Keep commits focused and small

PRs
- Title: use conventional-type: short summary
- Body must include:
  - What changed
  - Why it changed
  - How to validate (commands, steps)
  - Any follow-ups or known limitations

Merging
- Prefer squash merges for small, focused PRs
- Ensure CI passes (typecheck/build/lint) before merging
- Assign at least one reviewer for non-trivial changes

Release
- Tag releases manually when a stable milestone is reached

Example flow
- git checkout -b feat/audio-preview
- implement changes, run local checks
- git commit -m "feat: add basic audio preview component"
- push branch and open a PR
