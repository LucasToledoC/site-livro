import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react( )],
  base: '/site-livro/', // <--- IMPORTANTE: Substitua 'hora-da-estrela-site' pelo NOME EXATO do seu repositório no GitHub
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})