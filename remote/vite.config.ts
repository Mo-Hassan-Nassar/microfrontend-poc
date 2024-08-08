import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"
import { dependencies } from './package.json';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "pigeon-tracker",
      filename: "pigeonTracker.js",
      exposes: {
        "./hello": "./src/components/HelloWorld.vue",
        './vueApp': './src/components/mounter.ts',
      },
      shared: {
        ...dependencies
      },
    }),
  ],
  build: {
    target: 'esnext',
    outDir: 'public'
  }
})
