// @ts-check
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://glenrock168-beep.github.io',
  base: '/glenrock/',
});
