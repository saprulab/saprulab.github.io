import adapter from "@sveltejs/adapter-static"; 
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
            pages: "docs",
            assets: "docs",
			fallback: undefined,
			precompress: false,
			strict: true
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" : "/saprulab",
            relative: true
        },
	},
    preprocess: [vitePreprocess()]
};

export default config;