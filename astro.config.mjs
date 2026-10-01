// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: netlify({
    devFeatures: {
      edgeFunctions: false,
    },
  }),
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },
});