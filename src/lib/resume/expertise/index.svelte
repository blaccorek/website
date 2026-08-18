<script lang="ts">
    import { resolve } from '$app/paths';
    import BulletList from '$lib/atoms/bulletList/index.svelte';
    import Heading from '$lib/atoms/heading/index.svelte';
    import Icon from '$lib/atoms/icon/index.svelte';
    import Image from '$lib/atoms/image/index.svelte';

    import type { ExpertiseProps } from './expertise.svelte';

    const {
        title,
        icon,
        image,
        items,
        flip = false
    }: ExpertiseProps = $props();
</script>

<!-- The illustration only takes its own column once there is room for both;
     below that it stacks full-width rather than shrinking to a stamp. -->
<article
    class="hover:border-primary-300 dark:hover:border-primary-600 flex flex-col gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-[color,background-color,border-color,box-shadow] hover:shadow-md sm:p-8 lg:flex-row lg:items-center lg:gap-10 dark:border-gray-700 dark:bg-gray-800 {flip
        ? 'lg:flex-row-reverse'
        : ''}"
>
    <div class="flex-1 space-y-6">
        <header class="flex items-start gap-4">
            <span
                class="bg-primary-500 shadow-primary-500/30 flex size-12 shrink-0 items-center justify-center rounded-full text-white shadow-md"
            >
                <Icon name={icon} class="h-6 w-6" />
            </span>
            <div class="space-y-3">
                <Heading level={3}>{title}</Heading>
                <span
                    class="from-primary-500 block h-1 w-24 rounded-full bg-gradient-to-r to-transparent"
                ></span>
            </div>
        </header>
        <BulletList items={items ?? []} size="lg" marker="check" />
    </div>
    {#if image}
        <!-- Decorative: the heading beside it already names the domain. -->
        <Image
            src={resolve(image, {})}
            alt=""
            class="aspect-16/10 w-full shrink-0 rounded-xl bg-white object-cover ring-2 ring-gray-200 lg:w-2/5 dark:bg-gray-900 dark:ring-gray-700"
        />
    {/if}
</article>
