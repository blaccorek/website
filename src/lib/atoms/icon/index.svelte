<script lang="ts">
    import { ICON_PATHS, type IconName } from './icon.svelte';

    interface IconProps {
        name: IconName;
        class?: string;
        /** Icons are decorative unless given a label. */
        label?: string;
    }

    const {
        name,
        class: extraClasses = 'h-5 w-5',
        label
    }: IconProps = $props();
</script>

<svg
    class={extraClasses}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    role={label ? 'img' : 'presentation'}
    aria-hidden={label ? undefined : 'true'}
    aria-label={label}
>
    {#each ICON_PATHS[name] as path (path)}
        <path d={path}></path>
    {/each}
</svg>
