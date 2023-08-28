import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  clean: ['./dist', '.turbo'],
  minify: false,
  dts: true,
  splitting: false,
  sourcemap: false,
  outDir: './dist',
  format: ['cjs'],
});
