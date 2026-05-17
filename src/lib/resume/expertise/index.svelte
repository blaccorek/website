<script lang="ts">
    import { resolve } from '$app/paths';
    import { Heading, Img, Li, List } from 'flowbite-svelte';

    import type { ExpertiseProps } from './expertise.svelte';

    const { title, image, left, items }: ExpertiseProps = $props();
    const layoutClasses = $derived(left ? 'flex-row' : 'flex-row-reverse');
</script>

<article class={layoutClasses + ' mb-8 flex place-content-between gap-4'}>
    <div class="flex">
        <Img
            src={image ? resolve(image, {}) : undefined}
            alt={title}
            class="aspect-3/2 max-w-sm object-contain"
        />
    </div>
    <div class="flex">
        <div>
            <Heading tag="h3" class="mb-4">
                {title}
            </Heading>
            <section>
                <List tag="ul" class="space-y-2 pl-8">
                    {#each items ?? [] as item}
                        <Li class="md:text-lg lg:text-xl">
                            {item}
                        </Li>
                    {/each}
                </List>
            </section>
        </div>
    </div>
</article>
