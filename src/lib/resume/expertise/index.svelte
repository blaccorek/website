<script lang="ts">
    import { resolve } from '$app/paths';
    import BulletList from '$lib/atoms/bulletList/index.svelte';
    import Heading from '$lib/atoms/heading/index.svelte';
    import Image from '$lib/atoms/image/index.svelte';

    import type { ExpertiseProps } from './expertise.svelte';

    const { title, image, left, items }: ExpertiseProps = $props();
    const layoutClasses = $derived(
        left ? 'md:flex-row' : 'md:flex-row-reverse'
    );
</script>

<article
    class="{layoutClasses} hover:border-primary-300 dark:hover:border-primary-800 flex flex-col items-center gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-colors sm:gap-10 sm:p-8 dark:border-gray-800 dark:bg-gray-800/40"
>
    {#if image}
        <Image
            src={resolve(image, {})}
            alt=""
            class="aspect-3/2 w-full max-w-xs rounded-xl object-contain md:max-w-sm"
        />
    {/if}
    <div class="flex-1 space-y-4">
        <Heading level={3}>{title}</Heading>
        <BulletList items={items ?? []} size="lg" />
    </div>
</article>
