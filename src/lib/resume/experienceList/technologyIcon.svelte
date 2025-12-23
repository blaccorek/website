<script lang="ts">
    import { Avatar, Tooltip } from 'flowbite-svelte';

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
/>
<Tooltip placement="bottom">{name}</Tooltip>
