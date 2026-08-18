import type { IconName } from '$lib/atoms/icon/icon.svelte';

export type ExpertiseProps = {
    title: string;
    icon: IconName;
    image?: string;
    items?: string[];
    /** Puts the illustration on the leading side, so a stack of cards zigzags. */
    flip?: boolean;
};
