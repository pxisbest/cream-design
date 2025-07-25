/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dts from "vite-plugin-dts";
import fs from "fs";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// 获取所有组件入口
function getComponentEntries() {
  const componentsDir = path.resolve(__dirname, 'src/components');
  const entries = {};
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
      outDir: "dist", // 直接输出到dist
      include: ["src"],
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'CreamDesign',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.tsx'),
        ...getComponentEntries(),
      },
      external: ["react", "react-dom"],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
