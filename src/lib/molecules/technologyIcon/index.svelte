<script lang="ts">
    import { Avatar, Tooltip } from 'flowbite-svelte';

    import type { Technology } from './technologyIcon.svelte';

    const { name, icon, url }: Technology = $props();
</script>

<Avatar
    border
    cornerStyle="rounded"
    size="md"
    data-name={name}
    src={icon}
    href={url}
    class="bg-white dark:bg-gray-800"
    alt={name}
/>
<Tooltip placement="bottom">{name}</Tooltip>
