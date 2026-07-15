// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kyde.com',
  integrations: [
    sitemap({
      // Ad-test landing pages (noindex) and the /sandbox redirect stub stay out
      filter: (page) => !page.includes('/lp/') && !page.includes('/sandbox'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
