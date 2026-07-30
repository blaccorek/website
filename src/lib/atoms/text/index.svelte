<script lang="ts">
    import type { Snippet } from 'svelte';

    import { type TextSize, type TextTone, textClasses } from './text.svelte';

    interface TextProps {
        size?: TextSize;
        tone?: TextTone;
        class?: string;
        children: Snippet;
    }

    const {
        size = 'base',
        tone = 'default',
        class: extraClasses = '',
        children
    }: TextProps = $props();
    const classes = $derived(
        `${textClasses(size, tone)} ${extraClasses}`.trim()
    );
</script>

<p class={classes}>{@render children()}</p>
