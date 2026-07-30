<script lang="ts">
    interface ImageProps {
        src: string;
        alt: string;
        class?: string;
        /** Above-the-fold images opt out of lazy loading. */
        eager?: boolean;
    }

    const {
        src,
        alt,
        class: extraClasses = '',
        eager = false
    }: ImageProps = $props();
</script>

<img
    {src}
    {alt}
    loading={eager ? 'eager' : 'lazy'}
    decoding="async"
    class={extraClasses}
/>
