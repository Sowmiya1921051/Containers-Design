import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// vite.config.js


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  ],
  resolve: {
    alias: {
      '@images': '/images', // replace with your actual directory path
    },
  },
})
