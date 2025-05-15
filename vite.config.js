import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/custom-bootstrap.scss" as *;`, // Automatically include custom Bootstrap SCSS
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Alias for src folder
    },
  },
});