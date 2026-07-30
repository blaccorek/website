<script lang="ts">
    import Heading from '$lib/atoms/heading/index.svelte';
    import type { IconName } from '$lib/atoms/icon/icon.svelte';
    import Icon from '$lib/atoms/icon/index.svelte';

    import type { Snippet } from 'svelte';

    interface TimelineItemProps {
        /** Always an h3: a timeline lives under its section's h2. */
        title: string;
        date: string;
        icon: IconName;
        subtitle?: Snippet;
        children: Snippet;
    }

    const { title, date, icon, subtitle, children }: TimelineItemProps =
        $props();
</script>

<li class="relative">
    <span
        class="bg-primary-50 border-primary-200 dark:border-primary-800 dark:bg-primary-900/50 absolute -start-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border ring-4 ring-gray-50 dark:ring-gray-950"
    >
        <Icon
            name={icon}
            class="text-primary-700 dark:text-primary-400 h-[18px] w-[18px]"
        />
    </span>

    <article
        class="hover:border-primary-300 dark:hover:border-primary-800 rounded-2xl border border-gray-200 bg-white p-5 transition-colors sm:p-6 dark:border-gray-800 dark:bg-gray-900"
    >
        <p
            class="text-primary-700 dark:text-primary-400 text-xs font-semibold tracking-widest uppercase"
        >
            {date}
        </p>
        <Heading level={3} class="mt-1">{title}</Heading>
        {#if subtitle}
            <div class="mt-1">{@render subtitle()}</div>
        {/if}
        <div class="mt-4">{@render children()}</div>
    </article>
</li>
