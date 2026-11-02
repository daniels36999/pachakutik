import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Tres páginas HTML estáticas = tres rutas reales en GitHub Pages:
//   /            -> Guamote (matriz)
//   /cebadas/    -> Cebadas
//   /palmira/    -> Palmira
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        guamote: resolve(__dirname, 'index.html'),
        cebadas: resolve(__dirname, 'cebadas/index.html'),
        palmira: resolve(__dirname, 'palmira/index.html'),
      },
    },
  },
});
