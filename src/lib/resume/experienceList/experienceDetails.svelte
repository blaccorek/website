<script lang="ts">
    import { toCamelCase } from '$lib/string';
    import { List, P, TimelineItem } from 'flowbite-svelte';
    import { BriefcaseOutline } from 'flowbite-svelte-icons';

    import TechnologyIcon from './technologyIcon.svelte';

    const props = $props();

    const {
        startDate,
        finishDate,
        position,
        description,
        environment,
        missions,
        technologies
    }: DetailedTechnologiesExperience = props;

    const buildTitle = ({ title, company, client }: Position) => {
        let str = `${title} at ${client ?? company}`;
        if (client) {
            str = `Consultant - ${str} (for ${company})`;
        }
        return str;
    };

    const title = buildTitle(position);
</script>

<TimelineItem
    {title}
    date={`${toCamelCase(startDate)} - ${toCamelCase(finishDate ?? 'now')}`}
    class="px-2"
>
    {#snippet orientationSlot()}
        <span
            class="bg-gray-200 dark:bg-primary-900 absolute -start-5 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900"
        >
            <BriefcaseOutline
                class="text-primary-600 dark:text-primary-400 h-6 w-6"
            />
        </span>
    {/snippet}

    <section>
        <dl>
            <dt class="font-semibold">Description</dt>
            <dd class="px-8">
                {#if Array.isArray(description)}
                    {#each description as desc}
                        <P class="mb-1">{desc}</P>
                    {/each}
                {:else}
                    <P>{description}</P>
                {/if}
            </dd>

            {#if environment}
                <dt class="font-semibold">Environment</dt>
                <dd class="px-8">{environment}</dd>
            {/if}

            <dt class="font-semibold">Missions</dt>
            <dd>
                <List tag="ul" class="pl-8">
                    {#each missions as mission}
                        <li>{mission}</li>
                    {/each}
                </List>
            </dd>

            <dt class="font-semibold">Technologies</dt>
            <dd>
                <List tag="dl" class="flex gap-2 py-2 flex-wrap px-8">
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

        <section></section>
    </section></TimelineItem
>
