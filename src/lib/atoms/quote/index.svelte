<script lang="ts">
    import type { Snippet } from 'svelte';

    interface QuoteProps {
        class?: string;
        children: Snippet;
    }

    const { class: extraClasses = '', children }: QuoteProps = $props();
</script>

<blockquote
    class={`border-primary-500 bg-primary-50/70 dark:bg-primary-900/40 space-y-4 rounded-e-2xl border-s-4 p-6 sm:p-8 ${extraClasses}`.trim()}
>
    {@render children()}
</blockquote>
