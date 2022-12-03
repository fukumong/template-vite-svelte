import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import svelteConfig from "./svelte.config";
//import postcss from "./postcss.config.mjs";
import tsconfigPaths from "vite-tsconfig-paths";
import { fantasticon } from "vite-plugin-fantasticon";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    fantasticon({
      name: "icons",
      inputDir: "icons",
      pathOptions: {
        ts: "./src/icons.ts",
      },
    }),
    tsconfigPaths({ loose: true }),
    svelte(svelteConfig),
  ],
  //  css: { postcss },
  server: {
    hmr: true,
    watch: { usePolling: true },
  },
});
