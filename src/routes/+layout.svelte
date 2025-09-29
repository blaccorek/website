<script lang="ts">
    import { resolve } from '$app/paths';
    import Footer from '$lib/app/footer/index.svelte';
    import Identity from '$lib/resume/identity/index.svelte';
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

<div class="min-h-screen flex flex-col">
    <Identity
        firstname="Tsiorintsoa"
        lastname="Andriamihamina"
        jobTitle="DevOps consultant"
    />
    <main
        class="bg-white dark:bg-gray-800
            h-full flex-grow
            2xl:w-1/2 lg:w-4/5 w-full
            justify-center
            mx-auto shadow-md rounded-md my-4"
    >
        <div class="flex justify-center p-8">
            <Listgroup
                active
                items={links}
                horizontal
                class="w-1/2 md:w-full max-w-2xl"
            ></Listgroup>
        </div>
        {@render children()}
    </main>
    <Footer />
</div>
