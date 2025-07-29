<script lang="ts">
    import Identity from '$lib/resume/identity/index.svelte';
    import EducationList from '$lib/resume/educationList/index.svelte';
    import ExperienceList from '$lib/resume/experienceList/index.svelte';
    import type { PageProps } from './$types';

    const { data }: PageProps = $props();
</script>

<main class="container place-self-center">
    <article class="p-8">
        <Identity firstname="Tsiorintsoa" lastname="Andriamihamina" jobTitle="DevOps consultant" />
        <section>
            <h2>Work Experience</h2>
            <ExperienceList experiences={data.experiences} />
        </section>
        <section>
            <h2>Education</h2>
            <EducationList schools={data.schools} />
        </section>
    </article>
</main>
