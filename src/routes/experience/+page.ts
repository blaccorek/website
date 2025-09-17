import { experiences } from '$lib/data/experiences.json';
import { technologies } from '$lib/data/technologies.json';

import type { PageLoad } from './$types';

export const load: PageLoad = () => {
    return {
        experiences,
        technologies
    };
};
