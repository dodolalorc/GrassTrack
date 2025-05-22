import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  root: "./",
  base: "/",
  plugins: [
    vue(),
    vueDevTools(),
  ],
  publicDir: "public",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  server: {
    host: "localhost",
    port: 5481,
    open: true,
    cors: true,
    proxy: {
      "/api": {
        target: "http://152.136.54.140:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    manifest: false,
    target: "es2022",
    chunkSizeWarningLimit: 2500,

    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // 修改为完整路径
      output: {
        chunkFileNames: "assets/chunks/[name]-[hash].js",
        entryFileNames: "assets/chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        manualChunks: {
          vue: ["vue"],
          "vue-router": ["vue-router"],
          axios: ["axios"],
          "element-plus": ["element-plus"],
        },
      },
    },
  },
})
