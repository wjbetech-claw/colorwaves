CI — lightweight quality gates

Goals
- Fast, clear, and low-maintenance checks
- Catch basic breakage before merging

Checks
- install dependencies (npm ci)
- typecheck (tsc --noEmit)
- build (vite build)
- lint (if configured)

Approach
- Put checks in a single workflow that runs on PRs and pushes to non-main branches
- Keep the job simple and parallel where sensible

Optional
- Add cache for node_modules and build outputs to speed CI
- Add a small deploy step on merges to main (optional)
