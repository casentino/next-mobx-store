import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/*.(ts|tsx)", "src/common/*.ts"],
  clean: ["./dist", ".turbo"],
  minify: true,
  dts: true,
  splitting: false,
  sourcemap: false,
  outDir: "./dist",
  format: ["esm"],
});
