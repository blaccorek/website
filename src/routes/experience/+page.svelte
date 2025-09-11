<script lang="ts">
    import ExperienceList from '$lib/resume/experienceList/index.svelte';
    import { Heading } from 'flowbite-svelte';

    import type { PageProps } from './$types';

    const { data }: PageProps = $props();
</script>

<article class="p-8">
    <section>
        <Heading tag="h2" class="p-4">Work Experience</Heading>
        <ExperienceList experiences={data.experiences} />
    </section>
</article>
