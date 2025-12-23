<script lang="ts">
    import { resolve } from '$app/paths';
    import { Heading, Img, Li, List } from 'flowbite-svelte';

    interface Expertise {
        title: string;
        image?: string;
        left?: boolean;
        items?: string[];
    }

    const { title, image, left, items }: Expertise = $props();
    const articleClasses = $derived(left ? 'flex-row' : 'flex-row-reverse');
</script>

<article class={articleClasses + ' flex mb-8 place-content-between gap-4'}>
    <div class="flex">
        <Img
            src={image ? resolve(image, {}) : undefined}
            alt={title}
            class="max-w-sm aspect-3/2 object-contain"
        />
    </div>
    <div class="flex">
        <div>
            <Heading tag="h3" class="mb-4">
                {title}
            </Heading>
            <section>
                <List tag="ul" class="pl-8 space-y-2">
                    {#each items as item}
                        <Li class="md:text-lg lg:text-xl">
                            {item}
                        </Li>
                    {/each}
                </List>
            </section>
        </div>
    </div>
</article>
