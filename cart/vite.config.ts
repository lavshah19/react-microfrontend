import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './cart': './src/App.tsx',
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
    })  
  ],
  base:'http://localhost:3002/',
  build: {
    target: 'chrome89',
  },
  server: {
    port: 3002,
    strictPort: true, // fail if port is already in use
    origin: 'http://localhost:3002', // allow remote to access host
  },
})
