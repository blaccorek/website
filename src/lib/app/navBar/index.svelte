<script lang="ts">
    interface Props {
        links: Links[];
        logo: Logo;
    }

    let { links, logo }: Props = $props();
    let isOpen = $state(false);
</script>

<header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
            <!-- Logo -->
            <div class="flex-shrink-0 text-xl font-bold text-teal-600">{logo.image}</div>

            <!-- Desktop nav -->
            <nav class="hidden md:flex space-x-6">
                {#each links as link}
                    <a href={link.path} class="text-gray-700 hover:text-teal-500">{link.name}</a>
                {/each}
            </nav>

            <!-- Mobile Menu Button -->
            <button class="md:hidden focus:outline-none" onclick={() => (isOpen = !isOpen)}>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {#if !isOpen}
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    {:else}
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    {/if}
                </svg>
            </button>
        </div>
    </div>

    <!-- Mobile Nav -->
    {#if isOpen}
        <nav class="md:hidden bg-white px-4 pb-4 space-y-2">
            {#each links as link}
                <a href={link.path} class="text-gray-700 hover:text-teal-500">{link.name}</a>
            {/each}
        </nav>
    {/if}
</header>
