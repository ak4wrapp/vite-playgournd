import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        remote: 'http://localhost:7001/assets/remoteEntry.js', // Remote app URL
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});