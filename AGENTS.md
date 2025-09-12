# AGENTS.md

This file provides guidance to Claude Code, GitHub Copilot, OpenAI Codex and other AI coding agents when working with code in this repository.

## Development Commands

All commands should be run from the root of the project:

- `npm install` - Install dependencies
- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview build locally before deploying
- `npm run astro ...` - Run Astro CLI commands (e.g., `npm run astro add`, `npm run astro check`)

**Important:** Do not run `npm run dev` or start the development server automatically. The user will handle running the server themselves.

## Project Architecture

This is an Astro-based website for SuperPlane using the minimal starter template.

**Framework:** Astro v5 with TypeScript support (strict mode)
**Structure:**

- `src/pages/` - Route-based pages (_.astro, _.md files become routes)
- `src/layouts/` - Layout components and assets
- `public/` - Static assets served directly
- `dist/` - Build output directory

**Key Files:**

- `src/pages/index.astro` - Homepage with SuperPlane branding
- `astro.config.mjs` - Astro configuration (currently minimal)
- `tsconfig.json` - Extends Astro's strict TypeScript config

**Routing:** File-based routing where each file in `src/pages/` becomes a route based on its filename.
