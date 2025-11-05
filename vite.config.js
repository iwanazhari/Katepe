import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
		dedupe: ['react', 'react-dom'],
	},
	build: {
		chunkSizeWarningLimit: 1000,
		commonjsOptions: {
			include: [/node_modules/],
			transformMixedEsModules: true,
		},
	},
});

