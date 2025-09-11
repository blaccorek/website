<script lang="ts">
    import { Timeline } from 'flowbite-svelte';

    import SchoolDetails from './schoolDetails.svelte';

    interface Props {
        schools: School[];
    }

    const { schools }: Props = $props();
</script>

<Timeline order="vertical">
    {#each schools as school}
        <SchoolDetails {...school} />
    {/each}
</Timeline>
