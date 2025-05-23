import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-comp/product-item/',
  plugins: [react()],
  build: {
    outDir: '../../dist/product-item',
    emptyOutDir: true,
  },
})