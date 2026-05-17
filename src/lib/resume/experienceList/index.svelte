<script lang="ts">
    import { resolve } from '$app/paths';
    import type { TechnologyDetails } from '$lib/molecules/technologyIcon/technologyIcon.svelte';
    import { Timeline } from 'flowbite-svelte';

    import type { Experience } from './experienceDetails/experienceDetails.svelte';
    import ExperienceDetails from './experienceDetails/index.svelte';
    import { enrichExperience } from './experienceList.svelte';

    interface ExperienceListProps {
        experiences: Experience[];
        technologies: Record<string, TechnologyDetails>;
    }

    const { experiences, technologies }: ExperienceListProps = $props();
    const resolveAsset = (path: string) => resolve(path, {});
    const enrichedExperiences = $derived(
        experiences.map((experience) =>
            enrichExperience(experience, technologies, resolveAsset)
        )
    );
</script>

<Timeline order="vertical">
    {#each enrichedExperiences as experience}
        <ExperienceDetails {...experience} />
    {/each}
</Timeline>
