import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/*.ts'],
	clean: ['./dist', '.turbo'],
	minifyIdentifiers: true,
	dts: true,
	splitting: false,
	sourcemap: false,
	outDir: './dist',
	format: ['cjs'],
});
