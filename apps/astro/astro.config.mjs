import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  outDir: "./dist",
  publicDir: "./public",
  integrations: [react()]
});