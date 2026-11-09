// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { SERVICES } from './src/data/features.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://kyde.com',
  integrations: [
    starlight({
      title: 'Kyde Docs',
      description: 'Documentation for Kyde Score and Kyde Control: quickstarts, API, MCP, limits, deployment, and reference.',
      // The marketing site owns the homepage and 404; Starlight only serves /docs/**
      disable404Route: true,
      favicon: '/favicon.svg?v=2',
      head: [
        // Same full favicon set as Base.astro, same cache-busting version
        { tag: 'link', attrs: { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=2' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=2' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=2' } },
        // Umami Cloud, same as Base.astro
        { tag: 'script', attrs: { defer: true, src: 'https://cloud.umami.is/script.js', 'data-website-id': 'f4e58da4-64fd-473c-9f90-29179942dd4d' } },
      ],
      social: [{ icon: 'github', label: 'Kyde on GitHub', href: 'https://github.com/kydehq' }],
      customCss: ['./src/styles/starlight-kyde.css'],
      components: {
        // Same light default and same stored choice as the marketing site
        ThemeProvider: './src/components/starlight/ThemeProviderKyde.astro',
        ThemeSelect: './src/components/starlight/ThemeSelectKyde.astro',
        // KYDE logo top-left, linking back to the marketing site
        SiteTitle: './src/components/starlight/SiteTitleKyde.astro',
      },
      sidebar: [
        { label: 'Overview', slug: 'docs' },
        {
          label: 'Kyde Score',
          items: [
            { label: 'Overview', slug: 'docs/score' },
            { label: 'Quickstart', slug: 'docs/score/quickstart' },
            { label: 'For agents', slug: 'docs/score/agents' },
            { label: 'API', slug: 'docs/score/api' },
            { label: 'Webhooks', slug: 'docs/score/webhooks' },
            { label: 'Limits and privacy', slug: 'docs/score/limits' },
          ],
        },
        {
          // Gateway pages keep their old URLs so existing links do not break.
          label: 'Kyde Control',
          items: [
            { label: 'Overview', slug: 'docs/control' },
            { label: 'Quickstart', slug: 'docs/quickstart' },
            { label: 'User Manual', slug: 'docs/user-manual' },
            { label: 'Deployment', slug: 'docs/deployment' },
            { label: 'Reference', slug: 'docs/reference' },
          ],
        },
      ],
    }),
    // /platform argued the old positioning end to end and was deleted rather
    // than rewritten, which would have produced a third story. Its material
    // lives on in the zero trust sections, so it has a natural heir and gets a
    // redirect instead of a bare 404. Static output, so this emits a meta
    // refresh page with a canonical, not a 301.
    sitemap({
      // Ad-test landing pages (noindex), the /sandbox redirect stub, and
      // password-gated investor decks (noindex) stay out, and so do the
      // lab-draft pages (noindex) until they replace the live ones
      filter: (page) => (SERVICES || !/\/(services|audit)\/?$/.test(page)) && !page.includes('/lp/') && !page.includes('/sandbox') && !page.includes('/slides') && !page.includes('/receipts') && !page.includes('/lab-draft'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Dev only: the lab dashboard reads score.kyde.com through this proxy,
    // because score.kyde.com does not allow CORS for kyde.com yet (KYDE-376).
    // The static build calls https://score.kyde.com directly.
    server: {
      proxy: {
        '/score-api': {
          target: 'https://score.kyde.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/score-api/, ''),
        },
      },
    },
  },
});
