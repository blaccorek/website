<script lang="ts">
    import { resolve } from '$app/paths';
    import { Heading, Img, P } from 'flowbite-svelte';

    import { type IdentityProps, buildFullname } from './identity.svelte';

    const { firstname, lastname, jobTitle }: IdentityProps = $props();
    const fullname = $derived(buildFullname(firstname, lastname));
</script>

<header
    class="mx-auto flex w-full max-w-5xl flex-col items-center gap-5 px-4 pt-10 pb-8 text-center sm:px-6 sm:pt-14 sm:pb-10 lg:px-8"
>
    <Img
        src={resolve('/favicon.png', {})}
        alt="Blaccorek logo"
        class="ring-primary-500/30 h-16 w-16 rounded-2xl shadow-sm ring-2 sm:h-20 sm:w-20"
    />
    <div class="space-y-2">
        <Heading
            tag="h1"
            class="text-3xl font-extrabold tracking-tight break-words sm:text-4xl lg:text-5xl"
        >
            {fullname}
        </Heading>
        <P
            italic
            size="lg"
            weight="medium"
            align="center"
            class="text-gray-600 sm:text-xl dark:text-gray-300">{jobTitle}</P
        >
    </div>
    <span class="bg-primary-500 h-1 w-16 rounded-full" aria-hidden="true"
    ></span>
</header>
