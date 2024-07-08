import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@public': path.resolve(__dirname, 'public')
    }
  },
  server: {
    port: parseInt(process.env.PORT) || 3000,
    host: true, // This makes the server accessible externally
  },
})
