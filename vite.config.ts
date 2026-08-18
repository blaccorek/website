import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    /* Icons are compiled into the bundle from @iconify-json/lucide, so nothing
       is fetched from the Iconify API at runtime. */
    plugins: [tailwindcss(), Icons({ compiler: 'svelte' }), sveltekit()],
    test: { include: ['src/**/*.{test,spec}.{js,ts}'] },
    css: { transformer: 'lightningcss' }
});
