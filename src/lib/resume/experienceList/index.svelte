<script lang="ts">
    import { resolve } from '$app/paths';
    import type { TechnologyDetails } from '$lib/molecules/technologyChip/technologyChip.svelte';
    import Timeline from '$lib/molecules/timeline/index.svelte';

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

<Timeline>
    {#each enrichedExperiences as experience, index (index)}
        <ExperienceDetails {...experience} />
    {/each}
</Timeline>
