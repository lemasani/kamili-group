# Kamili Group Website - AI Coding Instructions

## Architecture Overview

This is a React 19 + TypeScript SPA built with Vite 6, using client-side routing for a construction company website. Key architectural patterns:

- **Blocks-based pages**: Top-level pages are in `src/Blocks/` (Home, About, Services, etc.)
- **MDX-powered portfolio**: Projects are authored as MDX files in `src/data/Projects/` and loaded via `import.meta.glob`
- **Centralized data**: All content lives in `src/data/` files, not hardcoded in components
- **Design system**: Tailwind CSS v4 with centralized tokens in `src/index.css` + shadcn/ui components in `src/components/ui/`

## Critical Development Workflows

### Build & Development

```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # TypeScript check + SEO generation + production build
npm run build:seo    # Generate SEO files (sitemap.xml, robots.txt) then build
```

### SEO Generation

SEO files are auto-generated during build via `scripts/generate-seo.js`. The script creates:

- `public/sitemap.xml` from page definitions in the script
- `public/robots.txt` with crawl directives
- Updates `public/site.webmanifest` for PWA support

Always run `npm run build` (not just `vite build`) to ensure SEO files are current.

## Project-Specific Patterns

### MDX Project System

Projects use a specialized loader pattern in `src/lib/Projectloader.ts`:

```typescript
// Auto-loads all .mdx files from src/data/Projects/
const mdxModules = import.meta.glob("/src/data/Projects/*.mdx", {
  eager: true,
});
```

**Adding new projects:**

1. Create `src/data/Projects/project-name.mdx` with frontmatter:
   ```yaml
   ---
   title: "Project Title"
   slug: "project-slug" # Must be unique
   date: "2023-01-01"
   description: "Brief description"
   thumbnail: "https://..."
   category: "Residential" # Optional
   location: "City, Country" # Optional
   ---
   ```
2. Projects automatically appear in listing and are routable at `/projects/:slug`

### Animation System

Animations use Framer Motion with shared variants in `src/lib/animationVariants.ts`:

- `fadeInUp`, `fadeInLeft`, `fadeInRight` - common entrance animations
- `staggerContainer` - for sequential child animations
- `pageTransitions` - page transition effects (slideLeft, scaleUp, reveal, etc.)
- Navigation-specific variants: `navbarVariants`, `mobileMenuVariants`

**Usage pattern:**

```tsx
import { fadeInUp, staggerContainer } from "@/lib/animationVariants";
<motion.div variants={staggerContainer} initial="initial" animate="animate">
  <motion.div variants={fadeInUp}>Content</motion.div>
</motion.div>;
```

### Design Token System

Colors and tokens are defined as CSS custom properties in `src/index.css` and mapped to Tailwind via `@theme inline`.

**Key tokens:**

- `--primary` / `--secondary` - brand colors
- `--font-sans`, `--font-serif`, `--font-mono` - typography scale
- Dark mode variants automatically handled via `.dark` class

**Never hardcode colors** - always use semantic tokens like `text-primary`, `bg-secondary`.

### SEO Integration

SEO is handled via `useSEO()` hook in `src/hooks/useSEO.ts`:

- Page-specific SEO data defined in `src/lib/seo.ts`
- Automatic structured data injection (business info, page-specific schemas)
- Dynamic meta tag updates on route changes
- Called in `App.tsx` for global SEO initialization

### Data-Driven Content

All content is externalized to `src/data/` files:

- `navLinks.ts` - navigation structure
- `services.ts` - service offerings
- `teamData.ts`, `Stats.ts`, `homedata.ts` - page content
- Components consume these via imports, never hardcode content

## Integration Points

### MDX Processing Pipeline

1. Vite MDX plugin (`@mdx-js/rollup`) processes `.mdx` files
2. `remark-frontmatter` + `remark-mdx-frontmatter` extract metadata
3. `src/components/MDXContent.tsx` provides styled component mapping
4. Custom `Image` component handles responsive images in MDX

### Path Aliases

- `@` maps to `./src` (configured in `vite.config.ts` and `tsconfig.json`)
- Always use `@/` imports for internal modules

### External Dependencies

- **Cloudinary**: Image hosting (URLs in project thumbnails)
- **Tailwind CSS v4**: Via `@tailwindcss/vite` plugin (not PostCSS)
- **Framer Motion**: Animation library with motion components
- **React Router v7**: Client-side routing with BrowserRouter

## Common Pitfalls

1. **SEO files**: Always run `npm run build` not `vite build` directly
2. **MDX frontmatter**: `slug` field must be unique across all projects
3. **Path imports**: Use absolute paths with `@/` alias, not relative imports
4. **Animation variants**: Reuse existing variants from `animationVariants.ts` for consistency
5. **Content updates**: Modify data files in `src/data/`, not component JSX
6. **Image references**: Use `/image.png` absolute paths for public assets

## Key Files to Reference

- `src/lib/Projectloader.ts` - MDX loading pattern
- `src/components/MDXContent.tsx` - MDX styling system
- `src/lib/animationVariants.ts` - Animation patterns
- `src/index.css` - Design token definitions
- `scripts/generate-seo.js` - SEO file generation logic
