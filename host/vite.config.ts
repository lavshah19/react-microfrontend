import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
//fixed port 3000 so remote always know where ur host or shell located
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'host',
      remotes:{
        products:{
          type: "module",
          name: "products",
          entry: "http://localhost:3001/remoteEntry.js",
          entryGlobalName: "products",
          shareScope: "default"


        },
        cart:{
          type: "module",
          name: "cart",
          entry: "http://localhost:3002/remoteEntry.js",
          entryGlobalName: "cart",
          shareScope: "default"
        }
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
    dts: true, // this will generate a remotes.d.ts file in the root of your project, which will contain the types for the remote modules that you are consuming. This is useful for TypeScript users, as it allows you to get type checking and autocompletion for the remote modules.

    })  
  ],
  build: {
    target: 'chrome89', 
      },
  server: {
    port: 3000,
    strictPort: true, // fail if port is already in use
    origin: 'http://localhost:3000', // allow remote to access host
  },
})
