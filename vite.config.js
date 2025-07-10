import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: '/',
	build: {
		// Optimize build
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		},
		// Optimize chunks
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'animations': ['react-lazy-load-image-component'],
					'emailjs': ['@emailjs/browser']
				}
			}
		},
		// Enable CSS code splitting
		cssCodeSplit: true,
		// Increase chunk size warning limit
		chunkSizeWarningLimit: 1000
	},
	// Optimize dependencies
	optimizeDeps: {
		include: ['react', 'react-dom', '@emailjs/browser']
	}
});
