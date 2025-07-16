import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import remarkLinkCard from "remark-link-card-plus";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

export default defineConfig({
  site: "https://t2-lab.pages.dev",
  markdown: {
    remarkPlugins: [remarkMath, [remarkLinkCard, { shortenUrl: false }]],
    rehypePlugins: [rehypeKatex, rehypeRaw],
  },
  integrations: [
    expressiveCode({
      themes: ["github-dark-default"],
      plugins: [pluginLineNumbers()],
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
