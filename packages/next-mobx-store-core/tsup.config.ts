import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/common/*.ts'],
  clean: ['./dist', '.turbo'],
  treeshake: true,
  minify: true,
  dts: true,
  splitting: false,
  outDir: './dist',
  tsconfig: './tsconfig.json',
  format: ['cjs', 'esm'],
});
