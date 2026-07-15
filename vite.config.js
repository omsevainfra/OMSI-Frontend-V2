import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
  build: {
    // Split output into smaller cacheable chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libs — rarely change, cached for a long time
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Admin panel is a large separate section — only loaded on /osi-console/*
          admin: ['./src/admin/AdminApp.jsx'],
        },
      },
    },
    // Strip console.log/warn in production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Warn if any single chunk > 500 KB
    chunkSizeWarningLimit: 500,
    // Split CSS per-chunk for better caching
    cssCodeSplit: true,
  },
})
