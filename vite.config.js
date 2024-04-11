import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from  'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss, 
    autoprefixer
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    dedupe: ['vue']
  },
  base:'./',
  optimizeDeps: {
    exclude: ['vue'],
  },
  build: {
    minify: false, // 禁用代码压缩
    sourcemap: true, // 生成 sourcemap 以便调试
  },
})
