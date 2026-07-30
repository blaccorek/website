<script lang="ts">
    import { A, P, TimelineItem } from 'flowbite-svelte';
    import { BadgeCheckSolid, GraduationCapSolid } from 'flowbite-svelte-icons';

    import {
        type School,
        buildDate,
        selectGrant
    } from './schoolDetails.svelte';

    const props: School = $props();
    const {
        name,
        description,
        websiteUrl,
        degree,
        programType,
        startYear,
        endYear,
        hasValidity = false
    } = props;

    const grant = selectGrant({ degree, programType });
    const date = buildDate({ startYear, endYear, hasValidity });
</script>

<TimelineItem title={grant} {date} dateFormat="year" class="mb-12">
    {#snippet orientationSlot()}
        <span
            class="bg-primary-100 dark:bg-primary-900 ring-white dark:ring-gray-900 absolute -start-5 flex h-8 w-8 items-center justify-center rounded-full ring-8"
        >
            {#if degree}
                <BadgeCheckSolid
                    class="text-primary-700 dark:text-primary-400 h-6 w-6"
                />
            {:else}
                <GraduationCapSolid
                    class="text-primary-700 dark:text-primary-400 h-6 w-6"
                />
            {/if}
        </span>
        {#if websiteUrl}
            <A
                href={websiteUrl}
                class="text-primary-700 dark:text-primary-400 font-medium"
                >{name}</A
            >
        {:else}
            <span>{name}</span>
        {/if}
    {/snippet}
    <P class="mt-2 ms-4 text-gray-700 dark:text-gray-300">{description}</P>
</TimelineItem>
