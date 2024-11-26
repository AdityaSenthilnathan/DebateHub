// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/DebateHub/', // Set this to your repository name
  plugins: [react()],
})