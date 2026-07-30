<script lang="ts">
    import { resolve } from '$app/paths';
    import Footer from '$lib/molecules/footer/index.svelte';
    import Identity from '$lib/molecules/identity/index.svelte';
    import NavBar from '$lib/molecules/navBar/index.svelte';

    import '../app.css';
    import type { LayoutProps } from './$types';

    let { data, children }: LayoutProps = $props();
    const links = $derived(
        data?.menuItems.map((item) => ({
            title: item.title,
            href: resolve(item.href, {}),
            current: item.href == data?.currentPage
        })) ?? []
    );
</script>

<div class="flex min-h-screen flex-col">
    <a
        href="#content"
        class="bg-primary-700 sr-only rounded-b-lg px-4 py-2 text-white focus:not-sr-only focus:absolute focus:start-4 focus:top-0 focus:z-30"
    >
        Skip to content
    </a>

    <Identity
        firstname="Tsiorintsoa"
        lastname="Andriamihamina"
        jobTitle="DevOps consultant"
    />
    <NavBar items={links} />

    <div class="mx-auto w-full max-w-5xl flex-grow px-4 py-10 sm:px-6 lg:px-8">
        <main
            id="content"
            class="h-full rounded-2xl border border-gray-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12 lg:py-14 dark:border-gray-800 dark:bg-gray-900"
        >
            {@render children()}
        </main>
    </div>

    <Footer />
</div>
