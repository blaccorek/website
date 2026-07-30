<script lang="ts">
    import Image from '$lib/atoms/image/index.svelte';
    import Link from '$lib/atoms/link/index.svelte';

    import type { Technology } from './technologyChip.svelte';

    const { name, icon, url }: Technology = $props();

    const chipClasses =
        'inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200';
    const hoverClasses =
        'hover:border-primary-400 hover:text-primary-700 dark:hover:border-primary-600 dark:hover:text-primary-300';
</script>

{#snippet chipContent()}
    {#if icon}
        <!-- Decorative: the technology name is right there in the label. -->
        <Image src={icon} alt="" class="h-5 w-5 object-contain" />
    {/if}
    {name}
{/snippet}

{#if url}
    <Link href={url} variant="plain" class="{chipClasses} {hoverClasses}">
        {@render chipContent()}
    </Link>
{:else}
    <span class={chipClasses}>{@render chipContent()}</span>
{/if}
