import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  // 移除 root 配置或设置为项目根目录
  root: './', // 或者直接删除这行
  base: '/',
  publicDir: 'public',
  cacheDir: 'node_modules/.vite',
  // 移除 envDir 配置或设置为正确的环境变量目录
  envDir: './', // 或者直接删除这行

  server: {
    host: 'localhost',
    port: 5481,
    open: true,
    cors: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    manifest: false,
    target: 'es2022',
    chunkSizeWarningLimit: 2500,

    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // 修改为完整路径
      output: {
        chunkFileNames: 'assets/chunks/[name]-[hash].js',
        entryFileNames: 'assets/chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          vue: ['vue'],
          'vue-router': ['vue-router'],
          axios: ['axios'],
          'element-plus': ['element-plus'],
        },
      },
    },
  },
});
