// Versión de vista previa: un solo archivo HTML con todo adentro, y las tres
// páginas se cambian con #guamote, #cebadas, #palmira.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  define: { 'import.meta.env.VITE_PREVIEW': JSON.stringify('1') },
  build: {
    outDir: 'dist-preview',
    assetsInlineLimit: 100000000,
    rollupOptions: { input: resolve(__dirname, 'preview.html') },
  },
});
