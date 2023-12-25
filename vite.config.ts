import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.UNSPLASH_ACCESS_KEY': JSON.stringify(env.UNSPLASH_ACCESS_KEY)
    },
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@common': path.resolve(__dirname, './src/common'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  plugins: [react()],
  }
})
