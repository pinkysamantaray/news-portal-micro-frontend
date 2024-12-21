import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   include: ['linked-dep'],
  // },
  build: {
    lib: {
      entry: './src/main.jsx',
      name: 'Trending',
      fileName: 'trending',
    },
    // commonjsOptions: {
    //   include: [/linked-dep/, /node_modules/],
    // },
  },
})

// https://vite.dev/config/