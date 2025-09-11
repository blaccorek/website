import { experiences } from '$lib/data/experiences.json';

import type { PageLoad } from './$types';

export const load: PageLoad = () => {
    return {
        experiences
    };
};
