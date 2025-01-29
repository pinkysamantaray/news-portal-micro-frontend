import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss()
  ],
  build: {
    lib: {
      entry: './src/main.js',
      name: 'Header',
      fileName: 'header',
    }
  },
})

// https://vite.dev/config/