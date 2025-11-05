import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: If you are deploying to a subfolder of a domain (e.g., github.io/your-repo-name),
  // you MUST change this to '/your-repo-name/'. Otherwise, leave it as '/'.
  base: '/',
})
