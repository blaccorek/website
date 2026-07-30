<script lang="ts">
    import { resolve } from '$app/paths';
    import Link from '$lib/atoms/link/index.svelte';

    const currentYear = 2025;
    const home = resolve('/', {});
</script>

<footer class="mt-auto border-t border-gray-200 dark:border-gray-700">
    <div
        class="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-4 py-8 text-sm text-gray-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8 dark:text-gray-400"
    >
        <p>
            © {currentYear}
            <Link href={home} variant="quiet" class="font-medium"
                >Blaccorek</Link
            >. All Rights Reserved.
        </p>
        <ul class="flex flex-wrap items-center justify-center gap-4">
            <li>
                <Link href={home} variant="quiet">Licensing</Link>
            </li>
        </ul>
    </div>
</footer>
