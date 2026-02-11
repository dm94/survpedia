// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import autoImages from './src/integrations/auto-images';

// https://astro.build/config
export default defineConfig({
  site: 'https://survpedia.deeme.dev',
  integrations: [autoImages(), tailwind(), mdx(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        formats: ['webp', 'avif'],
        quality: 80,
      },
    },
  },
});
