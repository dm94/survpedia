# AGENTS.md

## Project Overview

Survpedia is an educational website built with Astro, documenting periodic elements, inventions, and materials. It supports multiple languages (English and Spanish).

## Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown/MDX (in `src/content`)
- **Search**: Pagefind
- **Package Manager**: pnpm

## Setup & Commands

- **Install dependencies**: `pnpm install`
- **Start dev server**: `pnpm dev` (Runs on http://localhost:4321)
- **Build for production**: `pnpm build` (Includes Pagefind indexing)
- **Preview build**: `pnpm preview`

## Project Structure

- `src/content/`: Content collections (elements, inventions, materials) organized by language (`en`, `es`).
- `src/pages/[lang]/`: Dynamic routes for localized content.
- `src/components/`: Reusable Astro components.
- `src/i18n/`: Internationalization utilities and translation strings.
- `src/layouts/`: Astro layouts.

## Code Style & Conventions

- **Clean Code**: Follow Clean Code principles.
- **Language**: Use English for comments and variable names.
- **Loops**: Prefer `for...of` loops over `forEach`.
- **Nullish Coalescing**: Prefer `??` over `||` for safety.
- **Imports**: Use standard ESM imports.
- **Formatting**: Code should be formatted with Prettier.
- **Linting**: Ensure no ESLint errors.

## Content Management

- Content is stored in `src/content/{collection}/{lang}/*.md`.
- **Templates**: To facilitate the creation of new content, use the templates located in `src/content/_templates`. These files provide the necessary structure and frontmatter for:
  - Elements: `src/content/_templates/en/element.md`
  - Inventions: `src/content/_templates/en/invention.md`
  - Materials: `src/content/_templates/en/material.md`
- New content files should follow the schema defined in `src/content/config.ts`.
- Always ensure translations exist for both English (`en`) and Spanish (`es`) if possible, or handle missing translations gracefully.

## Internationalization (i18n)

- The project uses a path-based routing strategy (`/[lang]/...`).
- Translations for UI elements are in `src/i18n/translations/`.
- Helper functions for i18n are in `src/i18n/utils.ts`.
