<script lang="ts">
    import {
        Footer,
        FooterCopyright,
        FooterLink,
        FooterLinkGroup
    } from 'flowbite-svelte';
</script>

<Footer
    class="mt-auto rounded-none border-t border-gray-200 bg-transparent p-0 shadow-none md:p-0 dark:border-gray-800 dark:bg-transparent"
>
    <div
        class="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8"
    >
        <FooterCopyright href="/" by="Blaccorek" year={2025} />
        <FooterLinkGroup
            class="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400"
        >
            <FooterLink
                href="/"
                class="hover:text-primary-700 dark:hover:text-primary-400 me-0 md:me-0"
                >Licensing</FooterLink
            >
        </FooterLinkGroup>
    </div>
</Footer>
