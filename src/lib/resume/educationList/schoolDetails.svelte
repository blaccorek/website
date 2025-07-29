<script lang="ts">
    import DatedItem from '$lib/app/timedItem/index.svelte';

    const school: School = $props();
</script>

<DatedItem from={school.startedOn} to={school.finishedOn}>
    <article>
        <header>
            <h3>{school.diploma}</h3>
            <p class="italic font-bold text-emphasis">{school.name}</p>
        </header>
        <p>{school.description}</p>
    </article>
</DatedItem>

<style>
    article {
        display: flex;
        flex-direction: column;
    }
</style>
