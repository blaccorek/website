<script lang="ts">
    import type { Snippet } from 'svelte';

    interface TimelineProps {
        children: Snippet;
    }

    const { children }: TimelineProps = $props();
</script>

<ol class="relative space-y-10 ps-12">
    <!-- The rail sits under the markers, inset so it never pokes out. -->
    <span
        aria-hidden="true"
        class="absolute inset-y-2 start-4 w-px bg-gray-200 dark:bg-gray-700"
    ></span>
    {@render children()}
</ol>
