import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://power-frame.ru',
  output: 'static',
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
});
