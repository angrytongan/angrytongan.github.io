import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [preprocess(), mdsvex(mdsvexConfig)],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: null,
        }),
	}
};

export default config;
