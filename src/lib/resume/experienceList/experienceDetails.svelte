<script lang="ts">
    import { toCamelCase } from '$lib/string';
    import { Heading, List, P, TimelineItem } from 'flowbite-svelte';
    import { BriefcaseOutline } from 'flowbite-svelte-icons';

    const props = $props();

    const {
        startDate,
        finishDate,
        position,
        description,
        tasks,
        technologies
    }: ExperienceDetails = props;

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
            class="bg-gray-200 dark:bg-primary-900 absolute -start-3 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900"
        >
            <BriefcaseOutline
                class="text-primary-600 dark:text-primary-400 h-6 w-6"
            />
        </span>
    {/snippet}
    <P>{description}</P>

    <List tag="ul" class="pl-8">
        {#each tasks as task}
            <li>{task}</li>
        {/each}
    </List>

    <section>
        <Heading tag="h3" class="text-sm">Technologies</Heading>
        <List tag="dl" class="flex gap-2">
            {#each technologies as technology}
                <li>{technology}</li>
            {/each}
        </List>
    </section>
</TimelineItem>
