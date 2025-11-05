import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'vendor-react': ['react', 'react-dom'],
					'vendor-framer': ['framer-motion'],
					'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-sheet', '@radix-ui/react-separator'],
				},
			},
		},
		chunkSizeWarningLimit: 1000,
	},
});

