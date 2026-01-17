import { defineCollection, z } from 'astro:content';

const elements = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(), // Name of the element (e.g., Hydrogen)
    symbol: z.string(),
    atomicNumber: z.number(),
    atomicMass: z.number(),
    category: z.string(),
    naturalAvailability: z.boolean(),
    extractionProcess: z.string().optional(),
    image: image().optional(),
  }),
});

const materials = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(), // Name of the material (e.g., Water)
    formula: z.string().optional(),
    composition: z.array(z.string()).optional(), // List of element IDs (e.g., ['hydrogen', 'oxygen'])
    properties: z.array(z.string()),
    uses: z.array(z.string()),
    naturalAvailability: z.boolean(),
    manufacturingProcess: z.string().optional(),
    image: image().optional(),
  }),
});

const inventions = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(), // Name of the invention (e.g., Steam Engine)
    inventor: z.string().optional(),
    year: z.union([z.number(), z.string()]).optional(),
    materialsUsed: z.array(z.string()), // List of material IDs
    image: image().optional(),
  }),
});

export const collections = {
  elements,
  materials,
  inventions,
};
