import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
  

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({ 
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './productList': './src/App.tsx',
        './Button': './src/Button.tsx',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^19.3.1',
      },
      "react/":{
        singleton: true,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: '^19.3.1',
      }
    },
      dts: true,
    }),react(),
  ],
  base:'http://localhost:3001/',
  server: {
    port: 3001,
    strictPort: true, // fail if port is already in use
    origin: 'http://localhost:3001', // allow remote to access host
  },
  build: {
    target: 'chrome89',
  },
})
