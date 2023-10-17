import { defineConfig } from 'tsup';
import tsConfig from './tsconfig.json';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: ['./dist', '.turbo'],
  dts: {
    only: true,
    compilerOptions: tsConfig.compilerOptions,
  },
});
