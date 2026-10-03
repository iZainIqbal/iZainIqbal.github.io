// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// User-site repo (<user>.github.io) is served from the domain root, so no `base`.
export default defineConfig({
  site: "https://izainiqbal.github.io",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
