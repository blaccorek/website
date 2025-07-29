<script lang="ts">
    interface Props {
        firstname: string;
        lastname: string;
        jobTitle: string;
    }
    const { firstname, lastname, jobTitle }: Props = $props();

    const toCamelCase = (str: string) => str.charAt(0).toLocaleUpperCase() + str.substring(1);

    const fullname = `${toCamelCase(firstname)} ${lastname.toLocaleUpperCase()}`;
</script>

<header class="place-self-center text-center pb-4">
    <h1>{fullname}</h1>
    <p class="text-xl italic font-bold text-emphasis">{jobTitle}</p>
</header>
