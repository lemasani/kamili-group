# Kamili Group — Web Site Documentation

This repository contains the Kamili Group website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. This document explains how the project is structured, how to run and develop it, how to add new content (including MDX-based project pages), and maintenance guidelines to keep the project healthy.


## Quick Start
- Requirements: Node.js 18+ and npm 9+ recommended.
- Install dependencies: `npm install`
- Start the dev server: `npm run dev` (opens at http://localhost:5173 by default)
- Lint the code: `npm run lint`
- Build for production: `npm run build`
- Preview the production build locally: `npm run preview`

Scripts are defined in package.json.


## Tech Stack
- React 19 + TypeScript
- Vite 6 (development/build tooling)
- Tailwind CSS v4 (via @tailwindcss/vite) for styling with design tokens
- Framer Motion for animations and page transitions
- React Router DOM v7 for client-side routing
- MDX (with remark frontmatter) for project content in the portfolio
- shadcn/ui-inspired primitives in src/components/ui


## Project Structure
Top-level important files and folders:
- index.html — Vite entry HTML
- src/ — application source code
  - App.tsx — registers routes
  - main.tsx — app bootstrap
  - index.css — Tailwind config and CSS tokens
  - layout/RootLayout.tsx — base layout with Navbar + Footer and main container
  - Blocks/ — page blocks (top-level pages and larger sections)
    - Home.tsx, About.tsx, Services.tsx, Contact.tsx, Team.tsx, NotFound.tsx
    - Project/ — Project listing and details pages
  - components/ — reusable components
    - Navbar.tsx, Footer (in Blocks), Cards/, Sections/, PageTransitions/, ui/
  - data/ — content and configuration objects
    - navLinks.ts, services.ts, teamData.ts, Stats.ts, aboutData.ts, homedata.ts, contactInfo.ts, Image.ts
    - Projects/ — MDX files for individual projects
  - lib/ — helpers and loaders
    - Projectloader.ts — loads MDX project pages using import.meta.glob
    - animationVariants.ts — shared framer-motion variants
- public/ — static assets served at site root
- vite.config.ts — Vite plugins and path aliases
- vercel.json — deployment configuration for Vercel

Path alias: `@` → `./src` (see vite.config.ts and tsconfig.json).


## Routing and Layout
- The app uses BrowserRouter in src/App.tsx. Routes include:
  - `/` → Home
  - `/about` → About
  - `/services` → Services
  - `/projects` → Project listing
  - `/projects/:slug` → Project details (renders an MDX file)
  - `/core-values`, `/team`, `/contact`, `*` → NotFound
- Root layout (src/layout/RootLayout.tsx) wraps all pages and includes Navbar and Footer.
- Page transition HOC (src/components/PageTransitions/TransitionWrapper.tsx) wraps pages for animated transitions.


## Styling and Design System
- Tailwind CSS v4 is configured via `@tailwindcss/vite`. Tokens (colors, radii, shadows, fonts) are defined as CSS custom properties in src/index.css. They’re mapped to Tailwind theme variables using `@theme inline`.
- Global utilities and base styles are applied via `@layer base`.
- Prefer utility-first styling; use components in src/components/ui for consistent primitives (Button, Card, Badge, Input, etc.).
- Primary/secondary brand colors are exposed via CSS vars: `--primary`, `--secondary`, etc. Update them centrally in src/index.css if branding changes.


## Animations
- Shared motion variants are in src/lib/animationVariants.ts (e.g., fadeInUp, staggerContainer, navbar variants).
- Page transitions use withPageTransition HOC (TransitionWrapper.tsx) and AnimatePresence in App.tsx.


## Content and Data
- Navigation items and footer links: src/data/navLinks.ts
- Services, team, stats, and home page content live under src/data/* files.
- Images: mix of public/ assets (e.g., /logo.png) and external URLs (see src/data/Image.ts). Prefer placing brand assets in public/.


## Portfolio Projects via MDX
Projects are authored in MDX files inside src/data/Projects. They are loaded eagerly via import.meta.glob in src/lib/Projectloader.ts and displayed in:
- Listing: src/Blocks/Project/ProjectListing.tsx
- Details: src/Blocks/Project/ProjectDetails.tsx (renders MDX through MDXContent provider)

Each MDX file should include frontmatter with at least title, slug, date, description, and thumbnail. Optional fields include category and location.

Example frontmatter:
---
Title: Example Project
slug: example-project
date: 2025-01-10
description: Short summary of the project.
thumbnail: https://example.com/image.jpg
category: Residential
location: Arusha, Tanzania
---

Inside the MDX content you can use standard markdown plus images. Images are wrapped via a custom MDX Image component for consistent styling.

Steps to add a new project:
1. Create a file under src/data/Projects/my-new-project.mdx.
2. Add frontmatter with the fields above.
3. Add your markdown content and images.
4. Start the dev server; the project will automatically appear in the listing at /projects and at /projects/my-new-project.


## Adding a New Page/Route
1. Create a new block under src/Blocks, e.g., src/Blocks/CoreValues.tsx.
2. Optionally wrap with the page transition HOC: `const CoreValues = withPageTransition(Component)`.
3. Register the route in src/App.tsx.
4. Add a nav link in src/data/navLinks.ts if it should appear in the Navbar.


## Components Overview
- components/ui/*: UI primitives (Button, Card, Badge, inputs) used throughout.
- components/Cards/*: Higher-level card components for services, stats, testimonials, projects.
- components/Sections/*: Section composites (ServicesSection, StatsSection, ClientSliderSection, ContactSection, TeamSection).
- components/PageTransitions/*: Transition HOC and any transition helpers.
- components/MDXContent.tsx: MDX provider mapping tags (h1-h4, p, img, blockquote, code, etc.) to styled components.


## Development Guidelines
- TypeScript: keep components typed; export prop interfaces where useful.
- Styling: prefer Tailwind utilities; keep consistency with colors and spacing tokens defined in index.css.
- Animations: re-use variants from lib/animationVariants.ts; keep durations and easings consistent.
- Data: store configurable content in src/data; avoid hardcoding in components where possible.
- Images: place brand/static assets in public/ and reference with absolute paths (/logo.png). For remote images, include alt text and reasonable sizes.


## Linting and Code Quality
- Run `npm run lint` before commits/PRs.
- ESLint is configured via eslint.config.js with TypeScript and React plugins.


## Building and Deployment
- Build: `npm run build` outputs to dist/.
- Preview locally: `npm run preview`.
- Deployment: vercel.json is included; the app is suitable for Vercel deployment. Connect the repository in Vercel, set the build command to `npm run build`, and output directory to `dist`.


## Troubleshooting
- MDX project not showing: ensure the file is under src/data/Projects and has a unique slug in frontmatter.
- Broken imports with @ alias: confirm alias in vite.config.ts and tsconfig.json matches `@ → ./src`.
- Styles not applying: check that src/index.css is imported in main.tsx and that the Tailwind plugin is active in vite.config.ts.
- Images not loading from public/: reference with `/image-name.png` absolute path.


## Maintenance Checklist
- Keep dependencies updated (especially Vite, React, Tailwind, Framer Motion, MDX; see package.json).
- Centralize branding updates in src/index.css (color tokens) and public/ assets (logos, icons).
- When adding new Sections or Cards, follow established patterns for props and animations.
- Review navLinks.ts when routes change.
- Validate MDX frontmatter fields to avoid missing thumbnails or broken routes.


## License
Private project for Kamili Group. All rights reserved.
