import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-comp/order-options/',
  plugins: [react()],
  build: {
    outDir: '../../dist/order-options',
    emptyOutDir: true,
  },
})
