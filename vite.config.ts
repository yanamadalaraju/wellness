// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

import { defineConfig } from "vite";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//       '@assets': path.resolve(__dirname, './src/assets')
//     }
//   },
//   assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif']
// });

// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['axios', 'framer-motion', 'react-router-dom'],
        },
      },
    },
  },
});
