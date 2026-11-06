# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary reader: someone rebuilding practical capability when supply chains, shops, or reliable infrastructure are not available. They arrive with a goal ("I need metal, glass, soap, a bearing, a way to preserve food") and need to know what has to exist before that goal is reachable.

Confirmed by the project owner. Not yet established: whether a secondary audience (students, makers with tools on hand, educators) should shape decisions. Do not design for them without asking.

## Product Purpose

Survpedia is a technological survival manual codex: a structured reference of elements, materials, inventions, and supporting knowledge that lets a reader work from raw substance to a finished, useful object.

Success means a reader can enter at any point — an element, a material, an invention — and follow the chain of prerequisites until they know what to gather, what to process, and what to build.

## Positioning

The four collections are not parallel encyclopedias; they are one dependency chain, and the content schema encodes it: a material lists the elements it is `composition` of, an invention lists the `materialsUsed` to build it, and knowledge articles declare `relatedMaterials` and `relatedInventions`. A neighboring reference can copy the articles but not the claim that this material is step three of building that object.

That chain is the product. Any surface that presents entries as isolated facts works against it.

## Operating Context

- Static Astro build (`pnpm build` → `dist`, then a Pagefind index over the output); no server, no accounts, no per-user state.
- Path-based locales (`/en/…`, `/es/…`, English is the default and is prefixed); every page carries `hreflang` alternates.
- Search is Pagefind, loaded from the built `/pagefind/` assets and only functional in a production build.
- Theme is class-based dark mode, defaulting to the OS preference and persisted in `localStorage`.
- Deployed on Vercel, with image hotlink protection implemented as Vercel firewall rules documented in `README.md` (not in code).

## Capabilities and Constraints

- Four content collections, each localized by a `{lang}/` prefix inside the collection: `elements` (symbol, atomic number, mass, category, natural availability, extraction process), `materials` (`formula`, `composition`, `properties`, `uses`, category enum), `inventions` (`materialsUsed`), `knowledge` (related materials, related inventions).
- Current corpus: 119 elements, 210–211 materials, 533–543 inventions, 108 knowledge articles, in both `en` and `es`.
- Images are optional per entry and are preferred to be absent rather than placeholder; `astro:assets` serves them as WebP/AVIF at quality 80.
- All content frontmatter defaults `aiGenerated` to `true`, and detail pages render a visible "Generated with AI" badge accordingly.
- Locale switching resolves translated slugs (materials such as `cal`/`lime`, `arena`/`sand`) and falls back to the collection index rather than a dead link.
- Undecided: no confirmed presentation of a reader's progress along a build chain (a "what do I need first" view does not exist yet); whether entries should expose prerequisite ordering beyond frontmatter links is open.

## Brand Commitments

- Name: **Survpedia**. Descriptor used in UI copy: "technological survival manual codex" / "manual tecnológico de supervivencia".
- Voice: second-person instructional and declarative, matching the existing EN and ES strings ("Learn how to process them", "Step-by-step guides"). Spanish is a real translation, not a machine fallback.
- The "Generated with AI" label on entries is a commitment to the reader about provenance and must remain visible wherever an AI-generated entry is presented.
- The project is described to readers as a community project open to contribution; the 404 page invites contributions instead of dead-ending.

## Evidence on Hand

- Structured content in `src/content/{collection}/{lang}/`, with authoring templates in `src/content/_templates/en/`.
- UI copy in `src/i18n/translations/{en,es}.ts`; canonical, OG, and JSON-LD metadata generated per page.
- Real corpus breadth (roughly 970 entries per language) is the main proof the product works.
- Absences future work must not fill by invention: no testimonials, no press, no benchmarks, no user counts, no pricing, no licensing page, no customer logos, and photographs only where a contributor supplied one.

## Product Principles

1. **The chain outranks the entry.** Every page should leave a reader knowing what comes before and after it in the path to a finished object.
2. **Actionable over encyclopedic.** A description earns its place by helping someone do something; a fact that cannot be acted on is secondary.
3. **Prerequisites are never hidden.** If a step needs a material, a tool, or a process the reader does not have, the page says so.
4. **Breadth is the asset; disclosure is the price.** The AI-generated label stays visible, and claims stay checkable rather than merely plausible.
5. **Two real languages, one structure.** English and Spanish are equals; missing translations degrade to the collection index, never to a broken page.
