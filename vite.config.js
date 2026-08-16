import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/Soft-Skills-Tutor-/',  // ❌ REMOVE or COMMENT this line for Vercel
  server: {
    https: true,
    port: 5173
  },
  plugins: [
    react(), 
    mkcert()
  ]
})