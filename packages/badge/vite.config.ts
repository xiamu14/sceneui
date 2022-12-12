import react from "@vitejs/plugin-react";
import reactScopedCssPlugin from "rollup-plugin-react-scoped-css";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactScopedCssPlugin() as any, dts()],
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["cjs", "es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "clsx"],
    },
  },
});
