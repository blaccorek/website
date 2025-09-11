<script lang="ts">
    import { Heading, P } from 'flowbite-svelte';

    interface Props {
        firstname: string;
        lastname: string;
        jobTitle: string;
    }
    const { firstname, lastname, jobTitle }: Props = $props();

    const toCamelCase = (str: string) =>
        str.charAt(0).toLocaleUpperCase() + str.substring(1);

    const fullname = `${toCamelCase(firstname)} ${lastname.toLocaleUpperCase()}`;
</script>

<header class="place-self-center text-center pb-4">
    <Heading tag="h1">{fullname}</Heading>
    <P
        italic
        size="3xl"
        weight="medium"
        align="center"
        class="text-gray-600 dark:text-gray-300">{jobTitle}</P
    >
</header>
