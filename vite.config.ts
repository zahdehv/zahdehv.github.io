import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Fix: __dirname is a CommonJS variable and is not available in ES modules.
      // We use import.meta.url to get the current module's URL and resolve the path.
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  // IMPORTANT: If you are deploying to a subfolder of a domain (e.g., github.io/your-repo-name),
  // you MUST change this to '/your-repo-name/'. Otherwise, leave it as '/'.
  base: '/',
})
