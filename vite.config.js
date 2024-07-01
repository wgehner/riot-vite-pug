//import vituum from 'vituum'
//import pug from '@vituum/vite-plugin-pug'
import { defineConfig } from 'vite'
import riot from 'rollup-plugin-riot'
import { registerPreprocessor } from '@riotjs/compiler'
import pug from 'pug'

registerPreprocessor('template', 'pug', function(code, { options }) {
  const { file } = options
  console.log('Preprocess the template', file)

  return {
    code: pug.render(code),
    // no sourcemap here
    map: null
  }
})

export default defineConfig({
  root       : process.cwd() + '/src',
  plugins    : [riot()],
  build: { 
    outDir       : '../dist',
    minify       : 'esbuild', /** https://vitejs.dev/config/build-options.html#build-minify */
    target       : 'esnext' /** https://vitejs.dev/config/build-options.html#build-target */
  }
})
