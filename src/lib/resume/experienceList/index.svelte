<script lang="ts">
    import ExperienceDetails from './experienceDetails.svelte';

    const { experiences } = $props();
</script>

<ol class="flex flex-col">
    {#each experiences as experience}
        <ExperienceDetails {...experience} />
    {/each}
</ol>
