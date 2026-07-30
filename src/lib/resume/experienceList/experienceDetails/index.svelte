<script lang="ts">
    import TechnologyIcon from '$lib/molecules/technologyIcon/index.svelte';
    import { toCamelCase } from '$lib/string';
    import { List, P, TimelineItem } from 'flowbite-svelte';
    import { BriefcaseOutline } from 'flowbite-svelte-icons';

    import {
        type DetailedTechnologiesExperience,
        buildTitle
    } from './experienceDetails.svelte';

    const {
        startDate,
        finishDate,
        position,
        description,
        environment,
        missions,
        technologies
    }: DetailedTechnologiesExperience = $props();

    const sectionLabelClasses =
        'text-primary-700 dark:text-primary-400 text-xs font-semibold tracking-widest uppercase';
    const title = $derived(buildTitle(position));
    const dateRange = $derived(
        `${toCamelCase(startDate)} - ${toCamelCase(finishDate ?? 'now')}`
    );
</script>

<TimelineItem {title} date={dateRange} class="mb-12">
    {#snippet orientationSlot()}
        <span
            class="bg-primary-100 dark:bg-primary-900 ring-white dark:ring-gray-900 absolute -start-5 flex h-8 w-8 items-center justify-center rounded-full ring-8"
        >
            <BriefcaseOutline
                class="text-primary-700 dark:text-primary-400 h-6 w-6"
            />
        </span>
    {/snippet}

    <section class="mt-3 ms-4">
        <dl class="space-y-4">
            <dt class={sectionLabelClasses}>Description</dt>
            <dd class="space-y-1 ps-4">
                {#if Array.isArray(description)}
                    {#each description as desc}
                        <P class="text-gray-700 dark:text-gray-300">{desc}</P>
                    {/each}
                {:else}
                    <P class="text-gray-700 dark:text-gray-300">
                        {description}
                    </P>
                {/if}
            </dd>

            {#if environment}
                <dt class={sectionLabelClasses}>Environment</dt>
                <dd class="ps-4 text-gray-700 dark:text-gray-300">
                    {environment}
                </dd>
            {/if}

            <dt class={sectionLabelClasses}>Missions</dt>
            <dd>
                <List
                    tag="ul"
                    position="outside"
                    class="marker:text-primary-500 space-y-1 ps-8 text-gray-700 dark:text-gray-300"
                >
                    {#each missions as mission}
                        <li>{mission}</li>
                    {/each}
                </List>
            </dd>

            <dt class={sectionLabelClasses}>Technologies</dt>
            <dd>
                <List tag="dl" class="flex flex-wrap gap-3 ps-4 pt-1">
                    {#each technologies as technology}
                        <li>
                            <TechnologyIcon
                                name={technology.name}
                                icon={technology.icon}
                                url={technology.url}
                            />
                        </li>
                    {/each}
                </List>
            </dd>
        </dl>
    </section>
</TimelineItem>
