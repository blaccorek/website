<script lang="ts">
    import type { Snippet } from 'svelte';

    import {
        type LinkVariant,
        externalAttributes,
        linkClasses
    } from './link.svelte';

    interface LinkProps {
        href: string;
        variant?: LinkVariant;
        /** Marks this link as the page the visitor is on. */
        current?: boolean;
        class?: string;
        children: Snippet;
    }

    const {
        href,
        variant = 'accent',
        current = false,
        class: extraClasses = '',
        children
    }: LinkProps = $props();
    const classes = $derived(`${linkClasses(variant)} ${extraClasses}`.trim());
    const { target, rel } = $derived(externalAttributes(href));
</script>

<!-- Internal hrefs reach this atom already resolved by the caller; the rest are
     external URLs, which resolve() must not touch. That exemption is declared
     for this file in eslint.config.cjs. -->
<a
    {href}
    {target}
    {rel}
    aria-current={current ? 'page' : undefined}
    class={classes}
>
    {@render children()}
</a>
