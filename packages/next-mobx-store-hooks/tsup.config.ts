import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  clean: ['./dist', '.turbo'],
  minify: true,
  dts: true,
  splitting: false,
  sourcemap: false,
  outDir: './dist',
  format: ['cjs', 'esm'],
});
