import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import astroI18next from "astro-i18next";

import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
	site: 'https://mustsee.github.io',
  base: '/git-github-course',
	integrations: [mdx(), sitemap(), astroI18next()],
	output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
});
