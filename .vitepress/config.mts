import { defineConfig } from 'vitepress'

import { en } from "./en";

export default defineConfig({
  title: "Dokploy Templates Docs",
  description: "A Dokploy templates documentation.",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  base: '/dokploy-template-docs/',

  rewrites: {
    'en/:rest*': ':rest*'
  },

  locales: {
    root: { label: 'English', ...en },
    uk: { label: 'Українська', ...en }
  }
})
