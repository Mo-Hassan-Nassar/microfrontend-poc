import {defineConfig} from 'vite'
import federation from "@originjs/vite-plugin-federation";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "pigeon-app",
      remotes: {
        pigeonTracker: 'http://localhost:5173/assets/pigeonTracker.js',
      },
    }),
  ],
})
