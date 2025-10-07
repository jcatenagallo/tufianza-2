# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5 landing page for a rental guarantee service ("Garantía de Alquiler") in Argentina. The site is built with the App Router, TypeScript, and Tailwind CSS v4, targeting users who need a rental guarantor without owning property.

## Development Commands

```bash
# Development server (default: http://localhost:3000)
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

## Architecture & Structure

### Tech Stack
- **Next.js 15.5** with App Router (`app/` directory)
- **React 19.1** (latest)
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS v4** via `@tailwindcss/postcss` plugin
- **Radix UI** components (accordion, dialog, tooltip, etc.)
- **Framer Motion** for animations
- **Geist** font family (Sans & Mono)

### Path Aliasing
Use `@/` to import from the project root:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

### Component Organization
- `app/` - Next.js App Router pages and layouts
- `components/` - React components
  - `ui/` - Reusable UI components (buttons, cards, etc.)
  - `ui/shadcn-io/` - Special shadcn.io components
  - Top-level section components (hero-section, footer, etc.)

### Styling
- **Tailwind v4** with custom CSS variables in `app/globals.css`
- Color system uses **oklch** color space for better perceptual uniformity
- Custom theme variables:
  - Primary: Bright blue (`--primary`)
  - Accent: Coral/orange (`--accent`)
  - Supports dark mode via `.dark` class
- Use `cn()` utility from `lib/utils.ts` to merge className strings

### Page Structure
The homepage (`app/page.tsx`) is a single-page layout composed of sections:
1. HeroSection
2. ValuePropositions
3. ProcessSection
4. BenefitsSection
5. TestimonialsSection
6. CTASection
7. Footer

### Spanish Language
All content is in Spanish (Argentina). The site targets local rental market users.

### Analytics
Vercel Analytics is integrated via `@vercel/analytics/next` in the layout.

## Key Files

- `app/layout.tsx` - Root layout with Geist fonts and Analytics
- `app/globals.css` - Tailwind imports and custom theme variables
- `postcss.config.mjs` - PostCSS configuration for Tailwind v4
- `lib/utils.ts` - Utility functions (mainly `cn()` for className merging)

## TypeScript Configuration

- Target: ES2017
- Module resolution: bundler (Next.js bundler)
- Strict mode enabled
- Path alias: `@/*` maps to project root
