<script lang="ts">
    import { ICONS, type IconName } from './icon.svelte';

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
    const Glyph = $derived(ICONS[name]);
</script>

<!-- The generated components spread every prop onto their own <svg>, so the
     sizing and accessibility attributes land where they would by hand. -->
<Glyph
    class={extraClasses}
    role={label ? 'img' : 'presentation'}
    aria-hidden={label ? undefined : 'true'}
    aria-label={label}
/>
