import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeGalaxy from "starlight-theme-galaxy";

export default defineConfig({
  integrations: [
    starlight({
      title: "LightBorn",
      favicon: "/favicon.svg",
      editLink: {
        baseUrl: "https://github.com/LightBorn-lua/LightBorn/edit/main/src/",
      },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      plugins: [starlightThemeGalaxy()],
      sidebar: [
        {
          label: "Start Here",
          autogenerate: { directory: "getting-started" }
        },
        {
          label: "API Reference",
          autogenerate: { directory: "api-reference" }
        },
        {
          label: "Troubleshooting",
          autogenerate: { directory: "troubleshooting" }
        },
      ],
      social: [
        {
          href: "https://github.com/LightBorn-lua",
          icon: "github",
          label: "GitHub",
        },
      ],
    }),
  ],
});
