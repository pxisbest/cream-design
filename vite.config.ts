/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "node:path";
import fs from "fs";

function getComponentEntries() {
  const componentsDir = path.resolve(__dirname, 'src/components');
  const entries: { [key: string]: string } = {};
  fs.readdirSync(componentsDir).forEach(name => {
    const entry = path.join(componentsDir, name, 'index.tsx');
    if (fs.existsSync(entry)) {
      entries[name] = entry;
    }
  });
  return entries;
}

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: "dist",
      include: ["src"],
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.tsx'),
        ...getComponentEntries(),
      },
      name: 'CreamDesign',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        // entryName 可能是 'components/Button/button'，我们只取Button
        const parts = entryName.split('/');
        // 兼容主入口和组件入口
        const name = parts.length > 2 ? parts[parts.length - 2] : entryName;
        return `${name}/index.${format}.js`;
      },
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
