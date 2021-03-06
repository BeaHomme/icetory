import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

export default defineConfig({
  base: '',
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
    },
  },
  build: {
    emptyOutDir: false,
  },
  plugins: [vue()]
})
