import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
/*
export default defineConfig({
  plugins: [react()],
  base: "/oopCC/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
*/
export default defineConfig({
  plugins: [react()],
  base: "/appV1/", // Must match repository name exactly
  build: {
    outDir: 'dist', // Explicit output directory
    emptyOutDir: true, // Cleans the directory before build
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Optional but helpful for debugging:
  server: {
    open: true
  }
});