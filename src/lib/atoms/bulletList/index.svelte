<script lang="ts">
    import Text from '$lib/atoms/text/index.svelte';

    import type { TextSize } from '../text/text.svelte';

    interface BulletListProps {
        items: string[];
        size?: TextSize;
        class?: string;
    }

    const {
        items,
        size = 'base',
        class: extraClasses = ''
    }: BulletListProps = $props();
</script>

<ul
    class={`marker:text-primary-500 list-outside list-disc space-y-2 ps-5 ${extraClasses}`.trim()}
>
    {#each items as item, index (index)}
        <li>
            <Text {size}>{item}</Text>
        </li>
    {/each}
</ul>
