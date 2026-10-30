import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from the repository root (index.html + assets/),
// so the build writes there instead of into source/dist.
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: '..',
    emptyOutDir: false,
  },
})
