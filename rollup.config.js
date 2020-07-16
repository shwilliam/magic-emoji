import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {file: pkg.module, format: 'es'},
    {file: pkg.main, format: 'umd', name: 'magic-emoji'},
  ],
  plugins: [json(), svelte({customElement: true}), resolve()],
}
