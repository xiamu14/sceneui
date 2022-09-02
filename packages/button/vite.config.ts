import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import reactScopedCssPlugin from "rollup-plugin-react-scoped-css";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactScopedCssPlugin(), dts()],
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["cjs", "es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
