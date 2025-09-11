import { schools } from '$lib/data/schools.json';

import type { PageLoad } from './$types';

export const load: PageLoad = () => {
    return {
        schools
    };
};
