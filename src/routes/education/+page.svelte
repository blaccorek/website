<script lang="ts">
    import EducationList from '$lib/resume/educationList/index.svelte';
    import ExperienceList from '$lib/resume/experienceList/index.svelte';
    import Identity from '$lib/resume/identity/index.svelte';
    import { Heading } from 'flowbite-svelte';

    import type { PageProps } from './$types';

    const { data }: PageProps = $props();
</script>

<article class="p-8">
    <section>
        <Heading tag="h2" class="p-4">Education & Certifications</Heading>
        <EducationList schools={data.schools} />
    </section>
</article>
