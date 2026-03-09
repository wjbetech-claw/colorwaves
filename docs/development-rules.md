Development rules — Colorwaves

Coding style
- TypeScript strictness: enable strict mode
- No "any" unless justified and documented; prefer explicit types
- Small components: max ~200 lines; split when logical

Dependencies
- Minimal external dependencies; prefer browser APIs
- Tailwind + daisyUI allowed; avoid other UI libraries
- Every dependency must have a clear, current justification in the PR body

Testing & quality
- Start with typecheck and build as quality gates
- Add tests only when they provide clear, immediate value

Refactors
- Keep changes small and reversible
- When refactoring, add a short note in the PR about why it reduces complexity or improves clarity

Commits
- Use conventional commits (chore/, feat/, fix/, docs/, refactor/)
- One logical change per commit

PRs
- Include: what changed, why, how to validate, follow-ups
- Small PRs preferred for fast reviews

Local tooling
- Provide simple npm scripts: dev, build, typecheck, lint

Self-check questions before opening a PR
- Is this the smallest implementation that satisfies the requirement?
- Does it add unnecessary dependency or complexity?
- Would a reviewer be able to understand and validate the change quickly?
