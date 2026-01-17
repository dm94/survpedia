// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://survpedia.deeme.dev',
  integrations: [tailwind(), mdx()],
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    formats: ['webp', 'avif'],
    quality: 80,
  },
});
