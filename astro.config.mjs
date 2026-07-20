// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://kyde.com',
  integrations: [
    starlight({
      title: 'KYDE Docs',
      description: 'Documentation for the Kyde Gateway: quickstart, user manual, deployment, and reference.',
      // The marketing site owns the homepage and 404; Starlight only serves /docs/**
      disable404Route: true,
      favicon: '/favicon.svg?v=2',
      head: [
        // Same full favicon set as Base.astro, same cache-busting version
        { tag: 'link', attrs: { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=2' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=2' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=2' } },
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kydehq/gateway' }],
      customCss: ['./src/styles/starlight-kyde.css'],
      components: {
        // Dark-only, matching the marketing site
        ThemeProvider: './src/components/starlight/ThemeProviderDark.astro',
        ThemeSelect: './src/components/starlight/ThemeSelectNone.astro',
        // KYDE logo top-left, linking back to the marketing site
        SiteTitle: './src/components/starlight/SiteTitleKyde.astro',
      },
      sidebar: [
        { label: 'Overview', slug: 'docs' },
        { label: 'Quickstart', slug: 'docs/quickstart' },
        { label: 'User Manual', slug: 'docs/user-manual' },
        { label: 'Deployment', slug: 'docs/deployment' },
        { label: 'Reference', slug: 'docs/reference' },
      ],
    }),
    sitemap({
      // Ad-test landing pages (noindex), the /sandbox redirect stub, and
      // password-gated investor decks (noindex) stay out
      filter: (page) => !page.includes('/lp/') && !page.includes('/sandbox') && !page.includes('/slides'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
