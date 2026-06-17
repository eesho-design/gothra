import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.REACT_APP_BACKEND_URL': JSON.stringify(env.VITE_BACKEND_URL || env.REACT_APP_BACKEND_URL || process.env.VITE_BACKEND_URL || process.env.REACT_APP_BACKEND_URL || ''),
      'process.env.REACT_APP_CLERK_PUBLISHABLE_KEY': JSON.stringify(env.VITE_CLERK_PUBLISHABLE_KEY || env.REACT_APP_CLERK_PUBLISHABLE_KEY || process.env.VITE_CLERK_PUBLISHABLE_KEY || process.env.REACT_APP_CLERK_PUBLISHABLE_KEY || ''),
    },
    esbuild: {
      loader: 'jsx',
      include: /\.[jt]sx?$/,
      exclude: [],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
    },
  };
});
