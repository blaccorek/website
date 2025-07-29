<script lang="ts">
    import DatedItem from '$lib/app/timedItem/index.svelte';

    const experience = $props();
</script>

<DatedItem from={experience.startedOn} to={experience.finishedOn}>
    <article>
        <header>
            <h3 class="gap-2 flex items-center">
                <span class="flex">{experience.jobTitle}</span>
                {#if experience.consultingCompany}
                    <span class="flex font-medium">via</span>
                    <span class="flex">{experience.consultingCompany}</span>
                {/if}
            </h3>
            <p class="italic font-bold text-emphasis flex gap-2">
                <span class="flex">{experience.company}</span>
                <span class="flex">-</span>
                <span class="flex">{experience.location}</span>
            </p>
        </header>

        <p>{experience.description}</p>

        <ul class="pl-8">
            {#each experience.tasks as task}
                <li class="list-disc">{task}</li>
            {/each}
        </ul>

        <section>
            <h4>Technologies</h4>
            <ul class="flex gap-2">
                {#each experience.technologies as technology}
                    <li>{technology}</li>
                {/each}
            </ul>
        </section>
    </article>
</DatedItem>
