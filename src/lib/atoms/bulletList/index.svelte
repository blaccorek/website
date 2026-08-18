<script lang="ts">
    import Icon from '$lib/atoms/icon/index.svelte';
    import Text from '$lib/atoms/text/index.svelte';

    import type { TextSize } from '../text/text.svelte';
    import { type BulletMarker, listClasses } from './bulletList.svelte';

    interface BulletListProps {
        items: string[];
        size?: TextSize;
        marker?: BulletMarker;
        class?: string;
    }

    const {
        items,
        size = 'base',
        marker = 'disc',
        class: extraClasses = ''
    }: BulletListProps = $props();
    const classes = $derived(`${listClasses(marker)} ${extraClasses}`.trim());
</script>

<ul class={classes}>
    {#each items as item, index (index)}
        <li class={marker === 'check' ? 'flex gap-3' : ''}>
            {#if marker === 'check'}
                <span
                    class="bg-primary-500 mt-1 flex size-5 shrink-0 items-center justify-center rounded-full text-white"
                >
                    <Icon name="check" class="h-3 w-3" />
                </span>
            {/if}
            <Text {size}>{item}</Text>
        </li>
    {/each}
</ul>
