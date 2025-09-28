<script lang="ts">
    import { Timeline } from 'flowbite-svelte';

    import ExperienceDetails from './experienceDetails.svelte';

    interface ExperienceListProps {
        experiences: Experience[];
        technologies: Record<string, TechnologyDetails>;
    }

    const { experiences, technologies }: ExperienceListProps = $props();
    const updatedExperiences = experiences.map((exp) => {
        return {
            ...exp,
            technologies: exp.technologies.map((tech) => {
                const foundTech = technologies[tech];
                return { name: tech, ...(foundTech ?? {}) };
            })
        };
    });
</script>

<Timeline order="vertical">
    {#each updatedExperiences as experience}
        <ExperienceDetails {...experience} />
    {/each}
</Timeline>
