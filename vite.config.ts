import {sveltekit} from '@sveltejs/kit/vite';
import type {UserConfig} from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	optimizeDeps: {exclude: ['@feltcoop/felt']},
};

export default config;
