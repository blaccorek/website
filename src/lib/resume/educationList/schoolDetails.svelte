<script lang="ts">
    import { A, P, TimelineItem } from 'flowbite-svelte';
    import { BadgeCheckSolid, GraduationCapSolid } from 'flowbite-svelte-icons';

    const props: School = $props();
    const {
        startYear,
        endYear,
        hasValidity = false,
        name,
        description,
        websiteUrl,
        degree,
        programType
    } = props;
    // Prefer degree, then programType, then fallback
    const grant = degree || programType || 'Completed studies';
    const buildDate = (startYear?: number, endYear?: number) => {
        if (hasValidity && typeof startYear === 'number') {
            return `Valid from ${startYear.toString()} to ${endYear ?? 'now'}`;
        } else if (typeof endYear === 'number') {
            return endYear.toString();
        } else {
            return new Date().getFullYear().toString();
        }
    };
    const date = buildDate(startYear, endYear);
</script>

<TimelineItem
    title={grant}
    date={date.toString()}
    dateFormat="year"
    class="px-6"
>
    {#snippet orientationSlot()}
        <span
            class="bg-gray-200 dark:bg-primary-900 absolute -start-5 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900"
        >
            {#if degree}
                <BadgeCheckSolid
                    class="text-primary-600 dark:text-primary-400 h-6 w-6"
                />
            {:else}
                <GraduationCapSolid
                    class="text-primary-600 dark:text-primary-400 h-6 w-6"
                />
            {/if}
        </span>
        {#if websiteUrl}
            <A href={websiteUrl}>{name}</A>
        {:else}
            <span>{name}</span>
        {/if}
    {/snippet}
    <P>{description}</P>
</TimelineItem>
