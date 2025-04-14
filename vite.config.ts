import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/portfolio-pedroguilherme/", // 👈 ADICIONE ESSA LINHA
  plugins: [react()],
})
