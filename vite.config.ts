import { defineConfig } from "vite";
import path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import typescript from "@rollup/plugin-typescript";

const resolvePath = (str: string) => path.resolve(__dirname, str);

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      formats: ["es", "cjs"],
      name: "react-layered-composition",
      fileName: (format) => `react-layered-composition.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        sourcemapExcludeSources: true,
        globals: {
          vue: "React",
        },
      },
    },
    sourcemap: true,
    target: "esnext",
    minify: false,
  },
  plugins: [
    reactRefresh(),
    {
      ...typescript({
        target: "es6",
        rootDir: resolvePath("./src/lib"),
        declaration: true,
        declarationDir: resolvePath("./dist"),
        exclude: resolvePath("../node_modules/**"),
        allowSyntheticDefaultImports: true,
      }),
      apply: "build",
    },
  ],
});
