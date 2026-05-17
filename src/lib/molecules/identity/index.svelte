<script lang="ts">
    import { Heading, P } from 'flowbite-svelte';

    import { type IdentityProps, buildFullname } from './identity.svelte';

    const { firstname, lastname, jobTitle }: IdentityProps = $props();
    const fullname = $derived(buildFullname(firstname, lastname));
</script>

<header class="place-self-center pb-4 text-center">
    <Heading tag="h1">{fullname}</Heading>
    <P
        italic
        size="3xl"
        weight="medium"
        align="center"
        class="text-gray-600 dark:text-gray-300">{jobTitle}</P
    >
</header>
