/// <reference types='vitest' />
import { federation } from '@module-federation/vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/scheduling',
  server: {
    port: 4202,
    host: 'localhost',
    cors: true,
  },
  preview: {
    port: 4202,
    host: 'localhost',
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'scheduling',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/app/app.tsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
      dts: false,
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
