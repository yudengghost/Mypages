import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { TinyVueResolver } from '@opentiny/unplugin-tiny-vue'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [TinyVueResolver]
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': { ...process.env }
  }
})
