import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            fallback: '404.html'
        }),
        paths: {
            // Set base path for static hosting (e.g., GitHub Pages, custom domain)
            base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
        },
        prerender: {
            handleHttpError: ({ status, path }) => {
                // Suppress 404 errors for missing routes during prerender
                if (status === 404) return 'ignore';
                // For other errors, throw
                throw new Error(`${status} error on ${path}`);
            }
        }
    }
};

export default config;
