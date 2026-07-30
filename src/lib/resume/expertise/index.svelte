<script lang="ts">
    import { resolve } from '$app/paths';
    import { Heading, Img, Li, List } from 'flowbite-svelte';

    import type { ExpertiseProps } from './expertise.svelte';

    const { title, image, left, items }: ExpertiseProps = $props();
    const layoutClasses = $derived(
        left ? 'md:flex-row' : 'md:flex-row-reverse'
    );
</script>

<article
    class={layoutClasses +
        ' flex flex-col items-center gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:gap-10 sm:p-8 dark:border-gray-800 dark:bg-gray-800/40'}
>
    <Img
        src={image ? resolve(image, {}) : undefined}
        alt={title}
        class="aspect-3/2 w-full max-w-xs rounded-xl object-contain shadow-sm md:max-w-sm"
    />
    <div class="flex-1 space-y-4">
        <Heading tag="h3" class="text-xl sm:text-2xl">
            {title}
        </Heading>
        <List
            tag="ul"
            position="outside"
            class="marker:text-primary-500 space-y-2 ps-5"
        >
            {#each items ?? [] as item}
                <Li class="text-base sm:text-lg">
                    {item}
                </Li>
            {/each}
        </List>
    </div>
</article>
