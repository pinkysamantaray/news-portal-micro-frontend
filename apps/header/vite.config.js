import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // optimizeDeps: {
  //   include: ['linked-dep'],
  // },
  build: {
    lib: {
      entry: './src/main.js',
      name: 'Header',
      fileName: 'header',
    },
    // commonjsOptions: {
    //   include: [/linked-dep/, /node_modules/],
    // },
  },
})

// https://vite.dev/config/