<script lang="ts">
    import ExperienceList from '$lib/resume/experienceList/index.svelte';
    import { Heading } from 'flowbite-svelte';

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
<article class="p-8">
    <section>
        <Heading tag="h2" class="p-4">Work Experience</Heading>
        <ExperienceList
            experiences={data.experiences}
            technologies={data.technologies}
        />
    </section>
</article>
