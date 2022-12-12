import react from "@vitejs/plugin-react";
import reactScopedCssPlugin from "rollup-plugin-react-scoped-css";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), reactScopedCssPlugin() as any],
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
      fileName: () => "index.js",
    },
    minify: true,
    rollupOptions: {
      external: ["react", "react-dom", "clsx"],
    },
  },
});
