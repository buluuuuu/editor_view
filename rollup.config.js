import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from 'rollup-plugin-terser';

const mode = process.env.MODE;
const isLocal = mode === 'local';
const entry = 'index.js';

export default [
  {
    input: entry,
    externals: ['vue'],
    plugins: [resolve(), commonjs(), json()],
    output: {
      file: 'dist.js',
      format: isLocal ? 'es' : 'umd',
      name: 'Index',
      plugins: [terser()],
      banner: '/** Hello This is Banner **/',
    },
  },
  {
    input: entry,
    external: ['vue'],
    plugins: [resolve(), commonjs(), json()],
    output: {
      file: 'dist/index.es.js',
      format: 'es',
    },
  }
];
