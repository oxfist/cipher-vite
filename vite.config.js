import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "/cipher-vite/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
