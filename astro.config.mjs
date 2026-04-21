import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [react()],
  site: 'https://glenrock168-beep.github.io',
  base: '/glenrock/',
});
