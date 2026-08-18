<script lang="ts">
    import { resolve } from '$app/paths';
    import Heading from '$lib/atoms/heading/index.svelte';
    import Image from '$lib/atoms/image/index.svelte';

    import { type IdentityProps, buildFullname } from './identity.svelte';

    const { firstname, lastname, jobTitle }: IdentityProps = $props();
    const fullname = $derived(buildFullname(firstname, lastname));
</script>

<header class="relative isolate overflow-hidden">
    <!-- Brand glow behind the logo, purely decorative. -->
    <span
        aria-hidden="true"
        class="bg-primary-400/20 dark:bg-primary-500/15 pointer-events-none absolute -top-24 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
    ></span>

    <div
        class="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-4 pt-12 pb-10 text-center sm:px-6 sm:pt-16 sm:pb-12 lg:px-8"
    >
        <Image
            src={resolve('/favicon.png', {})}
            alt="Blaccorek logo"
            eager
            class="ring-primary-500/30 h-16 w-16 rounded-2xl shadow-sm ring-2 sm:h-20 sm:w-20"
        />
        <div class="space-y-3">
            <Heading level={1} class="break-words">{fullname}</Heading>
            <p
                class="text-lg font-medium text-gray-600 italic sm:text-xl dark:text-gray-300"
            >
                {jobTitle}
            </p>
        </div>
        <span
            aria-hidden="true"
            class="from-primary-500 h-1 w-16 rounded-full bg-gradient-to-r to-transparent"
        ></span>
    </div>
</header>
