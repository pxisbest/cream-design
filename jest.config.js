// jest.config.js
import { pathsToModuleNameMapper } from "ts-jest";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

// 允许使用 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 读取 tsconfig.json 的 paths 配置（如有）
let tsconfig;
try {
  tsconfig = JSON.parse(readFileSync("./tsconfig.json", "utf-8"));
} catch (err) {
  tsconfig = {};
}

// 将 tsconfig 中的 paths 转为 Jest 的 moduleNameMapper
const tsPaths = tsconfig.compilerOptions?.paths
  ? pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
      prefix: "<rootDir>/",
    })
  : {};

export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    // 新增这一行，让 CSS/SCSS 导入通过 identity-obj-proxy mock
    "\\.(css|scss)$": "identity-obj-proxy",
    // 保留 tsconfig paths 映射
    ...tsPaths,
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};