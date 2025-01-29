import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure the output directory is 'dist' for Netlify
    rollupOptions: {
      output: {
        // You can customize the output naming and other options here
      }
    }
  }
})
