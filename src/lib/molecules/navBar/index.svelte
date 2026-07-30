<script lang="ts">
    import Link from '$lib/atoms/link/index.svelte';

    import { type NavItem, navLinkClasses } from './navBar.svelte';

    interface NavBarProps {
        items: NavItem[];
    }

    const { items }: NavBarProps = $props();
</script>

<nav
    aria-label="Main"
    class="sticky top-0 z-20 border-b border-gray-200/80 bg-gray-50/85 backdrop-blur-sm dark:border-gray-800/80 dark:bg-gray-950/85"
>
    <ul
        class="mx-auto flex w-full max-w-5xl flex-col gap-1 px-4 py-3 sm:flex-row sm:justify-center sm:gap-2 sm:px-6 lg:px-8"
    >
        {#each items as item (item.href)}
            <li class="sm:flex-none">
                <Link
                    href={item.href}
                    variant="plain"
                    current={item.current}
                    class={navLinkClasses(item.current)}
                >
                    {item.title}
                </Link>
            </li>
        {/each}
    </ul>
</nav>
