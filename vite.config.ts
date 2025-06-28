import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/oopCC",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
