import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  // base: '/Soft-Skills-Tutor-/',  // ✅ Commented out - Perfect for Vercel!
  server: {
    https: true,
    port: 5173
  },
  plugins: [react(), mkcert()]
})