<script lang="ts">
    import SchoolDetails from './schoolDetails.svelte';

    interface Props {
        schools: School[];
    }

    const { schools }: Props = $props();
</script>

<ol class="flex flex-col">
    {#each schools as school}
        <SchoolDetails {...school} />
    {/each}
</ol>
