import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        galerija: resolve(root, 'galerija/index.html'),
        bildes: resolve(root, 'bildes/index.html'),
        privatums: resolve(root, 'privatums/index.html'),
        notFound: resolve(root, '404.html'),
      },
    },
  },
  server: { port: 5173 },
});
