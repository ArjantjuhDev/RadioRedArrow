import path from 'node:path';

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.NODE_ENV': '"production"'
	},
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib')
		}
	}
});
