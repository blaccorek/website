<script lang="ts">
    import {
        Footer,
        FooterCopyright,
        FooterLink,
        FooterLinkGroup
    } from 'flowbite-svelte';
</script>

<Footer>
    <FooterCopyright href="/" by="Blaccorek" year={2025} />
    <FooterLinkGroup
        class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400"
    >
        <FooterLink href="/">Licensing</FooterLink>
    </FooterLinkGroup>
</Footer>
