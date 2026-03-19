import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://techorra.github.io',
  base: '/QoreHamza',
  integrations: [],
  vite: {
    css: {
      devtools: true
    }
  }
});
