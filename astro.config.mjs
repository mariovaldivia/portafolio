// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages:
// - Si el repositorio NO se llama "portafolio", cambia `base` a "/<nombre-del-repo>".
// - Si el repositorio es "<usuario>.github.io", elimina la línea `base`.
export default defineConfig({
  site: 'https://mariovaldivia.github.io',
  base: '/portafolio',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: true },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Instrument Serif',
      cssVariable: '--font-instrument-serif',
      weights: [400],
      styles: ['normal', 'italic'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: [400, 500],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
