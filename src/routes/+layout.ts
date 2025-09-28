import { A } from 'flowbite-svelte';

import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = ({ route }) => {
    return {
        currentPage: route.id,
        menuItems: [
            { href: '/', title: 'About me' },
            { href: '/experience', title: 'Work Experience' },
            { href: '/education', title: 'Education & Certifications' }
        ]
    };
};
