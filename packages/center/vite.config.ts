import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
// import reactScopedCssPlugin from "rollup-plugin-react-scoped-css";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    // reactScopedCssPlugin(),
  ],
  build: {
    lib: {
      entry: "./src/index.tsx",
      formats: ["es"],
      fileName: () => "index.js",
    },
    sourcemap: true,
    minify: true,
    rollupOptions: {
      external: ["react", "react-dom", "clsx"],
    },
  },
});
