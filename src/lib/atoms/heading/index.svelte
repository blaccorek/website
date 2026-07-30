<script lang="ts">
    import type { Snippet } from 'svelte';

    import { type HeadingLevel, headingClasses } from './heading.svelte';

    interface HeadingProps {
        level: HeadingLevel;
        class?: string;
        children: Snippet;
    }

    const {
        level,
        class: extraClasses = '',
        children
    }: HeadingProps = $props();
    const classes = $derived(`${headingClasses(level)} ${extraClasses}`.trim());
</script>

<svelte:element this={`h${level}`} class={classes}>
    {@render children()}
</svelte:element>
