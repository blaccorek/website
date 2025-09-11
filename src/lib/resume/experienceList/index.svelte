<script lang="ts">
    import { Timeline } from 'flowbite-svelte';

    import ExperienceDetails from './experienceDetails.svelte';

    const { experiences } = $props();
</script>

<Timeline order="vertical">
    {#each experiences as experience}
        <ExperienceDetails {...experience} />
    {/each}
</Timeline>
