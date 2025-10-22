<!--
Short, actionable instructions for AI coding agents working on this repository.
Keep this file concise (20-50 lines). Reference real files and concrete commands.
-->

# Copilot instructions for 3DPortofolio

This repo is a small monorepo-like layout with a single Vite + React app under `react/`.
Keep changes small, local, and reproducible. Below are the essential things an AI agent needs to know to be productive.

- Project entry points
  - Frontend: `react/src/main.tsx` -> `react/src/App.tsx`. Vite serves the app using `react/index.html`.
  - Build: `react/scripts` in `react/package.json` (see scripts section below).

- Important scripts (run from `react/`)
  - dev: `pnpm --filter ./react dev` or from inside `react/` folder run `pnpm dev` (runs `vite` with HMR).
  - build: `pnpm --filter ./react build` or `pnpm build` inside `react/` (runs `tsc -b && vite build`).
  - lint: `pnpm --filter ./react lint` (runs `eslint .`).
  - preview: `pnpm --filter ./react preview` (runs `vite preview`).

- Key tooling/config
  - Vite config: `react/vite.config.ts` uses `@vitejs/plugin-react-swc` (SWC-based fast refresh).
  - TypeScript: `react/tsconfig.app.json` and `react/tsconfig.node.json` — this project uses strict TS config and `noEmit` for sources; builds call `tsc -b` first.
  - Styling: `tailwind.config.js` + `postcss.config.js` are present at repo root. Tailwind content is empty by default — add globs if you add CSS utility usage outside `react/src`.

- Conventions and patterns to follow (discoverable from the codebase)
  - Keep UI code inside `react/src/`. Small components live next to their styles/assets (see `react/src/assets/*.svg`).
  - Use modern React APIs: functional components + hooks (example: `useState` in `react/src/App.tsx`).
  - Import CSS from entry points (see `react/src/main.tsx` importing `index.css`).
  - Type-checking: code assumes strict TypeScript; prefer explicit types on exported props and functions.

- Integration/external dependencies
  - Uses React 19 and Vite 7 with SWC plugin. No backend/service code discovered in this workspace.
  - Package managers: repo contains `pnpm-lock.yaml` and also `package-lock.json` in the `react/` folder; prefer `pnpm` for workspace scripts if present.

- Examples of actionable edits
  - To add a new component: create `react/src/components/MyComponent.tsx`, export default, update `react/src/App.tsx` to import it, run `pnpm dev` to verify HMR.
  - To add Tailwind classes: update `tailwind.config.js` content globs to include `react/src/**/*.{ts,tsx,css}` and rebuild dev server.

- What not to change without confirmation
  - Do not replace `vite` with another bundler or remove `tsc -b` from `build` without explicit instruction — TypeScript build step is intentional.
  - Don't modify root `package.json` React versions unless bumping the entire workspace — changes in `react/package.json` are isolated.

If anything above is unclear or you want me to expand specific sections (tests, E2E, deployment), tell me which area to iterate on.
