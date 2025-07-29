<script lang="ts">
    import Icon from '$lib/app/icon/index.svelte';
    let { children, from, to } = $props();
    const finishDate = to ? new Date(to.year, (to.month ?? 1) - 1) : undefined;

    const startDate = from ? new Date(from.year, (from.month ?? 1) - 1) : undefined;

    const toMounthYearFormat = (date: Date) =>
        date.toLocaleDateString('en-GB', {
            month: 'long',
            year: 'numeric'
        });
</script>

<li class="grid grid-cols-5 gap-2">
    <div>
        <Icon name="academic" className="stroke-1" width="2rem" height="2rem" />
    </div>

    <div class="col-span-1 flex flex-row gap-1 p-2">
        {#if from && startDate}
            <time class="font-bold italic" datetime={startDate.toLocaleDateString()}>
                {from.month ? toMounthYearFormat(startDate) : startDate.getFullYear()}
            </time>
            {#if finishDate}
                -
            {/if}
        {/if}
        {#if finishDate}
            <time class="font-bold italic" datetime={finishDate.toLocaleDateString()}>
                {to.month ? toMounthYearFormat(finishDate) : finishDate.getFullYear()}
            </time>
        {/if}
    </div>

    <div class="col-span-4 flex flex-row p-2">
        {@render children?.()}
    </div>
</li>
