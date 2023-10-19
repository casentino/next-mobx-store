export default {
  entry: ['./index.js', './next.js'],
  clean: ['./dist', '.turbo'],
  treeshake: true,
  minify: true,
  splitting: false,
  outDir: './dist',
};
