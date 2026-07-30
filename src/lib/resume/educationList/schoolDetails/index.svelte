<script lang="ts">
    import Link from '$lib/atoms/link/index.svelte';
    import Text from '$lib/atoms/text/index.svelte';
    import TimelineItem from '$lib/molecules/timeline/timelineItem/index.svelte';

    import {
        type School,
        buildDate,
        selectGrant
    } from './schoolDetails.svelte';

    const {
        name,
        description,
        websiteUrl,
        degree,
        programType,
        startYear,
        endYear,
        hasValidity = false
    }: School = $props();

    const grant = $derived(selectGrant({ degree, programType }));
    const date = $derived(buildDate({ startYear, endYear, hasValidity }));
</script>

<TimelineItem
    title={grant}
    {date}
    icon={degree ? 'certificate' : 'graduationCap'}
>
    {#snippet subtitle()}
        {#if websiteUrl}
            <Link href={websiteUrl}>{name}</Link>
        {:else}
            <span class="font-medium text-gray-600 dark:text-gray-300">
                {name}
            </span>
        {/if}
    {/snippet}
    {#if description}
        <Text>{description}</Text>
    {/if}
</TimelineItem>
