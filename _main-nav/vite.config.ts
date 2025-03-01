import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      // Make Vue external to avoid bundling it
      external: ['vue'],
      output: {
        // Global variable used when Vue is loaded externally
        globals: {
          vue: 'Vue'
        },
        entryFileNames: 'js/main.js',
        // Force all code into a single file
        manualChunks: undefined,
        // Configure the format to UMD or IIFE to handle external dependencies properly
        format: 'iife',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (/\.css$/.test(name)) {
            return 'css/main.css';
          }
          return 'assets/[name].[ext]';
        }
      }
    }
  }
});