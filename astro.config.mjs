import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mustsee.github.io',
  base: '/git-github-course',
	integrations: [mdx(), sitemap()],
});
