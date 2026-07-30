<script lang="ts">
    import { resolve } from '$app/paths';
    import Footer from '$lib/molecules/footer/index.svelte';
    import Identity from '$lib/molecules/identity/index.svelte';
    import { Listgroup } from 'flowbite-svelte';

    import '../app.css';
    import type { LayoutProps } from './$types';

    let { data, children }: LayoutProps = $props();
    const links = $derived(
        data?.menuItems.map((item) => ({
            name: item.title,
            href: resolve(item.href, {}),
            current: item.href == data?.currentPage
        })) ?? []
    );
</script>

<div class="flex min-h-screen flex-col">
    <Identity
        firstname="Tsiorintsoa"
        lastname="Andriamihamina"
        jobTitle="DevOps consultant"
    />
    <nav
        aria-label="Main"
        class="mx-auto w-full max-w-5xl px-4 pb-6 sm:px-6 lg:px-8"
    >
        <Listgroup
            active
            items={links}
            class="mx-auto w-full max-w-2xl overflow-hidden shadow-xs sm:flex-row sm:divide-x sm:divide-y-0"
            itemClass="justify-center px-4 py-3 text-center"
        ></Listgroup>
    </nav>
    <div class="mx-auto w-full max-w-5xl flex-grow px-4 pb-12 sm:px-6 lg:px-8">
        <main
            class="h-full rounded-2xl border border-gray-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12 lg:py-14 dark:border-gray-800 dark:bg-gray-900"
        >
            {@render children()}
        </main>
    </div>
    <Footer />
</div>
