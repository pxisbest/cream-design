// jest.config.js
import { pathsToModuleNameMapper } from "ts-jest";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

// 允许使用 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 如果你没有 tsconfig.json 的 paths，也可以删除下面这行
let tsconfig;
try {
  tsconfig = JSON.parse(readFileSync("./tsconfig.json", "utf-8"));
} catch (e) {
  tsconfig = {};
}

/** @type {import('ts-jest').JestConfigWithTsJest} */
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
  moduleNameMapper: tsconfig.compilerOptions?.paths
    ? pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
        prefix: "<rootDir>/",
      })
    : {},
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
