import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Fonts are downloaded at build time and self-hosted; latin-ext covers ą č ę ė į š ų ū ž.
export default defineConfig({
  output: 'static',
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Playfair Display',
      cssVariable: '--font-playfair',
      weights: ['700'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Nunito Sans',
      cssVariable: '--font-nunito',
      weights: ['400', '700', '800', '900'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
