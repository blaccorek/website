<script lang="ts">
    import BulletList from '$lib/atoms/bulletList/index.svelte';
    import Text from '$lib/atoms/text/index.svelte';
    import TechnologyChip from '$lib/molecules/technologyChip/index.svelte';
    import TimelineItem from '$lib/molecules/timeline/timelineItem/index.svelte';
    import { toCamelCase } from '$lib/string';

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
        'text-xs font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400';
    const title = $derived(buildTitle(position));
    const dateRange = $derived(
        `${toCamelCase(startDate)} - ${toCamelCase(finishDate ?? 'now')}`
    );
    const descriptions = $derived(
        Array.isArray(description) ? description : [description]
    );
</script>

<TimelineItem {title} date={dateRange} icon="briefcase">
    <dl class="space-y-5">
        <div class="space-y-2">
            <dt class={sectionLabelClasses}>Description</dt>
            <dd class="space-y-1">
                {#each descriptions as paragraph, index (index)}
                    <Text>{paragraph}</Text>
                {/each}
            </dd>
        </div>

        {#if environment}
            <div class="space-y-2">
                <dt class={sectionLabelClasses}>Environment</dt>
                <dd><Text>{environment}</Text></dd>
            </div>
        {/if}

        <div class="space-y-2">
            <dt class={sectionLabelClasses}>Missions</dt>
            <dd><BulletList items={missions} /></dd>
        </div>

        <div class="space-y-2">
            <dt class={sectionLabelClasses}>Technologies</dt>
            <dd>
                <ul class="flex flex-wrap gap-2">
                    {#each technologies as technology (technology.name)}
                        <li>
                            <TechnologyChip
                                name={technology.name}
                                icon={technology.icon}
                                url={technology.url}
                            />
                        </li>
                    {/each}
                </ul>
            </dd>
        </div>
    </dl>
</TimelineItem>
