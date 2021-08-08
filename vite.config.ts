import { defineConfig } from "vite";
import path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/main.tsx"),
      name: "react-layered-composition",
      fileName: (format) => `react-layered-composition.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          vue: "React",
        },
      },
    },
  },
  plugins: [reactRefresh()],
});
