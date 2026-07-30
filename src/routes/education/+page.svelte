<script lang="ts">
    import EducationList from '$lib/resume/educationList/index.svelte';
    import { Heading } from 'flowbite-svelte';

    import type { PageProps } from './$types';

    const { data }: PageProps = $props();
</script>

<svelte:head>
    <title>
        Tsiorintsoa ANDRIAMIHAMINA - DevOps Consultant - Education &
        Certifications
    </title>
    <meta
        name="description"
        content="Showcasing the educational background and certifications of Tsiorintsoa Andriamihamina, a DevOps consultant specializing in GitOps, Kubernetes platforms, and modern web development."
    />
</svelte:head>
<section class="space-y-10">
    <Heading tag="h2" class="text-2xl sm:text-3xl">
        Education & Certifications
    </Heading>
    <EducationList schools={data.schools} />
</section>
