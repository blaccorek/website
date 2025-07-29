import type { PageLoad } from './$types';
import { schools } from '$lib/data/schools.json';
import { experiences } from '$lib/data/experiences.json';

export const load: PageLoad = () => {
    return {
        schools,
        experiences
    };
};
