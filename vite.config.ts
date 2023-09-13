import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/NotesReactZustand/',
  plugins: [svgr({ include: '**/*.svg' }), react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/mixins.scss";`,
      },
    },
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
