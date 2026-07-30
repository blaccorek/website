<script lang="ts">
    import Timeline from '$lib/molecules/timeline/index.svelte';

    import SchoolDetails from './schoolDetails/index.svelte';
    import type { School } from './schoolDetails/schoolDetails.svelte';

    interface EducationListProps {
        schools: School[];
    }

    const { schools }: EducationListProps = $props();
</script>

<Timeline>
    {#each schools as school, index (index)}
        <SchoolDetails {...school} />
    {/each}
</Timeline>
