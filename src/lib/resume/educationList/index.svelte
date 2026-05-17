<script lang="ts">
    import { Timeline } from 'flowbite-svelte';

    import SchoolDetails from './schoolDetails/index.svelte';
    import type { School } from './schoolDetails/schoolDetails.svelte';

    interface EducationListProps {
        schools: School[];
    }

    const { schools }: EducationListProps = $props();
</script>

<Timeline order="vertical">
    {#each schools as school}
        <SchoolDetails {...school} />
    {/each}
</Timeline>
