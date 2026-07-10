/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/notifications',
  server: {
    port: 4203,
    host: 'localhost',
    cors: true,
  },
  preview: {
    port: 4303,
    host: 'localhost',
  },
    plugins: [react(),
    federation({
      name:  'notifications',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/app/app.tsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
      dts: false,
    })
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    target: 'chrome89',
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    modulePreload: false,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
