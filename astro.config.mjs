import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import remarkMermaid from './remark-mermaid.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://luligabi1.github.io',
  base: '/',
  markdown: { remarkPlugins: [remarkMermaid] },
  integrations: [mdx(), sitemap(), tailwind()]
});