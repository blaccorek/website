<script lang="ts">
    import Heading from '$lib/atoms/heading/index.svelte';
    import ExperienceList from '$lib/resume/experienceList/index.svelte';

    import type { PageProps } from './$types';

    const { data }: PageProps = $props();
</script>

<svelte:head>
    <title>
        Tsiorintsoa ANDRIAMIHAMINA - DevOps Consultant - Work experience
    </title>
    <meta
        name="description"
        content="Showcasing the work experience of Tsiorintsoa Andriamihamina, a DevOps consultant specializing in GitOps, Kubernetes platforms, and modern web development."
    />
</svelte:head>
<section class="space-y-10">
    <Heading level={2}>Work Experience</Heading>
    <ExperienceList
        experiences={data.experiences}
        technologies={data.technologies}
    />
</section>
