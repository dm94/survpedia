import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const elements = defineCollection({
  loader: glob({ base: './src/content/elements', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(), // Name of the element (e.g., Hydrogen)
    symbol: z.string(),
    atomicNumber: z.number(),
    atomicMass: z.number(),
    category: z.string(),
    naturalAvailability: z.boolean(),
    extractionProcess: z.string().optional(),
    image: image().optional(),
    aiGenerated: z.boolean().optional().default(true),
  }),
});

const materials = defineCollection({
  loader: glob({ base: './src/content/materials', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(), // Name of the material (e.g., Water)
    formula: z.string().optional(),
    composition: z.array(z.string()).optional(), // List of element IDs (e.g., ['hydrogen', 'oxygen'])
    properties: z.array(z.string()),
    uses: z.array(z.string()),
    naturalAvailability: z.boolean(),
    manufacturingProcess: z.string().optional(),
    image: image().optional(),
    category: z.enum(['mineral', 'plant', 'animal', 'synthetic', 'other']),
    aiGenerated: z.boolean().optional().default(true),
  }),
});

const inventions = defineCollection({
  loader: glob({ base: './src/content/inventions', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(), // Name of the invention (e.g., Steam Engine)
    materialsUsed: z.array(z.string()), // List of material IDs
    image: image().optional(),
    aiGenerated: z.boolean().optional().default(true),
  }),
});

const knowledge = defineCollection({
  loader: glob({ base: './src/content/knowledge', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    relatedMaterials: z.array(z.string()).optional(),
    relatedInventions: z.array(z.string()).optional(),
    image: image().optional(),
    aiGenerated: z.boolean().optional().default(true),
  }),
});

export const collections = {
  elements,
  materials,
  inventions,
  knowledge,
};
